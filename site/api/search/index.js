var express = require('express'),
  Joi = require('joi'),
  search = require('./search');

var app = express();

app.set('x-powered-by', false);

var schema = Joi.object({
  query: Joi.string().required(),
  page: Joi.number().positive().integer().min(1).max(10000).default(1)
});

app.get('/api/relevance/search', function(req, res) {
  Joi.validate(req.query, schema, function(err, value) {
    if (err) {
      return res.status(400).end('invalid search query');
    }

    res.json(search(value.query, 25, (value.page - 1) * 25));
  });
});

app.listen(process.env.PORT);
