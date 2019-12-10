const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const rm = require('./removeDocument.js'); //Connection URL
//const rm = require ('./removeDocument.js')
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';

//New paramaster for mongodb connection
var useNewUrlParser = true;
var useUnifiedTopology = true;
// Use connect method to connect to the server
MongoClient.connect(url,{
  useNewUrlParser,
  useUnifiedTopology
}, function(err, client) {
  console.log("Connected successfully to server");
  //const db = client.db(dbName);

  const collection = client.db(dbName).collection('documents');
  collection.deleteOne({ a : 3 });
  console.log("Delete sucesses")
  collection.updateOne({ a : 2 },
    { $set: { b : 1} } );
  console.log ("Update sucess . Dung kho");
  //insertDocuments(db, function(){
  //Call back function is pipeline
  //
  /*
    rm.save(db, function(){
      updateDocument(db, function(){
       client.close() ;
        //   })
    })
    */
  //})
});

//insertDocuments(dbName);
const insertDocuments = function(db, callback) {
  const collection = db.collection('documents');
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

//Add a query documents
//Defined callback function day con gi
/*
const findDocuments = function(db, callback){
  const collection = db.collection('documents')
  collection.find({}).toArray(function(err, docs){
    console.log('Found the following records') ;
    console.log(docs);
    callback();
  })
}
*/
//Defined callback function - find documents with a query filter

const findDocuments = function(db, callback){
  const collection = db.collection('documents')
  collection.find({'a': 3}).toArray(function(err, docs){
    console.log("Found the following records") ;
    console.log(docs);
    callback(result);
  })
}

//Defined callback function - Update a document

const updateDocument = function(db, callback){
  const collection = db.collection('documents');
  collection.updateOne({ a : 2 }
    ,{ $set: { b : 1 } }, function(err, result){
      console.log("Update the document with the field a equal to 2") ;
      callback(result);
    })
}

//Remove callback function
  /*
const removeDocument = function(db, callback){
  const collection = db.collection('documents');
  collection.deleteOne({ a : 3 }, function (err, result){
    assert.equal(err, null);
    assert.equal(1, result.result.n);

    console.log("Removed the document with the filed a equal to 3");
    callback(result);
  })
}
*/
