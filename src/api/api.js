import http from '@/api/api_decorator'

export function getCitys (params) {
  return http.get('/mock/common/getCity', params)
}
