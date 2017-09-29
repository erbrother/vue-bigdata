<template>
  <container id="overview">
    <wraper class="title">
      <div>企业实时销售数据</div>
    </wraper>
    <wraper class="time">
      <timer></timer>
    </wraper>
    <wraper class="borderTop">
      
    </wraper>
    <wraper class="title-background"></wraper>

  </container>
</template>
<script type="text/ecmascript-6">
  import container from 'base/container/container'
  import wraper from 'base/wraper/wraper'
  import timer from 'base/timer/timer'
  export default {
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
      
</style>