var fs = require('fs'),
  path = require('path');

function unescape(key) {
  return key
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function processLines(file, baseDir, lineNumber, key, lines, language, docs) {
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
    docs.source.types[key] = path.relative(baseDir, file);
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
    docs.source.properties[key] = path.relative(baseDir, file);
  }
}

function parseFile(file, baseDir, language, docs) {
  var lineNumber, key, lines;

  fs.readFileSync(file).toString().split('\n').forEach(function(line, index) {
    if (line[0] === '#') {
      if (key) {
        processLines(file, baseDir, lineNumber, key, lines, language, docs);
      }

      key = line;
      lines = [];
      lineNumber = index + 1;
    } else {
      lines.push(line);
    }
  });

  if (key) {
    processLines(file, baseDir, lineNumber, key, lines, language, docs);
  }
}

function parseDir(folder, baseDir, language, docs) {
  var children = fs.readdirSync(folder).map(function(child) {
    return path.join(folder, child);
  });

  children.forEach(function(child) {
    var stats = fs.statSync(child);

    if (stats.isFile()) {
      parseFile(child, baseDir, language, docs);
    } else if (stats.isDirectory()) {
      parseDir(child, baseDir, language, docs);
    }
  });
}

function parse(folder, language) {
  var docs = {
    types: {},
    properties: {}
  };

  docs.source = {
    types: {},
    properties: {}
  };

  parseDir(folder, folder, language, docs);
  return docs;
}

module.exports = parse;
