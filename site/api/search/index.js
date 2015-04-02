var express = require('express'),
  search = require('./search');

var app = express();

app.set('x-powered-by', false);

app.get('/api/search', function(req, res) {
  var query = req.query.query;
  var page = parseInt(req.query.page || '0', 10);

  if (!query || Number.isNaN(page)) {
    return res.status(400).end('invalid search query');
  }

  if (page < 1) {
    page = 1;
  }

  res.json(search(query, 25, (page - 1) * 25));
});

app.listen(process.env.PORT);
