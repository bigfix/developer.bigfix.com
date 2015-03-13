/**
 * Expand all entries on the page.
 */
function expandAll() {
  var entries = document.querySelectorAll('.entry');

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
  var entries = document.querySelectorAll('.entry');

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

  element.parentElement.nextElementSibling.classList.toggle('entry-hidden');
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

toggleOnLoad();
