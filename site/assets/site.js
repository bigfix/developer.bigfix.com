/**
 * Make an HTTP request.
 */
function requestJSON(method, url, body, callback) {
  var request = new XMLHttpRequest();

  if (!callback) {
    callback = body;
    body = undefined;
  }

  request.onload = function() {
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

  request.onerror = function() {
    return callback(new Error('request failed'));
  };

  request.open(method, url, true);

  if (body) {
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
  } else {
    request.send();
  }
}

/**
 * Expand all entries on the page.
 */
function expandAll() {
  var entries = document.querySelectorAll('.relevance-property');

  for (var i = 0; i < entries.length; i++) {
    var element = entries[i].firstElementChild.firstElementChild;

    if (element.firstElementChild.classList.contains('fa-plus-circle')) {
      toggleEntry(element);
    }
  }
}

/**
 * Collapse all entries on the page.
 */
function collapseAll() {
  var entries = document.querySelectorAll('.relevance-property');

  for (var i = 0; i < entries.length; i++) {
    var element = entries[i].firstElementChild.firstElementChild;

    if (element.firstElementChild.classList.contains('fa-minus-circle')) {
      toggleEntry(element);
    }
  }
}

/**
 * Toggle an entry when someone clicks on the +/-.
 */
function toggleEntry(element) {
  var classList = element.firstElementChild.classList;

  if (classList.contains('fa-plus-circle')) {
    classList.remove('fa-plus-circle');
    classList.add('fa-minus-circle');
  } else {
    classList.remove('fa-minus-circle');
    classList.add('fa-plus-circle');
  }

  element.parentElement.nextElementSibling.classList.toggle('hidden');
}

/**
 * Toggle an entry that's linked to when the page loads.
 */
function toggleOnLoad() {
  if (!window.location.hash) {
    return;
  }

  var id = window.location.hash.slice(1);
  var entry = document.getElementById(id);

  if (!entry || !entry.classList.contains('entry')) {
    return;
  }

  var entryHeading = entry.firstElementChild;
  var entryExpand = entryHeading.firstElementChild;

  entryExpand.click();
}
