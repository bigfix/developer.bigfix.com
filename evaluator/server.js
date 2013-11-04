var express = require('express');
var child = require('child_process');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {
  res.send('you evaluated: ' + req.query.q);
});

app.listen(80);
