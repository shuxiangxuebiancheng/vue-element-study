<template>
  <div class="echart-container ">
    <el-row :gutter="32" class="row-style">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32" class="row-style">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <bar-simple />
        </div>
      </el-col>
    </el-row>
  </div>

</template>
<script>
import BarChart from './components/BarChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarSimple from './components/BarSimple'
export default {
  name: 'ECharts',
  components: { BarChart, RaddarChart, PieChart, BarSimple }
}
</script>
<style lang="scss" scoped>
.echart-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .row-style {
    height: 50%;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
