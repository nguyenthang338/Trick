var express = require('express');
var router = express.Router();
var connect = require('../mongodb/connect-to-mongodb.js')
var findDocument = require('../mongodb/find-documents');
/* GET home page. */
router.post('/', function(req, res, next) {
  //res.render('index.ejs', { title: 'Express' });
  var email = req.body.email;
  connect( (db) => {
    findDocument(db, email, (result) =>{
      //res.send(result);
      //console.log(result);
      if (result.length > 0 ){
        res.send("User ton tai \n") ;
      }else{
        res.send("tao moi \n") ;
      }
    })
  })

});

module.exports = router;
