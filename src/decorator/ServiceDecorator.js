import { Message } from 'element-ui'

import store from '../stores'

// 用于自定义错误处理方案

export const MessageErrorDecorator = ({ promise, fn, errfn }) => {
  store.dispatch('showLoading')
  return promise.then(res => {
    fn && fn(res)
  }).catch(err => {
    if (typeof errfn === 'function') {
      errfn()
    } else {
      Message({
        message: typeof errfn === 'undefined' ? err.message : errfn,
        type: 'error',
        duration: 2000,
        showClose: true,
        center: true
      })
    } 
  }).then(e => {
    store.dispatch('hideLoading')
  })
}

export const NoLoadingMessageErrorDecorator = ({ promise, fn, errfn }) => {
  return promise.then(res => {
    fn && fn(res)
  }).catch(err => {
    if (typeof errfn === 'function') {
      errfn()
    } else {
      Message({
        message: typeof errfn === 'undefined' ? err.message : errfn,
        type: 'error',
        duration: 2000,
        showClose: true,
        center: true
      })
    } 
  })
}
