var express = require("express")
var router = express.Router()

var User = require("./../models/user")

router.post("/signup", (req, res, next) => {
    console.log(req.body)

    user = new User({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.name,
        department: req.body.department,
        mobile: req.body.mobile,
        email: req.body.email,
        faculty: req.body.faculty
    })
    user.save((err, user)=>{
        if(err){
            console.log(err)
            res.end();
        }
        else{
            console.log(user);
            res.end();
        }
    })
})

module.exports = router
