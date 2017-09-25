<template>
  <div id="bigdata" :style="client">
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
    </div>
    <!-- echarts显示 -->
    <div class="echart-view">
      <div class="wraper" style="left: 1424px; top: 150px;width: 456px; height: 280px;">
        <canvas width="456" height="280" ref="Eresource"></canvas>
      </div>
      <div class="wraper" style="left: 1424px; top: 600px;width: 456px; height: 280px;">
        <canvas width="456" height="280" ref="Enode"></canvas>
      </div>      
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        client: {
          width: '',
          height: '',
          transform: ''
        },
        Eresource: {
          inst: Function,
          data: []
        },
        Enode: {
          inst: Function,
          data: []
        }
      }
    },
    mounted() {
      const that = this
      this.client.height = `${window.screen.height}px`
      this.client.width = `${window.screen.width}px`
      this.client.transform = `scale(${window.innerWidth / window.screen.width}, ${window.innerHeight / window.screen.height})`
      window.onresize = function resize() {
        that.client.transform = `scale(${window.innerWidth / window.screen.width}, ${window.innerHeight / window.screen.height})`
      }

      // 初始化echarts
      this.Eresource.inst = echarts.init(this.$refs.Eresource)
      this.Enode.inst = echarts.init(this.$refs.Enode)

      this.initEresource()
      this.initEnode()
    },
    methods: {
      initEresource() {
        var option = {
          color: ['rgb(108, 245, 242)', 'rgb(63, 164, 244)'],
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
          color: ['rgb(108, 245, 242)', 'rgb(63, 164, 244)'],
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
      }
    }
  }
</script>
<style scoped lang="stylus">
  #bigdata
    font-size: 12px
    position: fixed !important
    top: 0
    left: 0
    padding: 0
    margin: 0
    z-index: 999
    background: #0d2a42
    background-size: 100% 100%
    transform-origin: left top 0px
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