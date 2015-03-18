var fs = require('fs'),
  mkdirp = require('mkdirp'),
  path = require('path'),
  renderText = require('../lib/renderText'),
  yaml = require('js-yaml');

function buildPages(templates, siteDir, outDir) {
  var guideDir = path.join(siteDir, 'guide');

  mkdirp.sync(path.join(outDir, 'site', 'guide'));

  var guide = {};

  fs.readdirSync(guideDir).forEach(function(folder) {
    var sourceFolder = path.join(guideDir, folder);
    var destFolder = path.join(outDir, 'site', 'guide', folder);

    guide[folder] = {};
    mkdirp.sync(destFolder);

    fs.readdirSync(sourceFolder).forEach(function(file) {
      var sourceFile = path.join(sourceFolder, file);
      var basename = path.basename(file, '.md');
      var destFile = path.join(destFolder, basename + '.html');

      var data = renderText(fs.readFileSync(sourceFile).toString(), templates);
      fs.writeFileSync(destFile, templates.page.render(data));

      guide[folder][basename] = {
        title: data.title,
        href: '/guide/' + folder + '/' + basename + '.html'
      };
    });
  });

  return guide;
}

function buildGuide(templates, siteDir, outDir) {
  var guide = buildPages(templates, siteDir, outDir);
  var organization = yaml.safeLoad(
    fs.readFileSync(path.join(siteDir, 'data', 'guide.yml')).toString());

  var data = {
    sections: []
  };

  organization.forEach(function(section) {
    var folder = section.title.toLowerCase();

    if (!guide[folder]) {
      throw new Error('Section ' + section + ' in guide.yml does not exist');
    }

    var docs = [];

    section.docs.forEach(function(page) {
      if (!guide[folder][page]) {
        throw new Error('Page ' + page + ' in guide.yml does not exist');
      }

      docs.push(guide[folder][page]);
    });

    data.sections.push({ title: section.title, docs: docs});
  });

  var index = {
    title: 'Guide',
    content: templates.guide.render(data)
  };

  fs.writeFileSync(path.join(outDir, 'site', 'guide', 'index.html'),
                   templates.page.render(index));
}

module.exports = buildGuide;
