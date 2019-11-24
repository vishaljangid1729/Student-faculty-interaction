var express = require('express')
var router = express.Router()

var User = require('./../models/user')
router.get('/userList', (req, res) => {
  User.find({}, (err, users) => {
    console.log(users)
    if (err) {
      return res.send(err)
    }
    return res.send(users)
  })
})

router.post('/signup', async (req, res) => {
  console.log(req.body)
  User.findOne({ username: req.body.username }, (err, user) => {
    // console.log(user)
    if (user != null) {
      return res.json({ alreadyExist: true }).end()
    }
    User.create(
      {
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.name,
        department: req.body.department,
        mobile: req.body.mobile,
        email: req.body.email,
        faculty: req.body.faculty
      },
      err => {
        if (err) {
          return res.send(err)
        }
        return res.json({ alreadyExist: false })
      }
    )
  })
})

router.post('/login', (req, res, next) => {
  if (!req.session.user) {
    var authHeader = req.headers.authorization
    if (!authHeader) {
      var err = new Error('You are not authenticated!')
      res.setHeader('WWW-Authenticate', 'Basic')
      err.status = 401
      return res.send(err)
    }
    var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
    var username = auth[0]
    var password = auth[1]
    User.findOne({ username: username })
      .then(user => {
        if (user === null) {
          return res.send({ status: 'notExist' })
        } else if (user.password !== password) {
          return res.send({ status: 'passwordDontMatch' })
        } else if (user.username === username && user.password === password) {
          req.session.user = 'authenticated'
          res.statusCode = 200
          // console.log(res)

          return res.send({ status: 'ok', username })
        }
      })
      .catch(err => {
        return res.send(err)
      })
  } else {
    res.send({ status: 'ok' })
  }
})

module.exports = router
