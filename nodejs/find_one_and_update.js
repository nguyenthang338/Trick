const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'nvthang'

(
  async function(){
    let client;

    try{
      //Open connection
      client = await MongoClient.connect(url);
      console.log("connect correctly to server ")

      const db = client.db(dbName)
      const col = db.collection('findAnhModify');

      let r;

      //Insert a signle document
      r = await col.insert([{a:1}, {a:2}, {a:2}])

      //Modify and return the modified document
      r = await col.findOneAnhUpdate({a:1}, {$set: {b: 1}}, {
        returnOriginal: false,
        sort: [['a',1]],
        upsert: true
      })

      //Remove and return a document
      r = await col.findOneAndDelete({a:2})

    }catch(e){
      console.log(e.stack) ;
    }
    //Close connection
    client.close();
  }
)()
