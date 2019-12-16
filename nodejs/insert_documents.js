const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://172.17.0.2:27017';
const dbName = 'nvthang';

( async function(){
  let client;

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
  client.close();
})();

//Async with await . chi lam code  de doc hon mot ti . chu van phai dung callback function. Dung khong nao.. Callback function is King .
//Mongodb is the kingdung khong nao.
