<template>
  <container id="overview">
    <wraper class="title">
      <div>企业实时销售数据</div>
    </wraper>
    <wraper class="time">
      <timer></timer>
    </wraper>
    <!-- 背景图设置 -->
    <div>
      <wraper class="title-background"></wraper>
      <wraper class="borderTop"></wraper>
      <wraper class="rightborder"></wraper>
      <wraper class="bottomborder bottomborder-left"></wraper>
      <wraper class="bottomborder bottomborder-center"></wraper>
      <wraper class="bottomborder bottomborder-right"></wraper>
      <wraper class="sale-border"></wraper>
      <wraper class="sale-border" style="height: 60px; top: 255px"></wraper>
    </div>
    <!-- 右侧小模块 -->
    <div>
      <wraper class="inner-wraper" style="top: 128px; left: 1040px;">
        <div class="header">
          <div class="left">
            <div class="header-title">一季度销售进度</div>
            <div class="header-detail">QuarterlQuarterly sales progressQuarterly</div>
          </div>
          <div class="rank">01</div>
        </div>
        <wraper style="top: 37px; left: -10px">
          <canvas width="300" height="270" ref="saleProgress"></canvas>
        </wraper>
        <wraper class="footer footer-left">
          <div class="title-container">一季度销售额</div>
          <div class="counter-container">
            <span class="number">1421</span>
            <span class="suffix">万</span>
          </div>
        </wraper>
        <wraper class="footer footer-right">
          <div class="title-container">同比增长</div>
          <div class="counter-container">
            <span class="prefix">+</span>
            <span class="suffix">150%</span>
          </div>
        </wraper>
      </wraper>
      <wraper class="inner-wraper" style="top: 128px; left: 1320px;">
        <div class="header">
          <div class="left">
            <div class="header-title">城市销售额排名</div>
            <div class="header-detail">Sales ranking</div>
          </div>
          <div class="rank">02</div>
        </div>
        <wraper style="top: 37px; left: -10px">
          <canvas width="300" height="270" ref="saleRank"></canvas>
        </wraper>
        <wraper class="footer footer-left" style="width: 250px">
          <div class="title-container">一季度销售额</div>
          <div class="counter-container">
            <span class="number">北京&nbsp;</span>
            <span class="prefix">+</span>
            <span class="suffix">20.60%</span>
          </div>
        </wraper>
      </wraper>
      <wraper class="inner-wraper" style="top: 128px; left: 1600px;">
        <div class="header">
          <div class="left">
            <div class="header-title">城市销售额排名</div>
            <div class="header-detail">Sales ranking</div>
          </div>
          <div class="rank">03</div>
        </div>
        <wraper style="top: 37px; left: -10px">
          <canvas width="300" height="270" ref="salerRank"></canvas>
        </wraper>
        <wraper class="footer footer-left" style="width: 250px">
          <div class="title-container">销售额同比增速最快</div>
          <div class="counter-container">
            <span class="number">员工A&nbsp;</span>
            <span class="prefix">+</span>
            <span class="suffix">20.60%</span>
          </div>
        </wraper>
      </wraper>
      <wraper class="inner-wraper" style="top: 525px; left: 1040px;">
        <div class="header">
          <div class="left">
            <div class="header-title">城市销售额排名</div>
            <div class="header-detail">Sales ranking</div>
          </div>
          <div class="rank">02</div>
        </div>
        <wraper style="top: 37px; left: 10px">
          <canvas width="280" height="350" ref="categoryRank"></canvas>
        </wraper>
      </wraper>
      <wraper class="inner-wraper" style="top: 525px; left: 1320px;">
        <div class="header">
          <div class="left">
            <div class="header-title">品类销售额占比</div>
            <div class="header-detail">Types of sales</div>
          </div>
          <div class="rank">05</div>
        </div>
        <wraper style="top: 37px; left: 10px">
          <canvas width="280" height="250" ref="saleType"></canvas>
        </wraper>
        <wraper class="footer footer-left">
          <div class="title-container">XXX类商品</div>
          <div class="counter-container">
            <span class="number">10.3</span>
            <span class="suffix">亿</span>
          </div>
        </wraper>
        <wraper class="footer footer-right">
          <div class="title-container">同比增长</div>
          <div class="counter-container">
            <span class="prefix">+</span>
            <span class="suffix">9.8</span>
          </div>
        </wraper></wraper>
      <wraper class="inner-wraper" style="top: 525px; left: 1600px;">
        <div class="header">
          <div class="left">
            <div class="header-title">一季度销售进度</div>
            <div class="header-detail">QuarterlQuarterly sales progressQuarterly</div>
          </div>
          <div class="rank">06</div>
        </div>
        <wraper style="top: 37px; left: 10px">
          <canvas width="280" height="250" ref="custom"></canvas>
        </wraper>
        <wraper class="footer footer-left">
          <div class="title-container">一季度销售额</div>
          <div class="counter-container">
            <span class="number">1421</span>
            <span class="suffix">万</span>
          </div>
        </wraper>
        <wraper class="footer footer-right">
          <div class="title-container">同比增长</div>
          <div class="counter-container">
            <span class="prefix">+</span>
            <span class="suffix">150%</span>
          </div>
        </wraper></wraper>
    </div>
    <!-- 左侧排行 中间地图展示 -->
    <div>
      <!-- 左侧排名 -->
      <wraper class="inner-wraper left-warper">
        <wraper class="sale-title">
          <div class="header-title">销售额分省排名</div>
          <div class="header-detail">Sales ranking points province</div>
        </wraper>
        <wraper class="sale-content">
          <ul class="sale-ul">
            <li  v-for="(item, index) in city">
              <div class="rotate">
                <span class="table-index">NO.{{index + 1}}</span>
                <div class="table-content">{{item}}</div>
              </div>
              <div class="table-bar">
              </div>
            </li>
          </ul>
        </wraper>
      </wraper>
      <!-- 中间地图 -->
      <wraper class="inner-wraper center-warper">
        <wraper class="map-title">
          <div class="title-container">一季度销售额</div>
          <div class="counter-container">
            <span class="number">1421</span>
            <span class="suffix">万</span>
          </div>
        </wraper>
        <wraper class="map-increase">
          <div class="title-container">同比增长</div>
          <div class="counter-container">
            <span class="prefix">+</span>
            <span class="number">150%</span>
          </div>
        </wraper>
        <wraper class="map">
          <canvas ref="map" width="740" height="730"></canvas>
        </wraper>
      </wraper>
    </div>
    <!-- 底部显示 -->
    <div>
      <wraper class="saleSpeed">
        <canvas width="540" height="127"></canvas>
      </wraper>
      <wraper class="footer-table">
        <table>
          <tbody>
            <tr>
              <td>企业经营指标1</td>
              <td class="table-num">12425万元</td>
            </tr>
            <tr>
              <td>企业经营指标1</td>
              <td class="table-num">12425万元</td>
            </tr>
          </tbody>
        </table>
      </wraper>
      <wraper class="footer-table" style="left: 1328px">
        <table>
          <tbody>
            <tr>
              <td>企业经营指标1</td>
              <td class="table-num">12425万元</td>
            </tr>
            <tr>
              <td>企业经营指标1</td>
              <td class="table-num">12425万元</td>
            </tr>
          </tbody>
        </table>
      </wraper>
      <wraper class="footer-table" style="left: 1608px">
        <table>
          <tbody>
            <tr>
              <td>企业经营指标1</td>
              <td class="table-num">12425万元</td>
            </tr>
            <tr>
              <td>企业经营指标1</td>
              <td class="table-num">12425万元</td>
            </tr>
          </tbody>
        </table>
      </wraper>
      <wraper class="footer-divsion"></wraper>
      <wraper class="footer-divsion" style="left: 1595px"></wraper>
    </div>
  </container>
</template>
<script type="text/ecmascript-6">
  // import { Loading } from 'element-ui'
  import echarts from 'echarts'
  import container from 'base/container/container'
  import wraper from 'base/wraper/wraper'
  import timer from 'base/timer/timer'
  import {geoCoordMap} from 'common/js/geoCoordMap.js'

  export default {
    data() {
      return {
        city: ['西安', '北京', '成都', '兰州', '湖南', '湖北'],
        map: {
          data: [],
          inst: Function
        },
        saleProgress: {
          data: [],
          inst: Function
        },
        saleRank: {
          data: [100, 200, 300, 400, 500, 600, 100],
          inst: Function
        },
        salerRank: {
          data: [100, 200, 300, 400, 500, 600, 100],
          inst: Function
        },
        categoryRank: {
          data: [100, 200, 300, 400, 500, 600, 100],
          inst: Function
        },
        saleType: {
          data: [],
          inst: Function
        },
        custom: {
          data: [],
          inst: Function
        }
      }
    },
    mounted() {
      this.saleProgress.inst = echarts.init(this.$refs.saleProgress)
      this.saleRank.inst = echarts.init(this.$refs.saleRank)
      this.salerRank.inst = echarts.init(this.$refs.salerRank)
      console.log(typeof this.$refs.salerRank === 'object')
      this.categoryRank.inst = echarts.init(this.$refs.categoryRank)
      this.saleType.inst = echarts.init(this.$refs.saleType)
      this.custom.inst = echarts.init(this.$refs.custom)
      this._initMap()
      this._initSaleProgress()
      this._initSaleRank()
      this._initSalerRank()
      this._initCategoryRank()
      this._initSaleType()
      this._initCustom()
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
      _initSaleProgress() {
        var option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [{
            name: '事件处置',
            type: 'pie',
            radius: ['40%', '60%'],
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 3,
              name: '待办',
              label: {
                normal: {
                  formatter: '{d}%',
                  textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(68, 211, 226)'
                },
                emphasis: {
                  color: '#007be8'
                }
              }
            }, {
              value: 10,
              label: {
                normal: {
                  textStyle: {
                    color: 'rgb(68, 211, 226)',
                    fontSize: 12
                  }
                }
              },
              tooltip: {
                show: false
              },
              itemStyle: {
                normal: {
                  color: '#aaa'
                },
                emphasis: {
                  color: '#aaa'
                }
              },
              hoverAnimation: false
            }]
          }]
        }
        this.saleProgress.inst.setOption(option)
      },
      _initSaleRank() {
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
            show: false,
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
                color: 'rgb(12, 47, 63)'
              }
            },
            barWidth: 10,
            data: data.map((val) => {
              return 1000
            })
          }, {
            type: 'bar',
            data: this.saleRank.data,
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                color: '#2ABB9B',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
              }
            }
          }]
        }

        this.saleRank.inst.setOption(option)
      },
      _initSalerRank() {
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
            show: false,
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
                color: 'rgb(12, 47, 63)'
              }
            },
            barWidth: 10,
            data: data.map((val) => {
              return 1000
            })
          }, {
            type: 'bar',
            data: this.salerRank.data,
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                color: '#2ABB9B',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
              }
            }
          }]
        }

        this.salerRank.inst.setOption(option)
      },
      _initCategoryRank() {
        var xAxisData = ['2月', '3月', '4月', '5月', '6月', '7月', '8月']
        var data = []
        for (var i = 9; i < 16; i++) {
          data.push(Math.round(Math.random() * 500) + 200)
        }
        let option = {
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            data: xAxisData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
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
            type: 'bar',
            data: this.salerRank.data,
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'right'
              }
            },
            itemStyle: {
              normal: {
                color: '#2ABB9B',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
              }
            }
          }]
        }

        this.categoryRank.inst.setOption(option)
      },
      _initSaleType() {
        let option = {
          tooltip: {
            trigger: 'item',
            textStyle: {
              color: '#fff'
            },
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            textStyle: {
              color: '#fff'
            },
            x: 'left',
            bottom: '20%',
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
        this.saleType.inst.setOption(option)
      },
      _initCustom() {
        let option = {
          tooltip: {
            trigger: 'item',
            textStyle: {
              color: '#fff'
            },
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            textStyle: {
              color: '#fff'
            },
            x: 'left',
            bottom: '20%',
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
        this.custom.inst.setOption(option)
      }
    },
    components: {
      container,
      wraper,
      timer
    }
  }
</script>
<style scoped lang="stylus">
  #overview
    background: url("img/background.png") 0% 0%
    .saleSpeed
      left: 240px;
      top: 910px;
      width: 800px;
      height: 160px;
      z-index: 77;
    .map
      left: 0px;
      top: 0px;
      width: 780px;
      height: 760px;
      z-index: 10;
    .sale-title
      left: 15px;
      top: 20px;
      z-index: 78;
    .sale-content
      top: 80px
      left: 15px
      font-size: 10px
      .sale-ul
        width: 170px;
        height: 670px;
        transform: translate3d(0px, 0px, 0px);
        font-family: "Microsoft Yahei"; 
        li
          position: relative;
          perspective: 250px;
          height: 38px;
          margin-bottom: 12px;
          perspective-origin: 50% 100%;
          .rotate
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            transform-style: preserve-3d;
            transform-origin: 50% 50% 0px;
            transform: rotateX(0deg);
            width: 100%;
            transition: transform 500ms cubic-bezier(0.15, 0.52, 0.5, 0.9);
            height: 24px;
            .table-index
              color: #1397ff;
              font-size: 10px;
              padding-right: 14px;
              width: auto;
              flex: none;
            .table-content
              position: relative;
              display: flex;
              vertical-align: bottom;
              color: #ffffff;
              font-size: 12px;
              overflow: hidden;
              white-space: nowrap;
              flex: auto;
          .table-bar
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            background: rgb(19, 112, 251);
            overflow: hidden;
            width: 100%;
          .light
            position: absolute;
            top: 0px;
            width: 70px;
            height: 2px;
            background: radial-gradient(rgb(40, 248, 255) 5%, rgba(0, 0, 0, 0) 80%);
            transform: translateX(190px);
            transition: transform 600ms ease-in-out;
    .map-title
      left: 58px
      top: 18px
      width: 280px
      height: 80px
      z-index: 40
      .title-container
        font-size: 20px !important
      .counter-container .number,.suffix
        font-size: 36px !important
    .footer-divsion
      top: 955px;
      left: 1315px;
      width: 2px;
      height: 80px;
      border: none;
      background: rgba(0, 123, 255, 0.4);
      border-radius: 0px;
    .map-increase
      left: 58px;
      top: 120px;
      width: 200px;
      height: 80px;
      z-index: 41;
      .counter-container .prefix,.number
        font-size: 36px !important;
    .footer-table
      left: 1050px;
      top: 950px;
      width: 255px;
      height: 80px;
      z-index: 71;
      table
        border-collapse: collapse;
        border-spacing: 0;
        height: 100%;
        border: 0px solid rgb(87, 210, 254);
        font-family: "Microsoft Yahei";
        td
          padding: 9px 12px;
          width: 50%;
          color: rgb(19, 151, 255);
          font-size: 14px;
          font-weight: normal;
          background-color: rgba(10, 39, 50, 0);
          text-align: left;
          border-right: 0px solid rgba(87, 210, 254, 0);
          border-bottom: 0px solid rgba(87, 210, 254, 0);
        .table-num
          padding: 9px 12px;
          color: rgb(19, 151, 255);
          font-size: 18px;
          font-weight: normal;
          background-color: rgba(10, 39, 50, 0);
          text-align: right;
          border-bottom: 0px solid rgba(87, 210, 254, 0);
    .number
      background-color: rgba(51,51,51,0);
      display: inline-block;
      letter-spacing: 0.02em;
      text-indent: 0.02em;
      height: auto;
      line-height: normal;
      font-size: 26px;
      letter-spacing: 0.02em;
      margin-right: 0em;
    .prefix
      font-size: 30px;
      color: #ff4e00;
      vertical-align: super
    .suffix
      font-size: 24px;
      color: #1397ff;
      vertical-align: super;
    .title
      left: 780px;
      top: 0px;
      width: 400px;
      height: 85px;
      z-index: 65;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      font-weight: lighter;
      font-family: "Microsoft Yahei";
      font-size: 36px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    .title-background
      left: 620px
      top: 60px
      width: 710px
      height: 70px
      z-index: 80
      background-image: url("img/title.gif");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center center;
    .time
      top: 30px
      right: 10px
      color: rgb(46, 147, 255)
    .borderTop
      left: 40px;
      top: 98px;
      width: 1850px;
      height: 16px;
      z-index: 8;
      background: url("img/topborder.png") 0% 0%
    .rightborder
      left: 1880px;
      top: 127px;
      width: 17px;
      height: 764px;
      z-index: 7;
      background: url("img/rightborder.png") 0% 0%
    .bottomborder
      height: 5px;
      top: 905px;
      z-index: 68;
      border: none;    
      background: rgba(0, 123, 255, 0.4); 
    .bottomborder-left
      left: 40px;
      width: 200px;
      border: none;
    .bottomborder-center
      left: 250px;
      width: 780px;
    .bottomborder-right
      left: 1040px;
      width: 830px;
    .inner-wraper
      width: 270px;
      height: 366px;
      z-index: 1;
      border-radius: 0px;
      border: none;
      background-color: rgba(0, 0, 0, 0);
      background-image: url("img/innerback.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .header
        display: flex
        color: rgb(46, 219, 255);
        padding-top: 25px
        padding-left: 15px
        .left
          flex: 3

        .rank
          flex: 2
          display: flex;
          margin-top: -8px
          justify-content: flex-start;
          color: rgb(46, 219, 255);
          font-weight: normal;
          font-family: sans-serif;
          font-size: 46px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
      .footer
        top: 272px
        width: 123px
        height: 80px
        background: rgba(0, 123, 255, 0.1)
        padding: 10px 10px
        border-radius: 0px
        z-index: 47
      .footer-left
        left: 10px
      .footer-right
        right: 7px
    .header-title
      width: 180px
      color: rgb(255, 255, 255)
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
      font-size: 18px
    .header-detail
      height: 30px;
      width: 180px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: rgb(46, 219, 255);
      font-weight: lighter;
      font-family: "Microsoft Yahei";
      font-size: 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    .title-container
      display: block;
      align-items: center;
      color: rgb(19, 151, 255);
      font-weight: lighter;
      font-family: "Microsoft Yahei";
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      line-height: normal;
      margin: 0px 0px 6px;
    .counter-container
      display: flex;
      align-items: center;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      justify-content: flex-start;
      line-height: normal;
      font-family: "Microsoft Yahei";
      background-color: rgba(0, 0, 0, 0);    
    .left-warper
      left: 40px;
      top: 128px;
      width: 200px;
      height: 760px;
      z-index: 0;
      border: none;
      background-color: rgba(0, 0, 0, 0);
      background-image: url("img/innerback2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;    
    .center-warper
      left: 250px;
      top: 130px;
      width: 780px;
      height: 760px;
      z-index: 0;
      border: none;
      background-color: rgba(0, 0, 0, 0);
      background-image: url("img/innerback2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    .sale-border
      left: 275px;
      top: 152px;
      width: 4px;
      height: 70px;
      border: none;
      background: rgb(0, 94, 255);
      border-radius: 0px;
</style>