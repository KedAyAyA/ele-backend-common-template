<template lang="html">
  <div class="common-layout__content">
    <section class="top-button-bar">
      <slot name="button-group"></slot>
    </section>
    <section class="common-layout__content_search_bar" v-if="$slots['search-bar']">
      <slot name="search-bar"></slot>
    </section>
    <section class="common-layout__content_table_list">
      <slot name="table-list"></slot>
    </section>
    <slot name="tool"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style media="screen">
a {
  text-decoration: none;
  color: #20a0ff;
  cursor: pointer;
}

a:hover,
a:visited,
a:link,
a:active {
  color: #20a0ff;
}
</style>

<style lang="scss" scope>
  .common-layout__content {
    &_search_bar {
      padding: 18px 10px 0;
      background-color: #555;
      border-left: 4px solid rgb(255, 208, 75);
      border-radius: 4px;
      color: #fff;

      .el-form-item__label {
        color: #fff;
      }

      .el-checkbox__label {
        color: #fff;
      }
    }

    &_table_list {
      margin-top: 15px;
      margin-bottom: 80px;
    }
  }

</style>
