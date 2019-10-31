var MongoClient = require('./connect-to-mongodb.js');

const insertDocument = function(db,users, callback) {
  //Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertOne( users
  , function(err, result) {
    //console.log("Inserted a users");
    console.log("Error insert: " + err);
    callback(result);
  });
}

module.exports = insertDocument;
//}}}]}
