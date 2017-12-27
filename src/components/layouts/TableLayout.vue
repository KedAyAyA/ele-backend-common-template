<template lang="html">
  <div class="common-table__layout">
    <slot name="table"></slot>
    <div class="common-table__pagination">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .common-table {
    &__pagination {
      float: right;
      margin-top: 10px;
    }
  }
</style>
