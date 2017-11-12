var express = require('express');
var router = express.Router();


var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost:27017/clinical';
if (process.env.NODE_ENV === 'production') {
  dbURI = 'mongodb://clinicalTrial2017:clinicalTrial2017!@ds231715.mlab.com:31715/heroku_vrprv3qd';
}

var promise = mongoose.connect( dbURI, {
  useMongoClient: true
  /* other options */
});

/*
var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/clinical";

if (process.env.NODE_ENV === 'production') {
  url = 'mongodb://clinicalTrial2017:clinicalTrial2017!@ds231715.mlab.com:31715/heroku_vrprv3qd';
}
*/

router.post('/', function(req, res, next){
  var data = req.body;
  console.log('request received:', req.body);
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = data;
    db.collection("review").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  })
});

module.exports = router;
