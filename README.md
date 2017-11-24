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
* 一些常规的开发模板（例如搜索-列表页）

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
*   services  前端服务层 用于统一可复用请求的包装与默认错误处理和loading处理
*   stores  Vuex状态仓库
*   utils   共用的工具库类

# 开发指南
> 开发的一些约定

* 页面都应该写在page里，不同的模块用不同的文件夹区分，若page内有细分的非复用组件应也放在相同的文件夹内，用文件夹来区分
* 所有数据分为两种 1-多个组件共同使用 2-单组件内部需要
    +   对于第一种 我们约定采用vuex来处理状态，若需要异步获取，则action里调用service层接口，若多个服用可放到某个mixins来减少代码的重复率
    +   对于第二种直接再组件内部调用service层借口来实现，通过回调的fn定义成功获取后的操作
* services/ServiceDecorator.js主要是用来统一错误处理，避免每一个获取数据操作都要进行一遍错误的捕获以及loading的处理
* 对搜索－列表类的页面进行了抽象，每个页面只需要重写一个方法即可，详细内容见文件中的例子