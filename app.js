var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var cors = require("cors")
var session = require("express-session")
var FileStore = require("session-file-store")(session)
const mongoose = require("./services/mongoose")
mongoose.connect()

var usersRouter = require("./routes/users")

var app = express()
app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
    session({
        name: "session-id",
        secret: "12345-67890-09876-54321",
        saveUninitialized: false,
        resave: false,
        store: new FileStore()
    })
)

// app.use("/", indexRouter)
app.use("/users", usersRouter)

app.use(express.static("client/build"))
app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    next()
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
