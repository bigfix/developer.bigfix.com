var buildReference = require('./reference'),
  createSearchDatabase = require('./search'),
  fs = require('fs'),
  path = require('path'),
  rimraf = require('rimraf');

function main() {
  if (process.argv.length !== 4) {
    console.error('usage: build <siteDir> <outDir>');
    return process.exit(1);
  }

  var siteDir = process.argv[2];
  var outDir = process.argv[3];

  console.log('cleaning output directory');
  rimraf.sync(outDir);
  fs.mkdirSync(outDir);

  console.log('parsing language.json');
  var language =
    JSON.parse(fs.readFileSync(path.join(siteDir, 'data', 'language.json')));

  var renderedProperties = buildReference(language, siteDir, outDir);
  createSearchDatabase(language.properties, renderedProperties, outDir);
}

if (require.main === module) {
  main();
}
