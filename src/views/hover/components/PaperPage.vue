<template>
  <div class="box" data-people="零基础用户" data-position="建站">
    <div class="normal">
      <h3>快速搭建个人博客网站</h3>
      <p class="d">开发者必备，记录和沉淀自己的技术学习，看自己如何从新手成长为大神！</p>
      <div class="image">
        <img :src="blogUrl">
      </div>
      <p class="time">4个步骤·预计用时30分钟</p>
    </div>
    <div class="hover">
      <h4 data-spm-anchor-id="5176.9278281.815111.i0.50c54f3emjPhgw">[&nbsp;&nbsp;快速搭建个人博客网站&nbsp;&nbsp;]</h4>
      <div class="ss">
        <p class="steps">
          <span class="b">Step01
            <span class="line" />
          </span>
          <img :src="imageUrl">
          <span class="s">开通云服务器</span>
        </p>
        <p class="steps">
          <span class="b">Step02
            <span class="line" />
          </span>
          <img :src="imageUrl">
          <span class="s">安装博客运行环境</span>
        </p>
        <p class="steps">
          <span class="b">Step03
            <span class="line" />
          </span>
          <img :src="imageUrl">
          <span class="s">安装WordPress博客程序</span>
        </p>
        <p class="steps">
          <span class="b">Step04
          </span>
          <img :src="imageUrl">
          <span class="s">开始写博客</span>
        </p>
      </div>
      <a class="go">开始学习</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: require('@/icons/svg/step.jpg'),
      blogUrl: require('@/icons/svg/blog.jpg')
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0px;
  padding: 0px;
}
.box{
  width: 380px;
  height: 345px;
  margin-right: 27px;
  border: 1px solid #dcdcdc;
  margin-bottom: 30px;
  background-color: #fff;
  float: left;
  text-align: center;
  // 实现标签页动态切换
  &:hover{
    .normal{
      display: none;
    }
    .hover{
      display: block;
    }
  }
}
.normal{
  width: 380px;
  height: 100%;
  padding: 0 26px;
  overflow: hidden;
  h3{
    width: 100%;
    font-size: 20px;
    color: #6b6b6b;
    margin-top: 20px;
    line-height: 56px;
    font-weight: 400;
  }
  .d {
    width: 100%;
    height: 85px;
    font-size: 14px;
    color: #8f8e8e;
    line-height: 21px;
  }
  .image {
    width: 100%;
    height: 111px;
    margin-bottom: 20px;
  }
  .time {
    line-height: 48px;
    font-size: 12px;
    color: #c4c4c4;
    border-top: 1px solid #c9c9c9;
  }
}
.hover {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  text-align: center;
}
h4 {
  width: 100%;
  height: 92px;
  text-align: center;
  line-height: 92px;
  font-size: 20px;
  color: #fff;
  background-color: #00c1de;
  margin-bottom: 20px;
}
.steps {
  width: auto;
  text-align: left;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  margin-top: 22px;
  padding-left: 85px;
  .b {
    width: 128px;
    text-align: right;
    color: #00c1de;
    font-size: 12px;
    position: relative;
    .line{
      display: block;
      width: 1px;
      height: 24px;
      background-color: #00c1de;
      position: absolute;
      left: 59px;
      top: 13px;
    }
  }
  img {
    width: 12px;
    height: 12px;
    margin-left: 12px;
    margin-right: 21px;
    vertical-align: middle;
  }
}
.go {
    display: block;
    width: 128px;
    height: 36px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -64px;
    background: #00c1de;
    text-align: center;
    font-size: 14px;
    color: #fff;
    line-height: 36px;
    text-decoration: none;
  }
</style>
