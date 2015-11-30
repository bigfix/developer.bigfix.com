var associate = require('./associate'),
  frontMatter = require('front-matter'),
  fs = require('fs'),
  parseDocs = require('./parse'),
  path = require('path'),
  readDefaults = require('../lib/defaults'),
  renderTypesAndProperties = require('./render'),
  createMissing = require('./create-missing');

/**
 * Check that the list of types listed on the main relevance reference page is
 * correct and complete.
 */
function checkCategoriesComplete(categories, language) {
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
 * Check that every type and property is listed in the documentation.
 */
function checkDocsComplete(docs, language) {
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
 * Render the relevance reference index page.
 */
function renderIndex(pagesDir, language, renderer, writer) {
  var referenceDir = path.join(pagesDir, 'relevance', '_reference');
  var sourcePath = path.join(referenceDir, 'index.html');

  var categories =
    frontMatter(fs.readFileSync(sourcePath).toString()).attributes.categories;

  checkCategoriesComplete(categories, language);

  var outPath = 'relevance/reference/index.html';

  writer(outPath, renderer.renderFile(outPath, sourcePath,
                                      readDefaults(pagesDir, referenceDir)));
}

/**
 * Render the relevance reference documentation and index.
 */
module.exports.renderReference = function(siteDir, renderer, writer) {
  var pagesDir = path.join(siteDir, 'pages');
  var dataDir = path.join(siteDir, 'data');
  var referenceDir = path.join(pagesDir, 'relevance', '_reference');

  console.log(path.relative(path.dirname(pagesDir), referenceDir));

  var language = JSON.parse(
    fs.readFileSync(path.join(dataDir, 'relevance-language.json')));

  var docs = parseDocs(path.join(referenceDir, 'docs'), language);
  checkDocsComplete(docs, language);

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

/**
 * Create missing documentation.
 */
module.exports.createMissing = function(siteDir) {
  var pagesDir = path.join(siteDir, 'pages');
  var dataDir = path.join(siteDir, 'data');
  var referenceDir = path.join(pagesDir, 'relevance', '_reference');

  var language = JSON.parse(
    fs.readFileSync(path.join(dataDir, 'relevance-language.json')));

  var docs = parseDocs(path.join(referenceDir, 'docs'), language);

  createMissing(siteDir, docs, language);
};
