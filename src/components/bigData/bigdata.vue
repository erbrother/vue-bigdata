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
      <div class="wraper" style="left: 1072px; top: 568px">
        <div class="wraper-item wraper-image-bottomR" style="width:832px; height: 498px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        client: {
          width: '',
          height: '',
          transform: ''
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
      .wraper-image-topL
        background-image: url("img/topleft.png")
      .wraper-image-bottomR
        background-image: url('img/bottomright.png')   
</style>