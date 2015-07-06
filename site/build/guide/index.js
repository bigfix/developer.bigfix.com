var fs = require('fs'),
  mkdirp = require('mkdirp'),
  path = require('path'),
  renderText = require('../lib/renderText'),
  yaml = require('js-yaml');

function getGuideContent(templates, siteDir, outDir) {
  var guideDir = path.join(siteDir, 'guide');
  var guideContent = {};

  fs.readdirSync(guideDir).forEach(function(folder) {
    var sourceFolder = path.join(guideDir, folder);
    var destFolder = path.join(outDir, 'site', 'relevance', 'guide', folder);

    guideContent[folder] = {};

    fs.readdirSync(sourceFolder).forEach(function(file) {
      var sourceFile = path.join(sourceFolder, file);
      var basename = path.basename(file, '.md');
      var destFile = path.join(destFolder, basename + '.html');

      var data = renderText(fs.readFileSync(sourceFile).toString(), templates);

      guideContent[folder][basename] = {
        title: data.title,
        content: data.content,
        href: '/relevance/guide/' + folder + '/' + basename + '.html',
        destFile: destFile
      };
    });
  });

  return guideContent;
}

function getGuideNavigation(siteDir, guideContent) {
  var organization = yaml.safeLoad(
    fs.readFileSync(path.join(siteDir, 'data', 'guide.yml')).toString());

  var guideNavigation = {
    sections: []
  };

  organization.forEach(function(section) {
    var folder = section.title.toLowerCase();

    if (!guideContent[folder]) {
      throw new Error('Section ' + section + ' in guide.yml does not exist');
    }

    var docs = [];

    section.docs.forEach(function(page) {
      var pageContent = guideContent[folder][page];

      if (!pageContent) {
        throw new Error('Page ' + page + ' in guide.yml does not exist');
      }

      docs.push({
        title: pageContent.title,
        href: pageContent.href
      });
    });

    guideNavigation.sections.push({ title: section.title, docs: docs});
  });

  return guideNavigation;
}

function buildGuide(templates, siteDir, outDir) {
  var guideContent = getGuideContent(templates, siteDir, outDir);
  var guideNavigation = getGuideNavigation(siteDir, guideContent);

  mkdirp.sync(path.join(outDir, 'site', 'relevance', 'guide'));

  Object.keys(guideContent).forEach(function(folder) {
    var docs = guideContent[folder];

    mkdirp.sync(path.join(outDir, 'site', 'relevance', 'guide', folder));

    Object.keys(docs).forEach(function(name) {
      var doc = docs[name];

      var content = templates.guide.render({
        nav: guideNavigation,
        content: doc.content
      });

      var page = templates.page.render({
        title: doc.title,
        content: content
      });

      fs.writeFileSync(doc.destFile, page);
    });
  });
}

module.exports = buildGuide;
