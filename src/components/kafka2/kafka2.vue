<template>
    <container id="kafka2">
          <div class='header-con'>
              <p class='title'>我是标题我是标题</p>
              <div class='time'>
                 <i class='el-icon-time' style="width:18px; height:18px; margin-right:5px"></i>
                 <span style='color:#fff'>{{time}}</span>
              </div>
          </div>
          <ul class='title-con'>
            <li class='title-info'>
              <div>翻牌器1标题</div>
              <div style='color:#c1a03a'>￥2,314,232</div>
            </li>
            <li class='title-info'>
              <div>翻牌器2标题</div>
              <div style='color:#c1a03a'>￥2,314,232</div>
            </li>
            <li class='title-info'>
              <div>翻牌器3标题</div>
              <div style='color:#c1a03a'>￥2,314,232</div>
            </li>
            <li class='title-info'>
              <div>翻牌器4标题</div>
              <div style='color:#c1a03a'>￥2,314,232</div>
            </li>
          </ul>
          <ul class='chart-con'>
            <li  class='wraper-chart'>
              <div class='chart-title' style='font-size:48px; color:#d6a81e'>区域经济</div>
              <canvas ref='mycanvas1' width="600" height="320" style="background: transparent"></canvas>
            </li>
            <li class='wraper-chart'>
              <div class='chart-title' style='font-size:48px; color:#d6a81e'>区域经济</div>
              <canvas ref='mycanvas2' width="600" height="320" style="background: transparent"></canvas>
            </li>
          </ul>
          <ul class='chart-con'>
            <li class='wraper-chart'>
              <div class='chart-title' style='font-size:48px; color:#d6a81e'>区域经济</div>
              <canvas ref='mycanvas3' width="600" height="320" style="background: transparent"></canvas>
            </li>
            <li>
              <div class='chart-title' style='font-size:48px; color:#d6a81e'>区域经济</div>
              <canvas ref='mycanvas4' width="600" height="320" style="background: transparent"></canvas>
            </li>
          </ul>
    </container>
</template>
<script type="text/ecmascript-6">
import echarts from 'echarts'
import {getTime, shuffle} from 'common/js/util.js'
import container from 'base/container/container'

export default{
  data() {
    return {
      time: getTime(),
      myData1: {
        inst: Function,
        val: [500, 100, 300, 800, 280, 320, 350]
      },
      myData2: {
        inst: Function,
        val: [500, 100, 300, 800, 280, 260, 240]
      },
      myData3: {
        inst: Function,
        val: [300, 500, 800, 700, 200, 350, 450]
      },
      myData4: {
        inst: Function,
        val1: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        val2: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
      }
    }
  },
  mounted() {
    this.myData1.inst = echarts.init(this.$refs.mycanvas1)
    this.myData2.inst = echarts.init(this.$refs.mycanvas2)
    this.myData3.inst = echarts.init(this.$refs.mycanvas3)
    this.myData4.inst = echarts.init(this.$refs.mycanvas4)
    this._initmy1()
    this._initmy2()
    this._initmy3()
    this._initmy4()
    setInterval(() => {
      this.time = getTime()
      this.myData1.val = shuffle(this.myData1.val)
      this.myData2.val = shuffle(this.myData2.val)
      this.myData3.val = shuffle(this.myData3.val)
      this.myData4.val1 = shuffle(this.myData4.val1)
      this.myData4.val2 = shuffle(this.myData4.val2)
      this._initmy1()
      this._initmy2()
      this._initmy3()
      this._initmy4()
    }, 1000)
  },
  methods: {
    _initmy1() {
      var xAxisData = ['内蒙古', '浙江', '辽宁', '吉林', '黑龙江', '安徽', '福建']
      let option = {
        xAxis: [{
          type: 'category',
          data: xAxisData,
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          splitLine: {
            show: false
          }
        }, {
            // 辅助 x 轴
          show: false,
          data: xAxisData
        }],
        yAxis: {
          max: 1000,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: {
          show: false,
          pieces: [{
            lte: 400,
            color: 'rgb(0, 255, 145)'
          }, {
            gt: 400,
            color: 'red'
          }]
        },
        series: [{
          type: 'bar',
          data: this.myData1.val,
          barWidth: 40,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: '#00c9ff',
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 20
            }
          }
        }]
      }
      this.myData1.inst.setOption(option)
    },
    _initmy2() {
      var xAxisData = ['内蒙古', '浙江', '辽宁', '吉林', '黑龙江', '安徽', '福建']
      let option = {
        xAxis: [{
          type: 'category',
          data: xAxisData,
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          splitLine: {
            show: false
          }
        }, {
            // 辅助 x 轴
          show: false,
          data: xAxisData
        }],
        yAxis: {
          max: 1000,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: {
          show: false,
          pieces: [{
            lte: 400,
            color: 'rgb(0, 255, 145)'
          }, {
            gt: 400,
            color: 'red'
          }]
        },
        series: [{
          type: 'bar',
          data: this.myData2.val,
          barWidth: 40,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: '#00c9ff',
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 20
            }
          }
        }]
      }
      this.myData2.inst.setOption(option)
    },
    _initmy3() {
      var xAxisData = ['2月', '3月', '4月', '5月', '6月', '7月', '8月']
      var data = []
      for (var i = 9; i < 16; i++) {
        data.push(Math.round(Math.random() * 500) + 200)
      }
      let option = {
        xAxis: [{
          type: 'category',
          data: xAxisData,
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          splitLine: {
            show: false
          }
        }, {
          // 辅助 x 轴
          show: false,
          data: xAxisData
        }],
        yAxis: {
          max: 1000,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgb(255, 255, 255)'
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          // 辅助系列
          type: 'bar',
          silent: true,
          xAxisIndex: 1,
          itemStyle: {
            normal: {
              color: 'rgba(36, 254, 180, 0.18)'
            }
          },
          barWidth: 40,
          data: data.map((val) => {
            return 1000
          })
        }, {
          type: 'bar',
          data: this.myData3.val,
          barWidth: 40,
          itemStyle: {
            normal: {
              color: 'rgb(36, 254, 180)',
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 20
            }
          }
        }, {
          type: 'line',
          data: this.myData3.val,
          lineStyle: {
            normal: {
              color: '#fff',
              width: 4
            }
          },
          itemStyle: {
            normal: {
              color: '#fff',
              borderColor: '#fff',
              borderWidth: 8
            }
          }
        }]
      }
      this.myData3.inst.setOption(option)
    },
    _initmy4() {
      var colors = ['#5793f3', '#d14a61', '#675bba']
      let option = {
        color: colors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['2015 降水量', '2016 降水量']
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '降水量  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                }
              }
            },
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '降水量  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                }
              }
            },
            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '2015 降水量',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: this.myData4.val1
          },
          {
            name: '2016 降水量',
            type: 'line',
            smooth: true,
            data: this.myData4.val2
          }
        ]
      }
      this.myData4.inst.setOption(option)
    }
  },
  components: {
    container
  }
}
</script>
<style  lang="stylus" scoped>
#kafka2
  background: url("img/bg1.png")
  .header-con
    position:relative;
    .title
     text-align:center;
     font-size:48px;
     color:#fff;
    .time
      height:50px;
      font-size:18px;
      color:rgb(93, 245, 244);
      position:absolute;
      right:50px;
      top:30px;
  .title-con
    display: -webkit-flex;
    display:flex;
    margin:20px 20px;
    font-size:36px;
    color:#fff;
    .title-info
      width:25%;
      text-align:center;
  .chart-con
    display:-webkit-flex;
    display:flex;
    margin:20px 150px;
    .wraper-chart
      width:50%;

</style>