import http from '@/api/api_decorator'

export function test (params) {
  return http.get('test', params)
}
