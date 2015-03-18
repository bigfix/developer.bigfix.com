var fs = require('fs'),
  mkdirp = require('mkdirp'),
  path = require('path'),
  renderText = require('../lib/renderText');

function buildGuide(templates, siteDir, outDir) {
  var guideDir = path.join(siteDir, 'guide');

  mkdirp.sync(path.join(outDir, 'site', 'guide'));

  fs.readdirSync(guideDir).forEach(function(folder) {
    var sourceFolder = path.join(guideDir, folder);
    var destFolder = path.join(outDir, 'site', 'guide', folder);

    mkdirp.sync(destFolder);

    fs.readdirSync(sourceFolder).forEach(function(file) {
      var sourceFile = path.join(sourceFolder, file);
      var data = {
        title: 'Hodor',
        content: renderText(fs.readFileSync(sourceFile).toString(), templates)
      };

      var destFile = path.join(destFolder, path.basename(file, '.md') + '.html');
      fs.writeFileSync(destFile, templates.page.render(data));
    });
  });
}

module.exports = buildGuide;
