const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dnName = 'nvthang';

( async function(){
  let client;

  try{
    client = await MongoClient.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    //Insert a single document
    //
    let r = await db.collection('inserts').insertOne({a:1});

    //insert multiple doucments
    r = await db.collection('inserts').insertMany([{a:2}, {a:3}, {a:4}]);
  } catch(err){
    console.log(err.stack);
  }

  client.close();

})();

