var bodyParser = require('body-parser'),
  es = require('event-stream'),
  express = require('express'),
  path = require('path'),
  spawn = require('child_process').spawn;

var app = express();

app.set('x-powered-by', false);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

function parseResults(results) {
  var lines = results.split('\n').slice(3);

  var answers = [];
  var errors = [];
  var time = 0;
  var type = '';

  lines.forEach(function(line) {
    if (line.indexOf('Q: ') === 0) {
      line = line.slice(3);
    }

    if (line.indexOf('A: ') === 0) {
      answers.push(decodeURIComponent(line.slice(3)));
    } else if (line.indexOf('E: ') === 0) {
      errors.push(decodeURIComponent(line.slice(3)));
    } else if (line.indexOf('T: ') === 0) {
      time = Number(line.slice(3));
    } else if (line.indexOf('I: ') === 0) {
      type = line.slice(3);
    }
  });

  return { answers: answers, errors: errors, time: time, type: type };
}

function qna(relevance, callback) {
  var timer = null;
  var aborted = false;

  var args = ['-showtypes'];
  var options = {
    cwd: path.join(__dirname, 'bin'),
    stdio: ['pipe', 'pipe', 'ignore']
  };

  var child = spawn(path.join(__dirname, 'bin', 'qna'), args, options);

  child.on('error', function(err) {
    if (aborted) {
      return;
    }

    aborted = true;
    callback(err);
  });

  child.stdout.pipe(es.wait(function(err, body) {
    if (aborted) {
      return;
    }

    clearTimeout(timer);
    timer = null;

    if (err) {
      return callback(err);
    }

    callback(null, parseResults(body.toString()));
  }));

  function onTimeout() {
    if (aborted) {
      return;
    }

    aborted = true;
    timer = null;
    child.kill();
    callback(new Error('Relevance evaluation timed out.'));
  }

  timer = setTimeout(onTimeout, 30 * 1000);

  // Add a fake question to the front to avoid the engine startup cost being
  // included in the evaluation time.
  var cleanRelevance = '1\n' + relevance.replace(/\n/g, ' ') + '\n';
  child.stdin.end(cleanRelevance);
}

app.post('/api/relevance/evaluate', function(req, res) {
  var relevance = req.body.relevance;

  if (!relevance) {
    return res.status(400).end('Missing request relevance');
  }

  qna(relevance, function(err, results) {
    if (err) {
      return res.status(500).end(err.toString());
    }

    res.json(results);
  });
});

app.listen(process.env.PORT);
