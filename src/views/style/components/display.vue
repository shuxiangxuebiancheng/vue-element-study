<template>
  <div class="position-container">
    <div class="relative-container">
      <img :src="topUrl" class="image">
    </div>
    <div class="absolute-container">
      <img :src="leftUrl" class="image">
    </div>
  </div></template>
<script>
export default {
  name: 'Display',
  data() {
    return {
      leftUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      topUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584696423&di=075ce7e7a285b3f2a6a3bf788c1b39f4&src=http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg'
    }
  }
}
</script>
<style lang="scss" scoped>
.position-container{
  position: relative;
  border: 2px solid gray;
  width: 600px;
  margin-left: 30px;
}
.relative-container{
  // border: 2px solid greenyellow;
  display: inline-block;
  // 图片样式
  .image {
    width: 200px;
    height: 100%;
  }
}
.absolute-container{
  // border: 2px solid powderblue;
  display: inline-block;
  // 图片样式
  .image {
    width: 200px;
    height: 100%;
  }
}
</style>
