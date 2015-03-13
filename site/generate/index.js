var associate = require('./associate'),
  fs = require('fs'),
  Hogan = require('hogan.js'),
  parse = require('./parse'),
  path = require('path'),
  render = require('./render'),
  rimraf = require('rimraf');

function logProgress(msg) {
  console.error('Building reference - ' + msg);
}

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

function main() {
  if (process.argv.length !== 4) {
    console.error('usage: build <siteDir> <outDir>');
    return process.exit(1);
  }

  var siteDir = process.argv[2];
  var outDir = process.argv[3];

  logProgress('resetting output');
  rimraf.sync(outDir);
  fs.mkdirSync(outDir);
  fs.mkdirSync(path.join(outDir, 'reference'));
  fs.mkdirSync(path.join(outDir, 'reference', 'types'));

  logProgress('compiling templates');
  var templates = compileTemplates(path.join(siteDir, 'templates'));

  logProgress('parsing language.json');
  var language =
    JSON.parse(fs.readFileSync(path.join(siteDir, 'data', 'language.json')));

  logProgress('parsing documentation');
  var docs = parse(path.join(siteDir, 'reference'), language);

  logProgress('associating properties');
  var associations = associate(language);

  logProgress('rendering pages');
  var pages = render(language, docs, associations, templates);

  logProgress('writing files');
  pages.forEach(function(page) {
    fs.writeFileSync(path.join(outDir, page.href), page.content);
  });
}

if (require.main === module) {
  main();
}
