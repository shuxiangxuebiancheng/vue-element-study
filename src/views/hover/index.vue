<template>
  <div class="app-container">
    <box-hover />
    <box-hover />
    <box-hover />
    <paper-page />
    <paper-page />
    <paper-page />
  </div>
</template>
<script>
import BoxHover from './components/BoxHover'
import PaperPage from './components/PaperPage'
export default {
  name: 'HoverShow',
  components: {
    BoxHover,
    PaperPage
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  overflow: auto;
  // width: 1300px;
  margin: 0px auto;
  // position为absolute时,同时设定min-height和height才能出现滚动效果
  min-height: 100%;
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;
  position: absolute;
}
</style>
