<template>
  <div :style="{zIndex:zIndex,height:height,width:width}" class="pan-item">
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot />
      </div>
    </div>
    <!-- eslint-disable-next-line -->
    <div :style="{backgroundImage: `url(${image})`}" class="pan-thumb"></div>
  </div>
</template>
<script>
export default {
  name: 'PanThumb',
  props: {
    image: {
      type: String,
      required: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '150px'
    }
  }
}
</script>
<style  scoped>
.pan-item {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: default;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.pan-info-roles-container {
  padding: 20px;
  text-align: center;
}
.pan-thumb {
  width: 100%;
  height: 100%;
  /**背景图片的起始位置*/
  background-position: center center;
  /**背景图片的尺寸  cover 表示把背景图片放大到适合元素容器的尺寸，图片比例不变*/
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  /**transform-origin是变形原点，原点就是元素绕着旋转或变形的点,如果是两个参数值时，第一值设置水平方向X轴的位置，第二个值是用来设置垂直方向Ｙ轴的位置。*/
  /**在没有使用  transform-origin 属性的情况下 transform 的 rotate , translate , scale , skew , matrix  这些操作都是以自身在中心位置为原点的。*/
  transform-origin: 95% 40%;
  /**如果你想给元素执行所有过渡效果的属性，那么我们还可以利用all属性值来操作*/
  /**0.3s延续时间*/
  /**ease-in-out 元素样式从初始状态到终止状态,先加速在减速*/
  transition: all 0.3s ease-in-out;
}
.pan-item:hover .pan-thumb {
  /**transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。*/
  transform: rotate(-110deg);
}
.pan-info {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
}
.pan-info p a:hover {
  background: rgba(255, 255, 255, 0.5);
}

</style>
