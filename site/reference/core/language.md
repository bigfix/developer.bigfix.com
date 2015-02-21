---
title: language
---

{% type binary operator%}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various binary operators available from the Relevance language.

{% property <binary operator> as string %}

A short description of the use of the operator.

{% property symbol of <binary operator> %}

A phrase or punctuation mark used to invoke the operator.

{% property right operand type of <binary operator> %}

The type required after the operator in an expression.

{% property result type of <binary operator> %}

The type that the binary operator produces.

{% property name of <binary operator> %}

A phrase naming the operator.

{% property left operand type of <binary operator> %}

The type required before the operator in an expression.

{% type unary operator%}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various unary operators available from the Relevance language.

{% property <unary operator> as string %}

A short description of the use of the operator.

{% property symbol of <unary operator> %}

A phrase or punctuation mark used to invoke the operator.

{% property result type of <unary operator> %}

The type that the unary operator produces.

{% property operand type of <unary operator> %}

The type required in an expression using the operator.

{% property name of <unary operator> %}

A phrase naming the operator.

{% type undefined%}

The &quot;undefined&quot; type is used as the result type of inspectors that never return a value.

{% property <undefined> as string %}

Casts the &#39;undefined&#39; error as a string.

{% type type%}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various type options available from the Relevance language.

{% property <type> as string %}

A string indicating the type.

{% property size of <type> %}

The number of bytes used in the internal representation of an object of the given type.

{% property property returning <type> of <type> %}

Returns inspectors of the form &lt;type&gt; of &lt;type&gt;. Typically there is more than one property, so this is often used in the plural.

{% property property of <type> %}

Returns the inspector property of the specified type. Typically there is more than one property, so this is often used in the plural.

{% property property <string> of <type> %}

Returns the inspector property of the specified string and type. Typically there is more than one property, so this is often used in the plural.

{% property parent of <type> %}

The types (if any) whose properties are inherited by this type.

{% property name of <type> %}

A string naming the type.

{% property cast from of <type> %}

Returns the casts that can be created from the specified &lt;type&gt;.

{% type property%}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the properties available from the Relevance language.

{% property <property> as string %}

A short description of the use of the property.

{% property usual name of <property> %}

Returns the usual name of the specified property.Example: usual name of property &quot;booleans&quot; - Returns &quot;boolean&quot;.

{% property singular name of <property> %}

The name of the property, in the singular.

{% property result type of <property> %}

The type that the property produces.

{% property plural name of <property> %}

The name of the property, in the plural.

{% property multivalued of <property> %}

Can the property have more than one value for a single input?.

{% property index type of <property> %}

The type (if any) required before or without the keyword &quot;of&quot; in an expression using the property.

{% property direct object type of <property> %}

The type (if any) required after the keyword &quot;of&quot; in an expression using the property.

{% property dependency known of <property> %}

This introspector returns TRUE if a property&#39;s dependency is known. If it isn&#39;t, then properties containing the expression can&#39;t be fingerprinted, an optimization that exempts expressions from re-evaluation if their dependencies haven&#39;t changed.

{% type cast%}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various casting operations available from the Relevance language.

{% property <cast> as string %}

A short description of the use of the cast.

{% property result type of <cast> %}

The type that the casting operator produces.

{% property operand type of <cast> %}

The type required before the keyword &quot;as&quot; in an expression using the cast.

{% property name of <cast> %}

The phrase used after the keyword &quot;as&quot; in an expression using the cast.

{% type nothing%}

No documentation exists for this type.

{% type boolean%}

No documentation exists for this type.

{% property <boolean> as string %}

Converts the boolean value to a string. The possible values returned are &quot;True&quot; and &quot;False&quot; with this exact case, for example:TRUE as string = &quot;True&quot;.

{% property <boolean> as boolean %}

No documentation exists for this cast.

{% property javascript array <string> of <boolean> %}

No documentation exists for this property.

{% property disjunction of <boolean> %}

This inspector performs a serial OR on all its boolean arguments:disjunction of (false; false; false) -&gt; FALSEdisjunction of (false; false; true) -&gt; TRUE.

{% property conjunction of <boolean> %}

This inspector performs a serial AND on all its boolean arguments:conjunction of (true; true; true) -&gt; TRUEconjunction of (true; true; false) -&gt; FALSE.

{% type dummy type%}

No documentation exists for this type.

{% property <dummy type> as string %}

No documentation exists for this cast.

{% type dummy%}

The &lt;dummy&gt; inspectors are place holders for compatability with Windows clients

{% property state of <dummy> %}

A dummy inspector to provide compatibility with other operating systems.

{% type bit set%}

A small, numbered collection of bits that can be examined and manipulated.

{% property <bit set> as string %}

Returns the bits (0s and 1s) in a string format.

{% property <bit set> as integer %}

Returns the integer whose binary representation matches the bit set.

{% property right shift <integer> of <bit set> %}

A bit set which, at each position n, holds bit n+delta of the original bit set, where delta is the given shift integer.

{% property one bit of <bit set> %}

Returns the numbers n for which bit n of the set is true.

{% property most significant one bit of <bit set> %}

Returns the greatest n such that bit n of the set is true.

{% property left shift <integer> of <bit set> %}

A bit set which, at each position n &gt;= delta, holds bit n-delta of the original bit set, where delta is the given integer.

{% property least significant one bit of <bit set> %}

Returns the least n such that bit n of the set is true.

{% property bit <integer> of <bit set> %}

Returns the value of the bit at the given &lt;integer&gt; position in the set.

{% property padded string of <bit set> %}

No documentation exists for this property.

