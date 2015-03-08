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
