import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home'
import show from 'components/show'
import setting from 'components/setting'
import kafka from 'components/kafka/kafka'
import bigdata from 'components/bigData/bigdata'
import overview from 'components/overview/overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/show',
      component: show
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/kafka',
      component: kafka
    },
    {
      path: '/bigdata',
      component: bigdata
    },
    {
      path: '/overview',
      component: overview
    }
  ]
})
