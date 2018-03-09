import http from 'decorator/ApiDecorator'

export function getCitys (params) {
  return http.get('/api/common/getCity', params)
}

export function getUserList (params) {
  return http.get('/api/common/getUserList', params)
}

export function getUserDetail (params) {
  return http.get('/api/common/getUserDetail', params)
}
