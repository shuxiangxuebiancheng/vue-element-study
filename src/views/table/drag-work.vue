<template>
  <div class="components-container board">
    <Kanban :key="1" :list="list1" :group="group" class="kanban todo" header-text="待完成" />
    <Kanban :key="2" :list="list2" :group="group" class="kanban working" header-text="进行中" />
    <Kanban :key="3" :list="list3" :group="group" class="kanban done" header-text="已完成" />
  </div>
</template>
<script>
import Kanban from '@/components/Kanban'

export default {
  name: 'DragKanbanDemo',
  components: {
    Kanban
  },
  data() {
    return {
      // group: { name: 'planwork', pull: 'clone' },
      group: 'planwork',
      list1: [
        { name: 'Vue组件学习', id: 1 },
        { name: 'Python基础学习', id: 2 },
        { name: '学习CSS', id: 3 },
        { name: '学习Java', id: 4 }
      ],
      list2: [
        { name: '学习Vue-element', id: 5 },
        { name: '学习C# DotNet开发', id: 6 },
        { name: '学习人工智能', id: 7 }
      ],
      list3: [
        { name: '学习软件开发流程', id: 8 },
        { name: '学习软件开发文档编写', id: 9 },
        { name: '学习软件开发规范', id: 10 }
      ]
    }
  }
}
</script>
<style lang="scss">
.board {
  width: 1000px;
  margin-left: 20px;
  // 采用flex布局,弹性布局
  display: flex;
  // justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式,space-around表示 元素中的各项周围留有空白
  // justify-content: space-around;
  flex-direction: row;
  // 元素位于容器的开头
  align-items: flex-start;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>

