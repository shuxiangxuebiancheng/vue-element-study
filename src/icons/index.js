import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// 全局注册SvgIcon组件
Vue.component('svg-icon', SvgIcon)

// 获取全部的svg图标,其他页面不需要单独引入svg图标
const req = require.context('./svg', false, /\.svg$/)
// 获取到的req 为webpackContext
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
