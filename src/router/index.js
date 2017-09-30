import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home'
import show from 'components/show'
import setting from 'components/setting'
import kafka from 'components/kafka/kafka'
import bigdata from 'components/bigData/bigdata'
import overview from 'components/overview/overview'
import kafka2 from 'components/kafka2/kafka2'

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
    },
    {
      path: '/kafka2',
      component: kafka2
    }
  ]
})
