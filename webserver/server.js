var express = require('express');
var exphbs = require('express3-handlebars');
var path = require('path');
var http = require('http');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'deps')));

app.get('/evaluate', function (req, res) {
  http.get('http://ec2-204-236-174-221.us-west-1.compute.amazonaws.com?q=' + encodeURI(req.query.q), function (upstreamRes) {
    upstreamRes.pipe(res);
  }).on('error', function (error) {
    res.status(502).send(error.message);
  });
});

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3001, '127.0.0.1');
