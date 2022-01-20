<template>
  <div>
    <!--父子组件传值-->
    <child-props ref="childRef" :default-prop="valueData" @pushData="receiveChildData" />
    <!--事件总线实现传值-->
    <non-component>
      <el-button type="success" @click="triggerMethod">事件总线</el-button>
    </non-component>
    <!--多级组件传值-->
    <first-level :first-value="FirstProp" :second-value="SecondValue" :third-value="ThirdValue" @firstMethod="firstChange" @secondMethod="secondChange" />
    <ul>
      <li v-if="first">第一级组件触发组件元素显示</li>
      <li v-if="second">第二级组件触发组件元素显示</li>
    </ul>
  </div>

</template>
<script>
import ChildProps from './components/ChildProps'
import NonComponent from './components/NonComponent'
import FirstLevel from './components/FirstLevel'
import bus from './utils/bus'
export default {
  name: 'PassValue',
  components: {
    ChildProps,
    NonComponent,
    FirstLevel
  },
  data() {
    return {
      valueData: '',
      first: false,
      second: false
    }
  },
  methods: {
    // 接收子组件传递的数据
    receiveChildData(val) {
      this.valueData = val
      // 通过$refs修改子组件数据
      this.$refs.childRef.changeBtnValue('完成赋值')
    },
    // 事件总线触发
    triggerMethod() {
      bus.$emit('value', '事件总线实现非父子传值')
    },
    // 多及组件
    firstChange() {
      this.first = true
    },
    secondChange() {
      this.second = true
    }
  }
}
</script>
