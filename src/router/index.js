import Vue from 'vue'
import Router from 'vue-router'

let Main = resolve => require(['@/Main.vue'], resolve)
let AuthList = resolve => require(['@/pages/Auth/List.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Main,
      iconCls: 'fa fa-home',
      hidden: false
    },
    {
      path: '/message',
      name: '权限管理',
      iconCls: 'fa fa-envelope-o',
      component: Main,
      children: [
        {
          path: 'list',
          name: '权限列表',
          component: AuthList
        },
        {
          path: 'add',
          name: '添加权限'
        }
      ]
    }
  ]
})
