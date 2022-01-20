<template>
  <div class="login-container">
    <!--走马灯-->
    <div class="carousel-form" :inline="true">
      <el-carousel :interval="5000" arrow="always" height="440px">
        <el-carousel-item v-for="item in carouselImages" :key="item">
          <el-image :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--登录-->
    <div class="login-form">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <div class="title-container">
          <h3 class="title">欢迎使用XXX系统</h3>
        </div>
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input ref="username" v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input ref="password" v-model="loginForm.password" :type="passwordType" @keyup.enter.native="handleLogin" />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <!--登录按钮-->
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:5px;" @click.native.prevent="handleLogin">登录</el-button>
        <!--注册文本按钮-->
        <el-button type="text" style="width:100%;margin-bottom:10px;">新用户注册</el-button>
        <!--分割线-->
        <el-divider content-position="center"><i class="el-icon-s-promotion" />书香学编程</el-divider>
        <!--链接-->
        <div style="text-align:center">
          <el-link type="primary" style="margin:0px 8px">用户协议</el-link>
          <el-link type="primary" style="margin:0px 8px">隐私条款</el-link>
        </div>

      </el-form>
    </div>
  </div>
</template>
<script>
import { validUsername } from '@/utils/validate'
export default {
  name: 'CarouselLogin',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      carouselImages: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      loading: false,
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password', // 密码类型
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    // 获取输入框的焦点
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // 写入状态管理内
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              // 路由跳转
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 显示密码/隐藏密码
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 获取其他的查询条件
    getOtherQuery(query) {
      // 1.Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。
      // var anObj = { 100: 'a', 2: 'b', 7: 'c' };
      // console.log(Object.keys(anObj)); // console: ['2', '7', '100']
      // 2.reduce() 方法接收一个函数作为累加器,reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（上一次回调的返回值），当前元素值，当前索引，原数组
      // 语法：arr.reduce(callback,[initialValue])
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
.el-form-item{
  background-color: #eaecf0;
  .el-input{
    // 融合行内于块级
    display: inline-block;
    height: 47px;
    width: 85%;

    input{
      background: transparent;
      // 边框宽度
      border: 0px;
      -webkit-appearance: none;
      // 元素添加圆角的边框：
      border-radius: 0px;
      // 内边距
      padding: 12px 5px 12px 15px;
      // 文本的颜色
      color: black;
      // 高度   与el-input的高度一致
      height: 47px;
      // 输入光标的颜色
      caret-color: black;

    }
  }
}
</style>

<style lang="scss" scoped>
// 登录内容样式
.login-container{
  height: 550px;
  width: 1150px;
  margin: 160px auto 0px;
  // 边框
  // border: 2px solid red;
  background-color: #eaecf0;
  -webkit-appearance: none;
  // 元素添加圆角的边框：
  border-radius: 10px;

  // 走马灯样式
  .carousel-form{
    width: 680px;
    margin-top: 55px;
    margin-left: 22px;
    border-radius: 10px;
    // 边框
    // border: 2px solid blue;
    // 浮动
    float: left;
    // 设定走马灯样式
    .el-carousel__item .el-image{
      border-radius: 10px;
    }
  }
  // 登录表单样式
  .login-form{
    width: 400px;
    height: 440px;
    background-color:white;
    float: left;
    margin: 55px 0px 0px 22px;
    // 边框圆角
    border-radius: 10px;
    padding: 10px 25px;
    // 边框
    // border: 2px solid greenyellow;

    .title-container{
      position: relative;

      .title {
        font-size: 26px;
        color: black;
        margin: 15px auto 40px auto;
        // 居中
        text-align: center;
        font-weight: bold;
      }
    }
    // SVG样式
    .svg-container {
      // 内边距
      padding: 6px 5px 6px 15px;
      // 颜色
      color: #889aa4;
      // 居中
      vertical-align: middle;
      // 宽度
      width: 30px;
      // 显示
      display: inline-block;
    }
    // 密码样式
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: #889aa4;
      cursor: pointer;
      user-select: none;
    }
  }
}

</style>
