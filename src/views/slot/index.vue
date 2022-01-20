<template>
  <div class="father">
    <h3>父组件</h3>
    <!--匿名插槽组件-->
    <div :style="{background:'skyblue'}">
      <single-slot>
        <div>
          <span>匿名插槽1</span>
        </div>
      </single-slot>
    </div>
    <!--具名插槽组件-->
    <div :style="{background:'yellowgreen'}">
      <name-slot>
        <!--slot可以加载div标签上-->
        <div slot="nameSlot">
          <span>具名插槽2</span>
        </div>
        <!--v-slot只能加载template标签上-->
        <template v-slot:nameVSlot>
          <span>具名插槽3</span>
        </template>
      </name-slot>
    </div>
    <!--作用域插槽-->
    <div :style="{background:'grey'}">
      <!--用列表展示数据-->
      <child-slot>
        <template slot="childSlot" slot-scope="slotValue">
          <ul>
            <li v-for="(item,index) in slotValue.data" :key="index">{{ item }}</li>
          </ul>
        </template>
      </child-slot>
      <!--直接显示数据-->
      <child-slot v-slot:childSlot="slotValue">
        {{ slotValue.data }}
      </child-slot>
      <!--不使用其提供的数据, 作用域插槽退变成匿名插槽-->
      <child-slot>
        <template slot="childSlot">
          <br>我就是模板
        </template>
      </child-slot>
    </div>
  </div>
</template>
<script>
import ChildSlot from './components/ChildSlot'
import SingleSlot from './components/SingleSlot'
import NameSlot from './components/NameSlot'
export default {
  components: {
    ChildSlot,
    SingleSlot,
    NameSlot
  }
}
</script>
