<template>
  <div class="app-container">
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
          <el-button type="text" icon="el-icon-plus" disabled @click="createChildren(row)">新增</el-button>
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
  name: 'DragTable',
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
      sortable: null
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
      // this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
      this.$nextTick(() => {
        // 设定拖拽
        this.setSort()
      })
    },
    setSort() {
      // 获取元素
      const el = this.$refs.dragTable.$el.querySelectorAll(
        '.el-table__body-wrapper > table > tbody '
      )[0]

      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          // 获取拖拽的行数据
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          // 设置拖拽后的行数据位置
          this.list.splice(evt.newIndex, 0, targetRow)
        }
      })
    },
    // 创建子级数据
    createChildren(row) {
      const count = row.childrenList.length
      row.childrenList.push({
        id: count + 1,
        author: count + 1,
        title: '',
        status: '',
        pageviews: '',
        edit: true
      })
      this.$nextTick(() => {
        // 输入框获取焦点
        this.$refs.valueInput.focus()
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
