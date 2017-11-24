import TableLayout from '@/components/layouts/TableLayout'
import ContentLayout from '@/components/layouts/ContentLayout'

import { mapState } from 'vuex'

export default class CommonMixins {
  static tableListMixin = () => {
    return {
      data () {
        return {
          pagination: {
            currentPage: 1,
            size: 20,
            total: 0
          }
        }
      },
      mounted () {
        // if (this.cityId) {
        this.getSearchData()
        // }
      },
      // 适用于公共状态改变对应执行搜索
      // watch: {
      //   cityId (newValue, oldValue) {
      //     this.getSearchData(1)
      //   }
      // },
      methods: {
        // 对应点击搜索事件
        handleSearch () {
          if (this.pagination.currentPage !== 1) {
            this.pagination.currentPage = 1
          } else {
            this.getSearchData()
          }
        },
        // 对应换页事件
        handleCurrentChange (page) {
          this.getSearchData(page)
        },
        // 需要被重写的事件 用于获取不同的列表数据
        getSearchData (page) {

        }
      },
      components: {
        TableLayout,
        ContentLayout
      }
    }
  }

  static defaultComputedMixin = () => {
    return {
      computed: {
        ...mapState(['loading'])
      }
    }
  }
}
