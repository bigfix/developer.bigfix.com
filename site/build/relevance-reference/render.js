var escape = require('escape-html'),
  extend = require('util-extend'),
  path = require('path');

/**
 * Get the URL path where this type will be located.
 */
function makeHref(type) {
  return '/relevance/reference/' + type.replace(/ /g, '-') + '.html';
}

/**
 * Make a single (non-tuple) type into an <a> tag.
 */
function typeAnchor(type) {
  return '<a href="' + makeHref(type) + '">' + escape(type) + '</a>';
}

/**
 * Create an <a> tag that links to this type. If the type is a tuple, then an
 * <a> tag is created for each type.
 */
function linkType(type) {
  var openParen = type.indexOf('(');

  if (openParen === -1) {
    return typeAnchor(type);
  }

  var links = type
    .substring(openParen + 2, type.length - 2)
    .split(', ')
    .map(typeAnchor)
    .join(', ');

  return type.substr(0, openParen) + '( ' + links + ' )';
}

/**
 * Put the html in angle brackets.
 */ 
function bracket(text) {
  return '&lt;' + text + '&gt;';
}

/**
 * Escape the property 'key' to be safe to have in a URL.
 */
function makeHtmlId(key) {
  var escaped = key
    .replace(/ < /, ' less ')
    .replace(/ > /, ' greater ')
    .replace(/ <= /, ' lesseq ')
    .replace(/ >= /, ' greatereq ')
    .replace(/ = /, ' equals ')
    .replace(/ \+ /, ' plus ')
    .replace(/ - /, ' minus ')
    .replace(/ \* /, ' times ')
    .replace(/ \/ /, ' divide ')
    .replace(/ & /, ' concat ')
    .replace(/:/g, '')
    .replace(/,/g, '')
    .replace(/[<>]/g, '')
    .replace(/[()]/g, '');

  return escaped.trim().replace(/\s+/g, '-');
}

/**
 * Create a header for a property.
 * <phrase> <index> of <directObject> : <result>
 */
function makePropertyHeading(property) {
  var header = escape(property.singularPhrase);

  if (property.indexType) {
    header += ' ';
    header += bracket(linkType(property.indexType));
  }

  if (property.directObjectType) {
    header += ' of ';
    header += bracket(linkType(property.directObjectType));
  }

  header += ' : ' + linkType(property.resultType);
  return header;
}

/**
 * Create a header for a cast.
 * <arg> as phrase : <result>
 */
function makeCastHeading(property) {
  return bracket(linkType(property.argType)) + ' as ' +
    escape(property.phrase) + ' : ' + linkType(property.resultType);
}

/**
 * Create a header for a binary operator.
 * <left> <op> <right> : <result>
 */
function makeBinaryOpHeading(property) {
  return bracket(linkType(property.leftType)) + ' ' + escape(property.op) +
    ' ' + bracket(linkType(property.rightType)) + ' : ' +
    linkType(property.resultType);
}

/**
 * Create a header for a unary operator.
 * <op> <arg> : <result>
 */
function makeUnaryOpHeading(property) {
  return escape(property.op) + ' ' + bracket(linkType(property.argType)) +
    ' : ' + linkType(property.resultType);
}

/**
 * Render every property.
 */
function renderProperties(language, docs, references, renderer) {
  
  // The HTML element ids that have been used so far. Keeping track of this
  // ensures that we're assigning unique ids.
  var uniqueIDs = {};

  // Both 'pages' and 'api' are a map of 'key -> html'.
  // 
  // Why are there two maps?
  // 
  // The HTML in 'pages' has a 'source' link that's just a fragment. That is, it
  // looks like '#foo'. This is so that if someone copies the 'permalink' on a
  // documentation page, it will link to exactly where they are.
  // 
  // The HTML in 'api' also has a base URL, so it will link to the type on one
  // specific page. This is because on the search results page, linking to a
  // fragment is probably not what we want.
  var pages = {};
  var api = {};

  Object.keys(docs.properties).forEach(function(key) {
    var property = language.properties[key];
    var data = {};

    if (property.type === 'property') {
      data.key = makePropertyHeading(property);
    } else if (property.type === 'cast') {
      data.key = makeCastHeading(property);
    } else if (property.type === 'binaryOp') {
      data.key = makeBinaryOpHeading(property);
    } else if (property.type === 'unaryOp') {
      data.key = makeUnaryOpHeading(property);
    } else {
      throw new Error('Unknown property type: ' + property.type);
    }

    if (key !== property.key) {
      throw new Error('The key is different from the property key.\n' +
        'key: ' + key + '\nproperty.key: ' + property.key);
    }

    data.id = makeHtmlId(property.key);
    data.body = renderer.renderMarkdown(docs.properties[key].text);
    data.source = docs.properties[key].source;
    data.availability = property.availability;

    if (property.pluralPhrase) {
      data.plural = property.pluralPhrase;
    }

    if (property.deprecated) {
      data.deprecated = property.deprecated;
    }

    if (uniqueIDs[data.id]) {
      throw new Error('Duplicate html id for key: ' + property.key + ' and ' +
                      uniqueIDs[data.id]);
    }
    uniqueIDs[data.id] = property.key;

    pages[key] = renderer.renderTemplate('relevance-property', data);

    if (property.type === 'property' || property.type === 'cast') {
      data.reference = makeHref(references[key]);
      api[key] = renderer.renderTemplate('relevance-property', data);
    }
  });

  return { pages: pages, api: api };
}

function renderType(type, text, renderedProperties, associations, renderer) {
  var creation = associations.creation[type.name];
  var methods = associations.methods[type.name];

  function getDoc(property) {
    return renderedProperties[property];
  }

  var data = {
    name: type.name,
    description: renderer.renderMarkdown(text),
    availability: type.availability
  };

  if (type.deprecated) {
    data.deprecated = type.deprecated;
  }

  if (type.parent) {
    data.parent = linkType(type.parent);
  }

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

  return renderer.renderTemplate('relevance-type', data);
}

/**
 * Render every property and type in the relevance language.
 */
function render(language, docs, associations, defaults, renderer) {
  var pages = {};

  var renderedProperties =
    renderProperties(language, docs, associations.references, renderer);

  var sideNav = renderer.renderSideNav('relevance/reference/', defaults);

  Object.keys(language.types).forEach(function(key) {
    var type = language.types[key];
    var text = docs.types[key].text;

    var data = extend({}, defaults);

    data.title = type.name;

    data.content = renderType(type, text, renderedProperties.pages,
                              associations, renderer);

    data.sideNav = sideNav;

    var pageName = type.name.replace(/ /g, '-') + '.html';
    var href = path.join('relevance', 'reference', pageName);

    pages[href] = renderer.renderTemplate(data.layout, data);
  });

  return { properties: renderedProperties.api, pages: pages };
}

module.exports = render;
