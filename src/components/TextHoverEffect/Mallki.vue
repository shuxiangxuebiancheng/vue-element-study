<template>
  <a :class="className" class="link--mallki" href="#">
    {{ text }}
    <span :data-letters="text" />
    <span :data-letters="text" />
  </a>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'vue-element-admin'
    }
  }
}
</script>
<style>
/* Mallki */

.link--mallki {
  font-weight: 800;
  color: #4dd9d5;
  font-family: 'Dosis', sans-serif;
  -webkit-transition: color 0.5s 0.25s;
  transition: color 0.5s 0.25s;
  overflow: hidden;
  position: relative;
  display: inline-block;
  /**line-height 属性设置行间的距离（行高）。注意：不允许使用负值。 */
  line-height: 1;
  outline: none;
  text-decoration: none;
}

.link--mallki::before {
  content: '';
  width: 100%;
  height: 6px;
  margin: -3px 0 0 0;
  background: #3888fa;
  position: absolute;
  left: 0;
  top: 50%;
  /**translate3d()函数使一个元素在三维空间移动
  transform是 转换，指的是改变所在元素的外观，它有很多种手段(转换函数)来改变外观，例如 位移、缩放、旋转 等*/
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  /** transition是 过渡，指的是某个CSS属性值如何平滑的进行改变，就是平常说的 动效*/
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  /**transition-timing-function 属性规定过渡效果的速度曲线。设定为阿基米德曲线 */
  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}
/**position为absolute,但是span标签内容为空,所以还是会显示a标签数据 */
.link--mallki span {
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 100px;
}

.link--mallki span::before {
  content: attr(data-letters);
  position: absolute;
  left: 0;
  width: 100%;
  color: #3888fa;
  -webkit-transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
}
/**第一个span标签 */
.link--mallki span:first-child::before {
  top: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
/**第二个span标签 */
.link--mallki span:nth-child(2) {
  top: 50%;
}
.link--mallki span:nth-child(2)::before {
  bottom: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
/**取消动画并设定字体颜色为透明 */
.link--mallki:hover {
  -webkit-transition: none;
  transition: none;
  /**transparent属性用来指定全透明色彩 */
  color: transparent;
}
.link--mallki:hover::before {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.link--mallki:hover span::before {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
</style>
