var fs = require('fs'),
  path = require('path');

function unescape(key) {
  return key
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/**
 * Escape a html id in the same way that github does it...probably.
 */
function githubEscapeKey(key) {
  return key.replace(/[()<>=+*\/&:,]/g, '').replace(/\s/g, '-');
}

/**
 * Make a relative link to this key within the markdown document on GitHub.
 */
function getGitHubSource(key, githubIDs) {
  var escaped = githubEscapeKey(key);
  var source = escaped;
  var num = 1;

  while (githubIDs[source]) {
    source = escaped + '-' + num;
    num++;
  }

  githubIDs[source] = true;
  return source;
}

function processLines(file, baseDir, githubIDs, lineNumber, key, lines,
                      language, docs) {
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
    docs.source.types[key] =
      path.relative(baseDir, file) + '#' + getGitHubSource(key, githubIDs);
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
    docs.source.properties[key] =
      path.relative(baseDir, file) + '#' + getGitHubSource(key, githubIDs);
  }
}

function parseFile(file, baseDir, language, docs) {
  var lineNumber, key, lines;
  var githubIDs = {};

  fs.readFileSync(file).toString().split('\n').forEach(function(line, index) {
    if (line[0] === '#') {
      if (key) {
        processLines(file, baseDir, githubIDs, lineNumber, key, lines, language,
                     docs);
      }

      key = line;
      lines = [];
      lineNumber = index + 1;
    } else {
      lines.push(line);
    }
  });

  if (key) {
    processLines(file, baseDir, githubIDs, lineNumber, key, lines, language,
                 docs);
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

/**
 * Check that every type and property is listed in the documentation.
 */
function checkComplete(docs, language) {
  var complete = true;

  Object.keys(language.types).forEach(function(type) {
    if (!docs.types[type]) {
      console.error('No documentation found for type: ' + type);
      complete = false;
    }
  });

  Object.keys(language.properties).forEach(function(key) {
    if (!docs.properties[key]) {
      console.error('No documentation found for property: ' + key);
      complete = false;
    }
  });

  if (!complete) {
    throw new Error('Documentation is incomplete');
  }
}

/**
 * Parse the documentation files so that we can build the reference.
 */
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
  checkComplete(docs, language);
  return docs;
}

module.exports = parse;
