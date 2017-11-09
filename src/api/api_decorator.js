import axios from 'axios'

/**
 * 
 * @param {String} url
 * @param {Object} params
 * params = {
 *    data: data, data为正常的json对象
 *    config: config config可以到axios官网查看
 * }
 */

let get = (url, params) => {
  return axios.get(url, {
    params: params.data || {}
  }, params.config || {}).then(res => {
    // let { config, data, headers, request, status, statusText } = res,
    let { data } = res
    let { data: jsonData, errorCode, message } = data

    if (errorCode !== 0) {
      throw Error(message)
    }
    return jsonData
  })
}

let post = (url, params) => {
  return axios.post(url, params.data || {}, params.config || {}).then(res => {
    // let { config, data, headers, request, status, statusText } = res,
    let { data } = res
    let { data: jsonData, errorCode, message } = data

    if (errorCode !== 0) {
      throw Error(message)
    }
    return jsonData
  })
}

export default { get, post }
