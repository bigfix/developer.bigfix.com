var fs = require('fs'),
  parse = require('./parse'),
  path = require('path'),
  yaml = require('js-yaml');

/**
 * Compare two versions that look like 'a.b.c.d'.
 */
function isVersionLess(a, b) {
  a = a.split('.').map(Number);
  b = b.split('.').map(Number);

  for (var i = 0; i < 4; i++) {
    if (a[i] !== b[i]) {
      return a[i] < b[i];
    }
  }

  return false;
}

/**
 * Sort an array of versions.
 */
function sortVersions(versions) {
  versions.sort(function(a, b) {
    if (isVersionLess(a, b)) {
      return -1;
    }

    if (isVersionLess(b, a)) {
      return 1;
    }

    return 0;
  });
}

/**
 * Record the minimum version this platform supported this type or property.
 */
function addPlatform(platformToVersion, platform, version) {
  if (!platformToVersion.platforms) {
    platformToVersion.platforms = {};
  }

  if (platformToVersion.platforms[platform]) {
    if (isVersionLess(version, platformToVersion.platforms[platform])) {
      platformToVersion.platforms[platform] = version;
    }
  } else {
    platformToVersion.platforms[platform] = version;
  }

  if (platformToVersion.maxVersion) {
    if (isVersionLess(platformToVersion.maxVersion, version)) {
      platformToVersion.maxVersion = version;
    }
  } else {
    platformToVersion.maxVersion = version;
  }
}

/**
 * Return the next version following 'version'.
 */
function nextVersion(version, versions) {
  var index = versions.indexOf(version);

  if (index === -1) {
    throw new Error('Invalid version ' + version);
  }

  if (index + 1 === versions.length) {
    throw new Error('Version ' + version + ' is the last version');
  }

  return versions[index + 1];
}

/**
 * Convert the map of 'Platform -> Version' to 'Version -> [Platforms]' and add
 * deprecation information.
 */
function getSupport(platformToVersion) {
  var versionToPlatforms = {};

  Object.keys(platformToVersion.platforms).forEach(function(platform) {
    var version = platformToVersion.platforms[platform];

    if (!versionToPlatforms[version]) {
      versionToPlatforms[version] = [];
    }

    versionToPlatforms[version].push(platform);
  });

  Object.keys(versionToPlatforms).forEach(function(version) {
    versionToPlatforms[version].sort();
  });

  return versionToPlatforms;
}

/**
 * Parse 'target' out of 'Language.target.txt', and return the pretty name for
 * it specified in platforms.yml.
 */
function getPlatform(reportPath, platformNames) {
  var platform = path.basename(reportPath).match(/Language\.(.+)\.txt$/)[1];

  if (!platformNames[platform]) {
    throw new Error('Unknown platform: ' + platform);
  }

  return platformNames[platform];
}

function parseLanguageReports(languageReports, platformNames) {
  var combinedReport = { types: {}, properties: {} };
  var platformToVersion = { types: {}, properties: {} };

  var maxVersion = '0.0.0.0';
  var versions = [];

  fs.readdirSync(languageReports).forEach(function(version) {
    var versionPath = path.join(languageReports, version);
    versions.push(version);

    fs.readdirSync(versionPath).forEach(function(reportFile) {
      console.log(reportFile);
      if (reportFile.indexOf('Language') !== 0) {
        return;
      }

      var reportPath = path.join(versionPath, reportFile);
      var platform = getPlatform(reportPath, platformNames);

      console.error(version + ' - ' + platform);

      if (isVersionLess(maxVersion, version)) {
        maxVersion = version;
      }

      var report = parse(fs.readFileSync(reportPath));

      Object.keys(report.types).forEach(function(key) {
        if (!combinedReport.types[key]) {
          combinedReport.types[key] = report.types[key];
        }

        if (!platformToVersion.types[key]) {
          platformToVersion.types[key] = {};
        }

        addPlatform(platformToVersion.types[key], platform, version);
      });

      Object.keys(report.properties).forEach(function(key) {
        if (!combinedReport.properties[key]) {
          combinedReport.properties[key] = report.properties[key];
        }

        if (!platformToVersion.properties[key]) {
          platformToVersion.properties[key] = {};
        }

        addPlatform(platformToVersion.properties[key], platform, version);
      });
    });
  });

  sortVersions(versions);

  Object.keys(platformToVersion.types).forEach(function(key) {
    combinedReport.types[key].availability =
      getSupport(platformToVersion.types[key], maxVersion, versions);

    if (platformToVersion.types[key].maxVersion !== maxVersion) {
      combinedReport.types[key].deprecated =
        nextVersion(platformToVersion.types[key].maxVersion, versions);
    }
  });

  Object.keys(platformToVersion.properties).forEach(function(key) {
    combinedReport.properties[key].availability =
      getSupport(platformToVersion.properties[key], maxVersion, versions);

    if (platformToVersion.properties[key].maxVersion !== maxVersion) {
      combinedReport.properties[key].deprecated =
        nextVersion(platformToVersion.properties[key].maxVersion, versions);
    }
  });

  return combinedReport;
}

/**
 * Read the platforms.yml file and convert the map of 'Platform -> Target' to
 * 'Target -> Platform'.
 */
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
  fs.writeFileSync('language.json', JSON.stringify(language, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = parseLanguageReports;
