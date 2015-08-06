var extend = require('util-extend'),
  frontMatter = require('front-matter'),
  fs = require('fs'),
  hljs = require('highlight.js'),
  nunjucks = require('nunjucks'),
  marked = require('marked'),
  path = require('path');

hljs.registerLanguage('bigfix-relevance', require('hljs-bigfix-relevance'));

/**
 * Highlight relevance code.
 */
function highlightRelevance(relevance) {
  return hljs.highlight('bigfix-relevance', relevance).value;
}

/**
 * Parse the contents of a {% qna %} block.
 */
function parseQNA(text) {
  var qna = { question: '', answers: [], errors: [] };

  text.trim().split('\n').forEach(function(line) {
    if (line.indexOf('Q:') === 0) {
      qna.question = highlightRelevance(line.substr(2).trim());
    } else if (line.indexOf('A:') === 0) {
      qna.answers.push(line.substr(2).trim());
    } else if (line.indexOf('E:') === 0) {
      qna.errors.push(line.substr(2).trim());
    }
  });

  return qna;
}

/**
 * Escape any special markdown characters in the example.
 */
function escapeMarkdown(html) {
  return html.replace(/\*/g, '&#42;').replace(/_/g, '&#95;');
}

/**
 * Create markdown renderer.
 */
function createMarkdownRenderer() {
  var renderer = new marked.Renderer();

  // Override the 'code' function so that we can colorize relevance.

  renderer.code = function(code, language) {
    if (language === 'relevance') {
      return '<pre><code>' + highlightRelevance(code) + '</code></pre>';
    }

    return marked.Renderer.prototype.code.apply(this, arguments);
  };

  var options = {
    renderer: renderer
  };

  return function(text) {
    return marked(text, options);
  };
}

/**
 * Create a simple nunjucks extension.
 */
function createExtension(tag, renderFunction) {
  var extension = {};

  extension.tags = [tag];

  extension.parse = function(parser) {
    var tok = parser.nextToken();
    parser.advanceAfterBlockEnd(tok.value);

    var nodeList = parser.parseUntilBlocks('end' + tag);
    parser.advanceAfterBlockEnd();

    var templateData = nodeList.children[0].children[0];
    templateData.value = renderFunction(templateData.value);

    return nodeList;
  };

  return extension;
}

/**
 * Create the {% qna %} extension.
 */
function createQNAExtension(templateEnv) {
  return createExtension('qna', function(text) {
    return escapeMarkdown(templateEnv.render('qna.html', parseQNA(text)));
  });
}

/**
 * Create the {% note %} extension.
 */
function createNoteExtension(templateEnv) {
  return createExtension('note', function(text) {
    return escapeMarkdown(templateEnv.render('note.html', { content: text }));
  });
}

/**
 * Create the nunjucks environment and add our extensions.
 */
function createTemplateEnv(templatesDir) {
  var loader = new nunjucks.FileSystemLoader(templatesDir, { watch: false });

  var templateEnv = new nunjucks.Environment(loader, { autoescape: true });

  templateEnv.addExtension('QNAExtension', createQNAExtension(templateEnv));
  templateEnv.addExtension('NoteExtension', createNoteExtension(templateEnv));

  return templateEnv;
}

/**
 * Read the front-matter for a file, and combine it with any defaults.
 */
function getFileData(sourcePath, defaults) {
  var parsed = frontMatter(fs.readFileSync(sourcePath).toString());

  var data = extend(extend({}, defaults), parsed.attributes);
  data.content = parsed.body;

  return data;
}

module.exports = function(templatesDir) {
  var renderMarkdown = createMarkdownRenderer();
  var templateEnv = createTemplateEnv(templatesDir);

  var formats = {};

  formats['.md'] = function(sourcePath, defaults) {
    var fileData = getFileData(sourcePath, defaults);

    fileData.content = templateEnv.renderString(fileData.content, fileData);
    fileData.content = renderMarkdown(fileData.content);

    return templateEnv.render(fileData.layout + '.html', fileData);
  };

  formats['.html'] = function(sourcePath, defaults) {
    var fileData = getFileData(sourcePath, defaults);

    fileData.content = templateEnv.renderString(fileData.content, fileData);

    return templateEnv.render(fileData.layout + '.html', fileData);
  };

  var renderer = {};

  renderer.renderMarkdown = function(text) {
    return renderMarkdown(templateEnv.renderString(text));
  };

  renderer.renderTemplate = function(template, data) {
    return templateEnv.render(template + '.html', data);
  };

  renderer.renderFile = function(sourcePath, defaults) {
    var extension = path.extname(sourcePath);

    var renderer = formats[extension];
    if (!renderer) {
      throw new Error('Cannot render file of type ' + extension);
    }

    return renderer(sourcePath, defaults);
  };

  renderer.canRenderFile = function(sourcePath) {
    return formats[path.extname(sourcePath)] !== undefined;
  };

  return renderer;
};
