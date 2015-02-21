var fs = require('fs'),
  path = require('path'),
  rimraf = require('rimraf'),
  escape = require('escape-html'),
  yaml = require('js-yaml');

if (process.argv.length !== 6) {
  console.error(
    'usage: create-pages ' +
    '<site-dir> <categories.yml> <language.json> <docs.json>');

  return process.exit(1);
}

var siteDir = process.argv[2];
var categories = yaml.safeLoad(fs.readFileSync(process.argv[3]));
var language = JSON.parse(fs.readFileSync(process.argv[4]));
var docs = JSON.parse(fs.readFileSync(process.argv[5]));

function castsOf(type) {
  var body = '';

  Object.keys(language.properties).forEach(function(key) {
    var property = language.properties[key];

    if (property.type === 'cast' && property.argType === type) {
      body += '{% property ' + property.key + ' %}';
      body += '\n';
      body += '\n';

      if (docs.properties[key]) {
        body += escape(docs.properties[key]);
      } else {
        body += 'No documentation exists for this cast.';
      }

      body += '\n';
      body += '\n';
    }
  });

  return body;
}

function propertiesOf(type) {
  var body = '';

  Object.keys(language.properties).forEach(function(key) {
    var property = language.properties[key];

    if (property.type === 'property' && property.directObjectType === type) {
      body += '{% property ' + property.key + ' %}';
      body += '\n';
      body += '\n';

      if (docs.properties[key]) {
        body += escape(docs.properties[key]);
      } else {
        body += 'No documentation exists for this property.';
      }

      body += '\n';
      body += '\n';
    }
  });

  return body;
}

fs.readdirSync(path.join(siteDir, 'reference')).forEach(function(dir) {
  if (dir.indexOf('index') !== -1) {
    return;
  }

  rimraf.sync(path.join(siteDir, 'reference', dir));
});

Object.keys(categories).forEach(function(category) {
  fs.mkdirSync(path.join(siteDir, 'reference', category));

  Object.keys(categories[category]).forEach(function(topic) {
    var types = categories[category][topic];
    var body = '';

    body += '---\n';
    body += 'title: ' + topic + '\n';
    body += '---\n';
    body += '\n';

    types.forEach(function(type) {
      body += '{% type ' + type + '%}';
      body += '\n';
      body += '\n';

      if (docs.types[type]) {
        body += escape(docs.types[type]);
      } else {
        body += 'No documentation exists for this type.';
      }

      body += '\n';
      body += '\n';

      var casts = castsOf(type);
      if (casts.length !== 0) {
        body += '#### Casts';
        body += '\n';
        body += '\n';
        body += casts;
      }
      
      var properties = propertiesOf(type);
      if (properties.length !== 0) {
        body += '#### Properties';
        body += '\n';
        body += '\n';
        body += properties;
      }
    });

    var filePath = path.join(siteDir, 'reference', category, topic + '.md');
    fs.writeFileSync(filePath, body);
  });
});
