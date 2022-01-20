<template>
  <div>
    <el-divider content-position="left">非父子组件传值</el-divider>
    <div class="app-container">
      <el-input v-model="defaultProp" placeholder="请输入内容">
        <template slot="prepend">
          非父子组件传值:
        </template>
      </el-input>
      <slot />
    </div>
  </div>

</template>
<script>
import bus from '../utils/bus'
export default {
  name: 'ChildProps',
  data() {
    return {
      defaultProp: ''
    }
  },
  mounted() {
    this.receiveValue()
  },
  methods: {
    // 通过$emit传递数据
    receiveValue() {
      bus.$on('value', (val) => {
        this.defaultProp = val
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  display: flex;
  align-items: center;
  .el-input{
    width: 400px;
    margin-right: 20px;
  }
}
</style>
