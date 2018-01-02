let express = require('express')
let router = express.Router()

let Mock = require('mockjs')
let defalut = {
  errorCode: 0,
  message: '成功'
}
// 模拟城市
router.get('/common/getCity', (req, res) => {
  let data = Object.assign({}, defalut, {
    data: [{
      id: 1,
      label: '北京'
    },
    {
      id: 2,
      label: '天津'
    },
    {
      id: 3,
      label: '上海'
    },
    {
      id: 4,
      label: '广州'
    },
    {
      id: 5,
      label: '武汉'
    }]
  })
  res.json(data)
})

module.exports = router;