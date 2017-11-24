import axios from 'axios'

/**
 * 
 * @param {String} url
 * @param {Object} params
 * params = {
 *    data: data, data为正常的json对象
 *    config: config config可以到axios官网查看
 * }
 * 使用前需要根据自己的后端更改对返回数据的解构
 */

let get = (url, { data = {}, config = {} }) => {
  return axios(
    Object.assign(
      {
        method: 'get',
        url: url
      }, 
      {
        params: data
      }, 
      config
    )
  ).then(res => {
    let { data } = res
    let { data: jsonData, errorCode, message } = data

    if (errorCode !== 0) {
      throw Error(message)
    }
    return jsonData
  })
}

let post = (url, { data = {}, config = {} }) => {
  return axios(
    Object.assign(
      {
        method: 'post',
        url: url
      }, 
      {
        data: data
      },
      config
    )
  ).then(res => {
    let { data } = res
    let { data: jsonData, errorCode, message } = data

    if (errorCode !== 0) {
      throw Error(message)
    }
    return jsonData
  })
}

export default { get, post }
