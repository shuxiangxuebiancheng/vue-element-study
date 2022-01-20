<template>
  <div class="components-container">
    <el-divider content-position="left">可拖拽的对话框</el-divider>
    <el-button type="primary" @click="dialogTableVisible = true">
      打开拖拽对话框
    </el-button>
    <!--使用对话框组件-->
    <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address" @dragDialog="handleDrag">
      <el-select ref="select" v-model="valueSelect" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </el-dialog>
    <!--拖拽选择器-->
    <el-divider content-position="left">可拖拽的选择器</el-divider>
    <div class="drag-select">
      <el-drag-select v-model="valueDragSelect" style="width:500px;" multiple placeholder="请选择">
        <el-option v-for="item in optionsSelect" :key="item.value" :label="item.label" :value="item.value" />
      </el-drag-select>
      <div style="margin-top:30px;">
        <el-tag v-for="item of valueDragSelect" :key="item" style="margin-right:15px;">
          {{ item }}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import ElDragSelect from '@/components/DragSelect' // base on element-u
export default {
  name: 'DragDialogDemo',
  directives: { elDragDialog },
  components: { ElDragSelect },
  data() {
    return {
      dialogTableVisible: false,
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' }
      ],
      valueSelect: '',
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }],
      valueDragSelect: ['Apple1', 'Banana2', 'Orange3'],
      optionsSelect: [{
        value: 'Apple1',
        label: 'Apple'
      }, {
        value: 'Banana2',
        label: 'Banana'
      }, {
        value: 'Orange3',
        label: 'Orange'
      }, {
        value: 'Pear4',
        label: 'Pear'
      }, {
        value: 'Strawberry5',
        label: 'Strawberry'
      }]
    }
  },
  methods: {
    // v-el-drag-dialog onDrag callback function
    handleDrag() {
      this.$refs.select.blur()
    }
  }
}
</script>
<style lang="scss" scoped>
.drag-select{
  margin-top: 20px;
  font-size: 32px;
}
.el-divider__text{
  background-color: #f1f2f5
}
</style>
