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

router.get('/:input',function(req, res, next){
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    console.log(req.params.input);
    db.collection("review").find({id:req.params.input}).toArray(
      function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
        db.close();
      });
  })/*.then(function(result) {console.log(result);})*/;
});

module.exports = router;
