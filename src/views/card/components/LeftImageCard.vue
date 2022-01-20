<template>
  <div class="app-components">
    <!--图片位置左侧-->
    <el-row>
      <el-col v-for="(o, index) in 2" :key="o" :span="11" :offset="index > 0 ? 1 : 0" class="card-panel-col">
        <el-card :body-style="{ padding: '10px 20px' }">
          <div class="card-title">
            <img class="image" :src="leftUrl">
            <div class="right-format">
              <span class="title-span">XXX风景标题</span>
              <div class="div-descript">
                描述: 春风在碧蓝如洗的天空中放牧着白云。春雨轻洒,草儿发芽,大地一片青青。
              </div>
              <el-button type="text" class="button">详情信息</el-button>
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'LeftImageCard',
  props: {
    leftUrl: {
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
.card-title{
  // flex意为"弹性布局"，用来为盒状模型提供最大的灵活性。
  display: flex;
  align-items: center;
}
.image{
  width: 200px;
  // height: 112px;
  min-height: 100%;
  margin-right: 16px;
  // 圆角
  border-radius: 5px;
  // float: left;
  // border: 1px solid blue;
}
.right-format{
  // height: 112px;
  min-height: 100%;
}
.title-span{
  font-size: 18px;
}
.div-descript{
  margin:10px 0px 6px 0px;
  font-size: 14px;
  color: #373d41;
  text-align: justify;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
.el-button{
  padding: 0px;
  margin-bottom: 8px;
  display: block;
}
</style>
