const express = require('express')
const route = express()
const user = require('../controllers/register')

route.post('/',user.Register)

module.exports = route