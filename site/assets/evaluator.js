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
 * @param ele {HTMLElement}
 */
function initEvaluator(ele) {
  var qnInput = ele.querySelector('.evaluate-question'),
    ansEle = ele.querySelector('.evaluate-answers'),
    loadingEle = ele.querySelector('.loading'),
    selectionEval = false;

  var editor = CodeMirror.fromTextArea(qnInput, {
    mode: {name: "relevance", htmlMode: true},
    theme: "bigfix",
    lineWrapping: true,
    matchBrackets: true,
    viewportMargin: Infinity
  });

  var getRelevance = function() {
    if (editor.getSelection()) {
      selectionEval = true;
      return editor.getSelection();
    }
    selectionEval = false;
    return editor.getValue();
  };

  var showLoading = function() {
    $(loadingEle).removeClass('hidden');
    $(ele).find('.a').addClass('hidden');
    $(ele).find('.e').addClass('hidden');
  };

  var hideLoading = function() {
    $(loadingEle).addClass('hidden');
  };

  var setResults = function(results) {
    if (results.answers.length || results.type) {
      $(ele).find('.a').removeClass('hidden');
      $(ele).find('.a .evaluate-answers').html(
        results.answers.map(function(error) { return '<div>' + escapeHTML(error) + '</div>'; }).join("")
      );
      if (results.answers.length == 0) {
        $(ele).find('.a .evaluate-answers').html('<div class="empty">&lt;empty result&gt;</div>');
      }
    }
    if (results.errors.length) {
      $(ele).find('.e').removeClass('hidden');
      $(ele).find('.e .evaluate-errors').html(
        results.errors.map(function(error) { return '<div>' + escapeHTML(error) + '</div>'; }).join("")
      );
    }
    var status = "";
    if (selectionEval) {
      status += '<div>Current Selection Evaluation</div>';
    }
    if (results.time) {
      status += '<div>Evaluation Time: ' + formatTime(results.time) + '</div>';
    }
    if (results.type) {
      status += '<div>Returned Type: ' + typeLink(results.type) + '</div>';
    }
    $(ele).find('.toolbar .status').html(status);
  };

  var setError = function(err) {
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
  };

  var evaluateRelevance = function() {
    var body = { relevance: getRelevance() };
    showLoading();
    requestJSON('POST', '/api/relevance/evaluate', body, function(err, results) {
      hideLoading();
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

  $(ele).find('.evaluate-button').click(evaluateRelevance);

  return editor;
}