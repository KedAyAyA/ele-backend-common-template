import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as types from './mutation-type'

Vue.use(Vuex)

const mutations = {
  [types.ADD_COUNT] (state) {
    state.count++
  },
  [types.LOADING_SHOW] (state) {
    state.loading = true
  },
  [types.LOADING_HIDE] (state) {
    state.loading = false
  },
  [types.GET_CITYS] (state, { res }) {
    state.citys = res
  }
}

export default new Vuex.Store({
  state: {
    count: 0,
    citys: [],
    loading: false
  },
  mutations,
  actions,
  modules: {

  }
})
