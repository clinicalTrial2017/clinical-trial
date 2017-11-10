var express = require('express');
var router = express.Router();

var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'https://search-clinical-trial-elastic-w7n7qo4pnv55yncrlnmadevfka.us-west-2.es.amazonaws.com',
  log: 'info'
});
//var elastic = require('../elasticsearch');

/* GET suggestions */
router.get('/search/:input', function (req, res, next) {
  console.log('Input: ' + req.params.input);
  var query = {
    'match': {
      '_all': req.params.input
    }
  };
  console.log('Query: ' + query);
  client.ping({
    requestTimeout: 30000,
  }, function (error) {
    if (error) {
      console.error('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });

  client.search({
    index: 'logstash-clinical-study-2017.11.09',
    type: 'tweets',
    body: {
      query: {
        match: {
          body: 'elasticsearch'
        }
      }
    }
  }).then(function (resp) {
    var hits = resp.hits.hits;
  }, function (err) {
    console.trace(err.message);
  });
  /*
  client.search({
    q: 'hi'
  }).then(function (body) {
    var hits = body.hits.hits;
  }, function (error) {
    console.trace(error.message);
  });


  client.search({
    q: query
  }, function (error) {
        if (error) {
          console.error('elasticsearch some error!');
        } else {
          console.log('All is well');
        }
  }).then(function (result) {
    console.log('Output: ' + result);
    res.json(result);
  });
  */
});


module.exports = router;
