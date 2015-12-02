var bodyParser = require('body-parser'),
  express = require('express'),
  fs = require('fs'),
  path = require('path'),
  Joi = require('joi'),
  getUnusedStash = require('./stash');

var app = express();

app.set('x-powered-by', false);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var stashDir = process.env.STASHDIR;
if (!stashDir) {
  console.error('Missing STASHDIR environment variable');
  process.exit(1);
}

var getSchema = Joi.string().length(7).regex(/[A-Za-z0-9_]+/);
var postSchema = Joi.object({
  text: Joi.string().required().max(4096)
});

app.get('/api/stash/:id', function(req, res) {
  Joi.validate(req.params.id, getSchema, function(err, id) {
    if (err) {
      return res.status(400).end('invalid stash id');
    }

    fs.readFile(path.join(stashDir, id), function(err, data) {
      if (err) {
        console.error(err.toString());
        return res.status(404).end('stash not found');
      }

      return res.end(data);
    });
  });
});

app.post('/api/stash', function(req, res) {
  Joi.validate(req.body, postSchema, function(err, body) {
    if (err) {
      return res.status(400).end('invalid stash');
    }

    function fail(err) {
      console.error(err.toString());
      res.status(500).end('failed to create stash');
    }

    getUnusedStash(stashDir, function(err, id) {
      if (err) {
        return fail(err);
      }

      fs.writeFile(path.join(stashDir, id), body.text, function(err) {
        if (err) {
          return fail(err);
        }

        res.json({id: id});
      });
    });
  });
});

app.listen(process.env.PORT);
