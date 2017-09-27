<template>
  <container class="ct-back">
    <!-- 主标题 -->
    <div class="wraper" style="top: 8px; left: 592px;">
      <div class="title">大数据计算服务运维视屏——铁路监控</div>
    </div>
    <!-- 边框 -->
    <div class="border">
      <div class="wraper" style="top: 72px; left: 16px;">
        <div class="wraper-item wraper-image-topL" style="width: 751px; height: 441px;"></div>
      </div>
      <div class="wraper" style="top: 82px; left: 26px;">
        <div class="wraper-item wraper-image-topL" style="width: 751px; height: 441px;"></div>
      </div>
      <div class="wraper" style="left: 1072px; top: 568px">
        <div class="wraper-item wraper-image-bottomR" style="width:832px; height: 498px;"></div>
      </div>
    </div>
    <!-- 小标题区域 -->
    <div class="small-title">
      <div class="wraper" style="top: 152px; left: 72px;">
        <div class="wraper-item wraper-item-title" style="width: 464px;">MaxCompute任务总数
        </div>
      </div>
      <div class="wraper" style="top: 472px; left: 72px;">
        <div class="wraper-item wraper-item-title" style="width: 255px;">任务分布类型
        </div>
      </div>
      <div class="wraper" style="top: 472px; left: 352px;">
        <div class="wraper-item wraper-item-title" style="width: 191px;">成功任务比例
        </div>
      </div>
      <div class="wraper" style="top: 736px; left: 72px;">
        <div class="wraper-item wraper-item-title" style="width: 464px;">数据表总数
        </div>
      </div>
      <div class="wraper" style="top: 152px; left: 592px;">
        <div class="wraper-item wraper-item-title" style="width: 375px;">运行耗时最长任务
        </div>
      </div>
      <div class="wraper" style="top: 736px; left: 584px;">
        <div class="wraper-item wraper-item-title" style="width: 375px;">表平均容量
        </div>
      </div>
      <div class="wraper" style="top: 888px; left: 584px;">
        <div class="wraper-item wraper-item-title" style="width: 375px;">表平均容量
        </div>
      </div>
      <div class="wraper" style="top: 152px; left: 1032px;">
        <div class="wraper-item wraper-item-title" style="width: 350px;">资源消耗最大任务
        </div>
      </div>
      <div class="wraper" style="top: 736px; left: 1032px;">
        <div class="wraper-item wraper-item-title" style="width: 360px;">表存储容量
        </div>
      </div>
      <div class="wraper" style="top: 152px; left: 1448px;">
        <div class="wraper-item wraper-item-title" style="width: 409px;">计算资源消耗
        </div>
      </div>
      <div class="wraper" style="top: 408px; left: 1448px;">
        <div class="wraper-item wraper-item-title" style="width: 409px;">磁盘总空间/利用率
        </div>
      </div>
      <div class="wraper" style="top: 600px; left: 1448px;">
        <div class="wraper-item wraper-item-title" style="width: 409px;">在线结点数/结点率
        </div>
      </div>
      <div class="wraper" style="top: 856px; left: 1448px;">
        <div class="wraper-item wraper-item-title" style="width: 409px;">内存总数/利用率
        </div>
      </div>
    </div>
    <!-- 显示图形区域 -->
    <div class="bigdata-content">
      <!-- 列表组 -->
      <div class="wraper" style="top: 200px;left: 608px; width: 360px; height: 504px">
        <div class="wraper-list">
          <div class="header">
            <div class="index-list" style="display: inline-block;vertical-align: middle;width: 6%;height: 48px;"></div>
            <div style="width: 20%">地区</div>
            <div style="width: 20%">流量(pv)</div>
            <div style="width: 53%">用户行为特征</div>
          </div>
          <div class="wraper-list-item">
            <div class="index">
              <div class="index-bg">1</div>
            </div>
            <div class="cell-content">123</div>
            <div class="cell-content">123</div>
            <div class="cell-content" style="width: 53%">123</div>
          </div>
        </div>
      </div>
      <!-- 显示数字 -->
      <div class="wraper" style="left: 72px; top: 200px">
        <div class="counter-container" style="">234,425</div>
      </div>
      <div class="wraper" style="left: 616px; top: 784px">
        <div class="counter-container" style="">234,425</div>
      </div>
      <div class="wraper" style="left: 616px; top: 952px">
        <div class="counter-container" style="">234,425</div>
      </div>
      <div class="wraper" style="left: 72px; top: 784px">
        <div class="counter-container" style="">234,425</div>
      </div>
      <div class="wraper" style="left: 352px; top: 208px; width: 104px; height: 72px; z-index: 47;">
        <div class="title-container">同比</div>
        <div class="counter-container" style="font-size: 18px;">25%</div>
      </div>
      <div class="wraper" style="left: 440px; top: 208px; width: 104px; height: 72px; z-index: 47;">
        <div class="title-container">环比</div>
        <div class="counter-container" style="font-size: 18px;">25%</div>
      </div>
      <div class="wraper" style="left: 352px; top: 784px; width: 104px; height: 72px; z-index: 47;">
        <div class="title-container">同比</div>
        <div class="counter-container" style="font-size: 18px;">25%</div>
      </div>      
      <div class="wraper" style="left: 440px; top: 784px; width: 104px; height: 72px; z-index: 47;">
        <div class="title-container">环比</div>
        <div class="counter-container" style="font-size: 18px;">25%</div>
      </div>
      <div class="wraper" style="left: 1432px; top: 460px">
        <div class="titles" style="font-size: 30px;">
          <div class="counter">88TB/&nbsp;79%</div>
        </div>
      </div>
      <div class="wraper" style="left: 1432px; top: 910px">
        <div class="titles" style="font-size: 30px;">
          <div class="counter">88TB/&nbsp;79%</div>
        </div>
      </div>            
    </div>
    <!-- echarts显示 -->
    <div class="echart-view">
      <!-- 计算资源 -->
      <div class="wraper" style="left: 1424px; top: 150px;width: 456px; height: 280px;">
        <canvas width="456" height="280" ref="Eresource"></canvas>
      </div>
      <!-- 在线节点 -->
      <div class="wraper" style="left: 1424px; top: 600px;width: 456px; height: 280px;">
        <canvas width="456" height="280" ref="Enode"></canvas>
      </div>
      <!-- 磁盘空间 -->
      <div class="wraper" style="left: 1432px; top: 448px; width: 464px; height: 100px;">
        <canvas width="464" height="180" ref="Edisk"></canvas>
      </div>
      <!-- 内存总数 -->
      <div class="wraper" style="left: 1432px; top: 900px; width: 464px; height: 100px;">
        <canvas width="464" height="180" ref="Emermor"></canvas>
      </div>
      <!-- 任务总数 -->
      <div class="wraper" style="top: 248px; left: 64px; width: 464px; height: 250px;">
        <canvas width="464" height="250" ref="Ecompute"></canvas>
      </div>
      <!-- 任务类型分布 -->
      <div class="wraper" style="top: 502px; left: -70px; width: 500px; height: 250px;z-index: 23">
        <canvas width="500" height="250" ref="Epertask"></canvas>
      </div>
      <!-- 成功任务 -->
      <div class="wraper" style="top: 502px; left: 190px; width: 500px; height: 250px;">
        <canvas width="500" height="250" ref="Etask"></canvas>
      </div>      
      <!-- 数据表总数 -->
      <div class="wraper" style="top: 808px; left: 64px; width: 464px; height: 250px;">
        <canvas width="464" height="250" ref="Edata"></canvas>
      </div>
      <!-- 表存储量 -->
      <div class="wraper" style="top: 720px; left: 1032px; width: 400px; height: 350px;">
        <canvas width="400" height="350" ref="EdataStorage"></canvas>
      </div>      
    </div>
  </container>
</template>
<script>
  import echarts from 'echarts'
  import container from 'base/container/container'

  export default {
    data() {
      return {
        Eresource: {
          inst: Function,
          data: []
        },
        Enode: {
          inst: Function,
          data: []
        },
        Edisk: {
          inst: Function,
          data: []
        },
        Emermor: {
          inst: Function,
          data: []
        },
        Ecompute: {
          inst: Function,
          data: []
        },
        Edata: {
          inst: Function,
          data: []
        },
        Epertask: {
          inst: Function,
          data: []
        },
        Etask: {
          inst: Function,
          data: []
        },
        EdataStorage: {
          inst: Function,
          data: []
        }
      }
    },
    mounted() {
      // 初始化echarts
      this.Eresource.inst = echarts.init(this.$refs.Eresource)
      this.Enode.inst = echarts.init(this.$refs.Enode)
      this.Edisk.inst = echarts.init(this.$refs.Edisk)
      this.Emermor.inst = echarts.init(this.$refs.Emermor)
      this.Ecompute.inst = echarts.init(this.$refs.Ecompute)
      this.Edata.inst = echarts.init(this.$refs.Edata)
      this.Epertask.inst = echarts.init(this.$refs.Epertask)
      this.Etask.inst = echarts.init(this.$refs.Etask)
      this.EdataStorage.inst = echarts.init(this.$refs.EdataStorage)
      this.initEresource()
      this.initEnode()
      this.initEdisk()
      this.initEmermor()
      this.initEcompute()
      this.initEdata()
      this.initEpertask()
      this.initEtask()
      this.initEdataStorage()
    },
    methods: {
      initEresource() {
        var option = {
          color: ['rgba(108, 245, 242, 0.6)', 'rgba(63, 164, 244, 0.6)'],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            data: ['周一', '周二', '周三', '周四', '周五']
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(aaa , aaa , aaa , 0.5)',
                type: 'dotted'
              }
            }
          }],
          series: [{
            name: '邮件营销',
            type: 'line',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90]
          }, {
            name: '联盟广告',
            type: 'line',
            areaStyle: {normal: {}},
            data: [220, 100, 191, 234, 290]
          }]
        }
        this.Eresource.inst.setOption(option)
      },
      initEnode() {
        var option = {
          color: ['rgba(108, 245, 242, 0.6)', 'rgba(63, 164, 244, 0.6)'],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            data: ['周一', '周二', '周三', '周四', '周五']
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(aaa , aaa , aaa , 0.5)',
                type: 'dotted'
              }
            }
          }],
          series: [{
            name: '邮件营销',
            type: 'line',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90]
          }, {
            name: '联盟广告',
            type: 'line',
            areaStyle: {normal: {}},
            data: [220, 100, 191, 234, 290]
          }]
        }
        this.Enode.inst.setOption(option)
      },
      initEdisk() {
        var option = {
          color: ['rgba(53, 164, 200, 0.6)', 'rgba(26, 121, 170, 0.6)'],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            data: ['周一', '周二', '周三', '周四', '周五']
          }],
          yAxis: [{
            type: 'value',
            splitNumber: 4,
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(aaa , aaa , aaa , 0.5)',
                type: 'dotted'
              }
            }
          }],
          series: [{
            name: '邮件营销',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90]
          }, {
            name: '联盟广告',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [220, 100, 191, 234, 290]
          }]
        }
        this.Edisk.inst.setOption(option)
      },
      initEmermor() {
        var option = {
          color: ['rgba(53, 164, 200, 0.6)', 'rgba(26, 121, 170, 0.6)'],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            data: ['周一', '周二', '周三', '周四', '周五']
          }],
          yAxis: [{
            type: 'value',
            splitNumber: 4,
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(aaa , aaa , aaa , 0.5)',
                type: 'dotted'
              }
            }
          }],
          series: [{
            name: '邮件营销',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90]
          }, {
            name: '联盟广告',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [220, 100, 191, 234, 290]
          }]
        }
        this.Emermor.inst.setOption(option)
      },
      initEcompute() {
        var option = {
          color: ['rgba(32, 108, 187, 0.67)', 'rgba(101, 245, 243, 0.55)'],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            data: []
          }],
          yAxis: [{
            type: 'value',
            splitNumber: 4,
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(aaa , aaa , aaa , 0.5)',
                type: 'dotted'
              }
            }
          }],
          series: [{
            name: '邮件营销',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90]
          }, {
            name: '联盟广告',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [220, 100, 191, 234, 290]
          }]
        }
        this.Ecompute.inst.setOption(option)
      },
      initEdata() {
        var option = {
          color: ['rgba(32, 108, 187, 0.67)', 'rgba(101, 245, 243, 0.55)'],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            data: []
          }],
          yAxis: [{
            type: 'value',
            splitNumber: 4,
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgb(255, 255, 255)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(aaa , aaa , aaa , 0.5)',
                type: 'dotted'
              }
            }
          }],
          series: [{
            name: '邮件营销',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90]
          }, {
            name: '联盟广告',
            type: 'line',
            symbolSize: 0,
            areaStyle: {normal: {}},
            data: [220, 100, 191, 234, 290]
          }]
        }
        this.Edata.inst.setOption(option)
      },
      initEpertask() {
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
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
                formatter: '{a}: {d}',
                textStyle: {
                  fontSize: '18',
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
              value: 335, name: '直接访问'
            }, {
              value: 310, name: '邮件营销'
            }, {
              value: 234, name: '联盟广告'
            }, {
              value: 135, name: '视频广告'
            }, {
              value: 1548, name: '搜索引擎'
            }]
          }
          ]
        }

        this.Epertask.inst.setOption(option)
      },
      initEtask() {
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
        this.Etask.inst.setOption(option)
      },
      initEdataStorage() {
        let option = {
          color: 'rgb(101, 245, 243)',
          grid: {
            x: '12%'
          },
          xAxis: [{
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#ffffff',
                fontSize: 8
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#57617f',
                width: 1,
                type: 'solid'
              }
            }
          }],
          yAxis: [{
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#ffffff',
                fontSize: 12
              }
            },
            data: ['河北省', '山西省', '辽宁省', '吉林省', '江苏省', '浙江省', '安徽省', '江西省', '湖南省', '补充省']
          }],
          series: [{
            type: 'bar',
            name: '信任销售',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(101, 245, 243)',
                barBorderRadius: [0, 18, 18, 0]
              }
            },
            data: [154, 120, 147, 200, 232, 273, 154, 120, 147, 178]
          }]
        }
        this.EdataStorage.inst.setOption(option)
      }
    },
    components: {
      container
    }
  }
</script>
<style scoped lang="stylus">
  .ct-back
    background-color: #fff
  .wraper
    position: absolute !important
    margin: 0 !important
    .title
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      font-weight: normal;
      font-family: "Microsoft Yahei";
      font-size: 40px;
      text-overflow: ellipsis;
      white-space: nowrap;
    .titles
      padding: 0px 25px;
      display: inline-flex;
    .counter
      margin-right: 1em;
      display: inline-flex;
      align-items: center;
      color: rgb(255, 255, 255);
      letter-spacing: 0.3em;
      text-align: center;
      white-space: nowrap;
      line-height: normal;
      font-family: "Microsoft Yahei";
      background-color: rgba(0, 0, 0, 0);
    .wraper-title
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
    .wraper-list
      width: 376px
      .header
        display: flex;
        align-items: center;
        background-color: rgba(19,68,88,0);
        height: 48px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        vertical-align: middle;
        color: #44D3E4;
        text-align: center
      .wraper-list-item
        height: 44px;
        text-overflow: ellipsis;
        overflow: hidden;
        vertical-align: middle;
        display: flex;
        align-items: center;
        background-color: rgba(10,39,50,0);
        .index
          display: inline-block;
          text-align: center;
          vertical-align: middle;
          width: 6%;
          color: #ffffff;
          font-size: 10px;
          .index-bg
            background-color: #44d3e4;
            width: 18px;
            height: 18px;
            line-height: 18px;
            
            vertical-align: middle;
            margin: auto;
            border-radius: 9px;
            text-align: center;
        .cell-content
          width: 20%;
          display: inline-block;
          text-overflow: ellipsis;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          vertical-align: middle;
          background-color: transparent;
          font-family: Microsoft Yahei;
          font-size: 14px;
          color: #44d3e4;
          font-weight: normal;
    .wraper-item-title
      background-image: url("img/titlebc.png")
      font-weight: normal
      color: rgb(255, 255, 255)
      font-family: "Microsoft Yahei"
      font-size: 18px
      height: 40px
      line-height:40px
      padding-left: 20px
    .wraper-image-topL
      background-image: url("img/topleft.png")
    .wraper-image-bottomR
      background-image: url('img/bottomright.png')
    .counter-container
      display: flex;
      align-items: center;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      font-size: 40px;
      letter-spacing: 0.3em;
      justify-content: flex-start;
      line-height: normal;
      font-family: "Microsoft Yahei";
      background-color: rgba(0, 0, 0, 0);
    .title-container
      display: block;
      align-items: center;
      color: rgb(255, 255, 255);
      font-weight: lighter;
      font-family: "Microsoft Yahei";
      font-size: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      line-height: normal;
      margin: 0px 0px 10px;
</style>