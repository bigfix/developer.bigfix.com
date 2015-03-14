var associate = require('./associate'),
  fs = require('fs'),
  Hogan = require('hogan.js'),
  parse = require('./parse'),
  path = require('path'),
  render = require('./render');

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

function buildReference(language, siteDir, outDir) {
  console.log('compiling templates');
  var templates = compileTemplates(path.join(siteDir, 'templates'));

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

  return rendered.properties;
}

module.exports = buildReference;
