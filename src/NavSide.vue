<template>
    <el-menu
      :default-active="$route.path"
      background-color="#555"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      :unique-opened="true">
      <template v-for="(item, index) in router" v-if="!item.hidden">
        <el-submenu :index="index+''" v-if="item.children && item.children.length" v-bind:key="index">
          <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
          <el-menu-item v-for="(child, index2) in item.children" :index="item.path + '/' + child.path" v-show="!child.hidden" v-bind:key="index+'-'+index2">{{child.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path" v-bind:key="index"><i :class="item.iconCls"></i>{{item.name}}</el-menu-item>
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
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: 0;
    text-align: left;
  }
</style>
