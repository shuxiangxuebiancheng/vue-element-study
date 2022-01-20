import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import TopMenuLayout from '@/layout/TopMenuLayout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/carousel-login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/table/drag',
    meta: {
      title: '表格实践',
      icon: 'table'
    },
    children: [
      {
        path: 'table/drag',
        name: 'DragTable',
        component: () => import('../views/table/drag-table'),
        meta: { title: '拖拽表格', affix: true }
      },
      {
        path: 'table/inline',
        name: 'InlineTable',
        component: () => import('../views/table/inline-table'),
        meta: { title: '内嵌表格', affix: true }
      },
      {
        path: 'table/drag-kanban',
        name: 'InlineTable',
        component: () => import('../views/table/drag-work'),
        meta: { title: '任务列表', affix: true }
      },
      {
        path: 'table/drag-dialog',
        name: 'InlineTable',
        component: () => import('../views/table/drag-dialog'),
        meta: { title: '拖拽对话框', affix: true }
      }
    ]
  },
  {
    path: '/card',
    component: Layout,
    meta: {
      title: '卡片数据',
      icon: 'chart'
    },
    children: [
      {
        path: '/card/index',
        name: 'NormalCard',
        component: () => import('../views/card/normal-card'),
        meta: { title: '标准卡片', affix: true }
      },
      {
        path: '/card/box',
        name: 'NormalCard',
        component: () => import('../views/card/index'),
        meta: { title: '动态卡片', affix: true }
      },
      {
        path: '/tab/index',
        name: 'NormalCard',
        component: () => import('../views/tab/index'),
        meta: { title: '标签页', affix: true }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        path: '/example/index',
        name: 'Example',
        component: () => import('../views/example/index'),
        meta: { title: '生命周期演示', affix: true }
      },
      {
        path: '/example/section',
        name: 'Example',
        component: () => import('../views/example/section'),
        meta: { title: '列表固定演示', affix: true }
      }
    ]
  },
  {
    path: '/top',
    component: TopMenuLayout,
    meta: {
      title: '顶部菜单',
      icon: 'chart'
    }
  },
  {
    path: '/svg',
    component: Layout,
    meta: {
      title: 'Svg使用',
      icon: 'icon'
    },
    children: [
      {
        path: '/svg/index',
        name: 'SvgDemo',
        component: () => import('../views/svg/index'),
        meta: { title: 'Svg使用', affix: true }
      }
    ]
  },
  {
    path: '/iclient',
    component: Layout,
    meta: {
      title: 'SuperMap使用',
      icon: 'location-fill'
    },
    children: [
      {
        path: '/iclient/index',
        component: () => import('../views/iclient/index'),
        meta: { title: 'iClient使用', affix: true }
      }
    ]
  },
  {
    path: '/echarts',
    component: Layout,
    meta: {
      title: 'ECharts',
      icon: 'chart'
    },
    children: [
      {
        path: '/echarts/index',
        component: () => import('../views/echarts/index'),
        meta: { title: 'ECharts使用', affix: true }
      },
      {
        path: '/echarts/line-chart',
        component: () => import('../views/echarts/line-chart'),
        meta: { title: '曲线图', affix: true }
      },
      {
        path: '/echarts/dynamic-chart',
        component: () => import('../views/echarts/dynamic-chart'),
        meta: { title: '动态图例', affix: true }
      }
    ]
  },
  {
    path: '/slot',
    component: Layout,
    meta: {
      title: '插槽组件',
      icon: 'nested'
    },
    children: [
      {
        path: '/slot/index',
        component: () => import('../views/slot/index'),
        meta: { title: '插槽组件使用', affix: true }
      }
    ]
  },
  {
    path: '/value',
    component: Layout,
    meta: {
      title: '父子组件',
      icon: 'edit'
    },
    children: [
      {
        path: '/value/index',
        component: () => import('../views/value/index'),
        meta: { title: '父子组件传值', affix: true }
      }
    ]
  },
  {
    path: '/style',
    component: Layout,
    meta: {
      title: '样式学习',
      icon: 'edit'
    },
    children: [
      {
        path: '/style/index',
        component: () => import('../views/style/index'),
        meta: { title: '样式学习', affix: true }
      },
      {
        path: '/hover/index',
        component: () => import('../views/hover/index'),
        meta: { title: 'hover学习', affix: true }
      }
    ]
  },
  {
    path: '/split',
    component: Layout,
    meta: {
      title: '国际化',
      icon: 'location-fill'
    },
    children: [
      {
        path: '/i18n/index',
        component: () => import('../views/i18n-demo/index'),
        meta: { title: 'i18国际化', affix: true }
      }
    ]
  },
  {
    path: '/splits',
    component: Layout,
    meta: {
      title: '窗口拆分',
      icon: 'location-fill'
    },
    children: [
      {
        path: '/splits/split-pane',
        component: () => import('../views/split/split-pane'),
        meta: { title: '窗口拆分', affix: true }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', component: () => import('../views/error-page/404'), hidden: true }
  // {
  //   path: '/table',
  //   component: Layout,
  //   name: 'Table',
  //   meta: {
  //     title: 'Table',
  //     icon: 'table'
  //   },
  //   children: [
  //     {
  //       path: 'drag',
  //       name: 'DragTable',
  //       component: () => import('../views/table/drag-table'),
  //       meta: { title: 'DragTable', icon: 'dashboard', affix: true }
  //     },
  //     {
  //       path: 'tab',
  //       name: 'Tab',
  //       component: () => import('../views/tab/index'),
  //       meta: { title: 'Tab', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // }
]
export const asyncRoutes = [

]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
