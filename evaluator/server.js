var express = require('express');
var child = require('child_process');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {

  var inFile = 'C:\\tmp\\in';
  var outFile = 'C:\\tmp\\out';

  fs.writeFileSync(inFile, 'Q:' + req.query.q);

  child.spawn('C:\\qna\\eval.exe', [inFile, outFile, 'QnA']).on('close', function () {
    fs.readFile(outFile, function (err, data) {
      var results = data.toString().trim().split('\n');
      for (var i = 0; i < results.length; ++i) {
        results[i] = results[i].trim().substring(3);
      }
      res.send(JSON.stringify(results.slice(1)));
    });
});

app.listen(80);
