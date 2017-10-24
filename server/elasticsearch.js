var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'info'
});

function Search(term) {
  return client.search({
    q: term
  });
}

exports.Search = Search;
