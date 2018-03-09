<template>
  <section class="auth-list">
    <content-layout>
      <template slot="search-bar">
        <el-form :inline="true" :model="formData" size="small">
          <el-form-item label="城市：">
            <el-select 
              v-model="formData.cityId" 
              placeholder="请选择" 
              size="small" 
              style="width: 120px" 
              clearable
              filterable>
              <el-option
                v-for="item in citys"
                :key="item.id"
                :label="item.label"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户名：">
            <el-input v-model="formData.username" placeholder=""></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="warning" plain @click="handleSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </template>

      <template slot="table-list">
        <div style="color: #5a5e66;margin-bottom: 10px;overflow: hidden;">
          <div style="float: left">当前为第 {{ pagination.currentPage }} 页</div>
          <div style="float: right">共有 {{pagination.total}} 条数据</div>
        </div>
        <table-layout>
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            stripe
            v-loading="loading"
            slot="table">
            <el-table-column
              prop="username"
              label="用户名"
              width="200">
            </el-table-column>
            <el-table-column
              label="用户城市">
              <template slot-scope="scope">
                <span>{{ citys[scope.row.city - 1].label }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="role"
              label="用户角色">
            </el-table-column>

            <el-table-column
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button type="text" @click="handleUpdateAuth(scope.row.id)">查看</el-button>
              </template>
            </el-table-column>

          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="pagination.currentPage"
            :page-size="pagination.size"
            layout="total, prev, pager, next, jumper"
            :total="pagination.total"
            slot="pagination">
          </el-pagination>
        </table-layout>
      </template>
    </content-layout>
  </section>  
</template>

<script>
import CommonMixins from 'mixins/Common.mixins'

import AuthService from 'services/AuthService'

export default {
  data () {
    return {
      formData: {
        username: '',
        cityId: ''
      },
      tableData: []
    }
  },
  created () {

  },
  methods: {
    __getSearchData (page) {
      let data = Object.assign({}, this.formData, {
        page: this.pagination.currentPage,
        pageSize: this.pagination.size
      })
      AuthService.GetUserList({
        params: {
          data: data
        },
        fn: res => {
          this.tableData = res.list
          this.pagination.total = res.total
        }
      })
    },
    __convertParam () {
      this.formData.cityId = Number(this.formData.cityId) || ''
    },
    handleUpdateAuth (id) {
      this.$router.push(`/auth/detail/${id}`)
    }
  },
  mixins: [CommonMixins.tableListMixin(), CommonMixins.defaultComputedMixin()]
}
</script>

<style lang="scss" scoped>

</style>
