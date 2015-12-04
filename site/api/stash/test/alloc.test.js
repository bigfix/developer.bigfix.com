var test = require('tape'),
  os = require('os'),
  path = require('path'),
  mockfs = require('mock-fs'),
  rewire = require('rewire');
  
var stashesDir = '/stashes';

function randomTagSet(tags) {
  return function() {
    return tags.shift();
  }
}

test('alloc uses random tag', function(t) {
  t.plan(2);
  
  var fs = mockfs.fs({
    '/stashes': {}
  });
  
  var randomTag = randomTagSet(['a', 'b', 'c', 'd', 'e']);
  
  var alloc = rewire('../lib/alloc');
  alloc.__set__('randomTag', randomTag);
  alloc.__set__('fs', fs);
  
  alloc(stashesDir, function(err, id) {
    t.equal(err, null);
    t.equal(id, 'a');
  });
});

test('alloc can retry on collision', function(t) {
  t.plan(2);
  
  var fs = mockfs.fs({
    '/stashes': {
      'a': '',
      'b': ''
    }
  });
  
  var randomTag = randomTagSet(['a', 'b', 'c', 'd', 'e']);
  
  var alloc = rewire('../lib/alloc');
  alloc.__set__('randomTag', randomTag);
  alloc.__set__('fs', fs);
  
  alloc(stashesDir, function(err, id) {
    t.equal(err, null);
    t.equal(id, 'c');
  }); 
});

test('alloc will fail after 5 collisions', function(t) {
  t.plan(2);
  
  var fs = mockfs.fs({
    '/stashes': {
      'a': ''
    }
  });
  
  var randomTag = randomTagSet(['a', 'a', 'a', 'a', 'a']);
  
  var alloc = rewire('../lib/alloc');
  alloc.__set__('randomTag', randomTag);
  alloc.__set__('fs', fs);
  
  alloc(stashesDir, function(err, id) {
    t.notEqual(err, null, 'should return an error');
    t.equal(id, undefined);
  });
});
