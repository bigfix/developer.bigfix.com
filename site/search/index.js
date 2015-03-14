var express = require('express'),
  search = require('./search'),
  sqlite3 = require('sqlite3');

var db = new sqlite3.Database(process.env.DATABASE_FILE);
db.parallelize();

var app = express();

app.get('/search', function(req, res) {
  var params = {
    query: req.query.query,
    offset: Number(req.query.offset || 0),
    limit: Number(req.query.limit || 25)
  };

  if (!params.query || Number.isNaN(params.offset) ||
      Number.isNaN(params.limit)) {
    return res.status(400).end('invalid search query');
  }

  if (params.offset < 0) {
    params.offset = 0;
  }

  if (params.limit < 0) {
    params.limit = 0;
  }

  if (params.limit > 100) {
    params.limit = 100;
  }

  search(db, params, function(err, results) {
    if (err) {
      return res.status(500).end('search failed');
    }

    return res.json(results);
  });
});

app.listen(process.env.PORT);
