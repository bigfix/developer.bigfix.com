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
  var replacements = {
    '\\-': ' minus ',
    ' != ': ' not equal ',
    ' >= ': ' greater equal ',
    ' <= ': ' less equal ',
    ' < ': ' less ',
    ' > ': ' greater ',
    ' = ': ' equal ',
    ' \\+ ': ' plus ',
    ' \\* ': ' times ',
    ' / ': ' divide ',
    ' & ': ' concat ',
    '[<>(),]': ' ',
    '\\s+': ' '
  };

  Object.keys(replacements).forEach(function(key) {
    name = name.replace(new RegExp(key, 'g'), replacements[key]);
  });

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

function escapeKey(key) {
  return key
    .replace(/<([a-z])/g, '[$1')
    .replace(/([a-z])>/g, '$1]')
    .replace(/\( /g, '')
    .replace(/ \)/g, '');
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
    var text = '# ' + escapeKey(property.key) + '\n\n' +
      docText(docs.properties[property.key]);

    entries.push(text);
  });

  entries.sort();
  return entries;
}

function makeTypes(properties) {
  var referenceDir = path.join(siteDir, 'reference');

  Object.keys(language.types).forEach(function(type) {
    var entries = ['# ' + type + '\n\n' + docText(docs.types[type])];

    var propertiesOfType = properties.filter(function(property) {
      return isPropertyOfType(property, type);
    });
    entries = entries.concat(makeProperties(propertiesOfType));

    var castsOfType = properties.filter(function(property) {
      return isCastOfType(property, type);
    });
    entries = entries.concat(makeProperties(castsOfType));
    
    var text = entries.join('\n\n') + '\n';
    fs.writeFileSync(path.join(referenceDir, makeFileName(type) + '.md'), text);
  });
}

function makeWorldType(properties) {
  var referenceDir = path.join(siteDir, 'reference');

  var propertiesOfWorld = properties.filter(function(property) {
    return isPropertyOfWorld(property);
  });
  var entries = makeProperties(propertiesOfWorld);

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(referenceDir, 'world.md'), text);
}

function makeOperators(properties) {
  var referenceDir = path.join(siteDir, 'reference');
  var entries = [];

  var binaryOperators = properties.filter(function(property) {
    return property.type === 'binaryOp';
  });

  binaryOperators.forEach(function(property) {
    var text = '# ' + escapeKey(property.key) + '\n\n' +
      docText(docs.properties[property.key]);

    entries.push(text);
  });

  var unaryOperators = properties.filter(function(property) {
    return property.type === 'unaryOp';
  });

  unaryOperators.forEach(function(property) {
    var text = '# ' + escapeKey(property.key) + '\n\n' +
      docText(docs.properties[property.key]);

    entries.push(text);
  });

  entries.sort();

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(referenceDir, 'operators.md'), text);
}

rimraf.sync(path.join(siteDir, 'reference'));
fs.mkdirSync(path.join(siteDir, 'reference'));

var properties = [];
Object.keys(language.properties).forEach(function(key) {
  properties.push(language.properties[key]);
});

makeTypes(properties);
makeWorldType(properties);
makeOperators(properties);
