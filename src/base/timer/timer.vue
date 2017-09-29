<template>
  <div class="time">
    <i class="el-icon-time"></i>
    <span>{{time}}</span>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getTime} from 'common/js/util.js'

  export default {
    data() {
      return {
        time: getTime()
      }
    },
    mounted() {
      setInterval(() => {
        this.time = getTime()
      }, 1000)
    }
  }
</script>
<style scoped lang="stylus">
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
    i
      width: 18px
      height: 18px
      margin-right: 5px
</style>