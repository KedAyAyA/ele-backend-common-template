<template>
  <section class="app-container">
    <!-- 头部 -->
    <header class="app-container__header">
      <main-header></main-header>
    </header>
    <!-- 页面内容部分 -->
    <section class="app-container__body">
      <!-- 侧导航部分 -->
      <aside class="app-container__body-nav">
        <nav-side></nav-side>
      </aside>
      <!-- 内容部分 -->
      <section class="app-container__body-main" v-show="$route.path !== '/'">
        <section class="app-container__body-title">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in $route.matched" v-bind:key="index">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </section>
        <section class="app-container__body-content">
          <router-view/>
        </section>
      </section>
      <section class="app-container__body-main" v-show="$route.path === '/'">
        <section class="app-container__body-content" style="margin-top: 0">
          <section class="app-container__body-welcome">欢迎使用后台模板</section>
        </section>
      </section>
    </section>
  </section>

</template>

<script>
import MainHeader from '@/Header.vue'
import NavSide from '@/NavSide.vue'

export default {
  components: {
    MainHeader,
    NavSide
  }
}
</script>

<style lang="scss" scoped>
  $app-header-height: 48px;
  
  .app-container {
    height: 100%;

    &__header {
      height: $app-header-height;
      line-height: $app-header-height;
      color: #fff;
      border-bottom: 1px solid #fff;
      text-align: center;
    }

    &__body {
      position: absolute;
      top: $app-header-height;
      bottom: 0;
      width: 100%;

      &-nav {
        width: 210px;
        height: 100%;
        background-color: #555;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        float: left;
      }

      &-main {
        height: 100%;
        padding: 20px;
        background-color: #f9fafc;
        border-top: 1px solid #fff;

        /* 创建BFC */
        overflow-y: scroll;
      }

      &-title {
        overflow: hidden;
      }

      &-content {
        margin-top: 20px;
        padding: 20px;
        min-height: 100%;
        background-color: #fff;
      }

      &-welcome {
        text-align: center;
        display: relative;
        margin-top: 300px;
        font-size: 40px;
      }
    }
  }
</style>

