var fs = require('fs');

/**
 * Convert <foo> into foo.
 */
function trimType(resultType) {
  if (resultType[0] !== '<') {
    return resultType;
  }

  return resultType.substr(1, resultType.length - 2);
}

/**
 * Split a string, being careful to not split inside of <brackets>.
 */
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

/**
 * Parse a unary operator declaration. For example:
 * - <floating point>, , UnaryOperatorfloating point
 */
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

/**
 * Parse a binary operator declaration. For example:
 * <floating point> * <floating point>, , BinaryOperator, <floating point>
 */
function parseBinaryOperator(key, resultType) {
  var match = key.match(/<([^>]*)> (.*) <([^>]*)>/);
  if (!match) {
    throw new Error('Invalid binary operator: ' + key);
  }

  return {
    key: key,
    type: 'binaryOp',
    resultType: trimType(resultType),
    leftType: match[1],
    op: match[2],
    rightType: match[3]
  };
}

/**
 * Parse a cast declaration. For example:
 * <floating point> as scientific notation, , Cast, <string>
 */
function parseCast(key, resultType) {
  var match = key.match(/<([^>]*)> as (.*)/);
  if (!match) {
    throw new Error('Invalid cast: ' + key);
  }

  return {
    key: key,
    type: 'cast',
    resultType: trimType(resultType),
    argType: match[1],
    phrase: match[2]
  };
}

/**
 * Parse a property declaration. For example:
 * finite of <floating point>, finites, Plain, <boolean>
 */
function parseProperty(key, pluralPhrase, resultType) {
  var match, singularPhrase, indexType, directObjectType, parts;

  parts = splitProperty(key, ' of ');

  if (parts.length !== 1 && parts.length !== 2) {
    throw new Error('Invalid property: ' + key);
  }

  if (match = parts[0].match(/^([^<]*)( <([^>]*)>)?$/)) {
    singularPhrase = match[1];
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
    resultType: trimType(resultType),
    singularPhrase: singularPhrase,
    pluralPhrase: pluralPhrase,
    indexType: indexType,
    directObjectType: directObjectType
  };
}

/**
 * Parse a unary operator, binary operator, cast, or property declaration.
 */
function parsePropertyOrOperator(line) {
  var form, parts = splitProperty(line, ',');

  if (parts.length === 4) {
    form = parts[2].trim();

    if (form === 'BinaryOperator') {
      return parseBinaryOperator(parts[0].trim(), parts[3].trim());
    }

    if (form === 'Cast') {
      return parseCast(parts[0].trim(), parts[3].trim())
    }

    return parseProperty(parts[0].trim(), parts[1].trim(), parts[3].trim());
  }

  if (parts.length === 3) {
    return parseUnaryOperator(parts[0].trim(), parts[2].trim());
  }

  throw new Error('Invalid property line: ' + line);
}

/**
 * Parse a type declaration. For example:
 * Type <substring> (derives from string)
 */
function parseType(line) {
  var match = line.match(/^  Type <([^>]*)>( \(derives from ([^)]*)\))?/);
  if (!match) {
    throw new Error('Invalid type line: ' + line);
  }

  return {
    name: match[1].trim(),
    parent: match[3].trim()
  };
}

/**
 * Parse a relevance language report document.
 */
function parse(doc) {
  var state, result = {
    types: {},
    properties: {}
  };

  function waitForTypesOrProperties(line) {
    if (line.match(/^  Type/)) {
      var type = parseType(line);
      result.types[type.name] = type;
    } else if (line.match(/^    Properties of|^Properties of World/)) {
      state = parseProperties;
    }
  }

  function parseProperties(line) {
    var property;

    if (line.length === 0) {
      state = waitForTypesOrProperties;
      return;
    }

    property = parsePropertyOrOperator(line);
    result.properties[property.key] = property;
  }

  state = waitForTypesOrProperties;
  doc.toString().split('\n').forEach(function(line) {
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
