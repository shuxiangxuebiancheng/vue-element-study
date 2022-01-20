import drag from './drag'

const install = function(Vue) {
  // 添加全局资源
  Vue.directive('el-drag-dialog', drag)
}
// Vue 是全局变量时，自动调用 Vue.use()
if (window.Vue) {
  window['el-drag-dialog'] = drag
  // 全局使用
  Vue.use(install); // eslint-disable-line
}

drag.install = install
export default drag
