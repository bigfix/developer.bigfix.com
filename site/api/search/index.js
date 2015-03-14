var express = require('express'),
  search = require('./search');

var app = express();

app.get('/api/search', function(req, res) {
  var query = req.query.query;
  var offset = Number(req.query.offset || 0);
  var limit = Number(req.query.limit || 25);

  if (!query || Number.isNaN(offset) || Number.isNaN(limit)) {
    return res.status(400).end('invalid search query');
  }

  if (offset < 0) {
    offset = 0;
  }

  if (limit < 0) {
    limit = 0;
  } else if (limit > 50) {
    limit = 50;
  }

  res.json(search(query, limit, offset));
});

app.listen(process.env.PORT);
