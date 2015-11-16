var test = require('tape'),
  buffer = require('../lib/buffer'),
  PassThrough = require('stream').PassThrough;

test('buffer test', function(t) {
  t.plan(2);

  var stream = new PassThrough();
  stream.push('h');
  stream.push('i');
  stream.push(null);

  buffer(stream, 32, function(err, output) {
    t.equal(err, null);
    t.equal('hi', output.toString());
  });
});

test('buffer too large test', function(t) {
  t.plan(2);

  var stream = new PassThrough();
  stream.push('h');
  stream.push('i');
  stream.push(null);

  buffer(stream, 1, function(err, output) {
    t.equal(err.message, 'Answer is too large');
    t.equal(output, undefined);
  });
});

test('buffer error test', function(t) {
  t.plan(2);

  var stream = new PassThrough();
  stream.push('h');
  stream.push('i');

  buffer(stream, 32, function(err, output) {
    t.equal(err.message, 'Error reading response from qna');
    t.equal(output, undefined);
  });

  process.nextTick(function() {
    stream.emit('error', new Error('oh no!'));
  });
});
