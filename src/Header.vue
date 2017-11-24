<template>
  <section class="header-item">
    <section class="header-item__city">
      <span>城市：</span>
      <el-select v-model="value" placeholder="请选择" size="small" style="width: 120px" filterable>
        <el-option
          v-for="item in citys"
          :key="item.id"
          :label="item.label"
          :value="item.id">
        </el-option>
      </el-select>
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
import CommonMixins from 'mixins/Common.mixins'
export default {
  data () {
    return {
      options: [],
      value: ''
    }
  },
  created () {
    this.$store.dispatch('getCitys')
  },
  computed: {

  },
  methods: {

  },
  mixins: [CommonMixins.tableListMixin(), CommonMixins.defaultComputedMixin()]
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
