var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send(new Date());
});

app.listen(3001, '127.0.0.1');
