var express = require('express'),
  Joi = require('joi'),
  platforms = require('./search').platforms,
  search = require('./search').search;

var app = express();

app.set('x-powered-by', false);

var schema = Joi.object({
  query: Joi.string().required(),
  platform: Joi.string(),
  version: Joi.string(),
  page: Joi.number().positive().integer().min(1).max(10000).default(1)
});

app.get('/api/relevance/search', function(req, res) {
  Joi.validate(req.query, schema, function(err, value) {
    if (err) {
      return res.status(400).end('invalid search query');
    }
    var opts = {};
    if (value.platform) {
      opts['platform'] = value.platform.split(','); 
    }
    if (value.version) {
      opts['version'] = value.version;
    }
    res.json(search(value.query, 25, (value.page - 1) * 25, opts));
  });
});

app.get('/api/relevance/search/platforms', function (req, res) {
  res.json(platforms);
});

app.listen(process.env.PORT || 8000);
