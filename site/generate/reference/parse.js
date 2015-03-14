var fs = require('fs'),
  path = require('path');

function unescape(key) {
  return key
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function processLines(file, lineNumber, key, lines, language, docs) {
  if (key.indexOf('# type:') === 0) {
    key = unescape(key.substr(7).trim());

    var type = language.types[key];
    if (!type) {
      throw new Error('In file ' + file + ' line ' + lineNumber +
        ': type "' + key + '" does not exist in the language.');
    }

    if (docs.types[key]) {
      throw new Error('In file ' + file + ' line ' + lineNumber +
        ': duplicate documentation for type "' + key + '"');
    }

    docs.types[key] = lines.join('\n');
  } else {
    key = unescape(key.substr(1).trim());

    var property = language.properties[key];
    if (!property) {
      throw new Error('In file ' + file + ' line ' + lineNumber +
        ': property "' + key + '" does not exist in the language.');
    }

    if (docs.properties[key]) {
      throw new Error('In file ' + file + ' line ' + lineNumber +
        ': duplicate documentation for property "' + key + '"');
    }

    docs.properties[key] = lines.join('\n').trim();
  }
}

function parseFile(file, language, docs) {
  var lineNumber, key, lines;

  fs.readFileSync(file).toString().split('\n').forEach(function(line, index) {
    if (line[0] === '#') {
      if (key) {
        processLines(file, lineNumber, key, lines, language, docs);
      }

      key = line;
      lines = [];
      lineNumber = index + 1;
    } else {
      lines.push(line);
    }
  });

  if (key) {
    processLines(file, lineNumber, key, lines, language, docs);
  }
}

function parseDir(folder, language, docs) {
  var children = fs.readdirSync(folder).map(function(child) {
    return path.join(folder, child);
  });

  children.forEach(function(child) {
    var stats = fs.statSync(child);

    if (stats.isFile()) {
      parseFile(child, language, docs);
    } else if (stats.isDirectory()) {
      parseDir(child, language, docs);
    }
  });
}

function parse(folder, language) {
  var docs = {
    types: {},
    properties: {}
  };

  parseDir(folder, language, docs);
  return docs;
}

module.exports = parse;
