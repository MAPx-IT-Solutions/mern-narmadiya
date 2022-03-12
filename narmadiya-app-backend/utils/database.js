const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
let status = { db:null}
exports.connect = (url,cb) => {
    mongoClient.connect(url,(err,database)=> {
         if(err) return cb(err)
         status.db = database.db('narmadiya')
         cb()
    })
} 

exports.getDB = () => {
    if(status.db){
        return status.db
    }
    else {
        console.log('No Database found')
    }
}