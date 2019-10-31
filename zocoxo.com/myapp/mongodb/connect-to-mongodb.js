const MongoClient = require('mongodb').MongoClient;
var config = require ('../conf.js');

//Connection URL
const url = 'mongodb://' + config.mongo.url + ':' + config.mongo.port ;
// Database Name
const dbName = config.mongo.db;

// Use connect method to connect to the server

var connect = function (callback) {

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  //console.log("Connected successfully to server");
  const db = client.db(dbName);
  //client.close();
  callback(db, err, client );
});
}
module.exports = connect;
