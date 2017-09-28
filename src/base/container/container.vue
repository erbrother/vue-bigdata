<template>
  <div class="container" :style="client">
    <slot></slot>
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