<template>
  <div>
    <el-divider content-position="left">父子组件通过props/$emit/$refs实现父子组件传值</el-divider>
    <div class="app-container">
      <el-input v-model="defaultProp" placeholder="请输入内容">
        <template slot="prepend">
          父子传值:
        </template>
      </el-input>
      <el-button type="success" @click="emitMethod">{{ btnValue }}</el-button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'ChildProps',
  props: {
    defaultProp: {
      type: String,
      default: 'DefaltValue'
    }
  },
  data() {
    return {
      btnValue: '组件赋值'
    }
  },
  methods: {
    // 通过$emit传递数据
    emitMethod() {
      this.$emit('pushData', '通过$emit实现子组件传递给父组件数据')
    },
    // 通过$refs修改子组件数据
    changeBtnValue(val) {
      this.btnValue = val
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
