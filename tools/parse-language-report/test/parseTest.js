var fs = require('fs'),
  parse = require('../parse'),
  path = require('path'),
  test = require('tape');

function parseReport(name) {
  return parse(fs.readFileSync(path.join(__dirname, name)));
}

test('parse report', function(t) {
  t.plan(1);

  var expected = {
    types: {
      'string position': {
        name: 'string position',
        parent: 'integer'
      },
      'day of month': {
        name: 'day of month',
        parent: undefined
      },
      'symlink': {
        name: 'symlink',
        parent: undefined
      }
    },
    properties: {
      'following text of <string position>': {
        key: 'following text of <string position>',
        type: 'property',
        singularPhrase: 'following text',
        pluralPhrase: 'following texts',
        indexType: undefined,
        directObjectType: 'string position',
        resultType: 'substring'
      },
      'preceding text of <string position>': {
        key: 'preceding text of <string position>',
        type: 'property',
        singularPhrase: 'preceding text',
        pluralPhrase: 'preceding texts',
        indexType: undefined,
        directObjectType: 'string position',
        resultType: 'substring'
      },
      '<day of month> & <month and year>': {
        key: '<day of month> & <month and year>',
        type: 'binaryOp',
        leftType: 'day of month',
        op: '&',
        rightType: 'month and year',
        resultType: 'date'
      },
      '<day of month> as string': {
        key: '<day of month> as string',
        type: 'cast',
        argType: 'day of month',
        phrase: 'string',
        resultType: 'string'
      },
      'extrema of <day of month>': {
        key: 'extrema of <day of month>',
        type: 'property',
        singularPhrase: 'extrema',
        pluralPhrase: 'extremas',
        indexType: undefined,
        directObjectType: 'day of month',
        resultType: '( day of month, day of month )'
      },
      '<symlink> as device file': {
        key: '<symlink> as device file',
        type: 'cast',
        argType: 'symlink',
        phrase: 'device file',
        resultType: 'device file'
      },
      'current day_of_month': {
        key: 'current day_of_month',
        type: 'property',
        singularPhrase: 'current day_of_month',
        pluralPhrase: 'current days_of_month',
        indexType: undefined,
        directObjectType: undefined,
        resultType: 'day of month'
      }
    }
  };

  t.deepEqual(parseReport('report.txt'), expected);
});
