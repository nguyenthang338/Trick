
const findDocuments = function(db, callback) {
  //Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}



//Only the documents which match 'a' : 3 should be returned.
