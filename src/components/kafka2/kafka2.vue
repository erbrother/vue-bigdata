<template>
    <container id="kafka2">
       <div>123</div>
       <div  class='wraper-chart'>
          <canvas ref='mycanvas'></canvas>
       </div>
    </container>
</template>
<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import {shuffle} from 'common/js/util.js'
  import container from 'base/container/container'

  export default{
    data() {
      return{
        myData:{
          inst: Function,
          val: [500,100, 300, 800, 280]
        }
      }
    },
    mounted(){
      this.myData.inst = echarts.init(this.$refs.mycanvas)

      setInterval(()=>{
        this.myData.value = shuffle(this.myData.val)

      },2000)

    },
    methods:{
      _initmy(){
         var  xAxisData = ['内蒙古', '浙江', '北京', '郑州', '成都']
         let  option = {
             xAxis:[{
               type:'category',
               data:xAxisData,
               axisLine:{
                 show:false
               },
               axisLabel:{
                  textStyle:{
                     color: 'rab(255,255,255)'
                  }
               },
               splitLine:{
                show:false
               }
             },{
               show:false,
               data:x
             }]
         }
      }
    },
    components: {
      container
    }
  }
</script>
<style  lang="stylus" scoped>
#kafka2
  background: #ddd
</style>