<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item>
        <el-input v-model="queryValue" placeholder="XXX">
          <template slot="prepend">作者:</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" icon="el-icon-search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" icon="el-icon-plus" @click="addData">新增</el-button>
      </el-form-item>
    </el-form>
    <!--创建表格-->
    <el-table
      ref="dragTable"
      class="table-style"
      :data="list"
      fit
      highlight-current-row
      border
      style="width: 100%"
      height="810px"
      max-height="810px"
      default-expand-all
      row-key="id"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <!--树状展示-->
      <el-table-column width="35" type="expand">
        <template slot-scope="scope">
          <!--row-key 可以避免数据混乱-->
          <el-table :data="scope.row.childrenList" row-key="id">
            <el-table-column align="center" width="99" type="selection" />
            <el-table-column label="序号" align="center" type="index" prop="seq" width="60" />
            <el-table-column v-if="false" align="center" label="ID" width="65" prop="id" />
            <el-table-column align="center" label="图书子标题" prop="title">
              <template slot-scope="{row}">
                <template v-if="row.edit">
                  <el-input ref="valueInput" v-model="row.title" class="edit-input" size="small" autofocus="true" />
                </template>
                <span v-else>{{ row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="译者" prop="author">
              <template slot-scope="{row}">
                <template v-if="row.edit">
                  <el-input v-model="row.author" class="edit-input" size="small" />
                </template>
                <span v-else>{{ row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column v-if="false" align="center" label="upload" prop="author">
              <template>
                <el-upload
                  class="upload-demo"
                  action="upload"
                  :file-list="fileList"
                  :on-change="handleChange"
                  :on-remove="handleRemove"
                  :auto-upload="false"
                  :show-file-list="false"
                  accept=".ppt, .pptx"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="{row}">
                <el-button
                  type="text"
                  size="small"
                  icon="el-icon-edit"
                  :disabled="row.edit"
                  @click="editRowInfo(row)"
                >
                  编辑
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  icon="el-icon-refresh"
                  :disabled="!row.edit"
                  @click="cancelRowInfo(row)"
                >
                  取消
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  icon="el-icon-check"
                  :disabled="!row.edit"
                  @click="saveRowInfo(row)"
                >
                  保存
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  icon="el-icon-delete"
                  @click="removeChildren(scope.row.childrenList,row)"
                >
                  移除
                </el-button>
              </template></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="260px" align="center" label="图书标题">
        <template slot-scope="{ row }">
          <span>{{ row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="作者">
        <template slot-scope="{ row }">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="阅读数" width="110">
        <template slot-scope="{ row }">
          <span>{{ row.pageviews }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="状态" width="100">
        <template slot-scope="{ row }">
          <el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template slot-scope="{ row}">
          <el-button type="text" icon="el-icon-plus" @click="createChildren(row)">新增</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { fetchList } from '@/api/article'
import Sortable from 'sortablejs'
import listData from './table-data'
export default {
  name: 'InlineTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: listData,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      sortable: null,
      oldList: [],
      newList: [],
      fileList: [],
      file: '',
      queryValue: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      // this.list = data.items
      this.list.forEach(item => {
        this.$set(item, 'childrenList',
          [
            {
              id: 24,
              author: '罗新',
              title: '有所不为的反叛者-批判、怀疑与想象力',
              status: 'published',
              pageviews: 4109,
              edit: false
            }
          ])
      })
      this.total = data.total
      this.listLoading = false
      this.oldList = this.list.map(v => v.id)
      this.newList = this.oldList.slice()
      // this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
      this.$nextTick(() => {
        // 设定拖拽
        this.setSort()
      })
    },
    setSort() {
      // 获取元素
      const elList = this.$refs.dragTable.$el.querySelectorAll(
        '.el-table__expanded-cell > .el-table > .el-table__body-wrapper > table > tbody '
      )
      elList.forEach((item, index) => {
        const el = item
        el.index = index
        this.sortable = Sortable.create(el, {
          ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
          setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
            dataTransfer.setData('Text', '')
          },
          onEnd: evt => {
            // 获取拖拽的行数据
            const targetRow = this.list[el.index].childrenList.splice(evt.oldIndex, 1)[0]
            // 设置拖拽后的行数据位置
            this.list[el.index].childrenList.splice(evt.newIndex, 0, targetRow)
          }
        })
      })
    },
    // 创建子级数据
    createChildren(row) {
      const count = row.childrenList.length
      row.childrenList.push({
        id: count + 1,
        author: '',
        title: '',
        status: '',
        pageviews: '',
        edit: true
      })
      this.$nextTick(() => {
        // 输入框获取焦点
        this.$refs.valueInput.focus()
      })
    },
    // 移除元素
    removeChildren(children, row) {
      children.forEach(function(item, index, arr) {
        if (item.id === row.id) {
          arr.splice(index, 1)
        }
      })
    },
    // 保存编辑数据
    saveRowInfo(row) {
      row.edit = false
    },
    // 编辑数据
    editRowInfo(row) {
      // this.$set()  解决数据对象添加新字符段之后,页面没有渲染的问题
      this.$set(row, 'edit', true)
      row.originalTitle = row.title
      row.originalAutor = row.author
      this.$nextTick(() => {
        // 输入框获取焦点
        this.$refs.valueInput.focus()
      })
    },
    // 取消编辑
    cancelRowInfo(row) {
      row.title = row.originalTitle
      row.author = row.originalAutor
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    // 上传文件有变化时触发
    handleChange(file, fileList) {
      this.fileList = fileList
      console.log(this.fileList)
      this.file = file.raw
      console.log(this.file.name)
    },
    // 移除上传的临时文件
    handleRemove(file, fileList) {
      this.fileList = fileList
      console.log(this.fileList)
    },
    // 新增数据
    addData() {
      this.list.unshift({
        id: 20,
        title: '克莱因壶(クラインの壷)',
        author: '[日]冈岛二人',
        status: 'published',
        pageviews: 4109,
        childrenList: []
      })
    }
  }
}
</script>
<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
</style>
