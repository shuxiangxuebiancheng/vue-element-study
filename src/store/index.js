import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
// reduce使用方法
// arr.reduce(callback,[initialValue])
//    callback: 函数中包含四个参数
//      - previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
//      - currentValue （数组中当前被处理的元素）
//      - index （当前元素在数组中的索引)
//      - array （调用的数组）

//    initialValue （作为第一次调用 callback 的第一个参数。）

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 根据key值获取modules信息
  const value = modulesFiles(modulePath)
  // 获取store模块
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules,
  getters
})
