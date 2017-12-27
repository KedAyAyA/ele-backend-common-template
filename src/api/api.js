import http from 'decorator/ApiDecorator'

export function getCitys (params) {
  return http.get('/mock/common/getCity', params)
}
