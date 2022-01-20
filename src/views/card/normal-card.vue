<template>
  <div class="app-container">
    <!--分割线-->
    <el-divider class="divider-margin" />
    <!--图片在顶部的卡片数据-->
    <top-image-card :top-url="topUrl" />
    <el-divider />
    <!--图片在左侧的数据展示-->
    <left-image-card :left-url="leftUrl" />
    <el-divider />
    <!--带图标的卡片数据展示-->
    <avatar-card :circle-url="circleUrl" />
    <el-divider />
    <!--svg的卡片数据展示-->
    <panel-card />
  </div>
</template>
<script>
import AvatarCard from './components/AvatarCard'
import TopImageCard from './components/TopImageCard'
import PanelCard from './components/PanelCard'
import LeftImageCard from './components/LeftImageCard'
export default {
  name: 'NormalCard',
  components: { AvatarCard, LeftImageCard, PanelCard, TopImageCard },
  data() {
    return {
      currentDate: new Date(),
      circleUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      leftUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      topUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584696423&di=075ce7e7a285b3f2a6a3bf788c1b39f4&src=http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.divider-margin{
  margin-top: 0px;
}
.app-container{
  background-color: #f0f2f5;
}
</style>
