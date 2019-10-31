var connect = require('./connect-to-mongodb');

const findDocuments = function(db,emails, callback) {
  //Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.find({email : {$eq: emails }}).toArray(function(err, docs) {
    //console.log("Found the following records");
    //kconsole.log(docs)
    callback(docs);
  });
}

module.exports = findDocuments;
