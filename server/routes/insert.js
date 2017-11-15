var express = require('express');
var router = express.Router();

var Mongo = require('mongodb').MongoClient;
// var dbURI  = "mongodb://localhost:27017/clinical";
// if (process.env.NODE_ENV === 'production') {
//   dbURI = 'mongodb://clinicalTrial2017:clinicalTrial2017!@ds231715.mlab.com:31715/heroku_vrprv3qd';
// }
var dbURI = 'mongodb://clinicalTrial2017:clinicalTrial2017!@ds231715.mlab.com:31715/heroku_vrprv3qd';

router.post('/', function(req, res, next){
  var data = req.body;
  console.log('request received:', req.body);
  Mongo.connect(dbURI, function(err, db) {
    if (err) throw err;
    var myobj = data;
    db.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  })
});

module.exports = router;
