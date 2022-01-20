<template>
  <div>
    <el-divider content-position="left">CSS position属性学习</el-divider>
    <position-comp />
    <el-divider content-position="left">CSS display属性学习</el-divider>
    <display-comp />
    <el-divider content-position="left">CSS float 属性学习,float会导致元素塌陷,通过overflow:hidden来解决</el-divider>
    <float-comp />
  </div>
</template>
<script>
import PositionComp from './components/position'
import DisplayComp from './components/display'
import FloatComp from './components/float'
export default {
  name: 'CssStyle',
  components: {
    PositionComp, DisplayComp, FloatComp
  }
}
</script>
