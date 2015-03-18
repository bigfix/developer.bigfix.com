var escape = require('escape-html'),
  highlight = require('highlight.js'),
  Hogan = require('hogan.js'),
  marked = require('marked'),
  path = require('path');

highlight.registerLanguage('bigfix-relevance', require('./relevance.js'));

function typeAnchor(type) {
  var href = '/reference/types/' + type.replace(/ /g, '-') + '.html';
  return '<a href="' + href + '">' + escape(type) + '</a>';
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

function makeContribute(source, id) {
  var contribute = [];

  if (source) {
    var edit =
      'https://github.com/briangreenery/relevance.io/tree/master/site/'
      + 'reference/' + source.replace(/ /g, '-') + '.md';
    contribute.push({ edit: edit, id: id });
  }

  return contribute;
}

function parseExample(text) {
  var example = { question: '', answers: [], errors: [] };

  text.trim().split('\n').forEach(function(line) {
    if (line.indexOf('Q:') === 0) {
      example.question =
        highlight.highlight('bigfix-relevance', line.substr(2).trim()).value;
    } else if (line.indexOf('A:') === 0) {
      example.answers.push({text: line.substr(2).trim()});
    } else if (line.indexOf('E:') === 0) {
      example.errors.push({text: line.substr(2).trim()});
    }
  });

  return example;
}

function renderProperty(property, template) {
  var info = {};

  var data = {
    singularPhrase: property.singularPhrase,
    resultHtml: linkType(property.resultType)
  };

  if (property.indexType) {
    data.indexHtml = linkType(property.indexType);
  }

  if (property.directObjectType) {
    data.directObjectHtml = linkType(property.directObjectType);
    info.source = 'types/' + property.directObjectType;
  }

  info.heading = template.render(data);

  return info;
}

function renderCast(property, template) {
  var data = {
    argHtml: linkType(property.argType),
    phrase: property.phrase,
    resultHtml: linkType(property.resultType)
  };

  return { heading: template.render(data),
           source: 'types/' + property.argType };
}

function renderBinaryOp(property, template) {
  var data = {
    leftHtml: linkType(property.leftType),
    op: property.op,
    rightHtml: linkType(property.rightType),
    resultHtml: linkType(property.resultType)
  };

  return { heading: template.render(data), source: 'operators' };
}

function renderUnaryOp(property, template) {
  var data = {
    op: property.op,
    argHtml: linkType(property.argType),
    resultHtml: linkType(property.resultType)
  };

  return { heading: template.render(data), source: 'operators' };
}

function renderEntry(heading, body, property, source, template) {
  var data = {
    id: escapeKey(property.key),
    heading: heading,
    body: body,
    availability: makeAvailability(property),
    contribute: makeContribute(source, escapeKey(property.key))
  };


  if (property.pluralPhrase) {
    data.plural = property.pluralPhrase;
  }

  return template.render(data);
}

function renderText(text, templates) {
  var exampleData = {
    example: function() {
      return function(text) {
        return templates.example.render(parseExample(text));
      };
    }
  };

  return marked(Hogan.compile(text).render(exampleData));
}

function renderProperties(language, docs, templates) {
  var rendered = {};

  Object.keys(docs.properties).forEach(function(key) {
    var property = language.properties[key];

    var info;
    if (property.type === 'property') {
      info = renderProperty(property, templates.properties.property);
    } else if (property.type === 'cast') {
      info = renderCast(property, templates.properties.cast);
    } else if (property.type === 'binaryOp') {
      info = renderBinaryOp(property, templates.properties.binary);
    } else if (property.type === 'unaryOp') {
      info = renderUnaryOp(property, templates.properties.unary);
    }

    var body = renderText(docs.properties[key], templates);

    rendered[key] =
      renderEntry(info.heading, body, property, info.source, templates.entry);
  });

  return rendered;
}

function renderType(type, text, renderedProperties, associations, templates) {
  var creation = associations.creation[type.name];
  var methods = associations.methods[type.name];

  function getDoc(property) {
    return renderedProperties[property];
  }

  var data = {
    name: type.name,
    description: renderText(text, templates),
    availability: makeAvailability(type)
  };

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

  var renderedProperties = renderProperties(language, docs, templates);

  Object.keys(language.types).forEach(function(key) {
    var type = language.types[key];
    var text = docs.types[key];

    var content =
      renderType(type, text, renderedProperties, associations, templates);

    var data = {
      title: type.name,
      content: content
    };

    var href =
      path.join('reference', 'types', type.name.replace(/ /g, '-') + '.html');

    pages.push({ href: href, content: templates.page.render(data) });
  });

  return { properties: renderedProperties, pages: pages };
}

module.exports = render;
