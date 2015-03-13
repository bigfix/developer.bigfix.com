var fs = require('fs'),
  parse = require('./parse'),
  path = require('path'),
  yaml = require('js-yaml');

function isVersionLess(a, b) {
  a = a.split('.').map(Number);
  b = b.split('.').map(Number);

  for (var i = 0; i < 4; i++) {
    if (a[i] != b[i]) {
      return a[i] < b[i];
    }
  }

  return false;
}

function addPlatform(value, platform, version) {
  if (!value.platforms) {
    value.platforms = {};
  }

  if (value.platforms[platform]) {
    if (isVersionLess(version, value.platforms[platform])) {
      value.platforms[platform] = version;
    }
  } else {
    value.platforms[platform] = version;
  }
}

function convertPlatformsToAvailability(value) {
  value.availability = {};

  Object.keys(value.platforms).forEach(function(platform) {
    var version = value.platforms[platform];

    if (!value.availability[version]) {
      value.availability[version] = [];
    }

    value.availability[version].push(platform);
  });

  Object.keys(value.availability).forEach(function(version) {
    value.availability[version].sort();
  });

  delete value.platforms;
}

function getPlatform(reportPath, platformNames) {
  var platform = path.basename(reportPath).match(/Language\.(.+)\.txt$/)[1];

  if (!platformNames[platform]) {
    throw new Error('Unknown platform: ' + platform);
  }

  return platformNames[platform];
}

function parseLanguageReports(languageReports, platformNames) {
  var combinedReport = {
    types: {},
    properties: {}
  };

  fs.readdirSync(languageReports).forEach(function(version) {
    var versionPath = path.join(languageReports, version);

    fs.readdirSync(versionPath).forEach(function(reportFile) {
      var reportPath = path.join(versionPath, reportFile);
      var platform = getPlatform(reportPath, platformNames);

      console.error(version + ' - ' + platform);

      var report = parse(fs.readFileSync(reportPath));

      Object.keys(report.types).forEach(function(key) {
        if (!combinedReport.types[key]) {
          combinedReport.types[key] = report.types[key];
        }

        addPlatform(combinedReport.types[key], platform, version);
      });

      Object.keys(report.properties).forEach(function(key) {
        if (!combinedReport.properties[key]) {
          combinedReport.properties[key] = report.properties[key];
        }

        addPlatform(combinedReport.properties[key], platform, version);
      });
    });
  });

  Object.keys(combinedReport.types).forEach(function(key) {
    convertPlatformsToAvailability(combinedReport.types[key]);
  });

  Object.keys(combinedReport.properties).forEach(function(key) {
    convertPlatformsToAvailability(combinedReport.properties[key]);
  });

  return combinedReport;
}

function getPlatformNames() {
  var platformToTargets =
    yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'platforms.yml')));

  var targetToPlatform = {};

  Object.keys(platformToTargets).forEach(function(name) {
    platformToTargets[name].forEach(function(target) {
      targetToPlatform[target] = name;
    });
  });

  return targetToPlatform;
}

function main() {
  if (process.argv.length !== 3) {
    console.error('usage: parse-language-reports <folder>');
    return process.exit(1);
  }

  var language = parseLanguageReports(process.argv[2], getPlatformNames());
  console.log(JSON.stringify(language));
}

if (require.main === module) {
  main();
}

module.exports = parseLanguageReports;
