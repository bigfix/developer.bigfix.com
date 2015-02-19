var fs = require('fs'),
  path = require('path'),
  rimraf = require('rimraf'),
  yaml = require('js-yaml');

function writeWithFrontMatter(filePath, frontMatter, body) {
  var contents = '---\n' + yaml.safeDump(frontMatter) + '---\n\n' + body;
  fs.writeFileSync(filePath, contents);
}

if (process.argv.length !== 5) {
  console.error('usage: create-pages <site-dir> <language.json> <docs.json>');
  return process.exit(1);
}

var referenceDir = path.join(process.argv[2], '_reference');
var language = JSON.parse(fs.readFileSync(process.argv[3]));
var docs = JSON.parse(fs.readFileSync(process.argv[4]));

var typesDir = path.join(referenceDir, 'types');

rimraf.sync(typesDir);
fs.mkdirSync(typesDir);

Object.keys(language.types).forEach(function(typeName) {
  var typeFile = typeName.replace(/ /g, '-') + '.html';

  var frontMatter = {
    name: typeName
  };

  if (language.types[typeName].parent) {
    frontMatter.parent = language.types[typeName].parent;
  }

  var body = 'No documentation exists for this type.';
  if (docs.types[typeName])
    body = docs.types[typeName];

  writeWithFrontMatter(path.join(typesDir, typeFile), frontMatter, body);
});
