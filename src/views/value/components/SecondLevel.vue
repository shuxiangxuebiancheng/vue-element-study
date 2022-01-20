<template>
  <div>
    <el-divider content-position="left">二级组件数据</el-divider>
    <ul>
      <li>second props:  {{ secondProp }}</li>
    </ul>
    <el-button :style="{marginLeft:20+'px'}" type="info" @click="emitMethod">二级</el-button>
  </div>
</template>
<script>
export default {
  name: 'FirstLevel',
  inheritAttrs: false,
  props: {
    secondProp: {
      type: String,
      default: 'SecondValue'
    }
  },
  methods: {
    // 触发父组件方法
    emitMethod() {
      this.$emit('secondMethod')
    }
  }
}
</script>
