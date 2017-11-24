<template>
  <section class="auth-list">
    <content-layout>
      <template slot="search-bar">
        <el-form :inline="true" :model="formData" size="small">
          <el-form-item label="邮箱：">
            <el-input v-model="formData.email" placeholder=""></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="warning" plain @click="handleSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </template>

      <template slot="table-list">
        <table-layout>
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            stripe
            v-loading="loading"
            slot="table">
            <el-table-column
              prop="email"
              label="用户名"
              width="200">
            </el-table-column>
            <el-table-column
              label="用户城市">
              <template slot-scope="scope">
                <span>{{ scope.row.cityArray.join(',') }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="email"
              label="用户角色"
              width="200">
              <template slot-scope="scope">
                <span>{{ scope.row.roleArray.join(',') }}</span>
              </template>
            </el-table-column>

            <el-table-column
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button type="text" @click="handleUpdateAuth(scope.row.id)">修改</el-button>
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

export default {
  data () {
    return {
      formData: {
        email: undefined
      },
      tableData: []
    }
  },
  created () {

  },
  methods: {
    getSearchData (page) {
      // let data = Object.assign({}, this.formData, {
      //   page: page || 1,
      //   pageSize: this.pagination.size,
      //   cityId: this.cityId
      // })
      // AuthService.GetAuthList({
      //   params: {
      //     data: data
      //   },
      //   fn: res => {
      //     this.tableData = res.record
      //     this.pagination.total = res.total
      //   }
      // })
    },
    handleUpdateAuth (id) {
      this.$router.push(`/auth/update/${id}`)
    }
  },
  mixins: [CommonMixins.tableListMixin(), CommonMixins.defaultComputedMixin()]
}
</script>

<style lang="scss" scoped>

</style>
