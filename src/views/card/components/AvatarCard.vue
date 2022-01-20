<template>
  <div class="app-components">
    <el-row>
      <el-col v-for="(o, index) in 4" :key="o + '1'" :span="5" :offset="index > 0 ? 1 : 0" class="card-panel-col">
        <el-card :body-style="{ padding: '10px 20px' }">
          <div class="card-title">
            <el-avatar class="avatar-show" :size="50" :src="circleUrl" />
            <span class="span-show">Vue Element 学习</span>
          </div>
          <div class="edu-route-card-subtitle">
            Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
          </div>
          <div class="edu-route-card-detail">
            <span>
              6大学习阶段 | 26门课程
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'AvatarCard',
  props: {
    circleUrl: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.card-title{
  display: flex;
  align-items: center;
  margin-bottom: 9px;
}
.avatar-show{
  margin-right: 25px;
}
.span-show{
  font-size: 18px;
}
.edu-route-card-subtitle{
  font-size: 14px;
  color: #373d41;
  text-align: justify;
  line-height: 24px;
  // height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
.edu-route-card-detail{
  font-size: 12px;
  color: #9b9ea0;
  letter-spacing: .31px;
  line-height: 18px;
  margin-top: 27px;
}
</style>
