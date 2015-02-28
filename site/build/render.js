var escape = require('escape-html'),
  fs = require('fs'),
  Hogan = require('hogan.js'),
  marked = require('marked'),
  path = require('path');

function isTupleType(type) {
  return type[0] === '(';
}

function typeAnchor(type) {
  var href = '/reference/types/' + type.replace(/ /g, '-') + '.html';
  return '<a href="' + href + '">' + escape(type) + '</a>';
}

function linkType(type) {
   if (!isTupleType(type)) {
     return typeAnchor(type);
   }

   var links = type
     .substr(2, type.length - 4)
     .split(', ')
     .map(typeAnchor)
     .join(', ');

   return '( ' + links + ' )';
 }

function parseExample(text) {
  var example = {
    question: '',
    answers: [],
    errors: []
  };

  text.trim().split('\n').forEach(function(line) {
    if (line.indexOf('Q:') === 0) {
      question = line.substr(2).trim();
    } else if (line.indexOf('A:') === 0) {
      answers.push({text: line.substr(2).trim()});
    } else if (line.indexOf('E:') === 0) {
      errors.push({text: line.substr(2).trim()});
    }
  });

  return example;
}

function compileTemplate(templatesDir, name) {
  var contents = fs.readFileSync(path.join(templatesDir, name)).toString()
  return Hogan.compile(contents);
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

function renderDocs(templatesDir, language, docs) {
  var templates = {
    type: compileTemplate(templatesDir, 'type.html'),
    property: compileTemplate(templatesDir, 'property.html'),
    cast: compileTemplate(templatesDir, 'cast.html'),
    binaryOp: compileTemplate(templatesDir, 'binaryop.html'),
    unaryOp: compileTemplate(templatesDir, 'unaryop.html'),
    example: compileTemplate(templatesDir, 'example.html')
  };

  var exampleData = {
    example: function() {
      return function(text) {
        return templates.example.render(parseExample(text));
      }
    }
  };

  function renderText(text) {
    return marked(Hogan.compile(text).render(exampleData));
  }

  Object.keys(docs.types).forEach(function(key) {
    docs.types[key] = templates.type.render(language.types[key]).trim() +
      '\n\n' + renderText(docs.types[key]).trim();
  });

  Object.keys(docs.properties).forEach(function(key) {
    var renderedProperty, property = language.properties[key];

    if (property.type === 'property') {
      renderedProperty = renderProperty(property, templates.property);
    } else if (property.type === 'cast') {
      renderedProperty = renderCast(property, templates.cast);
    } else if (property.type === 'binaryOp') {
      renderedProperty = renderBinaryOp(property, templates.binaryOp);
    } else if (property.type === 'unaryOp') {
      renderedProperty = renderUnaryOp(property, templates.unaryOp);
    }

    docs.properties[key] = renderedProperty.trim() + '\n\n' +
      renderText(docs.properties[key]).trim();
  });
}

module.exports = renderDocs;
