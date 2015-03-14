var fs = require('fs'),
  path = require('path');

function buildSearch(templates, siteDir, outDir) {
  console.log('rendering search page');

  fs.mkdirSync(path.join(outDir, 'search'));

  var page = templates.page.render({
    title: 'Search',
    content: fs.readFileSync(path.join(siteDir, 'search', 'index.html'))
  });

  fs.writeFileSync(path.join(outDir, 'search', 'index.html'), page);
}

module.exports = buildSearch;
