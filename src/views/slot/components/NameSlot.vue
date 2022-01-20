<template>
  <div class="name-slot">
    <h3>具名插槽子组件</h3>
    <slot name="nameSlot" />
    <!--匿名插槽子组件-->
    <slot name="nameVSlot" />
  </div>
</template>
<style lang="scss" scoped>
.name-slot{
  background:yellowgreen;
}
</style>
