<template>
  <section class="header-item">
    <section class="header-item__logo">
      <span> LOGO </span>
    </section>
    <section class="header-item__bars" @click="handleCollapse"><i class="fa fa-bars"></i></section>
    <section class="header-item__title">
      <span>后台模板样例</span>
    </section>
    <section class="header-item__profile">
      <span>木子木子</span>
      <span> <el-button type="text">退出</el-button> </span>
    </section>
  </section>
</template>

<script>
import CommonMixins from 'mixins/Common.mixins'
export default {
  data () {
    return {
      
    }
  },
  props: ['collapse'],
  created () {
    this.$store.dispatch('getCitys')
  },
  computed: {

  },
  methods: {
    handleCollapse () {
      let temp = !this.collapse
      this.$emit('update:collapse', temp)
    }
  },
  mixins: [CommonMixins.tableListMixin(), CommonMixins.defaultComputedMixin()]
}
</script>

<style lang="scss" scoped>
  @import "~scss/global_vars.scss";

  .header-item {
    background-color: $dark-background-color;
    display: flex;
    
    &__logo {
      width: $app-nav-width;
      position: relative;
      
      span {
        font-size: $app-header-common-font-size;
        font-weight: bold;
      }
    }

    &__bars {
      padding-left: 15px;
      cursor: pointer;
    }

    &__title {
      flex: 1;
      font-size: $app-header-common-font-size;
      font-weight: bold;
    }

    &__profile {
      margin-right: 10px;

      span + span {
        margin-left: 10px;
      }
    }
  }
</style>
