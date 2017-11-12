var elasticsearch = require('elasticsearch');

/////////production elasticsearch /////////////////////
var client = new elasticsearch.Client({
    host: 'https://search-clinical-trial-elastic-w7n7qo4pnv55yncrlnmadevfka.us-west-2.es.amazonaws.com',
    log: 'info'
});

//////////local elastic ////////
// var client = new elasticsearch.Client({
//     host: 'localhost:9200',
//     log: 'info'
// });

function Search(term) {
  return client.search({
    q: term
  });
}

exports.Search = Search;
