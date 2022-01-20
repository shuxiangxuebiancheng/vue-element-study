<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null,
      option: Object,
      count: 11
    }
  },
  created() {
    this.option = {
      backgroundColor: '#2193b0',
      title: {
        top: 20,
        text: '动态数据',
        subtext: '纯属虚构',
        textStyle: { // 字体样式
          fontWeight: 'normal',
          fontSize: 16,
          color: '#F1F1F3'
        },
        left: '1%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      // 图例
      legend: {
        top: 10,
        data: ['最新成交价', '预购队列']
      },
      // 工具栏
      toolbox: {
        show: true,
        top: 20,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        },
        right: '1%'
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: (function() {
            var now = new Date()
            var res = []
            var len = 10
            while (len--) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
              now = new Date(now - 2000)
            }
            return res
          })()
        },
        {
          type: 'category',
          boundaryGap: true,
          data: (function() {
            var res = []
            var len = 10
            while (len--) {
              res.push(10 - len - 1)
            }
            return res
          })()
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '价格',
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: 'value',
          scale: true,
          name: '预购量',
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: '预购队列',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: (function() {
            var res = []
            var len = 10
            while (len--) {
              res.push(Math.round(Math.random() * 1000))
            }
            return res
          })()
        },
        {
          name: '最新成交价',
          type: 'line',
          // 区域填充样式。
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 1)',
              shadowBlur: 10
            }
          },
          data: (function() {
            var res = []
            var len = 0
            while (len < 10) {
              res.push((Math.random() * 10 + 5).toFixed(1) - 0)
              len++
            }
            return res
          })()
        }
      ]
    }
    console.log(this.option)
  },
  mounted() {
    // 初始化ECharts
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(this.option)
      // setInterval(function(){

      // })
      setInterval(() => {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '')
        console.log(this.option)
        var data0 = this.option.series[0].data
        var data1 = this.option.series[1].data
        data0.shift()// 删除第一个元素
        data0.push(Math.round(Math.random() * 1000))// 最后添加数据
        data1.shift()
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0)// toFixed四舍五入,一位小数位

        this.option.xAxis[0].data.shift()
        this.option.xAxis[0].data.push(axisData)
        this.option.xAxis[1].data.shift()
        this.option.xAxis[1].data.push(this.count++)

        this.chart.setOption(this.option)
      }, 2100)
      if (this.ption && typeof this.option === 'object') {
        this.chart.setOption(this.option, true)
      }
    }
  }
}
</script>
