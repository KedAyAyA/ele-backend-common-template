import * as types from './mutation-type.js'

import CommonService from 'services/CommonService'

export const addCount = ({ commit }) => {
  commit(types.ADD_COUNT)
}

export const getCitys = ({ commit }) => {
  CommonService.GetCommonCitys({
    fn: res => {
      commit(types.GET_CITYS, { res })
    }
  })
}

export const showLoading = ({ commit }) => {
  commit(types.LOADING_SHOW)
}

export const hideLoading = ({ commit }) => {
  commit(types.LOADING_HIDE)
}
