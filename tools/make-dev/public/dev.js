'use strict';

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

var lines = [];
var exitCode = null;

function endBuild() {
  document.getElementById('spinny').style.display = 'none';
  document.getElementById('build').disabled = false;
}

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

function startBuild() {
  document.getElementById('spinny').style.display = '';
  document.getElementById('build').disabled = true;
  document.getElementById('output').textContent = '';

  lines = [];
  exitCode = null;
  addOutput([]);

  request('POST', '/dev/build', function(err) {
    if (err) {
      endBuild();
      return addOutput(['Failed to request build: ' + err.toString()]);
    }

    watchBuild();
  });
}

function watchBuild() {
  request('GET', '/dev/build?start=' + lines.length, function(err, result) {
    if (err) {
      endBuild();
      return addOutput(['Failed to watch build: ' + err.toString()]);      
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
