var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    // host: 'localhost:9200',
    host: 'https://search-clinical-trial-elastic-w7n7qo4pnv55yncrlnmadevfka.us-west-2.es.amazonaws.com',
    log: 'info'
});


// function Search(term) {
//   return client.search({
//     q: term
//   });
// }

function Search(term) {
  return client.search({
    body: {
      query: {
        match: {
          _all: term
        }
      },
      suggest: {
          text: term
      }
    }
  });
}


exports.Search = Search;
