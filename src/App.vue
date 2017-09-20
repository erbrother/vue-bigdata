<template>
  <div id="app">
    <HeaderComponent @pick="timePick" @sign="sign"></HeaderComponent>
    <nav-slider ref="nav" @widthChange="widthChange"></nav-slider>
    <keep-alive>
      <router-view class="content" ref="content"></router-view>
    </keep-alive>
    <signin :signin="signin" @close="signinDialogClose"></signin>
    <signup :signup="signup" @close="signupDialogClose"></signup>
  </div>
</template>

<script>
  import navSlider from 'components/nav'
  import HeaderComponent from 'components/header'
  import signin from 'components/signin'
  import signup from 'components/signup'
  export default {
    data() {
      return {
        navWidth: '',
        signin: false,
        signup: false
      }
    },
    mounted() {
    },
    methods: {
      widthChange(width) {
        setTimeout(() => {
          this.$refs.content.$el.style.paddingLeft = width + 10 + 'px'
        }, 200)
      },
      timePick(time) {
        console.log(time)
      },
      sign(msg) {
        if (!msg) {
          return
        } else if (msg === 'signin') {
          this.signin = true
        } else if (msg === 'signup') {
          console.log(this.signup)
          this.signup = true
        } else {
          return
        }
      },
      signinDialogClose() {
        this.signin = false
      },
      signupDialogClose() {
        this.signup = false
      }
    },
    watch: {
    },
    components: {
      navSlider,
      HeaderComponent,
      signin,
      signup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/index'
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .content
    position: absolute
    top: 72px
    bottom: 0
    width: 100%
    padding-left: 210px
    padding-top: 10px
    overflow:hidden
    z-index: -1
</style>
