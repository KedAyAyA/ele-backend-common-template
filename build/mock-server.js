let express = require('express')
let app = express()

let Mock = require('mockjs')
let defalut = {
  code: 200,
  msg: '成功'
}

app.get('/common/getCity', (req, res) => {
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
  res.send(data)
})

var server = app.listen(3007, () => {
  let host = server.address().address
  let port = server.address().port
  console.log("Mock server start at http://%s:%s", host, port)
})