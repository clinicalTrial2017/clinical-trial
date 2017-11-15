var express = require('express');
var router = express.Router();

var elastic = require('../elasticsearch');

/* GET suggestions */
router.get('/search/:input', function (req, res, next) {
  console.log("elastic now");
  elastic.Search(req.params.input).then(function (result) { res.json(result) });
});

module.exports = router;
