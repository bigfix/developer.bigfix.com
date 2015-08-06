var fs = require('fs'),
  mkdirp = require('mkdirp'),
  path = require('path');

/**
 * Exit the process with an error.
 */
function die(err) {
  console.error(err);
  process.exit(1);
}

/**
 * Create a function that writes rendered pages to 'outDir'.
 */
module.exports = function(outDir) {

  return function(relativePath, contents) {
    var outPath = path.join(outDir, relativePath);

    mkdirp(path.dirname(outPath), function(err) {
      if (err) {
        return die(err);
      }

      fs.writeFile(outPath, contents, function(err) {
        if (err) {
          return die(err);
        }
      });
    });
  };
};
