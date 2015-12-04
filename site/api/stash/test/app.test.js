/* global Buffer */
/* global process */

var test = require('tape'),
  mockfs = require('mock-fs'),
  request = require('supertest'),
  rewire = require('rewire');
  
process.env.NODE_ENV = 'test';
var stashesDir = '/stashes';

test('GET return 400 on invalid tag', function(t) {
	t.plan(1);
  
  var fs = mockfs.fs({
    '/stashes': {}
  });
  
  var createApp = rewire('../lib/app');
  createApp.__set__('fs', fs);
  
  var app = createApp(stashesDir); 
  
  request(app)
    .get('/api/stash/12345678')
    .expect(400, 'invalid stash id')
    .end(function(err, res) {
      t.equal(err, null);
    });
});

test('GET returns 404 on tag not found', function(t) {
	t.plan(1);
  
  var fs = mockfs.fs({
    '/stashes': {}
  });
  
  var createApp = rewire('../lib/app');
  createApp.__set__('fs', fs);
  
  var app = createApp(stashesDir); 
  
  request(app)
    .get('/api/stash/1234567')
    .expect(404, 'stash not found')
    .end(function(err, res) {
      t.equal(err, null);
    });
});

test('GET returns contents', function(t) {
	t.plan(1);
  
  var fs = mockfs.fs({
    '/stashes': {
      '1234567': 'hello'
    }
  });
  
  var createApp = rewire('../lib/app');
  createApp.__set__('fs', fs);
  
  var app = createApp(stashesDir); 
  
  request(app)
    .get('/api/stash/1234567')
    .expect(200, 'hello')
    .end(function(err, res) {
      t.equal(err, null);
    });
});

function allocStashSet(tags) {
  return function(dir, cb) {
    process.nextTick(function() {
      cb(null, tags.shift());
    });
  }
}

test('POST returns 413 on long bodies', function(t) {
 t.plan(1);
  
  var fs = mockfs.fs({
    '/stashes': {}
  });
  
  var createApp = rewire('../lib/app');
  createApp.__set__('fs', fs);
  
  var app = createApp(stashesDir);
  
  var buffer = new Buffer(4*1024*1024);
  buffer.fill('x');
  
  request(app)
    .post('/api/stash')
    .send({text: buffer.toString()})
    .expect(413)
    .end(function(err, res) {
      t.equal(err, null);
    });
});

test('POST returns 400 on invalid bodies', function(t) {
 t.plan(1);
  
  var fs = mockfs.fs({
    '/stashes': {}
  });
  
  var createApp = rewire('../lib/app');
  createApp.__set__('fs', fs);
  
  var app = createApp(stashesDir);
  
  request(app)
    .post('/api/stash')
    .send({hodor: 'hello'})
    .expect(400, 'invalid stash')
    .end(function(err, res) {
      t.equal(err, null);
    });
});

test('POST writes file', function(t) {
 t.plan(2);
  
  var fs = mockfs.fs({
    '/stashes': {}
  });
  
  var allocStash = allocStashSet(['1234567']);
  
  var createApp = rewire('../lib/app');
  createApp.__set__('fs', fs);
  createApp.__set__('allocStash', allocStash);
  
  var app = createApp(stashesDir);
  
  request(app)
    .post('/api/stash')
    .send({text: 'hello'})
    .expect(200)
    .end(function(err, res) {
      t.equal(err, null);
      t.equal(fs.readFileSync('/stashes/1234567').toString(), 'hello');      
    });
});
