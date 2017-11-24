import api from 'api'

import { NoLoadingMessageErrorDecorator } from './ServiceDecorator'

export default class CommonService {
  static GetCommonCitys = ({ params = {}, fn, errfn }) => {
    return NoLoadingMessageErrorDecorator({
      promise: api.getCitys(params),
      fn,
      errfn
    })
  }
}
