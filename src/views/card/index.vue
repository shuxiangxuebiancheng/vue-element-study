<template>
  <div>
    <el-row :gutter="2">
      <el-col :xs="24" :sm="24" :lg="8">
        <box-card :image-url="imageUrlOther" class="box-card" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <todo-list class="todo-list" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="mixin-card">
          <div slot="header" class="clearfix">
            <span>通过hover选择器实现页面元素的动态效果</span>
          </div>
          <div class="component-item">
            <mallki class-name="mallki-text" text="Vue实践-书香学编程" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!--待处理列表-->

  </div>
</template>
<script>
import BoxCard from './components/BoxCard'
import Mallki from '@/components/TextHoverEffect/Mallki'
import TodoList from './components/TodoList'
export default {
  name: 'CardExample',
  components: {
    BoxCard,
    Mallki,
    TodoList
  },
  data() {
    return {
      imageUrl: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
      imageUrlOther: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      imageThress: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>
<style lang="scss" scoped>
.box-card{
  width: 400px;
  display: inline-block;
}
.mixin-card{
  // margin-left: 40px;
  margin-top: 30px;
  width: 460px;
  background: #f0f2f5;
  display: inline-block;
}
.clearfix{
  font-size: 21px;
}
.mallki-text{
  font-size: 32px;
  font-weight: bold;
}
.todo-list{
  // display: inline-block;
  position: relative;
  width: 400px;
  // margin-left: 40px;
  margin-top: 30px;
}
</style>
