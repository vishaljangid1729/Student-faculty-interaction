const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  faculty: {
    type: Boolean,
    default: false
  },
  authorized: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('User', User)
