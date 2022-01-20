<template>
  <div class="topbar-content">
    <logo v-if="showLogo" />
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="horizontal"
    >
      <topbar-item v-for="route in routes" :key="route.path" class="topbar-item" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import TopbarItem from './TopbarItem'
import variables from '@/styles/variables.scss'
export default {
  name: 'Topbar',
  components: { TopbarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    // 路由信息
    routes() {
      // router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。
      return this.$router.options.routes
    },
    // 激活状态的菜单
    activeMenu() {
      // route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // 是否显示logo
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    // 变量信息
    variables() {
      return variables
    }
  }
}
</script>
<style lang="scss" scoped>
 @import "~@/styles/variables.scss";
.topbar-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
}
.logo{
  height: 100%;
}
.topbar-content{
  display: flex;
  align-items: center;
  width: 1200px;
  height: 60px;
  margin: 0px auto;
  background:  $menuBg;
}
.svg-icon {
  margin-right: 16px;
}

</style>
