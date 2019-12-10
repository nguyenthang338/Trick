exports.remove = function(db, callback){
  const collection = db.collection('documents');
  collection.deleteOne({ a : 3 }, function (err, result){

    console.log("Removed the document with the filed a equal to 3");
    callback(result);
  })
}
exports.save = function(db, callback){
  const collection = db.collection('documents');
  collection.deleteOne({ a : 3 }, function (err, result){

    console.log("Removed the document with the filed a equal to 3");
    callback(result);
  })
}

