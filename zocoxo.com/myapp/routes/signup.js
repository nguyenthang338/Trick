var express = require('express');
var router = express.Router();
var connect = require('../mongodb/connect-to-mongodb');
var insertDocument = require('../mongodb/insert-documents.js')

var findDocument = require('../mongodb/find-documents');

var makeid = require('../mongodb/random-string.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.body.username);
  res.render('signup.ejs');
});


router.post('/', function(req, res, next) {
  var users = {};
  users.email = req.body.email;
  users.psw = req.body.psw;
  users.url = makeid(12);
  users.coin = {
    count:0, address: '',
  }
  users.usd= {  count:0, address: ''},
    connect((db) => {
      insertDocument(db,users,(result) => {
        res.render('data.ejs', {data: users.email})
      })
    })

});

/*
connect((db) => {
  insertDocument(db,users,(result) => {
    // console.log(result);
  });
});
*/

    module.exports = router;
