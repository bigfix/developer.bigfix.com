var associate = require('./associate'),
  fs = require('fs'),
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

  fs.mkdirSync(path.join(outDir, 'reference'));
  fs.mkdirSync(path.join(outDir, 'reference', 'types'));

  rendered.pages.forEach(function(page) {
    fs.writeFileSync(path.join(outDir, page.href), page.content);
  });

  fs.writeFileSync(path.join(outDir, 'reference', 'docs.json'),
                   JSON.stringify(rendered.properties));
}

module.exports = buildReference;
