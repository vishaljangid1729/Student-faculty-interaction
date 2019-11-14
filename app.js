var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var cors = require("cors")
const mongoose = require('./services/mongoose');
mongoose.connect();


// var User = require('./models/user')

// // User.create({username: "vishal", password: 'aaifn'})
// .then(user =>{
//     console.log(user)
// })

// var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")

var app = express()
app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// app.use("/", indexRouter)
app.use("/users", usersRouter)

app.use(express.static("client/build"))
app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    next();
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render("error")
})

module.exports = app
