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
        <wraper style="top: 80px; left: 10px">
          <canvas width="250" height="170"></canvas>
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
        <wraper style="top: 80px; left: 10px">
          <canvas width="250" height="170"></canvas>
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
        <wraper style="top: 80px; left: 10px">
          <canvas width="250" height="170"></canvas>
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
        <wraper style="top: 80px; left: 10px">
          <canvas width="250" height="170"></canvas>
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
        <wraper style="top: 80px; left: 10px">
          <canvas width="250" height="170"></canvas>
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
        <wraper style="top: 80px; left: 10px">
          <canvas width="250" height="170"></canvas>
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
    <!-- 中间地图展示 -->
    <div>
      <wraper class="inner-wraper left-warper"></wraper>
      <wraper class="inner-wraper center-warper"></wraper>
    </div>
  </container>
</template>
<script type="text/ecmascript-6">
  // import { Loading } from 'element-ui'
  import container from 'base/container/container'
  import wraper from 'base/wraper/wraper'
  import timer from 'base/timer/timer'
  export default {
    // beforeCreate() {
    //   Loading.service({
    //     lock: true,
    //     customClass: 'masker'
    //   })
    // },
    mounted() {
      // setTimeout(() => {
      //   Loading.service().close()
      // }, 2000)
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
      .footer-left
        left: 10px
      .footer-right
        right: 7px
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