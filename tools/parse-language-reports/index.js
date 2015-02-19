var extend = require('util')._extend,
  fs = require('fs'),
  parse = require('./parse'),
  path = require('path');

if (process.argv.length !== 3) {
  console.error('usage: parse-language-reports <folder>');
  process.exit(1);
}

var combinedReport = {
  types: {},
  properties: {}
};

var versionFolders = fs.readdirSync(process.argv[2]);
versionFolders.forEach(function(folder) {
  var versionPath = path.join(process.argv[2], folder);

  var languageReports = fs.readdirSync(versionPath);
  languageReports.forEach(function(reportFile) {
    var reportPath = path.join(versionPath, reportFile);
    console.error(reportPath);

    var report = parse(fs.readFileSync(reportPath));
    extend(combinedReport.types, report.types);
    extend(combinedReport.properties, report.properties);
  });
});

console.log(JSON.stringify(combinedReport));
