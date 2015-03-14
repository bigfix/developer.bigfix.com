var cheerio = require('cheerio'),
  extend = require('util')._extend,
  request = require('request');

var baseURL = 'http://support.bigfix.com/inspectors/';

function getTypes($) {
  var types = {};

  $('.type_description').each(function(i, el) {
    types[$(el).parent().prev().text()] = $(el).text();
  });

  return types;
}

function getCreationMethods($, type) {
  var properties = {};

  $('[id="creation_' + type + '"] .item_row').each(function(i, el) {
    var tds = $(el).children('td');
    properties[$(tds[0]).text().trim()] = $(tds[1]).text().trim();
  });

  return properties;
}

function getProperties($, type) {
  var properties = {};

  $('[id="property_' + type + '"] .item_row').each(function(i, el) {
    var tds = $(el).children('td');
    properties[$(tds[0]).text().trim()] = $(tds[2]).text().trim();
  });

  return properties;
}

function scrapeDoc($) {
  var result = {
    types: {},
    properties: {}
  };

  extend(result.types, getTypes($));

  Object.keys(result.types).forEach(function(type) {
    extend(result.properties, getCreationMethods($, type));
    extend(result.properties, getProperties($, type));
  });

  return result;
}

function get(page, callback) {
  console.error('GET ' + page);

  request(page, function(err, res, body) {
    if (err) {
      return callback(err);
    }

    if (res.statusCode !== 200) {
      return callback(new Error('Bad status: ' + res.statusCode));
    }

    callback(null, cheerio.load(body));
  });
}

function getPages(callback) {
  var pages = [];

  get(baseURL + 'World%20Objects_Any.html', function(err, $) {
    if (err) {
      return callback(err);
    }

    $('.external_page_link').each(function(i, el) {
      pages.push(baseURL + $(el).attr('href'));
    });

    callback(null, pages);
  });
}

function scrapeAll(pages, callback) {
  var result = {
    types: {},
    properties: {}
  };

  function scrape(i) {
    if (i === pages.length) {
      return callback(null, result);
    }

    get(pages[i], function(err, $) {
      if (err) {
        return callback(err);
      }

      var doc = scrapeDoc($);
      extend(result.types, doc.types);
      extend(result.properties, doc.properties);

      scrape(i + 1);
    });
  }

  scrape(0);
}

getPages(function(err, pages) {
  if (err) {
    console.error(err.toString());
    return process.exit(1);
  }

  scrapeAll(pages, function(err, result) {
    if (err) {
      console.error(err.toString());
      return process.exit(1);
    }

    console.log(JSON.stringify(result));
  });
});
