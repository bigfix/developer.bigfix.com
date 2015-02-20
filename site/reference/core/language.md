---
title: language
---

## binary operator

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various binary operators available from the Relevance language.

#### &lt;binary operator&gt; as string : string

A short description of the use of the operator.

#### symbol of &lt;binary operator&gt; : string

A phrase or punctuation mark used to invoke the operator.

#### right operand type of &lt;binary operator&gt; : type

The type required after the operator in an expression.

#### result type of &lt;binary operator&gt; : type

The type that the binary operator produces.

#### name of &lt;binary operator&gt; : string

A phrase naming the operator.

#### left operand type of &lt;binary operator&gt; : type

The type required before the operator in an expression.

## unary operator

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various unary operators available from the Relevance language.

#### &lt;unary operator&gt; as string : string

A short description of the use of the operator.

#### symbol of &lt;unary operator&gt; : string

A phrase or punctuation mark used to invoke the operator.

#### result type of &lt;unary operator&gt; : type

The type that the unary operator produces.

#### operand type of &lt;unary operator&gt; : type

The type required in an expression using the operator.

#### name of &lt;unary operator&gt; : string

A phrase naming the operator.

## undefined

The &quot;undefined&quot; type is used as the result type of inspectors that never return a value.

#### &lt;undefined&gt; as string : string

Casts the &#39;undefined&#39; error as a string.

## type

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various type options available from the Relevance language.

#### &lt;type&gt; as string : string

A string indicating the type.

#### size of &lt;type&gt; : integer

The number of bytes used in the internal representation of an object of the given type.

#### property returning &lt;type&gt; of &lt;type&gt; : property

Returns inspectors of the form &lt;type&gt; of &lt;type&gt;. Typically there is more than one property, so this is often used in the plural.

#### property of &lt;type&gt; : property

Returns the inspector property of the specified type. Typically there is more than one property, so this is often used in the plural.

#### property &lt;string&gt; of &lt;type&gt; : property

Returns the inspector property of the specified string and type. Typically there is more than one property, so this is often used in the plural.

#### parent of &lt;type&gt; : type

The types (if any) whose properties are inherited by this type.

#### name of &lt;type&gt; : string

A string naming the type.

#### cast from of &lt;type&gt; : cast

Returns the casts that can be created from the specified &lt;type&gt;.

## property

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the properties available from the Relevance language.

#### &lt;property&gt; as string : string

A short description of the use of the property.

#### usual name of &lt;property&gt; : string

Returns the usual name of the specified property.Example: usual name of property &quot;booleans&quot; - Returns &quot;boolean&quot;.

#### singular name of &lt;property&gt; : string

The name of the property, in the singular.

#### result type of &lt;property&gt; : type

The type that the property produces.

#### plural name of &lt;property&gt; : string

The name of the property, in the plural.

#### multivalued of &lt;property&gt; : boolean

Can the property have more than one value for a single input?.

#### index type of &lt;property&gt; : type

The type (if any) required before or without the keyword &quot;of&quot; in an expression using the property.

#### direct object type of &lt;property&gt; : type

The type (if any) required after the keyword &quot;of&quot; in an expression using the property.

#### dependency known of &lt;property&gt; : boolean

This introspector returns TRUE if a property&#39;s dependency is known. If it isn&#39;t, then properties containing the expression can&#39;t be fingerprinted, an optimization that exempts expressions from re-evaluation if their dependencies haven&#39;t changed.

## cast

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various casting operations available from the Relevance language.

#### &lt;cast&gt; as string : string

A short description of the use of the cast.

#### result type of &lt;cast&gt; : type

The type that the casting operator produces.

#### operand type of &lt;cast&gt; : type

The type required before the keyword &quot;as&quot; in an expression using the cast.

#### name of &lt;cast&gt; : string

The phrase used after the keyword &quot;as&quot; in an expression using the cast.

## nothing

No documentation exists for this type.

## boolean

No documentation exists for this type.

#### &lt;boolean&gt; as string : string

Converts the boolean value to a string. The possible values returned are &quot;True&quot; and &quot;False&quot; with this exact case, for example:TRUE as string = &quot;True&quot;.

#### &lt;boolean&gt; as boolean : boolean

No documentation exists for this cast.

#### javascript array &lt;string&gt; of &lt;boolean&gt; : html

No documentation exists for this property.

#### disjunction of &lt;boolean&gt; : boolean

This inspector performs a serial OR on all its boolean arguments:disjunction of (false; false; false) -&gt; FALSEdisjunction of (false; false; true) -&gt; TRUE.

#### conjunction of &lt;boolean&gt; : boolean

This inspector performs a serial AND on all its boolean arguments:conjunction of (true; true; true) -&gt; TRUEconjunction of (true; true; false) -&gt; FALSE.

## dummy type

No documentation exists for this type.

#### &lt;dummy type&gt; as string : string

No documentation exists for this cast.

## dummy

The &lt;dummy&gt; inspectors are place holders for compatability with Windows clients

#### state of &lt;dummy&gt; : string

A dummy inspector to provide compatibility with other operating systems.

## bit set

A small, numbered collection of bits that can be examined and manipulated.

#### &lt;bit set&gt; as string : string

Returns the bits (0s and 1s) in a string format.

#### &lt;bit set&gt; as integer : integer

Returns the integer whose binary representation matches the bit set.

#### right shift &lt;integer&gt; of &lt;bit set&gt; : bit set

A bit set which, at each position n, holds bit n+delta of the original bit set, where delta is the given shift integer.

#### one bit of &lt;bit set&gt; : integer

Returns the numbers n for which bit n of the set is true.

#### most significant one bit of &lt;bit set&gt; : integer

Returns the greatest n such that bit n of the set is true.

#### left shift &lt;integer&gt; of &lt;bit set&gt; : bit set

A bit set which, at each position n &gt;= delta, holds bit n-delta of the original bit set, where delta is the given integer.

#### least significant one bit of &lt;bit set&gt; : integer

Returns the least n such that bit n of the set is true.

#### bit &lt;integer&gt; of &lt;bit set&gt; : boolean

Returns the value of the bit at the given &lt;integer&gt; position in the set.

#### padded string of &lt;bit set&gt; : string

No documentation exists for this property.

