var express = require('express');
var router = express.Router();
var connect = require('../mongodb/connect-to-mongodb.js')
var findDocument = require('../mongodb/find-documents.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});


router.post('/authen', function(req, res, next){
  //res.send('Why not running')
  //Check exist email from mongod
  var emails = req.body.email
  connect((db) => {
    findDocument(db, emails, (result) => {
      if (result.length > 0){
        res.send(result);
      } else { res.send('test');}
    })
  })
})
module.exports = router;
