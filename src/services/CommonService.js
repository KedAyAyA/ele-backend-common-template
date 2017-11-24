import api from 'api'

import { MessageErrorDecorator } from './ServiceDecorator'

export default class CommonService {
  static GetCommonCitys = ({ params = {}, fn, errfn }) => {
    return MessageErrorDecorator({
      promise: api.getCitys(params),
      fn,
      errfn
    })
  }
}
