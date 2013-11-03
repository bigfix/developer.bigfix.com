var express = require('express');
var exphbs = require('express3-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'deps')));

app.get('/evaluate', function (req, res) {
	res.send(new Date());
});

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000, '127.0.0.1');
