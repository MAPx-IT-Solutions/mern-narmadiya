const express = require('express')
const route = express()
const user = require('../controllers/register')

route.post('/',user.Register)
route.post('/login',user.login)

module.exports = route