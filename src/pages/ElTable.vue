<template>
  <layout>
    <!-- element ui -->
    <el-row>
      <el-col :span="8">
        <el-button @click="loadPre()">上一页</el-button>
        <el-button @click="loadNext()">下一页</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" :offset="2">
        <el-table
          ref="multipleTable"
          :data="tableData"
          :row-key="rowKey"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            :reserve-selection="true"
            width="55">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </layout>
</template>

<script>
  import Layout from '../layouts/Layout.vue'
  export default {
    components: {
      Layout
    },
    data() {
      return {
        tableDataAll: [],
        curPage: 0,
        pageSize: 10,
        tableData: [],
        multipleSelection: []
      }
    },
    created: function () {
      // `this` points to the vm instance
      for(var i = 100; i < 500; i++) {
        this.tableDataAll.push({
          id: i,
          date: '2016-05-08',
          name: '王小虎_' + i,
          address: '上海市普陀区金沙江路 ' + i + ' 弄'
          })
      }
      this.tableData = this.tableDataAll.slice(this.curPage, this.pageSize)
    },
    methods: {
      rowKey: function(row) {
        return row.id
      },
      loadPre: function() {
        console.log('this.curPage = ' + this.curPage)
        if (this.curPage < 1) {
          console.log('Unable to load prev...')
        } else {
          this.tableData = this.tableDataAll.slice((this.curPage - 1) * this.pageSize, this.curPage * this.pageSize)
          this.curPage--
        }
      },
      loadNext: function() {
        console.log('this.curPage = ' + this.curPage)
        if (this.curPage > (this.tableDataAll / this.pageSize)) {
          console.log('Unable to load next...')
        } else {
          this.curPage++
          this.tableData = this.tableDataAll.slice(this.curPage * this.pageSize, (this.curPage + 1) * this.pageSize)
        }
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
        console.log(this.multipleSelection)
      }
    }
  }
</script>
