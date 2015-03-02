var associate = require('./associate'),
  fs = require('fs'),
  parse = require('./parse'),
  render = require('./render'),
  generate = require('./generate');

var language = JSON.parse(fs.readFileSync(process.argv[2]));
var referenceDir = process.argv[3];
var templatesDir = process.argv[4];
var outDir = process.argv[5];

var docs = parse(referenceDir, language);

var associations = associate(language);

render(templatesDir, language, docs);

generate(templatesDir, language, docs, associations, outDir);
