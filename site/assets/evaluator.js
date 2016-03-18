/**
 * Returns html string for url link to the reference page for the input type
 *
 * @param type name of Relevance data type
 * @returns {string}
 */
function typeLink(type) {
  var openParen = type.indexOf('(');

  if (openParen === -1) {
    var href = '/relevance/reference/' + type.replace(/ /g, '-') + '.html';
    return '<a href="' + href + '">' + escapeHTML(type) + '</a>';
  }

  var links = type
    .substring(openParen + 2, type.length - 2)
    .replace(/[a-z][^,()]+[a-z]/g, typeLink);

  return type.substr(0, openParen) + '( ' + links + ' )';
}

/**
 * Format time for display
 *
 * @param time time in millisecond
 * @returns {string}
 */
function formatTime(time) {
  var seconds = Math.floor(time / 1000).toString();
  var milliseconds = (time % 1000).toString();

  while (milliseconds.length !== 3) {
    milliseconds = '0' + milliseconds;
  }

  return seconds + '.' + milliseconds + ' ms';
}

/**
 * Set up the relevance evaluator elements
 * @param id
 */
function initEvaluator(id) {
  var ele = document.getElementById(id),
    qnInput = ele.querySelector('.evaluate-question'),
    ansEle = ele.querySelector('.evaluate-answers'),
    btnEle = ele.querySelector('.evaluate-button');

  var editor = CodeMirror.fromTextArea(qnInput, {
    mode: {name: "relevance", htmlMode: true},
    theme: "bigfix",
    lineWrapping: true,
    matchBrackets: true,
    viewportMargin: Infinity
  });

  var getRelevance = function() {
    return editor.getValue();
  };

  var setResults = function(results) {
    var html = '';
    html += '<div>Q: ' + escapeHTML(getRelevance()) + '</div>';
    results.answers.forEach(function(answer) {
      html += '<div>A: ' + escapeHTML(answer) + '</div>';
    });
    results.errors.forEach(function(error) {
      html += '<div>E: ' + escapeHTML(error) + '</div>';
    });
    if (results.time) {
      html += '<div>T: ' + formatTime(results.time) + '</div>';
    }
    if (results.type) {
      html += '<div>I: ' + typeLink(results.type) + '</div';
    }
    ansEle.innerHTML = html;
  };

  function setError(err) {
    var message = 'Relevance evaluation failed.';
    if (err.reason === 'status') {
      if (err.status === 502) {
        message = 'Online evaluator is not available (502).';
      } else {
        message = err.response;
      }
    } else if (err.reason === 'parsing') {
      message = 'Failed to parse answers.';
    }
    ansEle.textContent = message;
  }

  var evaluateRelevance = function() {
    var body = { relevance: getRelevance() };

    requestJSON('POST', '/api/relevance/evaluate', body, function(err, results) {
      if (body.relevance != getRelevance()) {
        return;
      }

      if (err) {
        setError(err);
      } else {
        setResults(results);
      }
    });

    return false;
  };

  editor.setOption("extraKeys", {
    "Ctrl-Enter": function(cm) {
      evaluateRelevance();
    }
  });

  btnEle.onclick = evaluateRelevance;

  return editor;
}