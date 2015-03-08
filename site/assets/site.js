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

function toggleShared() {
  if (!window.location.hash) {
    return;
  }

  var id = window.location.hash.slice(1);
  var entry = document.getElementById(id);

  if (!entry) {
    return;
  }

  var entryHeading = entry.firstElementChild;
  var entryExpand = entryHeading.firstElementChild;

  entryExpand.click();
}

toggleShared();
