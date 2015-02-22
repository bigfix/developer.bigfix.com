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

function sortByKey(a, b) {
  if ( a.key < b.key )
    return -1;

  if ( a.key > b.key )
    return 1;

  return 0;
}

function castsOf(type) {
  var body = '';
  var casts = [];

  Object.keys(language.properties).forEach(function(key) {
    var property = language.properties[key];

    if (property.type === 'cast' && property.argType === type) {
      casts.push(property);
    }
  });

  casts.sort(sortByKey);

  casts.forEach(function(cast) {
    body += '{% cast ' + cast.key + ' %}';
    body += '\n';
    body += '\n';

    if (docs.properties[cast.key]) {
      body += escape(docs.properties[cast.key]);
    } else {
      body += 'No documentation exists for this cast.';
    }

    body += '\n';
    body += '\n';
  });

  return body;
}

function propertiesOf(type) {
  var body = '';
  var properties = [];

  Object.keys(language.properties).forEach(function(key) {
    var property = language.properties[key];

    if (property.type === 'property' && property.directObjectType === type) {
      properties.push(property);
    }
  });

  properties.sort(sortByKey);

  properties.forEach(function(property) {
    body += '{% property ' + property.key + ' %}';
    body += '\n';
    body += '\n';

    if (docs.properties[property.key]) {
      body += escape(docs.properties[property.key]);
    } else {
      body += 'No documentation exists for this property.';
    }

    body += '\n';
    body += '\n';
  });

  return body;
}

fs.readdirSync(path.join(siteDir, 'reference')).forEach(function(dir) {
  if (dir.indexOf('index') !== -1) {
    return;
  }

  rimraf.sync(path.join(siteDir, 'reference', dir));
});

var index = '---\n';
index += 'title: Reference\n';
index += '---\n';
index += '\n'

Object.keys(categories).forEach(function(category) {
  fs.mkdirSync(path.join(siteDir, 'reference', category));

  index += '## ' + category;
  index += '\n';

  Object.keys(categories[category]).forEach(function(topic) {
    var types = categories[category][topic];
    var body = '';

    body += '---\n';
    body += 'title: ' + topic + '\n';
    body += '---\n';
    body += '\n';

    types.forEach(function(type) {
      body += '{% type ' + type + ' %}';
      body += '\n';
      body += '\n';

      if (docs.types[type]) {
        body += escape(docs.types[type]);
      } else {
        body += 'No documentation exists for this type.';
      }

      body += '\n';
      body += '\n';
      
      var properties = propertiesOf(type);
      if (properties.length !== 0) {
        body += '#### Properties of ' + escape(type);
        body += '\n';
        body += '\n';
        body += properties;
      }

      var casts = castsOf(type);
      if (casts.length !== 0) {
        body += '#### Casts of ' + escape(type);
        body += '\n';
        body += '\n';
        body += casts;
      }
    });

    index += '* <a href="/reference/' + category + '/' + topic + '.html">' +
      topic + '</a>\n';

    var filePath = path.join(siteDir, 'reference', category, topic + '.md');
    fs.writeFileSync(filePath, body);
  });

  index += '\n';
});

var filePath = path.join(siteDir, 'reference', 'index.md');
fs.writeFileSync(filePath, index);
