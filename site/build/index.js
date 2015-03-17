var buildReference = require('./reference'),
  buildSearch = require('./search'),
  fs = require('fs'),
  Hogan = require('hogan.js'),
  marked = require('marked'),
  path = require('path'),
  rimraf = require('rimraf');

function compileTemplate(entryPath) {
  try {
    return Hogan.compile(fs.readFileSync(entryPath).toString());
  } catch (err) {
    throw new Error('Failed to compile ' + entryPath + ': ' + err.toString());
  }
}

function compileTemplates(directory) {
  var templates = {};

  fs.readdirSync(directory).forEach(function(name) {
    var entryPath = path.join(directory, name);

    var stats = fs.statSync(entryPath);
    if (stats.isFile() && name.indexOf('.html') !== -1) {
      templates[path.basename(name, '.html')] = compileTemplate(entryPath);
    } else if (stats.isDirectory()) {
      templates[path.basename(name)] = compileTemplates(entryPath);
    }
  });

  return templates;
}

function buildIndex(templates, siteDir, outDir) {
  var indexPage = fs.readFileSync(path.join(siteDir, 'index.md')).toString();

  var page = {
    title: 'Home',
    content: marked(indexPage)
  };

  fs.writeFileSync(path.join(outDir, 'site', 'index.html'),
                   templates.page.render(page));
}

function main() {
  if (process.argv.length !== 4) {
    console.error('usage: generate <siteDir> <outDir>');
    return process.exit(1);
  }

  var siteDir = process.argv[2];
  var outDir = process.argv[3];

  rimraf.sync(path.join(outDir, 'site', 'reference'));
  rimraf.sync(path.join(outDir, 'site', 'search'));

  var language =
    JSON.parse(fs.readFileSync(path.join(siteDir, 'data', 'language.json')));

  var templates = compileTemplates(path.join(siteDir, 'templates'));

  buildReference(language, templates, siteDir, outDir);
  buildSearch(templates, siteDir, outDir);
  buildIndex(templates, siteDir, outDir);
}

if (require.main === module) {
  main();
}
