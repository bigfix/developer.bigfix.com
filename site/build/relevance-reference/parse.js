var fs = require('fs'),
  path = require('path');

/**
 * Html unescape 'key'.
 */
function unescape(key) {
  return key
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/**
 * Escape an html id in (hopefully) the same way that GitHub does it.
 */
function githubEscapeKey(key) {
  return key.replace(/[()<>=+*\/&:,]/g, '').replace(/\s/g, '-');
}

/**
 * Guess what HTML id GitHub will assign this.
 */
function guessGitHubHtmlId(key, githubIDs) {
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

/**
 * Get the 'source' link to this property or type documentation
 */
function getSource(file, baseDir, key, githubIDs) {
  var repo = 'https://github.com/bigfix/developer.bigfix.com';
  var docsDir = '/tree/master/site/pages/relevance/_reference/docs/';

  return repo + docsDir + path.relative(baseDir, file) +
    '#' + guessGitHubHtmlId(key, githubIDs);
}

/**
 * Process the lines that make up the documentation for a type or property.
 * 
 * This will:
 *   1. Check that the type or property exists in relevance-language.json
 *   2. Check that this isn't duplicate documentation.
 *   3. Guess the link to this documentation on the GitHub repo.
 *   4. Combine the documentation into one string.
 */
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

    docs.types[key] = {
      text: lines.join('\n'),
      source: getSource(file, baseDir, key, githubIDs)
    };
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

    docs.properties[key] = {
      text: lines.join('\n'),
      source: getSource(file, baseDir, key, githubIDs)
    };
  }
}

/**
 * Parse the documentation in one file.
 */
function parseFile(file, docsDir, language, docs) {
  var lineNumber, key, lines;
  var githubIDs = {};

  fs.readFileSync(file).toString().split('\n').forEach(function(line, index) {
    if (line[0] === '#') {
      if (key) {
        processLines(file, docsDir, githubIDs, lineNumber, key, lines, language,
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
    processLines(file, docsDir, githubIDs, lineNumber, key, lines, language,
                 docs);
  }
}

/**
 * Parse all of the files in 'docsDir' as documentation.
 */
function parseDir(docsDir, language, docs) {
  fs.readdirSync(docsDir).forEach(function(file) {
    parseFile(path.join(docsDir, file), docsDir, language, docs);
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
function parse(docsDir, language) {
  var docs = { types: {}, properties: {} };

  parseDir(docsDir, language, docs);
  checkComplete(docs, language);
  return docs;
}

module.exports = parse;
