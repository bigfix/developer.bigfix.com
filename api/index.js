var express = require('express');

var app = express(),
  port = process.env.PORT || 3000;

app.disable('x-powered-by');

app.get('/api', function (req, res) {
  res.json({
    time: 300,
    type: "string",
    results: [
      "Hello, world!"
    ]
  });
});

app.listen(port);
console.log('api on port ' + port);
