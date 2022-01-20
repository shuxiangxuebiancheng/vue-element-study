<template>
  <div class="app-components">
    <!--图片位置在上-->
    <el-row>
      <el-col v-for="(o, index) in 5" :key="o" :span="4" :offset="index > 0 ? 1 : 0" class="card-panel-col">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="topUrl" class="image">
          <div style="padding: 14px;">
            <span>XXX风景标题</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'TopImageCard',
  props: {
    topUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>
<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
// 按钮样式
.button {
  padding: 0;
  // 右浮动
  float: right;
}
// 图片样式
.image {
  width: 100%;
  display: block;
}
//
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
