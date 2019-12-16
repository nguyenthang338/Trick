const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'nvthang';

(async function(){

  let client;

  try{
    client = await MongoClient.connect(url)
    console.log("Connected correctly to server ")
    const db = client.db(dbName);

    //Get the findAnhModify collection
    const col = db.collection('findAndModify');

    let r;

    //Insert a single document
    r = await col.insert([{a:1}, {a:2}, {a:2}])

    //Remove a document from MongoDB and return it
    r = await col.findOneAndDelete({a:1}, {sort: [['a': 1]]})

  } catch(e){
    console.log(e.stack) ;
  }

  client.close()
})()
