import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect']
// 全局前置导航守卫---主要用来通过跳转或取消的方式守卫导航
// to:router即将进入的路由对象
// from:当前导航即将离开的路由
// next:Function函数,一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // 设定页面标题
  document.title = getPageTitle(to.meta.title)
  // 校验当前用是否已登录
  const hasToken = getToken()

  if (hasToken) {
    // 已登录
    if (to.path === '/login') {
      // 跳转到首页
      next({ path: '/' })
      NProgress.done()
    } else {
      const accessRoutes = await store.dispatch('permission/generateRoutes', 'admin')
      // 权限控制  动态路由等操作可在此进行
      // dynamically add accessible routes
      router.addRoutes(accessRoutes)
      console.log(router)
      next()
    }
  } else {
    // 未登录,并且当前页面为登录页
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 未登录,且当前访问页面不是登录页,需要添加登录后的重定向地址
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
