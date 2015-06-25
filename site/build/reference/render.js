var escape = require('escape-html'),
  path = require('path'),
  renderText = require('../lib/renderText');

function typeAnchor(type) {
  return '<a href="' + makeHref(type) + '">' + escape(type) + '</a>';
}

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

function escapeKey(key) {
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

function makeAvailability(value) {
  var availability = [];

  Object.keys(value.availability).forEach(function(version) {
    availability.push({
      version: version,
      platforms: value.availability[version].join(', ')
    });
  });

  return availability;
}

function makeHref(type) {
  return '/relevance/reference/' + type.replace(/ /g, '-') + '.html';
}

function makeContribute(source) {
  var repo = 'https://github.com/bigfix/developer.bigfix.com';
  var base = repo + '/tree/master/site/reference/';

  return base + source;
}

function renderProperty(property, template) {
  var data = {
    singularPhrase: property.singularPhrase,
    resultHtml: linkType(property.resultType)
  };

  if (property.indexType) {
    data.indexHtml = linkType(property.indexType);
  }

  if (property.directObjectType) {
    data.directObjectHtml = linkType(property.directObjectType);
  }

  return template.render(data);
}

function renderCast(property, template) {
  var data = {
    argHtml: linkType(property.argType),
    phrase: property.phrase,
    resultHtml: linkType(property.resultType)
  };

  return template.render(data);
}

function renderBinaryOp(property, template) {
  var data = {
    leftHtml: linkType(property.leftType),
    op: property.op,
    rightHtml: linkType(property.rightType),
    resultHtml: linkType(property.resultType)
  };

  return template.render(data); 
}

function renderUnaryOp(property, template) {
  var data = {
    op: property.op,
    argHtml: linkType(property.argType),
    resultHtml: linkType(property.resultType)
  };

  return template.render(data);
}

function renderProperties(language, docs, references, templates) {
  var uniqueIDs = {}, pages = {}, api = {};

  Object.keys(docs.properties).forEach(function(key) {
    var property = language.properties[key];
    var data = {};

    if (property.type === 'property') {
      data.heading = renderProperty(property, templates.properties.property);
    } else if (property.type === 'cast') {
      data.heading = renderCast(property, templates.properties.cast);
    } else if (property.type === 'binaryOp') {
      data.heading = renderBinaryOp(property, templates.properties.binary);
    } else if (property.type === 'unaryOp') {
      data.heading = renderUnaryOp(property, templates.properties.unary);
    }

    data.id = escapeKey(property.key);
    data.body = renderText(docs.properties[key], templates).content;
    data.source = makeContribute(docs.source.properties[key]);
    data.availability = makeAvailability(property);

    if (property.pluralPhrase) {
      data.plural = property.pluralPhrase;
    }

    if (property.deprecated) {
      data.deprecated = property.deprecated;
    }

    if (uniqueIDs[data.id]) {
      throw new Error('Duplicate html id for key: ' + property.key + 'and' +
                      uniqueIDs[data.id]);
    }
    uniqueIDs[data.id] = property.key;

    pages[key] = templates.entry.render(data);

    if (property.type === 'property' || property.type === 'cast') {
      data.reference = makeHref(references[key]);
      api[key] = templates.entry.render(data);
    }
  });

  return { pages: pages, api: api };
}

function renderType(type, text, renderedProperties, associations, templates) {
  var creation = associations.creation[type.name];
  var methods = associations.methods[type.name];

  function getDoc(property) {
    return renderedProperties[property];
  }

  var data = {
    name: type.name,
    description: renderText(text, templates).content,
    availability: makeAvailability(type)
  };

  if (type.deprecated) {
    data.deprecated = type.deprecated;
  }

  if (type.parent) {
    data.parentHtml = linkType(type.parent);
  } else {
    data.parentHtml = 'none';
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

  return templates.type.render(data);
}

function render(language, docs, associations, templates) {
  var pages = [];

  var renderedProperties =
    renderProperties(language, docs, associations.references, templates);

  Object.keys(language.types).forEach(function(key) {
    var type = language.types[key];
    var text = docs.types[key];

    var content =
      renderType(type, text, renderedProperties.pages, associations, templates);

    var data = {
      title: type.name,
      content: content
    };

    var pageName = type.name.replace(/ /g, '-') + '.html';
    var href = path.join('relevance', 'reference', pageName);

    pages.push({ href: href, content: templates.page.render(data) });
  });

  return { properties: renderedProperties.api, pages: pages };
}

module.exports = render;
