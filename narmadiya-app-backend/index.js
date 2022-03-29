const express = require('express');
const cors = require('cors')
const bp = require('body-parser')
const route = require('./routes/routes')
const mongoDB = require('./utils/database')
const narmadiya = express() 
const session = require('express-session')
const connection_url = 'mongodb+srv://mapx:8871714038@mapx.mk5qa.mongodb.net/narmadiya'
const MongoStore  = require('connect-mongo')
narmadiya.use(cors())
narmadiya.use(bp.urlencoded({extended:true}))
narmadiya.use(bp.json());
narmadiya.use(session({
    secret:"2IBYFkou6dZlglpFWhw",
    resave:false,
    saveUninitialized:false,
    cookie: { 
        secure: true,
        maxAge:1*24 * 60 * 60 * 1000
    },
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://mapx:8871714038@mapx.mk5qa.mongodb.net/narmadiyaSessions' })
}))
narmadiya.use(route) 
mongoDB.connect(connection_url,(err)=>{
    if(err){
        console.log('No Database found')
        process.exit(1)
    }
    else{
        narmadiya.listen(8000)
    }
})
