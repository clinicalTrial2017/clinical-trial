var express = require('express');
var router = express.Router();

var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/clinical";

router.post('/', function(req, res, next){
  var data = req.body;
  console.log('request received:', req.body);
  Mongo.connect(url, function(err, db) {
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
