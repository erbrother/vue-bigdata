<template>
  <div>
    <div class="home" ref="home">
      <div class="home-item">
        <canvas ref="canvas" id="barCanvas" height="500px"></canvas>
      </div>
      <div class="home-item">
        <canvas ref="line" id="barCanvas" height="500px"></canvas>
      </div>
    </div>    
    <el-row class="">
      <el-col :span="24">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
            label="日期"
            width="180"
            prop="date"
            sortable
            >
            <template scope="scope">
              <el-icon name="time"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="事件编号"
            width="120"
            >
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>事件: {{ scope.row.name }}</p>
                <p>详情: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag>{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="源IP">
            <template scope="scope">
              <span>{{scope.row.fromIp}}</span>
            </template>    
          </el-table-column>
          <el-table-column label="目标IP">
            <template scope="scope">
              <span>{{scope.row.toIp}}</span>
            </template>     
          </el-table-column>
          <el-table-column label="级别">
            <template scope="scope">
              <el-button size="small" :type="getRole(scope.row.role)">{{scope.row.role}}级事件</el-button>
            </template>
          </el-table-column>       
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>                  
      <!-- <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.currentIndex"
          :page-sizes="pagination.pageSizes"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.total"  
          >
        </el-pagination>
      </el-col> -->  
    </el-row>      
  </div>
</template>
<script>
  import echarts from 'echarts'

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '4775',
          fromIp: '192.152.25.12',
          toIp: '168.15.25.14',
          address: '帐户已登录映射',
          role: 0
        }, {
          date: '2016-05-04',
          name: '4768',
          fromIp: '192.152.25.28',
          toIp: '168.15.25.14',
          address: 'Kerberos 身份验证票证 (TGT) 请求。',
          role: 1
        }, {
          date: '2016-05-01',
          name: '4769',
          fromIp: '192.152.25.150',
          toIp: '168.15.25.14',
          address: 'Kerberos 服务票证请求。',
          role: 2
        }, {
          date: '2016-05-03',
          name: '4783',
          fromIp: '192.152.25.140',
          toIp: '168.15.25.14',
          address: '基本应用程序组已创建。',
          role: 3
        }, {
          date: '2016-05-03',
          name: '4783',
          fromIp: '192.152.25.140',
          toIp: '168.15.25.14',
          address: '基本应用程序组已创建。',
          role: 1
        }, {
          date: '2016-05-03',
          name: '4783',
          fromIp: '192.152.25.140',
          toIp: '168.15.25.14',
          address: '基本应用程序组已创建。',
          role: 2
        }],
        pagination: {
          currentIndex: 1,
          pageSize: 20,
          pageSizes: [10, 20, 30, 40],
          total: 400
        }
      }
    },
    methods: {
      initCanvas() {
        this.$refs.canvas.width = this.$refs.canvas.parentElement.clientWidth
        this.$refs.line.width = this.$refs.line.parentElement.clientWidth
      },
      getRole(role) {
        if (role === 0) {
          return 'success'
        } else if (role === 1) {
          return 'info'
        } else if (role === 2) {
          return 'warning'
        } else {
          return 'danger'
        }
      },
      _initPie() {
        const charts = echarts.init(this.$refs.canvas)
        charts.showLoading()
        setTimeout(() => {
          charts.hideLoading()
          charts.setOption({
            title: {
              text: '健康体检',
              textstyle: {
                color: 'rgba(0, 0, 0, 1)'
              }
            },
            legend: {
              data: ['优秀', '良好', '低危', '高危']
            },
            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series: [{
              name: '健康体检',
              type: 'pie',
              radius: '55%',
              data: [
                {value: 274, name: '优秀'},
                {value: 310, name: '良好'},
                {value: 335, name: '低危'},
                {value: 400, name: '高危'}
              ],
              roseType: 'angle',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(0, 0, 0, 0.3)'
                  }
                }
              }
            }]
          })
        }, 500)
      },
      _initLine() {
        const initLine = echarts.init(this.$refs.line)
        let option = {
          title: {
            text: '一天流量分布'
            // subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} 兆'
            },
            axisPointer: {
              snap: true
            }
          },
          visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
              lte: 6,
              color: 'green'
            }, {
              gt: 6,
              lte: 8,
              color: 'red'
            }, {
              gt: 8,
              lte: 14,
              color: 'green'
            }, {
              gt: 14,
              lte: 17,
              color: 'red'
            }, {
              gt: 17,
              color: 'green'
            }]
          },
          series: [{
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
              data: [ [{
                name: '早高峰',
                xAxis: '07:30'
              }, {
                xAxis: '10:00'
              }], [{
                name: '晚高峰',
                xAxis: '17:30'
              }, {
                xAxis: '21:15'
              }]]
            }
          }]
        }
        let index = true
        setInterval(function() {
          let data = []
          if (index) {
            data = [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400]
          } else {
            data = [400, 180, 550, 660, 270, 100, 250, 400, 500, 690, 280, 390, 400, 500, 600, 750, 800, 700, 100, 300]
          }

          option.series[0].data = data
          index = !index
          initLine.setOption(option)
        }, 2000)
        initLine.setOption(option)
      }
    },
    mounted() {
      setTimeout(() => {
        this.initCanvas()
        this._initPie()
        this._initLine()
      }, 200)
    }
  }
</script>
<style lang="stylus">
  .home
    display: flex
    display: -webkit-flex
    flex-flow: row wrap
    .home-item
      flex: 1
      margin-right: 10px
</style>