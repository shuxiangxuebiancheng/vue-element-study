<template>
  <div class="topbar-bg">
    <topbar class="topbar-container" />
  </div>
</template>
<script>
import { Topbar } from './components'
export default {
  name: 'TopMenuLayout',
  components: {
    Topbar
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.topbar-bg{
  background: $menuBg;
}
.topbar-container{
  background-color: $menuBg;
  .el-submenu__title {
    &:hover {
      background-color: $menuHover !important;
    }
  }
}
.el-menu--horizontal {
  &>.el-menu {
    .svg-icon {
      margin-right: 16px;
    }
  }

  .nest-menu .el-submenu>.el-submenu__title,
  .el-menu-item {
    &:hover {
      // you can use $subMenuHover
      background-color: $menuHover !important;
    }
  }

  // the scroll bar appears when the subMenu is too long
  >.el-menu--popup {
    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar-track-piece {
      background: #d3dce6;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #99a9bf;
      border-radius: 20px;
    }
  }
}
</style>
