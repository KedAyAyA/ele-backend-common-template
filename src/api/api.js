import http from 'decorator/ApiDecorator'

export function getCitys (params) {
  return http.get('/api/common/getCity', params)
}
