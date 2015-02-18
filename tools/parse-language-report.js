#!/usr/bin/env node

var fs = require('fs');

function trimResultType(resultType) {
  if (resultType[0] !== '<') {
    return resultType;
  }

  return resultType.substr(1, resultType.length - 2);
}

function parseUnaryOperator(key, mangledResultType) {
  var keyMatch = key.match('(.*) <([^>]*)>');
  if (!keyMatch) {
    throw new Error('Invalid unary operator: ' + key);
  }

  var resultMatch = mangledResultType.match('UnaryOperator(.+)');
  if (!resultMatch) {
    throw new Error('Invalid unary operator result: ' + resultMatch);
  }

  return {
    key: key,
    type: 'unaryOp',
    resultType: resultMatch[1],
    argType: keyMatch[2],
    op: keyMatch[1]
  };
}

function parseBinaryOperator(key, resultType) {
  var match = key.match(/<([^>]*)> (.*) <([^>]*)>/);
  if (!match) {
    throw new Error('Invalid binary operator: ' + key);
  }

  return {
    key: key,
    type: 'binaryOp',
    resultType: trimResultType(resultType),
    leftType: match[1],
    op: match[2],
    rightType: match[3]
  };
}

function parseCast(key, resultType) {
  var match = key.match(/<([^>]*)> as (.*)/);
  if (!match) {
    throw new Error('Invalid cast: ' + key);
  }

  return {
    key: key,
    type: 'cast',
    resultType: trimResultType(resultType),
    argType: match[1],
    phrase: match[2]
  };
}

function splitProperty(line, delimiter) {
  var parts = [], last = 0, inBrackets = false;

  for (var i = 0; i < line.length; i++) {
    if (inBrackets) {
      if (line[i] === '>') {
        inBrackets = false;
      }
    } else if (line[i] === '<') {
      inBrackets = true;
    } else if (line.substr(i, delimiter.length) === delimiter) {
      parts.push(line.substr(last, i - last));
      i += delimiter.length - 1;
      last = i + 1;
    }
  }

  if (last < line.length) {
    parts.push(line.substr(last, line.length - last));
  }

  return parts;
}

function parseNormalProperty(key, plural, resultType) {
  var match, phrase, indexType, directObjectType, parts;

  parts = splitProperty(key, ' of ');

  if (parts.length !== 1 && parts.length !== 2) {
    throw new Error('Invalid property: ' + key);
  }

  if (match = parts[0].match(/^([^<]*)( <([^>]*)>)?$/)) {
    phrase = match[1];
    indexType = match[3];
  } else {
    throw new Error('Invalid property: ' + key);
  }

  if (parts.length === 2) {
    if (match = parts[1].match(/^<([^>]*)>$/)) {
      directObjectType = match[1];
    } else {
      throw new Error('Invalid property: ' + key);
    }
  }

  return {
    key: key,
    type: 'property',
    resultType: trimResultType(resultType),
    singularPhrase: phrase,
    pluralPhrase: plural,
    indexType: indexType,
    directObjectType: directObjectType
  };
}

function parseProperty(line) {
  var form, parts = splitProperty(line, ',');

  if (parts.length === 4) {
    form = parts[2].trim();

    if (form === 'BinaryOperator') {
      return parseBinaryOperator(parts[0].trim(), parts[3].trim());
    }

    if (form === 'Cast') {
      return parseCast(parts[0].trim(), parts[3].trim())
    }

    return parseNormalProperty(parts[0].trim(), parts[1].trim(),
                               parts[3].trim());
  }

  if (parts.length === 3) {
    return parseUnaryOperator(parts[0].trim(), parts[2].trim());
  }

  throw new Error('Invalid property line: ' + line);
}

function parse(lines) {
  var state, result = {
    types: {},
    properties: {}
  };

  function waitForTypesOrProperties(line) {
    var match = line.match(/^  Type <([^>]*)>( \(derives from ([^)]*)\))?/);
    if (match) {
      result.types[match[1]] = {
        type: match[1],
        parent: match[3]
      };
    } else if (line.match(/^    Properties of|^Properties of World/)) {
      state = properties;
    }
  }

  function properties(line) {
    var property;

    if (line.length === 0) {
      state = waitForTypesOrProperties;
      return;
    }

    property = parseProperty(line);
    result.properties[property.key] = property;
  }

  state = waitForTypesOrProperties;
  lines.forEach(function(line) {
    state(line);
  });

  return result;
}

function makeStructured(result) {
  var structured = {
    types: [],
    properties: [],
    casts: [],
    binaryOperators: [],
    unaryOperators: []
  };

  Object.keys(result.types).forEach(function(key) {
    structured.types.push(result.types[key]);
  });

  Object.keys(result.properties).forEach(function(key) {
    var property = result.properties[key];

    if (property.type === 'property') {
      structured.properties.push(property);
    } else if (property.type === 'cast') {
      structured.casts.push(property);
    } else if (property.type === 'binaryOp') {
      structured.binaryOperators.push(property);
    } else if (property.type === 'unaryOp') {
      structured.unaryOperators.push(property);
    } else {
      throw new Error('Unknown property type: ' + property.type);
    }
  });

  return structured;
}

function main() {
  var lines, result;

  if (process.argv.length !== 3) {
    console.error('usage: parse-language-report <file>');
    process.exit(1);
  }

  lines = fs.readFileSync(process.argv[2]).toString().split('\n');
  result = makeStructured(parse(lines));
  console.log(JSON.stringify(result));
}

main();
