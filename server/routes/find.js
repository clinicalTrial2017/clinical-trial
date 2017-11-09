var express = require('express');
var router = express.Router();

var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/clinical";

router.get('/:input',function(req, res, next){
  Mongo.connect(url, function(err, db) {
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
