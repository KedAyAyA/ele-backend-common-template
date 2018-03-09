import api from 'api'

import { MessageErrorDecorator, NoLoadingMessageErrorDecorator } from 'decorator/ServiceDecorator'

export default class CommonService {
  static GetUserList = ({ params = {}, fn, errfn }) => {
    return MessageErrorDecorator({
      promise: api.getUserList(params),
      fn,
      errfn
    })
  }

  static GetUserDetail = ({ params = {}, fn, errfn }) => {
    return NoLoadingMessageErrorDecorator({
      promise: api.getUserDetail(params),
      fn,
      errfn
    })
  }
}
