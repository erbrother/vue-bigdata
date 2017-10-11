<template>
  <container id='kafka4'>
    <marquee style='color:#fff;width:10%;'>456</marquee>
    <canvas ref='graph' width='1980' height='1200' class='graphCanvas'></canvas>
  </container>
</template>
<script type="text/ecmascript-6">
import echarts from 'echarts'
import container from 'base/container/container'
export default {
  data() {
    return {

    }
  },
  mounted() {
    this._initGraph()
  },
  methods: {
    _initGraph() {
      const graph = echarts.init(this.$refs.graph)
      var option = {
        title: {
          text: 'Graph 简单示例'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            data: [{
              name: '节点1',
              x: 300,
              y: 300
            }, {
              name: '节点2',
              x: 800,
              y: 300
            }, {
              name: '节点3',
              x: 550,
              y: 100
            }, {
              name: '节点4',
              x: 550,
              y: 500
            }],
            // links: [],
            links: [{
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: {
                  width: 5,
                  curveness: 0.2
                }
              }
            }, {
              source: '节点2',
              target: '节点1',
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: { curveness: 0.2 }
              }
            }, {
              source: '节点1',
              target: '节点3'
            }, {
              source: '节点2',
              target: '节点3'
            }, {
              source: '节点2',
              target: '节点4'
            }, {
              source: '节点1',
              target: '节点4'
            }],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          }
        ]
      }
      graph.setOption(option)
    }
  },
  components: {
    container
  }
}
</script>
<style lang='stylus' scoped>
  #kafka4
   background: url("img/bg1.png")
</style>