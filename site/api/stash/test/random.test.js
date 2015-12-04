var test = require('tape'),
  randomTag = require('../lib/random');
  
test('random tag', function(t) {
  t.plan(2);
  
  var tag = randomTag();
  t.equal(tag.length, 7);
  t.ok(tag.match(/[A-Za-z_-]+/), 'returns filename safe tag');
});
