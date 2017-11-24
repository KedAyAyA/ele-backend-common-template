# ele-backend-common-template

> A backend template based on Vue + ElementUI

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 模板目的
> 快速初始化一个分层明确的Vue后台项目，省却每次新开项目都要配置一遍环境的麻烦之处

# 初始化后你可以拥有什么
* 开箱即用的开发体验
* 一套完整清晰的项目结构划分
* 简单的后台页面框架（导航，后台头部）
* 简单的项目开发样例

# 项目技术结构
> vue + vuex + vue-router + axios + element-ui + scss

# src项目结构
*   api     项目请求接口
*   assets  资源目录
    +   fonts   字体文件
    +   images  图片文件
    +   medias  视频文件
*   components  公共组件库以及再包装的组件库
*   mixins  抽离的共用Vue mixins
*   pages   前端页面
*   router  前端路由
*   services  前端服务层
*   stores  Vuex状态仓库
*   utils   共用的工具库类