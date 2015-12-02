var crypto = require('crypto'),
  fs = require('fs'),
  path = require('path');

function randomTag() {
  var text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  var tag = '';

  crypto.randomBytes(7).forEach(function(number) {
    tag += text[number % text.length];
  });

  return tag;
}

module.exports = function(dir, cb) {
  var attempts = 0;
  
  function tryCreate() {
    var tag = randomTag();

    attempts++;

    fs.open(path.join(dir, tag), 'wx', function(err, fd) {
      if (err) {
        if (attempts < 5) {
          return tryCreate();
        }

        return cb(err);
      }

      fs.close(fd, function() {
        cb(null, tag);
      });
    });
  }

  tryCreate();
};
