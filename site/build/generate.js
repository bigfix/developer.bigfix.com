var fs = require('fs'),
  Hogan = require('hogan.js'),
  path = require('path'),
  rimraf = require('rimraf');

function renderType(type, docs, associations, template) {
  var creation = associations.creation[type];
  var methods = associations.methods[type];

  function getDoc(property) {
    return docs.properties[property]
  }

  var data = {
    name: type,
    description: docs.types[type]
  };

  var creationEntries = creation.properties.sort()
    .concat(creation.casts.sort())
    .concat(creation.operators.sort());

  if (creationEntries.length !== 0) {
    data.creation = creationEntries.map(getDoc).join('\n\n');
  }

  if (methods.properties.length !== 0) {
    data.properties = methods.properties.sort().map(getDoc).join('\n\n');
  }

  if (methods.casts.length !== 0) {
    data.casts = methods.casts.sort().map(getDoc).join('\n\n');
  }

  if (methods.operators.length !== 0) {
    data.operators = methods.operators.sort().map(getDoc).join('\n\n');
  }

  return template.render(data);
}

function compileTemplate(templatesDir, name) {
  var contents = fs.readFileSync(path.join(templatesDir, name)).toString()
  return Hogan.compile(contents);
}

function generate(templatesDir, language, docs, associations, outDir) {
  var referenceDir = path.join(outDir, 'reference');
  var typesDir = path.join(referenceDir, 'types');

  var templates = {
    type: compileTemplate(templatesDir, 'type.html'),
    page: compileTemplate(templatesDir, 'page.html'),
  };

  rimraf.sync(referenceDir);
  fs.mkdirSync(referenceDir);
  fs.mkdirSync(typesDir);

  Object.keys(language.types).forEach(function(type) {
    var data = {
      title: type,
      content: renderType(type, docs, associations, templates.type)
    };

    var file = path.join(typesDir, type.replace(/ /g, '-')) + '.html';
    fs.writeFileSync(file, templates.page.render(data));
  });
}

module.exports = generate;
