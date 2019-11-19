var express = require("express")
var router = express.Router()

var User = require("./../models/user")

router.post("/signup", async (req, res, next) => {
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
      (err, user) => {
        if (err) {
          return res.send(err)
        }
        return res.json({ alreadyExist: false })
      }
    )
  })
 
})

module.exports = router
