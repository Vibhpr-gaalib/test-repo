var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connection = 'mongodb://127.0.0.1:27017'
const database = 'test-local'

MongoClient.connect(connection ,{useNewUrlParser : true ,  useUnifiedTopology: true},(err,dta)=>{
if(err){
   return console.log('error');
}
 const db =  dta.db(database);

  db.collection('users').insertOne({
      name : "Vibhor",
      age : "32"
  });

});