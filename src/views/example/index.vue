<template>
  <div style="padding-top:50px;padding-left:50px">
    <el-form :inline="true">
      <el-form-item>
        <el-input v-model="formData.inputValue">
          <template slot="prepend">输入信息</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="updateDate">更新数据</el-button>
      </el-form-item>
    </el-form>
    <div v-if="false">
      <el-date-picker
        v-model="formData.localDate"
        type="datetime"
        placeholder="选择日期时间"
      />
    </div>
    <div ref="example">
      <h1>{{ value }}</h1>
    </div>
    <el-button type="danger" @click="get">点击修改</el-button>
  </div>
</template>
<script>
export default {
  name: 'Example',
  data() {
    return {
      formData: {
        inputValue: '',
        localDate: new Date()
      },
      count: 0,
      value: '生命周期函数学习'
    }
  },
  watch: {
    value(val, olVal) {
      console.log(val, olVal)
    }
  },
  created() {
    console.log('开始执行created钩子函数')
    // 获取data数据
    console.log('获取created属性----' + this.value)
    // 获取页面元素
    console.log(this.$refs['example'])
    this.$nextTick(() => {
      console.log('执行created创建的this.$nextTick()函数')
    })
  },
  mounted() {
    console.log('开始执行mounted钩子函数')
    // 获取挂载数据
    console.log('获取挂载数据----' + this.$refs['example'].innerText)
    this.$nextTick(() => {
      console.log('执行mounted创建的this.$nextTick()函数')
    })
  },
  methods: {
    // 更新数据
    updateDate() {
      var updateValue = {
        inputValue: '更新信息' + this.count++
        // localDate: new Date()
      }
      this.formData = updateValue
      this.$set(this.formData, 'localDate', new Date())
      // this.formData.localDate = new Date()
    },
    get() {
      this.value = '更新data内的value属性值'
      // 获取页面元素数据
      console.log(this.$refs['example'].innerText)
      this.$nextTick(() => {
        console.log(this.$refs['example'].innerText)
      })
    }
  }
}
</script>
