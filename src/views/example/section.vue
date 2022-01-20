<template>
  <div>
    <ul>
      <li v-for="(item, index) in headerData" :key="index" @click="toggleCard($event)">{{ item }}</li>
    </ul>
    <div ref="fixedBar" :class="searchBarFixed == true ? 'isFixed' :'tab'">
      <ul>
        <li>当页面滚动的时候要固定在顶部</li>
      </ul>
    </div>
    <!--解决position:fixed,使页面元素脱离文档流,而导致遮挡下面元素的问题,解决方案,添加空白div或者调整下面元素的外边距-->
    <div :style="{height : searchBarFixed ? offsetHeight + 'px': '0px'}" />
    <!--<ul :style="{marginTop:searchBarFixed == true ? offsetHeight + 'px': '0px'}>-->
    <ul>
      <li v-for="(item, index) in footerData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import screenfull from 'screenfull'
export default {
  name: 'Section',
  data() {
    return {
      headerData: [],
      footerData: [],
      searchBarFixed: false,
      offsetTop: 0,
      offsetHeight: 0
    }
  },
  created() {
    // 使用假数据撑满屏幕
    for (let i = 0; i < 6; i++) {
      this.headerData.push('第' + i + '条数据')
    }
    for (let i = 20; i < 80; i++) {
      this.footerData.push('第' + i + '条数据')
    }
  },
  mounted() {
    // 创建页面滚动监听
    window.addEventListener('scroll', this.handleScroll)
    // 获取需要固定元素,与顶部的偏移量
    this.offsetTop = this.$refs.fixedBar.offsetTop
    this.offsetHeight = this.$refs.fixedBar.offsetHeight
  },
  destroyed() {
    // 销毁创建的页面滚动监听
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 滚动监听事件
    handleScroll() {
      // 滚动量
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 如果滚动大于固定元素的偏移量,则固定,小于,则不固定
      scrollTop > this.offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
    },
    toggleCard(event) {
      // 判断页面全屏是否可用
      if (screenfull.isEnabled) {
        screenfull.toggle(event.target)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  width: 100%;
  height: auto;
  overflow: hidden;
}
li {
  width: 23.5%; /*27.3%;*/
  float: left;
  height: auto;// 如果高度设置为auto,其长宽自动设定比为3比2,内部元素居中显示
  -webkit-box-shadow: 0px 0px 10px 0px #908787;
  box-shadow: 0px 0px 10px 0px #908787;
  margin: 2% 2% 2% 0%;/*2% 3%;*/
  /* background-image: repeating-linear-gradient(#cccccc36, #a2a2a230 , #a3a3a36b ); */
  /*background: linear-gradient(90deg,#0af,#0085ff);/*#41B9DE;*/
  position: relative;
  cursor: pointer;
  text-align: center;
  padding: 6% 0;
  list-style: none;
  background: linear-gradient(to right, #36d1dc, #5b86e5);
  /* text-align: center; */
}
li p {
  /* text-indent: 26px; */
  line-height: 50px;

  color: #fff;
  font-size: 24px;
  font-weight: 600;
  font-family:myfont;
}
.stickyTop {
  top: 0;
  z-index: 10;
}
.tab {
  height: auto;
  line-height: 30px;
  background-color: greenyellow;
}
.isFixed{
  position:fixed;
  width: 100%;
  background-color:red;
  height: auto;
  top:0;
  z-index:999;
}
</style>
