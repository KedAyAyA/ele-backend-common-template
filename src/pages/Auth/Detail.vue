<template>
  <div class="auth-detail">
    <p>用户名: {{ username }}</p>
    <p>城市: {{ city }}</p>
    <p>角色: {{ role }}</p>
  </div>
</template>

<script>
import CommonMixins from 'mixins/Common.mixins.js'

import AuthService from 'services/AuthService'

export default {
  data () {
    return {
      username: '',
      city: '',
      role: ''
    }
  },

  created () {
    let id = this.$route.params.id
    AuthService.GetUserDetail({
      params: {
        data: {
          id: id
        }
      },
      fn: res => {
        Object.assign(this.$data, res)
      }
    })
  },

  mixins: [CommonMixins.defaultComputedMixin()]
}
</script>

<style>

</style>
