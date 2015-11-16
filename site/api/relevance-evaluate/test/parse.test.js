var test = require('tape'),
  parse = require('../lib/parse');

function createTest(name, input, expected) {
  test(name + ' test', function(t) {

    // We add an extra 'Q: 1' to the front of the question in qna.js, so parse
    // expects to see the answer to that.
    var fullInput = 'Q: 1\nA: 1\n\nQ: ' + input;

    t.plan(1);
    t.deepEqual(parse(fullInput), expected);
  });
}

createTest('parse empty', '', {
  answers: [],
  errors: [],
  time: 0,
  type: ''
});

createTest('parse single', 'A: 1\nT: 123\nI: integer', {
  answers: ['1'],
  errors: [],
  time: 123,
  type: 'integer'
});

createTest('parse multiple', 'A: 1\nA: 2\nT: 123\nI: integer', {
  answers: ['1', '2'],
  errors: [],
  time: 123,
  type: 'integer'
});

createTest('parse error', 'E: err\nT: 123', {
  answers: [],
  errors: ['err'],
  time: 123,
  type: ''
});

createTest('parse answer with error', 'A: 1\nE: err\nT: 123', {
  answers: ['1'],
  errors: ['err'],
  time: 123,
  type: ''
});

createTest('parse percent encoded non-ascii', 'A: %c2\nT: 123\nI: string', {
  answers: ['%c2'],
  errors: [],
  time: 123,
  type: 'string'
});
