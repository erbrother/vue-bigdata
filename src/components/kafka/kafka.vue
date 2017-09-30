<template>
  <container id="kafka">
    <!-- 四个边框组 -->
    <div class="border">
      <div class="wraper" style="left: -152px;top: -16px;width: 508px;height: 264px;z-index: 0;">
        <div class="wraper-item wraper-image-topL">
        </div>
      </div>    
      <div class="wraper" style="top: 0;right: 0;width: 258px;height: 261px;z-index: 0;">
        <div class="wraper-item wraper-image-topR" style="width: 258px;height: 261px;">
        </div>
      </div>    
      <div class="wraper" style="bottom: 0;left: -188px;">
        <div class="wraper-item wraper-image-bottomL" style="width: 620px;height: 280px;">
        </div>
      </div>    
      <div class="wraper" style="bottom: 0;right: 0">
        <div class="wraper-item wraper-image-bottomR" style="width: 259px;height: 260px;">
        </div>
      </div>
    </div>
    <!-- 标题名称 -->
    <div class="title wraper">高可用应急监控</div>
    <!-- 时间变化 -->
    <div class="wraper" style="left: 92px;top: 128px;z-index: 3;">
      <div class="time">
        <i class="el-icon-time" style="width: 18px;height: 18px;margin-right: 5px;"></i>
        <span>{{time}}</span>
      </div>
    </div>
    <!-- 地图展示 -->
    <div class="wraper" style="left: -216px;top: -232px;z-index: 2;">
      <canvas ref="map" width="1980" height="1200" class="mapCanvas"></canvas>
    </div>
    <!-- 小标题区 -->
    <div class="wraper" style="left: 1440px;top: 68px;">
      <div class="wraper-title">CPU指数</div>
    </div>
    <div class="wraper" style="left: 1440px;top: 404px;">
      <div class="wraper-title">内存指数</div>
    </div>
    <div class="wraper" style="left: 1440px;top: 750px;">
      <div class="wraper-title">内存消耗</div>
    </div>
    <div class="wraper" style="left: 96px;top: 750px;">
    <div class="wraper-title">CPU占比</div>
    </div>
    <div class="wraper" style="left: 400px;top: 750px;">
      <div class="wraper-title">内存各状态</div>
    </div>
    <div class="wraper" style="left: 696px;top: 750px;">
      <div class="wraper-title">内存使用情况</div>
    </div>   
    <!-- cpu展示 -->
    <div class="wraper" style="left: 1416px;top: 69px;z-index: 20">
      <div class="wraper-chart">
        <canvas ref="CPUcanvas" width="480" height="340" style="background: transparent"></canvas>
      </div>
    </div>
    <!-- 内存指数 -->
    <div class="wraper" style="left: 1416px;top: 399px;z-index: 20">
      <div class="wraper-chart">
        <canvas ref="Memorcanvas" width="480" height="340" style="background: transparent"></canvas>
      </div>
    </div>
    <!-- 内存百分比 -->
    <div class="wraper" style="left: 1416px;top: 800px;z-index: 20">
      <div class="wraper-chart">
        <canvas ref="MemorPercentcanvas" width="480" height="240" style="background: transparent"></canvas>
      </div>
    </div>
    <!-- 雷达图 -->
    <div class="wraper" style="left: 0px;top: 800px;z-index: 20">
      <div class="warper-chart">
        <canvas ref="radar" width="460" height="248"></canvas>
      </div>
    </div>
    <!-- 饼图  -->
    <div class="wraper" style="left: 260px;top: 800px;z-index: 20">
      <div class="warper-chart">
        <canvas ref="pie" width="460" height="248"></canvas>
      </div>
    </div>
    <!-- 柱状折线图 -->
    <div class="wraper" style="left: 668px;top: 780px;z-index: 20">
      <div class="warper-chart">
        <canvas ref="barLine" width="664" height="320"></canvas>
      </div>
    </div>    
  </container>
</template>
<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import container from 'base/container/container'
  import {getTime, shuffle} from 'common/js/util.js'
  // import china from 'echarts/map/js/china.js'
  import {geoCoordMap} from 'common/js/geoCoordMap.js'
  
  export default {
    data() {
      return {
        chatMessage: [],
        time: getTime(),
        cpuData: {
          inst: Function,
          val: [500, 100, 300, 800, 280]
        },
        memorData: {
          isnt: Function,
          val: [100, 200, 300, 400, 500, 600, 100]
        },
        barLineData: {
          inst: Function,
          val: [300, 500, 800, 700, 200, 350, 450]
        }
      }
    },
    mounted() {
      this.cpuData.inst = echarts.init(this.$refs.CPUcanvas)
      this.memorData.inst = echarts.init(this.$refs.Memorcanvas)
      this.barLineData.inst = echarts.init(this.$refs.barLine)
      this._initMap()
      this._initCpu()
      this._initMemor()
      this._initMemorPercent()
      this._initRadar()
      this._initPie()
      this._initBarLine()

      setInterval(() => {
        this.time = getTime()
        this.cpuData.val = shuffle(this.cpuData.val)
        this.memorData.val = shuffle(this.memorData.val)
        this.barLineData.val = shuffle(this.barLineData.val)
        this._initCpu()
        this._initMemor()
        this._initBarLine()
      }, 2000)
    },
    // sockets: {
    //   connect: function(socket) {
    //     this.$notify.success({
    //       title: '成功',
    //       message: '连接成功',
    //       offset: 100
    //     });
    //   },
    //   customEmit: function(val) {
    //     console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    //   },
    //   'message': function(msg) {
    //     console.log(`message: ${msg.value}`)
    //     // this.chatMessage.push(msg.value)
    //   },
    //   'chat message': function(msg) {
    //     console.log(msg)
    //     // this.chatMessage.push(msg)
    //   }
    // },
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

        // var color = ['#a6c84c', '#ffa022', '#46bee9']
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
      },
      _initCpu() {
        var xAxisData = ['内蒙古', '浙江', '北京', '郑州', '成都']
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
            data: this.cpuData.val,
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
        this.cpuData.inst.setOption(option)
      },
      _initMemor() {
        let option = {
          color: ['rgb(0, 255, 145)'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: 'rgba(255, 255, 255, 0.6)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            }
          }],
          series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: this.memorData.val
          }]
        }
        this.memorData.inst.setOption(option)
      },
      _initMemorPercent() {
        const map = echarts.init(this.$refs.MemorPercentcanvas)
        let option = {
          tooltip: {
            trigger: 'item',
            textStyle: {
              color: '#fff'
            },
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'horizontal',
            textStyle: {
              color: '#fff'
            },
            x: 'left',
            data: ['java', 'nodejs', 'php', 'C++', 'javascript']
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
              value: 335,
              name: 'nodejs'
            }, {
              value: 310,
              name: 'php'
            }, {
              value: 234,
              name: 'C++'
            }, {
              value: 135,
              name: 'javascript'
            }, {
              value: 1548,
              name: 'java'
            }]
          }]
        }
        map.setOption(option)
      },
      _initRadar() {
        const radar = echarts.init(this.$refs.radar)

        let option = {
          color: ['rgb(36, 254, 180)', 'rgb(251, 243, 32)'],
          tooltip: {},
          legend: {
            data: ['预算分配', '实际开销'],
            left: 20,
            textStyle: {
              color: '#fff'
            }
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff'
              }
            },
            indicator: [
            {name: '销售', max: 6500},
            {name: '管理', max: 16000},
            {name: '信息技术', max: 30000},
            {name: '客服', max: 38000},
            {name: '研发', max: 52000},
            {name: '市场', max: 25000}
            ]
          },
          series: [{
            name: '预算 vs 开销',
            type: 'radar',
            data: [{
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配'
            }, {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
            }]
          }]
        }

        radar.setOption(option)
      },
      _initPie() {
        const charts = echarts.init(this.$refs.pie)
        charts.setOption({
          legend: {
            data: ['优秀', '良好', '低危', '高危'],
            textStyle: {
              color: '#fff'
            }
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [{
            name: '健康体检',
            type: 'pie',
            radius: '55%',
            data: [
              {value: 274, name: '优秀'},
              {value: 310, name: '良好'},
              {value: 335, name: '低危'},
              {value: 400, name: '高危'}
            ],
            roseType: 'angle',
            label: {
              normal: {
                textStyle: {
                  color: 'rgb(255, 255, 255)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgb(255, 255, 255)'
                }
              }
            }
          }]
        })
      },
      _initBarLine() {
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
            data: this.barLineData.val,
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
            data: this.barLineData.val,
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
        this.barLineData.inst.setOption(option)
      }
      // sendMessage() {
      //   if (this.$refs.message.value === "") return false
      //   this.$socket.emit('chat message', this.$refs.message.value)
      //   this.$refs.message.value = ""
      // }
    },
    components: {
      container
    }
  }
</script>
<style lang="stylus" scoped>
  #kafka
    background: url("img/background.png") 0% 0%
    #messages
      height: 800px
      overflow: auto
      overflow-x: hidden
      scrollbar-face-color: #b46868
      list-style-type: none
      margin: 0
      padding: 0
      li
        padding: 5px 10px
      li:nth-child(odd)
        background: #eee
    form
      background: #000
      padding: 3px
      bottom: 0
      width: 100%
      input
        border: 0
        padding: 10px
        width: 87%
        margin-right: .5%
      button
        width: 9%
        background: rgb(130, 224, 255)
        border: none
        padding: 10px
    .wraper
      position: absolute !important
      margin: 0 !important
      .wraper-title
        width: 180px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(25, 72, 125);
        color: rgb(255, 255, 255);
        font-weight: normal;
        font-family: "Microsoft Yahei";
        font-size: 22px;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      .wraper-item
        background-repeat: no-repeat;
        background-size: 100% 100%;
      .wraper-chart
        width: 480px; 
        height: 340px; 
        padding: 0px 0px;
      .wraper-image-topL
        width: 508px
        height: 264px
        background-image: url("img/topLeft.gif")
      .wraper-image-topR
        background-image: url("img/topRight.gif")
      .wraper-image-bottomR
        background-image: url("img/bottomRight.gif")
      .wraper-image-bottomL
        background-image: url("img/bottomLeft.gif")
    .title
      width: 380px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(1, 1, 1, 0);
      color: rgb(255, 255, 255);
      font-weight: normal;
      font-family: "Microsoft Yahei";
      font-size: 45px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      left: 80px;
      top: 52px;
      z-index: 3
    .time
      height: 50px;
      font-size: 18px;
      color: rgb(93, 245, 244);
      padding: 0 20px;
      font-weight: normal;
      font-family: "Microsoft Yahei";
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
    .mapCanvas    
      width: 1980px
      height: 1200px
      position: absolute
      top: 0px
      left: 0px
      opacity: 1
      background: transparent
      pointer-events: auto
    .list-enter-active, .list-leave-active
      transition: all 1s
    .list-enter, .list-leave-to
      opacity: 0
      transform: translateX(30px)
</style>