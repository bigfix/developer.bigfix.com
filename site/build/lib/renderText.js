var highlight = require('highlight.js'),
  Hogan = require('hogan.js'),
  marked = require('marked');

highlight.registerLanguage('bigfix-relevance', require('./relevance.js'));

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

function renderText(text, templates) {
  var exampleData = {
    example: function() {
      return function(text) {
        return templates.example.render(parseExample(text));
      };
    }
  };

  var renderer = new marked.Renderer();
  var title = '';

  renderer.heading = function(text) {
    if (title === '') {
      title = text;
    }

    return marked.Renderer.prototype.heading.apply(this, arguments);
  };

  var content =
    marked(Hogan.compile(text).render(exampleData), {renderer : renderer});

  return { title: title, content: content };
}

module.exports = renderText;
