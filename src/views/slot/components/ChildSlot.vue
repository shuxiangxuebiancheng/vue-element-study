<template>
  <div class="child-slot">
    <slot name="childSlot" :data="data" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  }
}
</script>
<style lang="scss" scoped>
.child-slot{
  background: grey;
}
</style>
