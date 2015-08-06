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

/**
 * Choose the properties for a unary operator to be associated with.
 */
function associateUnaryOp(property, creation, methods) {
  // A unary operator is a property on its argument type.
  assertNotTuple(property.argType);
  methods[property.argType].operators.push(property.key);

  // If this operator creates 'resultType' from a different 'argType' then it's
  // a creation property for 'resultType'.
  if (property.argType !== property.resultType) {
    assertNotTuple(property.resultType);
    creation[property.resultType].operators.push(property.key);
  }
}

/**
 * Choose the properties for a binary operator to be associated with.
 */
function associateBinaryOp(property, creation, methods) {
  // Associate a binary operator with its 'leftType'.
  assertNotTuple(property.leftType);
  methods[property.leftType].operators.push(property.key);

  // If the 'rightType' is different, also associate it with that type.
  if (property.leftType !== property.rightType) {
    assertNotTuple(property.rightType);
    methods[property.rightType].operators.push(property.key);
  }

  // We don't handle creation properties for tuple types.
  if (isTupleType(property.resultType)) {
    return;
  }

  // If this property creates 'resultType' from a different 'leftType' and
  // 'rightType', then it's a creation property for 'resultType'.
  if (property.leftType !== property.resultType &&
      property.rightType !== property.resultType) {
    assertNotTuple(property.resultType);
    creation[property.resultType].operators.push(property.key);
  }
}

function associateCast(property, creation, methods, references) {
  // Associate the cast with its 'argType'.  
  assertNotTuple(property.argType);
  methods[property.argType].casts.push(property.key);

  // In search results, link to this cast on the page for 'argType'.
  references[property.key] = property.argType;

  // If this cast creates a 'resultType' from a different 'argType', then it's
  // a creation property for 'resultType'.
  if (property.argType !== property.resultType) {
    assertNotTuple(property.resultType);
    creation[property.resultType].casts.push(property.key);
  }
}

function associateProperty(property, creation, methods, references) {
  
  if (property.directObjectType) {
    // This is a 'property of <directObjectType>'. Associate it with that type.
    assertNotTuple(property.directObjectType);
    methods[property.directObjectType].properties.push(property.key);

    // In search results, link to this property on the page for
    // 'directObjectType'.
    references[property.key] = property.directObjectType;
  } else if (property.indexType) {
    // This is a 'property <indexType>', but it doesn't have an 'of'. In this
    // case, 'indexType' might be a tuple type. Associate it with every distinct
    // index type.
    var indexTypes = unique(types(property.indexType));
    
    indexTypes.forEach(function(type) {
      assertNotTuple(type);
      methods[type].properties.push(property.key);
    });

    // In search results, link to this property on the first tuple type in the
    // 'indexType'.
    references[property.key] = indexTypes[0];
  } else {
    // This is a 'property' that doesn't have any other argument types.
    assertNotTuple(property.resultType);

    // In search results, link to this property on the page for its
    // 'resultType'.
    references[property.key] = property.resultType;
  }

  // We don't handle creation properties for tuple types.
  if (isTupleType(property.resultType)) {
    return;
  }

  // This is a creation property for 'resultType' if 'resultType' isn't any of
  // the argument types.
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
