var associate = require('./associate'),
  fs = require('fs'),
  mkdirp = require('mkdirp'),
  parse = require('./parse'),
  path = require('path'),
  render = require('./render');

function buildReference(language, templates, siteDir, outDir) {
  console.log('parsing documentation');
  var docs = parse(path.join(siteDir, 'reference'), language);

  console.log('associating properties');
  var associations = associate(language);

  console.log('rendering pages');
  var rendered = render(language, docs, associations, templates);

  console.log('writing files');

  mkdirp.sync(path.join(outDir, 'site', 'reference'));
  mkdirp.sync(path.join(outDir, 'site', 'reference', 'types'));

  rendered.pages.forEach(function(page) {
    fs.writeFileSync(path.join(outDir, 'site', page.href), page.content);
  });

  fs.writeFileSync(path.join(outDir, 'site', 'reference', 'docs.json'),
                   JSON.stringify(rendered.properties));
}

module.exports = buildReference;
