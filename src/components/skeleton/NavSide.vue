<template>
    <el-menu
      :default-active="$route.path"
      text-color="#fff"
      background-color="#555"
      active-text-color="#ffd04b"
      :router="true"
      :collapse="collapse"
      :unique-opened="true"
      class="el-menu-vertical-nav">
      <template v-for="(item, index) in router" v-if="!item.hidden">
        <el-submenu :index="index+''" v-if="item.children && item.children.length" v-bind:key="index">
          <template slot="title">
            <i :class="item.iconCls"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item 
            v-for="(child, index2) in item.children" 
            :index="item.path + '/' + child.path" 
            v-show="!child.hidden" 
            v-bind:key="index+'-'+index2">
            {{child.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path" v-bind:key="index">
          <i :class="item.iconCls"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
</template>

<script>
export default {
  created () {
    
  },
  computed: {
    router () {
      return this.$router.options.routes
    }
  },
  props: ['collapse']
}
</script>

<style lang="scss" scoped>
  @import "~scss/global_vars.scss";

  .el-menu-vertical-nav:not(.el-menu--collapse) {
    width: $app-nav-width;
  }

  .el-menu {
    background-color: $dark-background-color;
    border-right: 0;
    text-align: left;
  }
</style>
