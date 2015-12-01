var fs = require('fs');

// The language.json file.
var language = JSON.parse(fs.readFileSync(process.env.LANGUAGE_FILE));

// The rendered property documentation.
var docs = JSON.parse(fs.readFileSync(process.env.DOCS_FILE));

var properties = [];
var casts = [];

Object.keys(language.properties).forEach(function(key) {
  var property = language.properties[key];

  if (property.type === 'property') {
    properties.push({
      key: key,
      singularPhrase: property.singularPhrase,
      pluralPhrase: property.pluralPhrase,
      indexType: property.indexType || '',
      directObjectType: property.directObjectType || '',
      resultType: property.resultType
    });
  } else if (property.type === 'cast') {
    casts.push({
      key: key,
      phrase: property.phrase,
      argType: property.argType,
      resultType: property.resultType
    });
  }
});

function escapeQuery(query){
  return query
    .trim()
    .replace(/[^a-zA-Z0-9_\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function searchForWord(word) {
  var regex = new RegExp('\\b' + escapeQuery(word) + '\\b');

  // Prefer exact matches of the singular phrase, plural phrase, or cast phrase.
  // If they search for 'unix', then the 'unix of <operating system>' property
  // should be the first result.
  var equalName = [];

  // Next prefer properties where the query matches a word. If the query is
  // 'port', then 'remote port' is a better match than 'report' even though both
  // contain the string 'port'.
  var matchName = [];

  // Next prefer properties where the query matches a word in one of the types.
  var matchType = [];

  // Next prefer properties that contain the query, ignoring word boundaries.
  var containsName = [];

  // Last is properties where one of the types contains the query,
  var containsType = [];

  properties.forEach(function(property) {
    if (regex.test(property.singularPhrase)) {
      if (property.singularPhrase.length === word.length) {
        equalName.push(property.key);
      } else {
        matchName.push(property.key);
      }

      return;
    }
    
    if (regex.test(property.pluralPhrase)) {
      if (property.pluralPhrase.length === word.length) {
        equalName.push(property.key);
      } else {
        matchName.push(property.key);
      }
      
      return;
    }

    if (regex.test(property.indexType) ||
        regex.test(property.directObjectType) ||
        regex.test(property.resultType)) {
      return matchType.push(property.key);
    }

    if (property.singularPhrase.indexOf(word) !== -1 ||
        property.pluralPhrase.indexOf(word) !== -1) {
      return containsName.push(property.key);
    }

    if (property.indexType.indexOf(word) !== -1 ||
        property.directObjectType.indexOf(word) !== -1 ||
        property.resultType.indexOf(word) !== -1) {
      return matchType.push(property.key);
    }
  });

  casts.forEach(function(cast) {
    if (regex.test(cast.phrase)) {
      if (cast.phrase.length === word.length) {
        equalName.push(cast.key);
      } else {
        matchName.push(cast.key);
      }

      return;
    }

    if (regex.test(cast.argType) || regex.test(cast.resultType)) {
      return matchType.push(cast.key);
    }

    if (cast.phrase.indexOf(word) !== -1) {
      return containsName.push(cast.key);
    }

    if (cast.argType.indexOf(word) !== -1 ||
        cast.resultType.indexOf(word) !== -1) {
      return containsType.push(cast.key);
    }
  });

  return [].concat(equalName, matchName, matchType, containsName, containsType);
}

function intersect(results) {
  return results.reduce(function(a, b) {
    var set = {};
    var combined = [];

    a.forEach(function(key) {
      set[key] = true;
    });

    b.forEach(function(key) {
      if (set[key]) {
        combined.push(key);
      }
    });

    return combined;
  });
}

function search(query, limit, offset) {
  var words = query.trim().toLowerCase().split(/\s+/);

  var results = intersect(words.map(function(word) {
    return searchForWord(word);
  }));

  var page = results.slice(offset, Math.min(results.length, offset + limit));

  var pageDocs = page.map(function(key) {
    return docs[key];
  });

  return {
    offset: offset,
    total: results.length,
    page: pageDocs
  };
}

module.exports = search;
