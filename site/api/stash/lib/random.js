var crypto = require('crypto');

/**
 * Create a random filename-safe 7 character tag.
 */
module.exports = function() {
  var text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  var tag = '';

  crypto.randomBytes(7).forEach(function(number) {
    tag += text[number % text.length];
  });

  return tag;
}
