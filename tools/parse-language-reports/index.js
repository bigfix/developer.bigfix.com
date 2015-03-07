var extend = require('util')._extend,
  fs = require('fs'),
  parse = require('./parse'),
  path = require('path');

function getPlatform(reportPath) {
  var platform = path.basename(reportPath).match(/Language\.(.+)\.txt$/)[1];

  if (platform.indexOf('windows') !== -1) {
    return 'windows';
  }

  if (platform === 'Console_WebReports') {
    return 'session';
  }

  return platform;
}

function parseLanguageReports(languageReports) {
  var combinedReport = {
    types: {},
    properties: {}
  };

  fs.readdirSync(languageReports).forEach(function(version) {
    var versionPath = path.join(languageReports, version);

    fs.readdirSync(versionPath).forEach(function(reportFile) {
      var reportPath = path.join(versionPath, reportFile);
      var platform = getPlatform(reportPath);

      console.error(version + ' - ' + platform);

      var report = parse(fs.readFileSync(reportPath));
      extend(combinedReport.types, report.types);
      extend(combinedReport.properties, report.properties);
    });
  });

  return combinedReport;
}

function main() {
  if (process.argv.length !== 3) {
    console.error('usage: parse-language-reports <folder>');
    return process.exit(1);
  }

  console.log(JSON.stringify(parseLanguageReports(process.argv[2])));
}

if (require.main === module) {
  main();
}

module.exports = parseLanguageReports;
