<template>
  <div>
    <el-row ref="setting">
      <el-col :span="24">
        <canvas ref="map"></canvas>
      </el-col>
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
            label="姓名"
            width="180">
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag>{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
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
      <el-col :span="24">
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
      </el-col>  
    </el-row>
  </div>
</template>
<script>
  // import echarts from 'echarts'
  import 'echarts/map/js/china.js'

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
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
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
        this.tableData.splice(index, 1)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      initMap() {
        this.$refs.map.width = this.$refs.map.parentElement.clientWidth
        // const map = echarts.init(this.$refs.map)
      }
    },
    mounted() {
      let parent = this.$refs.setting.$parent.$el.clientWidth
      parent = parent - 210 + 0 + 'px'
      this.$refs.setting.$el.style.width = parent
      this.initMap()
    }
  }
</script>
<style scoped lang="stylus">
  .el-row
    padding-right: 12px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    .el-col
      margin-bottom: 15px
</style>