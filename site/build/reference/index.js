var associate = require('./associate'),
  fs = require('fs'),
  mkdirp = require('mkdirp'),
  parse = require('./parse'),
  path = require('path'),
  render = require('./render'),
  yaml = require('js-yaml');

function linkify(type) {
  return '/relevance/reference/' + type.replace(/ /g, '-') + '.html';
}

function renderIndex(language, templates, siteDir) {
  var categories =
    yaml.safeLoad(fs.readFileSync(path.join(siteDir, 'data', 'reference.yml')));

  var data = {
    categories: []
  };

  var typeIncluded = {};

  Object.keys(categories).sort().forEach(function(category) {
    var types = categories[category];
    types.sort();

    var linkifiedTypes = [];

    types.forEach(function(type) {
      if (!language.types[type]) {
        throw new Error('Type ' + type + ' in categories.yml does not exist.');
      }

      if (typeIncluded[type]) {
        throw new Error('Type ' + type + ' in categories.yml is listed twice.');
      }

      typeIncluded[type] = true;
      linkifiedTypes.push({ name: type, href: linkify(type) });
    });

    data.categories.push({ name: category, types: linkifiedTypes});
  });

  Object.keys(language.types).forEach(function(type) {
    if (!typeIncluded[type]) {
      throw new Error('Type ' + type + ' is missing from categories.yml');
    }
  });

  var page = {
    title: 'Reference',
    content: templates.reference.render(data)
  };

  return templates.page.render(page);
}

function buildReference(language, templates, siteDir, outDir) {
  console.log('parsing documentation');
  var docs = parse(path.join(siteDir, 'reference'), language);

  console.log('associating properties');
  var associations = associate(language);

  console.log('rendering pages');
  var rendered = render(language, docs, associations, templates);

  console.log('rendering index');
  var index = renderIndex(language, templates, siteDir);

  console.log('writing files');

  mkdirp.sync(path.join(outDir, 'site', 'relevance', 'reference'));

  fs.writeFileSync(
    path.join(outDir, 'site', 'relevance', 'reference', 'index.html'), index);

  mkdirp.sync(path.join(outDir, 'site', 'relevance', 'reference'));
  rendered.pages.forEach(function(page) {
    fs.writeFileSync(path.join(outDir, 'site', page.href), page.content);
  });

  fs.writeFileSync(path.join(outDir, 'docs.json'),
                   JSON.stringify(rendered.properties));
}

module.exports = buildReference;
