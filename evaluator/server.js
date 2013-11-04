var express = require('express');
var child = require('child_process');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {

  var inFile = 'C:\\tmp\\in';
  var outFile = 'C:\\tmp\\out';

  fs.writeFileSync(inFile, 'Q:' + req.query.q);

  child.spawn('C:\\qna\\eval.exe', [inFile, outFile, 'QnA']).on('close', function () {
    res.send(fs.readFileSync(outFile));
  });
});

app.listen(80);
