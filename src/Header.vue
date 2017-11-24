<template>
  <section class="header-item">
    <section class="header-item__city">
      <span>icon</span>
    </section>
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

export default {
  data () {
    return {
      options: [],
      value: ''
    }
  },
  created () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .header-item {
    background-color: #555555;
    display: flex;
    
    &__city {
      width: 210px;
      font-size: 14px;
      position: relative;
      border-right: 1px solid #fff;
    }

    &__title {
      flex: 1;
      font-size: 22px;
      font-weight: bold;
    }
    &__profile {
      width: 200px;
      span + span {
        margin-left: 10px;
      }
    }
  }
</style>
