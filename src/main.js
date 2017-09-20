import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
// import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(VueSocketio, '192.168.1.65:3000')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
