<template>
  <div class="container" :style="client">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
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
      this.client.height = `1080px`
      this.client.width = `1920px`
      this.client.transform = `scale(${window.innerWidth / 1920}, ${window.innerHeight / 1080})`
      window.onresize = function resize() {
        that.client.transform = `scale(${window.innerWidth / 1920}, ${window.innerHeight / 1080})`
      }
    }
  }
</script>
<style scoped lang="stylus">
  .container
    font-size: 12px
    position: fixed !important
    top: 0 !important
    left: 0 !important
    padding: 0 !important
    margin: 0 !important
    z-index: 999 !important
    background-size: 100% 100%
    transform-origin: left top 0px
</style>