<template>
  <section class="app-container">
    <!-- 头部 -->
    <header class="app-container__header">
      <main-header :collapse.sync="collapse"></main-header>
    </header>
    <!-- 页面内容部分 -->
    <section class="app-container__body">
      <!-- 侧导航部分 -->
      <aside class="app-container__body-nav">
        <nav-side :collapse="collapse"></nav-side>
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
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </section>
      </section>
      <section class="app-container__body-main" v-show="$route.path === '/'">
        <section class="app-container__body-content" style="margin-top: 0">
          <home-page></home-page>
        </section>
      </section>
    </section>
  </section>

</template>

<script>
import MainHeader from 'components/skeleton/Header.vue'
import NavSide from 'components/skeleton/NavSide.vue'
import HomePage from '@/pages/HomePage'

export default {
  data () {
    return {
      collapse: false
    }
  },
  created () {
    document.getElementById('pre-loading').style.display = 'none'
  },
  components: {
    MainHeader,
    NavSide,
    HomePage
  }
}
</script>

<style lang="scss" scoped>
  @import "~scss/global_vars.scss";
  
  .app-container {
    height: 100%;

    &__header {
      height: $app-header-height;
      line-height: $app-header-height;
      color: $app-header-font-color;
      border-bottom: 1px solid #fff;
      text-align: center;
    }

    &__body {
      position: absolute;
      top: $app-header-height;
      bottom: 0;
      width: 100%;

      &-nav {
        height: 100%;
        background-color: $dark-background-color;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        float: left;
      }

      &-main {
        height: 100%;
        padding: 20px;
        background-color: $app-body-background-color;
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
        border: 1px solid #bbb;
        box-shadow: 0 0 20px #bbb;
        min-height: 100%;
        background-color: $app-body-content-background-color;
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

