var express = require('express')
var router = express.Router()
var User = require('./../models/user')

router.post('/auth', (req, res) => {
  console.log(req.body)
  // res.send("this is auth")
  User.findOne({ username: req.body.faculty }, (err, faculty) => {
    console.log(faculty)
    if (err) {
      return res.send(err)
    }

    if (faculty.authorized.indexOf(req.body.student) === -1) {
      faculty.authorized.push(req.body.student)
      faculty.save()
    }
    return res.send()
  })
})
router.post('/unauth', (req, res) => {
  console.log(req.body)
  // res.send("this is auth")
  User.findOne({ username: req.body.faculty }, (err, faculty) => {
    console.log(faculty)
    if (err) {
      return res.send(err)
    }
    let index = faculty.authorized.indexOf(req.body.student)
    if (index > -1) {
      faculty.authorized.splice(index, 1)
    }
    faculty.save()
    return res.send()
  })
})

module.exports = router
