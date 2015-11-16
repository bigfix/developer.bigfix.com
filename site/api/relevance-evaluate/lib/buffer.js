var debug = require('debug')('qna:debug');

/**
 * Buffer the output of qna. If the amount of output exceeds 'limit' or an error
 * happens, return an error.
 */
module.exports = function(stream, limit, callback) {
  var buffers = [];
  var length = 0;

  function read() {
    var buffer;

    while (true) {
      buffer = stream.read();

      if (buffer === null) {
        break;
      }

      buffers.push(buffer);
      length += buffer.length;

      if (length > limit) {
        return tooBig();
      }
    }
  }

  function end() {
    cleanup();
    callback(null, Buffer.concat(buffers, length));
  }

  function error(err) {
    cleanup();
    debug('Error reading qna response: %s', err.toString());
    callback(new Error('Error reading response from qna'));
  }

  function tooBig() {
    cleanup();
    debug('Error reading qna response: too big');
    callback(new Error('Answer is too large'));
  }

  function cleanup() {
    stream.removeListener('readable', read);
    stream.removeListener('end', end);
    stream.removeListener('error', error);
  }

  stream.on('readable', read);
  stream.on('end', end);
  stream.on('error', error);

  read();
};
