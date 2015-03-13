var fs = require('fs'),
  path = require('path'),
  sqlite3 = require('sqlite3');

function insertProperties(properties, renderedProperties, db) {
  var query = fs.readFileSync(path.join(__dirname, 'insertProperty.sql'));
  var statement = db.prepare(query.toString());

  Object.keys(properties).forEach(function(key) {
    var property = properties[key];

    if (property.type !== 'property') {
      return;
    }

    statement.run({
      $singularPhrase: property.singularPhrase,
      $pluralPhrase: property.pluralPhrase,
      $indexType: property.indexType || '',
      $directObjectType: property.directObjectType || '',
      $resultType: property.resultType,
      $markup: renderedProperties[key]
    });
  });

  statement.finalize();
}

function insertCasts(properties, renderedProperties, db) {
  var query = fs.readFileSync(path.join(__dirname, 'insertCast.sql'));
  var statement = db.prepare(query.toString());

  Object.keys(properties).forEach(function(key) {
    var property = properties[key];

    if (property.type !== 'cast') {
      return;
    }

    statement.run({
      $argType: property.argType,
      $phrase: property.phrase,
      $resultType: property.resultType,
      $markup: renderedProperties[key]
    });
  });

  statement.finalize();
}

function createSearchDatabase(properties, renderedProperties, outDir) {
  console.log('creating search database');

  var db = new sqlite3.Database(path.join(outDir, 'search.db'));
  var schema = fs.readFileSync(path.join(__dirname, 'schema.sql'));

  db.serialize();
  db.run('begin deferred transaction');
  db.exec(schema.toString());

  insertProperties(properties, renderedProperties, db);
  insertCasts(properties, renderedProperties, db);

  db.run('commit transaction');
}

module.exports = createSearchDatabase;
