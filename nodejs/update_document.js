const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'nvthang';

(
  async function(){
    let client;
    try{
      client = await MongoClient.connect(url);
      console.log("Connected correctly to server");

      const db = client.db(dbName);
      const col = db.collection('updates');

      let r;
      r = await col.insertMany([{a:1}, {a:2}, {a:3}])

    //update a signle document
      r = await col.updateOne({a:1}, {$set : {b: 1}});

      //Update a multiple documents
      r = await col.updateMany({a:2}, {$set: { b: 1}});
      //Upsert a signle document
      r = await col.updateOne({a:3}, {$set: {b:1}}, {upsert: true});

    }catch(e){
      console.log(e.stack);
    }

    client.close();
  }
)();
