<template>
  <container id='kafka3'>
    <canvas ref='map' width='1980' height='1200' class='mapCanvas'></canvas>
  </container>
</template>
<script type="text/ecmascript-6">
import echarts from 'echarts'
import container from 'base/container/container'
import {geoCoordMap} from 'common/js/geoCoordMap.js'
export default {
  data() {
    return {

    }
  },
  mounted() {
    this._initMap()
  },
  methods: {
    _initMap() {
      const map = echarts.init(this.$refs.map)
      var BJData = [
        [{name: '上海', value: 100}, {name: '北京'}],
        [{name: '广州', value: 70}, {name: '北京'}],
        [{name: '哈尔滨', value: 30}, {name: '北京'}],
        [{name: '青岛', value: 50}, {name: '北京'}],
        [{name: '南昌', value: 20}, {name: '北京'}],
        [{name: '银川', value: 10}, {name: '北京'}],
        [{name: '拉萨', value: 80}, {name: '北京'}],
        [{name: '西安', value: 55}, {name: '北京'}],
        [{name: '乌鲁木齐', value: 90}, {name: '北京'}]
      ]

      var convertData = function(data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = geoCoordMap[dataItem[0].name]
          var toCoord = geoCoordMap[dataItem[1].name]
          if (fromCoord && toCoord) {
            res.push([{
              coord: fromCoord,
              value: dataItem[0].value
            }, {
              coord: toCoord
            }])
          }
        }
        return res
      }

      var series = []
      var arr = [['北京', BJData]]
      arr.forEach(function(item, i) {
        series.push({
          type: 'lines',
          zlevel: 3,
          effect: {
            show: true,
            period: 4,
            trailLength: 0.02,
            symbol: 'arrow',
            symbolSize: 5
          },
          lineStyle: {
            normal: {
              width: 1,
              opacity: 0,
              curveness: 0
            }
          },

          data: convertData(item[1])
        }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              offset: [5, 0],
              formatter: '{b}'
            },
            emphasis: {
              show: true
            }
          },
          symbol: 'circle',
          symbolSize: function (val) {
            return 4 + val[2] / 10
          },
          itemStyle: {
            normal: {
              show: false,
              color: '#f00'
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[0].name,
              value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            }
          })
        }, {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              color: '#00ffff',
              formatter: '{b}',
              textStyle: {
                color: '#00ffff'
              }
            },
            emphasis: {
              show: true
            }
          },
          symbol: 'pin',
          symbolSize: 30,
          itemStyle: {
            normal: {
              show: true,
              color: '#9966cc'
            }
          },
          data: [{
            name: item[0],
            value: geoCoordMap[item[0]].concat([100])
          }]
        })
      })

      let option = {
        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          zoom: 0.7,
          roam: true,
          aspectScale: 1,
          layoutCenter: ['50%', '55%'],
          layoutSize: '150%',
          itemStyle: {
            normal: {
              color: 'rgba(51, 69, 89, .5)',
              borderColor: 'rgba(100,149,237,1)'
            },
            emphasis: {
              color: 'rgba(37, 43, 61, .5)'
            }
          }
        },
        series: series
      }
      map.setOption(option)
    }
  },
  components: {
    container
  }
}
</script>
<style lang='stylus' scoped>
	#kafka3
	 background: url("img/bg1.png")
</style>