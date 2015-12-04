var bodyParser = require('body-parser'),
  log = require('debug')('stash:debug'),
  express = require('express'),
  fs = require('fs'),
  path = require('path'),
  Joi = require('joi'),
  allocStash = require('./alloc');

/**
 * Create an express application that manages the stashes.
 */
module.exports = function(stashDir) {
  var app = express();
  
  app.set('x-powered-by', false);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  
  var getSchema = Joi.string().length(7).regex(/^[A-Za-z0-9_-]+$/);
  
  app.get('/api/stash/:id', function(req, res) {
    Joi.validate(req.params.id, getSchema, function(err, id) {
      if (err) {
        log(err.toString());
        return res.status(400).end('invalid stash id');
      }
  
      fs.readFile(path.join(stashDir, id), function(err, data) {
        if (err) {
          log(err.toString());
          return res.status(404).end('stash not found');
        }
  
        return res.end(data);
      });
    });
  });
  
  var postSchema = Joi.object({
    text: Joi.string().required().max(4096)
  });
  
  app.post('/api/stash', function(req, res) {
    Joi.validate(req.body, postSchema, function(err, body) {
      if (err) {
        return res.status(400).end('invalid stash');
      }
  
      function fail(err) {
        log(err.toString());
        res.status(500).end('failed to create stash');
      }
  
      allocStash(stashDir, function(err, id) {
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
  
  return app;
}
