var fs = require('fs'),
  path = require('path'),
  rimraf = require('rimraf'),
  escape = require('escape-html'),
  yaml = require('js-yaml'),
  mkdirp = require('mkdirp');

if (process.argv.length !== 5) {
  console.error(
    'usage: create-pages ' +
    '<site-dir> <language.json> <docs.json>');

  return process.exit(1);
}

var siteDir = process.argv[2];
var language = JSON.parse(fs.readFileSync(process.argv[3]));
var docs = JSON.parse(fs.readFileSync(process.argv[4]));

function makeFileName(name) {
  return name.trim().replace(/ /g, '-');
}

function isPropertyOfType(property, type) {
  if (property.type !== 'property') {
    return false;
  }

  if (property.directObjectType === type) {
    return true;
  }

  if (!property.directObjectType && property.indexType === type) {
    return true;
  }

  return false;
}

function isTupleType(type) {
  return type.indexOf(',') !== -1;
}

function isPropertyOfWorld(property) {
  if (property.type !== 'property') {
    return false;
  }

  if (property.directObjectType) {
    return isTupleType(property.directObjectType);
  }

  if (property.indexType) {
    return isTupleType(property.indexType);
  }

  return true;
}

function isCastOfType(property, type) {
  return property.type === 'cast' && property.argType === type;
}

function docText(originalText) {
  if (originalText) {
    return escape(originalText).trim();
  }

  return 'No documentation exists.';
}

function makeProperties(properties) {
  var entries = [];

  properties.forEach(function(property) {
    var text = '# ' + escape(property.key) + '\n\n' +
      docText(docs.properties[property.key]);

    entries.push(text);
  });

  entries.sort();
  return entries;
}

function makeTypes(properties) {
  var typesDir = path.join(siteDir, 'docs', 'types');

  Object.keys(language.types).forEach(function(type) {
    var entries = ['# type: ' + type + '\n\n' + docText(docs.types[type])];

    var propertiesOfType = properties.filter(function(property) {
      return isPropertyOfType(property, type);
    });
    entries = entries.concat(makeProperties(propertiesOfType));

    var castsOfType = properties.filter(function(property) {
      return isCastOfType(property, type);
    });
    entries = entries.concat(makeProperties(castsOfType));
    
    var text = entries.join('\n\n') + '\n';
    fs.writeFileSync(path.join(typesDir, makeFileName(type) + '.md'), text);
  });
}

function makeWorldType(properties) {
  var docsDir = path.join(siteDir, 'docs');

  var propertiesOfWorld = properties.filter(function(property) {
    return isPropertyOfWorld(property);
  });
  var entries = makeProperties(propertiesOfWorld);

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(docsDir, 'world.md'), text);
}

function makeOperators(properties) {
  var docsDir = path.join(siteDir, 'docs');
  var entries = [];

  var binaryOperators = properties.filter(function(property) {
    return property.type === 'binaryOp';
  });

  binaryOperators.forEach(function(property) {
    var text = '# ' + escape(property.key) + '\n\n' +
      docText(docs.properties[property.key]);

    entries.push(text);
  });

  var unaryOperators = properties.filter(function(property) {
    return property.type === 'unaryOp';
  });

  unaryOperators.forEach(function(property) {
    var text = '# ' + escape(property.key) + '\n\n' +
      docText(docs.properties[property.key]);

    entries.push(text);
  });

  entries.sort();

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(docsDir, 'operators.md'), text);
}

rimraf.sync(path.join(siteDir, 'docs'));
fs.mkdirSync(path.join(siteDir, 'docs'));
fs.mkdirSync(path.join(siteDir, 'docs', 'types'));

var properties = [];
Object.keys(language.properties).forEach(function(key) {
  properties.push(language.properties[key]);
});

makeTypes(properties);
makeWorldType(properties);
makeOperators(properties);
