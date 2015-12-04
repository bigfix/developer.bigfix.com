var randomTag = require('./random'),
  fs = require('fs'),
  path = require('path');

/**
 * Allocate a file for the stash inside the directory 'stashDir'.
 */
module.exports = function(stashDir, cb) {
  var attempts = 0;
  
  function tryCreate(tag) {
    attempts++;

    fs.open(path.join(stashDir, tag), 'wx', function(err, fd) {
      if (err) {
        if (attempts < 5) {
          return tryCreate(randomTag());
        }

        return cb(err);
      }

      fs.close(fd, function() {
        cb(null, tag);
      });
    });
  }

  tryCreate(randomTag());
};
