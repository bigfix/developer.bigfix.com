var fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  readDefaults = require('./lib/defaults'),
  createRenderer = require('./lib/renderer'),
  createPageWriter = require('./lib/writer'),
  relevance = require('./relevance-reference');

/**
 * Recursively render every page.
 */
function renderPages(pagesDir, renderer, writer) {
  var pages = {};

  function renderDirectory(directory) {
    console.log(path.relative(path.dirname(pagesDir), directory));

    var contents = fs.readdirSync(directory);
    var defaults = readDefaults(pagesDir, directory);

    contents.forEach(function(item) {
      if (item[0] === '_') {
        return;
      }

      var sourcePath = path.join(directory, item);

      if (fs.statSync(sourcePath).isDirectory()) {
        renderDirectory(sourcePath, defaults);
      } else if (renderer.canRenderFile(sourcePath)) {

        var outPath = path.relative(
          pagesDir,
          path.join(directory,
                    path.basename(item, path.extname(item)) + '.html'));

        writer(outPath, renderer.renderFile(outPath, sourcePath, defaults));
      }
    });
  }

  renderDirectory(pagesDir);
  return pages;
}

function main() {
  if (process.argv.length !== 4) {
    console.error('usage: build <siteDir> <stagingDir>');
    console.error('usage: build --create-missing <siteDir>');
    return process.exit(1);
  }

  var siteDir;

  if (process.argv[2] === '--create-missing') {
    siteDir = process.argv[3];
    relevance.createMissing(siteDir);
  } else {
    siteDir = process.argv[2];

    var stagingDir = process.argv[3];

    var renderer = createRenderer(path.join(siteDir, 'templates'));
    var writer = createPageWriter(path.join(stagingDir, 'site'));

    mkdirp.sync(stagingDir);

    renderPages(path.join(siteDir, 'pages'), renderer, writer);

    var relevanceDocs = relevance.renderReference(siteDir, renderer, writer);
    fs.writeFileSync(path.join(stagingDir, 'relevance-docs.json'),
                     JSON.stringify(relevanceDocs));
  }
}

if (require.main === module) {
  main();
}
