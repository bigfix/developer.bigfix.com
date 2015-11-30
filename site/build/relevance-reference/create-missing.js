var fs = require('fs'),
  path = require('path'),
  rimraf = require('rimraf'),
  escape = require('escape-html');

/**
 * Create a file name from a type name.
 */
function makeFileName(name) {
  return name.trim().replace(/ /g, '-');
}

/**
 * Returns whether a person would probably think that the 'property' is a 
 * property of 'type'.
 */
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

/**
 * Returns whether the type is a tuple type.
 */
function isTupleType(type) {
  return type.indexOf('(') !== -1;
}

/**
 * Returns whether there probably isn't a good 'type' to associate this
 * 'property' with, so it should be a property of the world.
 */
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

/**
 * Returns whether this is a cast that operates on 'type'.
 */
function isCastOfType(property, type) {
  return property.type === 'cast' && property.argType === type;
}

/**
 * Returns whether this is an operator of this type. That means that the type
 * is all of it's arguments.
 */
function isOperatorOfType(property, type) {
  if (property.type === 'unaryOp') {
    return property.argType === type;
  }

  if (property.type === 'binaryOp') {
    return property.leftType === type && property.rightType === type;
  }

  return false;
}

/**
 * Returns whether there isn't a good type to associate this operator with, so
 * it should be an operator of the world.
 */
function isOperatorOfWorld(property) {
  if (property.type !== 'binaryOp') {
    return false;
  }

  return property.leftType !== property.rightType;
}

/**
 * Returns the existing documentation for the property, or some default text if
 * no documentation exists.
 */
function docText(existing) {
  if (existing && existing.text) {
    return existing.text.trim();
  }

  return 'No documentation exists.';
}

/**
 * Make the documentation for all of properties.
 */
function makeProperties(docs, properties) {
  var entries = [];

  properties.forEach(function(property) {
    var text = '# ' + escape(property.key) + '\n\n' +
      docText(docs.properties[property.key]);

    entries.push(text);
  });

  entries.sort();
  return entries;
}

/**
 * Make the documentation that lives in each 'some-type.md' file.
 */
function makeTypes(language, docsDir, docs, properties) {
  Object.keys(language.types).forEach(function(type) {
    var entries = ['# type: ' + type + '\n\n' + docText(docs.types[type])];

    var propertiesOfType = properties.filter(function(property) {
      return isPropertyOfType(property, type);
    });
    entries = entries.concat(makeProperties(docs, propertiesOfType));

    var castsOfType = properties.filter(function(property) {
      return isCastOfType(property, type);
    });
    entries = entries.concat(makeProperties(docs, castsOfType));

    var operatorsOfType = properties.filter(function(property) {
      return isOperatorOfType(property, type);
    });
    entries = entries.concat(makeProperties(docs, operatorsOfType));
    
    var text = entries.join('\n\n') + '\n';
    fs.writeFileSync(path.join(docsDir, makeFileName(type) + '.md'), text);
  });
}

/**
 * Make the documentation that lives in the 'world.md' file.
 */
function makePropertiesOfWorld(docsDir, docs, properties) {
  var entries = [];

  var propertiesOfWorld = properties.filter(function(property) {
    return isPropertyOfWorld(property);
  });
  entries = entries.concat(makeProperties(docs, propertiesOfWorld));

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(docsDir, 'world.md'), text);
}

/**
 * Make the documentation that lives in the 'operators.md' file.
 */
function makeOperatorsOfWorld(docsDir, docs, properties) {
  var entries = [];

  var operatorsOfWorld = properties.filter(function(property) {
    return isOperatorOfWorld(property);
  });
  entries = entries.concat(makeProperties(docs, operatorsOfWorld));

  var text = entries.join('\n\n') + '\n';
  fs.writeFileSync(path.join(docsDir, 'operators.md'), text);
}

/**
 * Create missing pages in the documentation.
 */
module.exports = function(siteDir, docs, language) {
  var docsDir = path.join(siteDir, 'pages', 'relevance', '_reference', 'docs');

  rimraf.sync(docsDir);
  fs.mkdirSync(docsDir);

  var properties = [];
  Object.keys(language.properties).forEach(function(key) {
    properties.push(language.properties[key]);
  });

  makeTypes(language, docsDir, docs, properties);
  makePropertiesOfWorld(docsDir, docs, properties);
  makeOperatorsOfWorld(docsDir, docs, properties);
};
