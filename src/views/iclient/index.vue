<template>
  <div id="map" />
</template>
<script>
import L from 'leaflet'
// import { load } from './include-leaflet.js'
export default {
  name: 'IClient',
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      var url = 'https://iserver.supermap.io/iserver/services/map-world/rest/maps/World'
      // 初始化地图信息
      var map = L.map('map', {
        crs: L.CRS.EPSG4326, // 坐标系统类。
        center: [0, 0],
        maxZoom: 18,
        zoom: 1 // 缩放级别
      })
      L.supermap.tiledMapLayer(url).addTo(map)
      // 标绘服务地址
      // var plotUrl = 'https://iserver.supermap.io/iserver/services/plot-jingyong/rest/plot/'
      // console.log(plotting.plottingLayer('plottingLayer', plotUrl))
      console.log(L.supermap.plotting)
    }
  }
}
</script>
<style lang="scss" scoped>
#map{
  margin: 0;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
}
</style>
