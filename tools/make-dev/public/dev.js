/* exported startBuild */

'use strict';

/**
 * Make an HTTP request and parse the response as JSON.
 */
function request(method, url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (this.status !== 200) {
      return callback(new Error('request failed with status ' + this.status));
    }

    var results;

    try {
      results = JSON.parse(this.response);
    } catch (err) {
      return callback(new Error('failed to parse request results'));
    }

    callback(null, results);
  };

  xhr.onerror = function() {
    return callback(new Error('request failed'));
  };

  xhr.open(method, url, true);
  xhr.send();
}

// The lines of the build output.
var lines = [];

// The exit code of the build.
var exitCode = null;

/**
 * Reset the spinny.gif and enable the build button.
 */
function endBuild() {
  document.getElementById('spinny').style.display = 'none';
  document.getElementById('build').disabled = false;
}

/**
 * Add build output to the document.
 */
function addOutput(addedLines) {
  lines = lines.concat(addedLines);

  var text = lines.join('\n')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();

  var html = '<span id="command">$ make</span>\n' + text;

  if (exitCode !== null) {
    if (exitCode === 0) {
      html += '\n<span class="build-success">Build successful</span>';
    } else {
      html += '\n<span class="build-failure">Build failed</span>';
    }
  }

  var outputElement = document.getElementById('output');
  outputElement.innerHTML = html;
  outputElement.scrollTop = outputElement.scrollHeight;
}

/**
 * Start a build.
 */
function startBuild() {
  document.getElementById('spinny').style.display = '';
  document.getElementById('build').disabled = true;
  document.getElementById('output').textContent = '';

  lines = [];
  exitCode = null;
  addOutput([]);

  request('POST', '/build/start', function(err) {
    if (err) {
      exitCode = -1;
      addOutput(['Failed to request build: ' + err.toString()]);
      return endBuild();
    }

    watchBuild();
  });
}

/**
 * Continuously poll for new build output while the build is running.
 */
function watchBuild() {
  request('GET', '/build/status?start=' + lines.length, function(err, result) {
    if (err) {
      exitCode = -1;
      addOutput(['Failed to watch build: ' + err.toString()]);
      return endBuild();
    }

    exitCode = result.exitCode;
    addOutput(result.lines);

    if (result.running) {
      watchBuild();
    } else {
      endBuild();
    }
  });
}
