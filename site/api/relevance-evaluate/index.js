var bodyParser = require('body-parser'),
  express = require('express'),
  qna = require('./lib/qna');

var app = express();

app.set('x-powered-by', false);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/relevance/evaluate', function(req, res) {
  var relevance = req.body.relevance;

  if (!relevance) {
    return res.status(400).end('Missing request relevance');
  }

  var options = {
    sizeLimit: 16384,
    timeLimit: 5 * 1000
  };

  qna(relevance, options, function(err, results) {
    if (err) {
      return res.status(500).end(err.toString());
    }

    res.json(results);
  });
});

app.listen(process.env.PORT);
