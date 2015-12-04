/* global process */

var createApp = require('./lib/app');

if (!process.env.STASHDIR) {
  console.error('Missing STASHDIR environment variable');
  process.exit(1);
}

var app = createApp(process.env.STASHDIR);
app.listen(process.env.PORT);
