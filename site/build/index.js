var fs = require('fs'),
  parse = require('./parse'),
  render = require('./render');

var language = JSON.parse(fs.readFileSync(process.argv[2]));
var referenceDir = process.argv[3];
var templatesDir = process.argv[4];

var docs = parse(referenceDir, language);

render(templatesDir, language, docs);

console.log(JSON.stringify(docs));
