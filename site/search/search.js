var fs = require('fs'),
  path = require('path');

var selectQuery = fs.readFileSync(path.join(__dirname, 'query.sql')).toString();

function search(db, params, callback) {
  var limitedQuery = selectQuery +
    ' limit ' + params.limit +
    ' offset ' + params.offset;

  var queryParams = {
    $queryEqual: params.query,
    $queryLike: '%' + params.query + '%'
  };

  db.all(limitedQuery, queryParams, function(err, results) {
    if (err) {
      console.error('Query failed: ' + err.toString());
      return callback(err);
    }

    var markup = results.map(function(result) {
      return result.Markup;
    });

    callback(null, markup);
  });
}

module.exports = search;
