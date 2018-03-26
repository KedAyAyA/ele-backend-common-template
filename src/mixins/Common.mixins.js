import TableLayout from '@/components/layouts/TableLayout'
import ContentLayout from '@/components/layouts/ContentLayout'

import { mapState } from 'vuex'

export default class CommonMixins {
  static tableListMixin = () => {
    let lastStateCache = {}
    return {
      data () {
        return {
          pagination: {
            currentPage: 1,
            size: 5,
            total: 0
          }
        }
      },
      /**
       * 处理搜索后退两条路
       * 其他页后退或前进 mount -> query -> page ? setPage -> router -> search : search
       * 当前也搜索前进后退 route -> query -> page -> router -> search
       */
      mounted () {
        // 是后退的页面
        this._query(this.$route)
      },
      // 适用于公共状态改变对应执行搜索
      watch: {
        $route (newV, oldV) {
          if (newV.path === oldV.path) {
            this._query(newV)
          }
        }
      },
      methods: {
        // 对应点击搜索事件
        handleSearch () {
          if (this.pagination.currentPage !== 1) {
            this.pagination.currentPage = 1
          } else {
            this.$route.query.currentPage = 1
            this._handleRouter()
          }
        },
        // 处理跳转
        _handleRouter () {
          // 处理首次点击进入页后可以随意切页并且后退置无参数url时不重复添加路由的问题
          if (!this.$route.query.currentPage && this.pagination.currentPage === 1) {
            return
          }

          Object.assign(this.formData, {
            currentPage: this.pagination.currentPage,
            size: this.pagination.size
          })
          
          // fix undfined bug
          Object.keys(this.formData).forEach(key => {
            if (this.formData[key] === undefined) {
              this.formData[key] = ''
            }
          })

          // 如果cache与url不一致 直接改变url触发
          for (let key in this.formData) {
            console.log(JSON.stringify(lastStateCache))
            if (lastStateCache[key] === undefined || lastStateCache[key].toString() !== this.formData[key].toString()) {
              this.$router.push({
                path: this.$route.path,
                query: this.formData
              })
              return
            }
          }
          this.__getSearchData()
        },
        _query (router) {
          Object.assign(this.formData, this.$options.data().formData)
          this.__initData()
          Object.assign(this.formData, router.query)

          Object.assign(lastStateCache, router.query)
          
          let page = Number(router.query.currentPage) || 1
          if (this.pagination.currentPage !== page) {
            this.pagination.currentPage = page
          }

          this.__convertParam()
          this._fixPaginationTotalBug(page)
          this.__getSearchData()
        },
        // 对应换页事件
        handleCurrentChange (page) {
          document.querySelector('.app-container__body-main').scrollTop = 0
          this._handleRouter()
        },
        /**
         * 特别的 双下划线开头的都是根据需要在对应页面重写的方法
         */
        // 需要被重写的事件 用于获取不同的列表数据
        __getSearchData (page) {
          
        },
        /**
         * 需要被重写的方法
         * 用于在搜索前初始化一些数据
         * 多用于以下场景
         * 1.初始化一些搜索条件(会被query里的其他条件覆盖)
         * 2.搜索前可能为formData添加一些全局的属性
         */
        __initData () {
          
        },
        /**
         * 需要被重写的方法
         * 用于转换一些formData的值
         * 作用是修复从query里拿出的值合并到formData里String与Number切换的问题，导致select组件显示数字而不是对应的name
         */
        __convertParam () {

        },
        /**
         * 修复Pagination组件在total值小于当前页码对应的total时自动把page设置为最大值的问题
         * 该问题会导致回退的页面并不是当时页码状态的页面，故使用一个更大的假的total暂时让其可以设置相应的页码
         */
        _fixPaginationTotalBug (page) {
          let maxPage = Math.floor(this.pagination.total / this.pagination.size)
          if (maxPage < page) {
            this.pagination.total = page * this.pagination.size
          }
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
        ...mapState(['loading', 'citys'])
      }
    }
  }
}
