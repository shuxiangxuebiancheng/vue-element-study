<template>
  <div>
    <el-divider content-position="left">一级组件数据</el-divider>
    <ul>
      <li>first props:{{ firstProp }}</li>
    </ul>
    <el-button :style="{marginLeft:20+'px'}" type="primary" @click="emitMethod">一级</el-button>
    <!--二级组件-->
    <second-level v-bind="$attrs" v-on="$listeners" />
  </div>
</template>
<script>
import SecondLevel from './SecondLevel'
export default {
  name: 'FirstLevel',
  components: {
    SecondLevel
  },
  inheritAttrs: false,
  props: {
    firstProp: {
      type: String,
      default: 'FirstValue'
    }
  },
  methods: {
    // 触发父组件方法
    emitMethod() {
      this.$emit('firstMethod')
    }
  }
}
</script>
