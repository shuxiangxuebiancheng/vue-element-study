<template>
  <div class="login-container">

    <!--autocomplete 属性规定输入字段是否应该启用自动完成功能。-->
    <el-form class="login-form" :model="loginForm" :rules="loginRules" autocomplete="on" label-position="left">
      <!--标题-->
      <div class="title-container">
        <h3 class="title">欢迎使用XXX系统</h3>
      </div>
      <!--用户名输入框-->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <!--密码-->
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <!--登录密码-->
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import { validUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    // 自定义--用户名规则校验
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    // 自定义--密码规则校验
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.login-container{
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
      color: $light_gray;
      // 高度   与el-input的高度一致
      height: 47px;
      // 输入光标的颜色
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item{
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
$bg:#283443;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container{
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  // 清除浮动
  overflow: hidden;

  .login-form{
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0px;
    margin: 0 auto;
    overflow: hidden;
    // 设定边框
    // border: 2px solid beige;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  // SVG样式
  .svg-container {
    // 内边距
    padding: 6px 5px 6px 15px;
    // 颜色
    color: $dark_gray;
    // 居中
    vertical-align: middle;
    // 宽度
    width: 30px;
    // 显示
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      // 居中
      text-align: center;
      font-weight: bold;
    }
  }

  // 显示密码
  .show-pwd {
    // 位置
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>

