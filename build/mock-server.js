let express = require('express')
let router = express.Router()
const fs = require('fs')
const path = require('path')

let Mock = require('mockjs')
let defalut = {
  errorCode: 0,
  message: '成功'
}

// path为 xxx.json
function readFile (file) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'mock/' + file)))
}

// 合并default方法
function defaultAssign (data) {
  return Object.assign({}, defalut, {
    data: data
  })
}

// 模拟城市
router.get('/common/getCity', (req, res) => {
  let citys = readFile('city.json')
  
  let data = defaultAssign(citys)
  res.json(data)
})


// 模拟用户列表
router.get('/common/getUserList', (req, res) => {
  let { cityId, username, page, pageSize } = req.query
  let users = readFile('users.json')
  if (username !== '') {
    users = users.filter(item => {
      return item.username.indexOf(username) !== -1
    })
  }
  if (cityId !== '') {
    users = users.filter(item => {
      return +item.city === +cityId
    })
  }
  let data = defaultAssign({
    list: users.slice((page - 1) * pageSize, page * pageSize),
    total: users.length
  })
  res.json(data)
})

// 获取用户详情页
router.get('/common/getUserDetail', (req, res) => {
  let { id } = req.query
  let users = readFile('users.json')

  users.filter(item => {
    return +item.id === +id
  })
  let user = users[0] || {}
  let data = defaultAssign(user)

  res.json(data)
})


module.exports = router;