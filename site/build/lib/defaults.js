var extend = require('util-extend'),
  fs = require('fs'),
  path = require('path'),
  yaml = require('js-yaml');

/**
 * Read the defaults.yml in one directory.
 */
function getLocalDefaults(directory) {
  try {
    var contents = fs.readFileSync(path.join(directory, 'defaults.yml'));
    return yaml.safeLoad(contents);
  } catch (err) {
    return {};
  }
}

/**
 * Get the effective defaults for a directory.
 */
function getDefaults(baseDir, currentDir) {
  var defaults = [];
  var siteNav = getSiteNav(baseDir);
  while (currentDir !== baseDir) {
    defaults.push(getLocalDefaults(currentDir));
    currentDir = path.dirname(currentDir);
  }

  defaults.push(getLocalDefaults(baseDir));
  defaults.push({
    siteNav: siteNav
  });
  return defaults.reverse().reduce(extend, {});
}

var siteNav = null;

/**
 * Aggregate all nav info from defaults.yml files to return the full nav tree.
 */
function getSiteNav(baseDir) {
  if (siteNav !== null) {
    return siteNav;
  }
  var baseConfig = getLocalDefaults(baseDir);
  var root = baseConfig['rootNav'];
  for (var i = 0; i < root.length; i++) {
    var section = root[i];
    if (section['folder']) {
      if (section['href'] === undefined) {
        section['href'] = '/' + section['folder'] + '/';
      }
      section['children'] = getNav(baseDir + '/' + section['folder']);
    }
  }
  siteNav = root;
  return siteNav;
}

function getNav(directory) {
  var config = getLocalDefaults(directory);
  if (config['nav'] === undefined) {
    return [];
  }
  return config['nav'];
}

module.exports = getDefaults;
