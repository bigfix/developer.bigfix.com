var express = require('express'),
  path = require('path'),
  spawn = require('child_process').spawn,
  es = require('event-stream');

var app = express();
var build;

/**
 * Run 'make' inside the /home/vagrant directory.
 */
function startBuild() {
  var build = {};

  build.running = true;
  build.output = [];
  build.exitCode = null;
  build.callback = null;

  var pendingCount = 2;

  var options = {
    cwd: '/home/vagrant',
    stdio: 'pipe'
  };

  var child = spawn('make', [], options);

  function maybeDone() {
    pendingCount--;
    if (pendingCount === 0) {
      build.running = false;
      notifyCallback();
    }
  }

  function notifyCallback() {
    var callback = build.callback;
    build.callback = null;

    if (callback) {
      callback();
    }
  }

  function logData(data) {
    build.output.push(data.toString());
    notifyCallback();
  }

  es.merge(child.stdout, child.stderr)
    .pipe(es.split())
    .pipe(es.through(logData, maybeDone));

  child.on('close', function(code) {
    build.exitCode = code;
    maybeDone();
  });

  return build;
}

/**
 * Serve the files for the web page.
 */
app.use('/dev', express.static(path.join(__dirname, 'public')));

/**
 * Start a build.
 */
app.post('/dev/build', function(req, res) {
  if (build && build.running) {
    return res.status(400).json({ msg: 'a build is already in progress' });
  }

  build = startBuild();
  res.json({ msg: 'build started' });
});

/**
 * Get the build status.
 */
app.get('/dev/build', function(req, res) {
  if (!build) {
    return res.status(400).json({ msg: 'no build is running' });
  }

  var start = 0;
  if (req.query.start) {
    start = parseInt(req.query.start);
  }

  function sendResponse() {
    res.json({
      running: build.running,
      lines: build.output.slice(start),
      exitCode: build.running ? null : build.exitCode
    });
  }

  // If there's no new output to send, don't respond to the request until we
  // get some new output.

  if (start >= build.output.length && build.running) {
    build.callback = sendResponse;
  } else {
    sendResponse();
  }
});

app.listen(5000);
