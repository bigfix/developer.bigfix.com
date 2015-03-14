var fs = require('fs'),
  path = require('path'),
  rimraf = require('rimraf'),
  escape = require('escape-html');

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

function isOperatorOfType(property, type) {
  if (property.type === 'unaryOp') {
    return property.argType === type;
  }

  if (property.type === 'binaryOp') {
    return property.leftType === type && property.rightType === type;
  }

  return false;
}

function isOperatorOfWorld(property) {
  if (property.type !== 'binaryOp') {
    return false;
  }

  return property.leftType !== property.rightType;
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
  var typesDir = path.join(siteDir, 'reference', 'types');

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

    var operatorsOfType = properties.filter(function(property) {
      return isOperatorOfType(property, type);
    });
    entries = entries.concat(makeProperties(operatorsOfType));
    
    var text = entries.join('\n\n') + '\n';
    fs.writeFileSync(path.join(typesDir, makeFileName(type) + '.md'), text);
  });
}

function makePropertiesOfWorld(properties) {
  var docsDir = path.join(siteDir, 'reference');
  var entries = [];

  var propertiesOfWorld = properties.filter(function(property) {
    return isPropertyOfWorld(property);
  });
  entries = entries.concat(makeProperties(propertiesOfWorld));

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(docsDir, 'world.md'), text);
}

function makeOperatorsOfWorld(properties) {
  var docsDir = path.join(siteDir, 'reference');
  var entries = [];

  var operatorsOfWorld = properties.filter(function(property) {
    return isOperatorOfWorld(property);
  });
  entries = entries.concat(makeProperties(operatorsOfWorld));

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(docsDir, 'operators.md'), text);
}

rimraf.sync(path.join(siteDir, 'reference'));
fs.mkdirSync(path.join(siteDir, 'reference'));
fs.mkdirSync(path.join(siteDir, 'reference', 'types'));

var properties = [];
Object.keys(language.properties).forEach(function(key) {
  properties.push(language.properties[key]);
});

makeTypes(properties);
makePropertiesOfWorld(properties);
makeOperatorsOfWorld(properties);
