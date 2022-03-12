const express = require('express');
const cors = require('cors')
const bp = require('body-parser')
const route = require('./routes/routes')
const mongoDB = require('./utils/database')
const narmadiya = express()
const connection_url = 'mongodb://localhost:27017/narmadiya'
narmadiya.use(cors())
narmadiya.use(bp.urlencoded({extended:true}))
narmadiya.use(bp.json());
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
