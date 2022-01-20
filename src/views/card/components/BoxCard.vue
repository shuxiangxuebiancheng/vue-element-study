<template>
  <el-card class="box-card-component" style="margin-left:40px;margin-top:30px">
    <div slot="header" class="box-card-header">
      <img :src="imageUrl">
    </div>
    <div style="position:relative;">
      <pan-thumb :image="imageUrl" class="panThumb">
        <span>Vue</span>
      </pan-thumb>
      <!--<mallki class-name="mallki-text" text="vue-element-admin" />-->
      <div style="padding-top:35px;" class="progress-item">
        <span>C#</span>
        <el-progress :percentage="30" />
      </div>
      <div class="progress-item">
        <span>Java</span>
        <el-progress :percentage="70" />
      </div>
      <div class="progress-item">
        <span>Python</span>
        <el-progress :percentage="55" />
      </div>
      <div class="progress-item">
        <span>C++</span>
        <el-progress :percentage="40" />
      </div>
    </div>
  </el-card>
</template>
<script>
import PanThumb from '@/components/PanThumb'
// import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  name: 'BoxCard',
  components: {
    PanThumb
    // Mallki
  },
  props: {
    imageUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        // 实现移入元素变大特效
        transform: scale(1.1, 1.1);
        // 调整图像对比度。默认值是1，可设置%，小数等，100%(1)时图片没有变化，0%(0)是图片全黑，超过100%(1)时图片对比更明显
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    /deep/ .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
}
</style>
