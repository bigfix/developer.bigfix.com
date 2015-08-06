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

  while (currentDir !== baseDir) {
    defaults.push(getLocalDefaults(currentDir));
    currentDir = path.dirname(currentDir);
  }

  defaults.push(getLocalDefaults(baseDir));
  return defaults.reverse().reduce(extend, {});
}

module.exports = getDefaults;
