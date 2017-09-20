<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <nav-slider ref="nav" @widthChange="widthChange"></nav-slider>
    <keep-alive class="content" ref="content">
      <router-view class="content" ref="content"></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import navSlider from 'components/nav'
  import HeaderComponent from 'components/header'
  export default {
    data() {
      return {
        navWidth: ''
      }
    },
    mounted() {
    },
    methods: {
      widthChange(width) {
        setTimeout(() => {
          this.$refs.content.style.paddingLeft = width + 10 + 'px'
        }, 200)
      }
    },
    watch: {
    },
    components: {
      navSlider,
      HeaderComponent
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content
    position: absolute
    top: 72px
    bottom: 0
    width: 100%
    padding-left: 210px
    padding-top: 10px
    z-index: -1
</style>
