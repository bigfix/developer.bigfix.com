/**
 * Returns whether the type is a tuple type.
 * Tuple types always contains parentheses.
 */
function isTupleType(type) {
  return type.indexOf('(') !== -1;
}

/**
 * Return the unique elements of the array.
 */
function unique(array) {
  return array.filter(function(value, index) {
    return array.indexOf(value) === index;
  });
}

/**
 * Return all types that make up the tuple type. If 'type' is not a tuple,
 * returns a one element array with that type.
 */
function types(type) {
  var openParen = type.indexOf('(');

  if (openParen === -1) {
    return [type];
  }

  return type.substring(openParen + 2, type.length - 2).split(', ');
}

/**
 * Assert that 'type' is not a tuple type.
 */
function assertNotTuple(type) {
  if (isTupleType(type)) {
    throw new Error('Unexpected tuple type: ' + type);
  }
}

function associateUnaryOp(property, creation, methods) {
  assertNotTuple(property.argType);
  methods[property.argType].operators.push(property.key);

  if (property.argType !== property.resultType) {
    assertNotTuple(property.resultType);
    creation[property.resultType].operators.push(property.key);
  }
}

function associateBinaryOp(property, creation, methods) {
  assertNotTuple(property.leftType);
  methods[property.leftType].operators.push(property.key);

  if (property.leftType !== property.rightType) {
    assertNotTuple(property.rightType);
    methods[property.rightType].operators.push(property.key);
  }

  if (isTupleType(property.resultType)) {
    return;
  }

  if (property.leftType !== property.resultType &&
      property.rightType !== property.resultType) {
    assertNotTuple(property.resultType);
    creation[property.resultType].operators.push(property.key);
  }
}

function associateCast(property, creation, methods, references) {
  assertNotTuple(property.argType);
  methods[property.argType].casts.push(property.key);
  references[property.key] = property.argType;

  if (property.argType !== property.resultType) {
    assertNotTuple(property.resultType);
    creation[property.resultType].casts.push(property.key);
  }
}

function associateProperty(property, creation, methods, references) {
  if (property.directObjectType) {
    assertNotTuple(property.directObjectType);
    methods[property.directObjectType].properties.push(property.key);
    references[property.key] = property.directObjectType;
  } else if (property.indexType) {
    var indexTypes = unique(types(property.indexType));
    references[property.key] = indexTypes[0];
    indexTypes.forEach(function(type) {
      assertNotTuple(type);
      methods[type].properties.push(property.key);
    });
  } else {
    assertNotTuple(property.resultType);
    references[property.key] = property.resultType;
  }

  if (isTupleType(property.resultType)) {
    return;
  }

  if (property.directObjectType === property.resultType) {
    return;
  }

  if (!property.directObjectType && property.indexType &&
      property.indexType.indexOf(property.resultType) !== -1) {
    return;
  }

  creation[property.resultType].properties.push(property.key);
}

/**
 * Select the pages each property will appear on.
 *
 * Note: 'Creation' properties are properties where the resultType is *not* one
 *       of the argument types.
 */
function associate(language) {
  var creation = {}, methods = {}, references = {};

  Object.keys(language.types).forEach(function(type) {
    creation[type] = { properties: [], casts: [], operators: [] };
    methods[type] = { properties: [], casts: [], operators: [] };
  });

  Object.keys(language.properties).forEach(function(key) {
    var property = language.properties[key];

    if (property.type === 'unaryOp') {
      associateUnaryOp(property, creation, methods);
    } else if (property.type === 'binaryOp') {
      associateBinaryOp(property, creation, methods);
    } else if (property.type === 'cast') {
      associateCast(property, creation, methods, references);
    } else if (property.type === 'property') {
      associateProperty(property, creation, methods, references);
    }
  });

  return { creation: creation, methods: methods, references: references };
}

module.exports = associate;
