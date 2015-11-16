var test = require('tape'),
  rewire = require('rewire'),
  EventEmitter = require('events'),
  PassThrough = require('stream').PassThrough;

function createFakeProcess() {
  var fake = new EventEmitter();
  fake.stdout = new PassThrough();
  fake.stdin = new PassThrough();
  fake.killed = false;

  fake.kill = function() {
    fake.killed = true;
  };

  return fake;
}

function returnFakeProcess(fake) {
  return function() {
    return fake;
  };
}

function rewireQNA(fake) {
  var qna = rewire('../lib/qna');
  qna.__set__('spawn', returnFakeProcess(fake));
  return qna;
}

function sendResult(fake, text) {
  fake.stdout.push('Q: 1\nA: 1\n\nQ: ' + text);
  fake.stdout.push(null);
}

test('qna basic test', function(t) {
  t.plan(2);

  var fake = createFakeProcess();
  var qna = rewireQNA(fake);

  var options = {
    sizeLimit: 16384,
    timeLimit: 5 * 1000
  };

  qna('now', options, function(err, result) {
    t.equal(err, null);
    t.deepEqual(result, {
      answers: ['1'],
      errors: [],
      time: 123,
      type: 'integer'
    });
  });

  sendResult(fake, 'A: 1\nT: 123\nI: integer');
});

test('qna process error test', function(t) {
  t.plan(2);

  var fake = createFakeProcess();
  var qna = rewireQNA(fake);

  var options = {
    sizeLimit: 16384,
    timeLimit: 5 * 1000
  };

  qna('now', options, function(err, result) {
    t.equal(err.message, 'Failed to start qna process');
    t.equal(result, undefined);
  });

  process.nextTick(function() {
    fake.emit('error', new Error('process error!'));
  });
});

test('qna stdout error test', function(t) {
  t.plan(3);

  var fake = createFakeProcess();
  var qna = rewireQNA(fake);

  var options = {
    sizeLimit: 16384,
    timeLimit: 5 * 1000
  };

  qna('now', options, function(err, result) {
    t.equal(err.message, 'Error reading response from qna');
    t.equal(result, undefined);
    t.ok(fake.killed, 'qna should be killed');
  });

  process.nextTick(function() {
    fake.stdout.emit('error', new Error('stdout error!'));
  });
});

test('qna result too big test', function(t) {
  t.plan(3);

  var fake = createFakeProcess();
  var qna = rewireQNA(fake);

  var options = {
    sizeLimit: 1,
    timeLimit: 5 * 1000
  };

  qna('now', options, function(err, result) {
    t.equal(err.message, 'Answer is too large');
    t.equal(result, undefined);
    t.ok(fake.killed, 'qna should be killed');
  });

  process.nextTick(function() {
    fake.stdout.push('hi');
  });
});

test('qna result too slow', function(t) {
  t.plan(3);

  var fake = createFakeProcess();
  var qna = rewireQNA(fake);

  var options = {
    sizeLimit: 16384,
    timeLimit: 0
  };

  qna('now', options, function(err, result) {
    t.equal(err.message, 'Relevance evaluation timed out');
    t.equal(result, undefined);
    t.ok(fake.killed, 'qna should be killed');
  });
});
