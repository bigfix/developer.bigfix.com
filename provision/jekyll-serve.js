#!/usr/bin/env node

var exec = require('child_process').exec,
  initialSyncDone = false;

function jekyllServe() {
  var child = exec('jekyll serve --watch -s /home/vagrant/site -H 0.0.0.0');

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
}

function rsyncSiteFolder() {
  var child = exec('rsync -a /vagrant/site /home/vagrant');

  child.on('close', function() {
    if (!initialSyncDone) {
      jekyllServe();
    }

    initialSyncDone = true;
    setTimeout(rsyncSiteFolder, 500);
  });
}

rsyncSiteFolder();
