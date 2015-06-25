var fs = require('fs'),
  mkdirp = require('mkdirp'),
  path = require('path');

function buildSearch(templates, siteDir, outDir) {
  console.log('rendering search page');

  mkdirp.sync(path.join(outDir, 'site', 'relevance', 'search'));

  var page = templates.page.render({
    title: 'Search',
    content: fs.readFileSync(path.join(siteDir, 'search', 'index.html'))
  });

  fs.writeFileSync(
    path.join(outDir, 'site', 'relevance', 'search', 'index.html'), page);
}

module.exports = buildSearch;
