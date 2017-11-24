import { Message } from 'element-ui'

/**
 * 为了自定义一些常用的信息提示避免代码重复，统一规格
 */

export default class ElementDefault {
  static messageError = message => {
    Message({
      message: message,
      type: 'error',
      duration: 2000,
      showClose: true,
      center: true
    })
  }
  static messageSuccess = message => {
    Message({
      message: message,
      type: 'success',
      duration: 2000,
      showClose: true,
      center: true
    })
  }
}
