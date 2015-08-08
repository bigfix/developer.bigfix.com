var associate = require('./associate'),
  frontMatter = require('front-matter'),
  fs = require('fs'),
  parseDocs = require('./parse'),
  path = require('path'),
  readDefaults = require('../lib/defaults'),
  renderTypesAndProperties = require('./render');

/**
 * Check that the relevance reference is correct and complete.
 */
function checkComplete(categories, language) {
  var typeIncluded = {};

  Object.keys(categories).forEach(function(category) {
    categories[category].forEach(function(type) {
      if (!language.types[type]) {
        throw new Error('Type ' + type +
          ' in relevance reference categories does not exist.');
      }

      if (typeIncluded[type]) {
        throw new Error('Type ' + type +
          ' in relevance reference categories is listed twice.');
      }

      typeIncluded[type] = true;
    });
  });

  Object.keys(language.types).forEach(function(type) {
    if (!typeIncluded[type]) {
      throw new Error('Type ' + type +
        ' is missing from the relevance reference');
    }
  });
}

/**
 * Render the relevance reference index page.
 */
function renderIndex(pagesDir, language, renderer, writer) {
  var referenceDir = path.join(pagesDir, 'relevance', '_reference');
  var sourcePath = path.join(referenceDir, 'index.html');

  var categories =
    frontMatter(fs.readFileSync(sourcePath).toString()).attributes.categories;

  checkComplete(categories, language);

  var outPath = 'relevance/reference/index.html';

  writer(outPath, renderer.renderFile(outPath, sourcePath,
                                      readDefaults(pagesDir, referenceDir)));
}

/**
 * Render the relevance reference documentation and index.
 */
module.exports = function(siteDir, renderer, writer) {
  var pagesDir = path.join(siteDir, 'pages');
  var dataDir = path.join(siteDir, 'data');
  var referenceDir = path.join(pagesDir, 'relevance', '_reference');

  console.log(path.relative(path.dirname(pagesDir), referenceDir));

  var language = JSON.parse(
    fs.readFileSync(path.join(dataDir, 'relevance-language.json')));

  var docs = parseDocs(path.join(referenceDir, 'docs'), language);
  var associations = associate(language);

  var rendered =
    renderTypesAndProperties(language, docs, associations,
                             readDefaults(pagesDir, referenceDir), renderer);

  Object.keys(rendered.pages).forEach(function(page) {
    writer(page, rendered.pages[page]);
  });

  renderIndex(pagesDir, language, renderer, writer);

  return rendered.properties;
};
