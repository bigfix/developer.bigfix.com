var fs = require('fs'),
  mkdirp = require('mkdirp'),
  path = require('path');

function buildSearch(templates, siteDir, outDir) {
  console.log('rendering search page');

  mkdirp(path.join(outDir, 'site', 'search'));

  var page = templates.page.render({
    title: 'Search',
    content: fs.readFileSync(path.join(siteDir, 'search', 'index.html'))
  });

  fs.writeFileSync(path.join(outDir, 'site', 'search', 'index.html'), page);
}

module.exports = buildSearch;
