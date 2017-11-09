import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as types from './mutation-type'

Vue.use(Vuex)

const mutations = {
  [types.ADD_COUNT] (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations,
  actions,
  modules: {

  }
})
