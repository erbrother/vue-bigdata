<template>
  <div class="header">
    <div class="logo">
      <a href="/">
        应急监控
      </a>
    </div>
    <div class="login-area">
      <ul class="clearfix">
        <li> 
          <el-date-picker
            v-model="timePickerData"
            type="datetimerange"
            :picker-options="pickerOptions2"
            placeholder="选择时间范围"
            align="right"
            @change="change">
          </el-date-picker>
        </li>
        <li class="login" @click="login">
          <a info="signin">登录</a>
          <a info="signup">注册</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        timePickerData: '',
        signin: false
      }
    },
    methods: {
      change(val) {
        console.log(val)
      },
      login(e) {
        // 传递点击信息
        e.preventDefault()
        this.$emit('sign', e.target.getAttribute('info'))
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/base"
  .header
    position: relative
    top: 0
    left: 0
    height: 72px
    padding-right: 10px
    z-index: 900
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.1)
    color: #48576a
    width: 100%
    line-height: 80px
    z-index: 100
    .logo
      float: left
      margin: 0 28px 0 24px
      a
        display: block
        width: auto
        height: 72px
        line-height: 72px
        img
          height: 72px
    .login-area
      float: right
      margin-top: 6px
      background-size: cover;
      ul li
        float: left
        height: 60px
        line-height: 60px
        margin-left: 15px
        cursor: pointer
      .login a
        display: inline-block
        margin-left: 15px
        color: #20a0ff
    .el-dialog
      z-index: 2007 !important
</style>