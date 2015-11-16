var buffer = require('./buffer'),
  debug = require('debug')('qna:debug'),
  path = require('path'),
  parseResults = require('./parse'),
  spawn = require('child_process').spawn;

/**
 * Run 'qna -showTypes' inside the 'bin' directory.
 */
function spawnQNA() {
  var args = ['-showtypes'];
  var options = {
    cwd: path.join(__dirname, '..', 'bin'),
    stdio: ['pipe', 'pipe', 'ignore']
  };

  return spawn(path.join(__dirname, '..', 'bin', 'qna'), args, options);
}

module.exports = function(relevance, options, callback) {
  var qna = spawnQNA();

  // Whether we've used 'callback' already.
  var done = false;

  // Whether the qna process has exited.
  var exited = false;

  // The time limit timer.
  var timer = null;

  // Kills qna if it has not already exited.
  function killIfRunning() {
    if (!exited) {
      exited = true;
      qna.kill();
    }
  }

  // Stop the time limit timer.
  function stopTimer() {
    clearTimeout(timer);
    timer = null;
  }

  // Record that qna has exited.
  qna.on('exit', function() {
    exited = true;
    debug('qna process exited');
  });

  // Record that the qna has (probably) exited and log the error. If we haven't
  // already returned something, return an error.
  qna.on('error', function(err) {
    exited = true;
    debug('qna process error: %s', err.toString());

    if (done) {
      return;
    }

    done = true;
    stopTimer();
    callback(new Error('Failed to start qna process'));
  });

  // Buffer qna output up to the size limit. If that limit is exceeded or some
  // other error happens reading stdout, kill qna and return an error. If
  // everything is good, parse and return the answer.
  buffer(qna.stdout, options.sizeLimit, function(err, output) {
    if (done) {
      return;
    }

    done = true;
    stopTimer();

    if (err) {
      killIfRunning();
      callback(err);
    } else {
      callback(null, parseResults(output.toString()));
    }
  });

  // If it takes longer than the time limit for qna to run, kill it and return
  // an error.
  timer = setTimeout(function() {
    if (done) {
      return;
    }

    done = true;
    killIfRunning();
    callback(new Error('Relevance evaluation timed out'));
  }, options.timeLimit);

  // Add a fake question to the front to avoid the engine startup cost being
  // included in the evaluation time.
  qna.stdin.end('1\n' + relevance.replace(/\n/g, ' ') + '\n');
};
