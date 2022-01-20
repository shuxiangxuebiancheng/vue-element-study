import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import './styles/element-variables.scss'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
// 引入全局样式
import '@/styles/index.scss' // global css
import './permission' // permission control
// 图标类
import './icons' // icon
import Cookies from 'js-cookie'
// 全局引入supermap
import '@supermap/iclient-leaflet'
// 引入leaflet样式
import 'leaflet/dist/leaflet.css'

import i18n from './lang' // internationalization
// 引入bootstrap
// import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/less/font-awesome.less'
// 引入全局过滤器
import * as filters from './filters' // global filters

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 使用element
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
// import axios from 'axios'
// const service = axios.create()
// Vue.prototype.$http = service
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
