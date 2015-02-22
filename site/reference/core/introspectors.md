---
title: introspectors
---

{% type binary operator %}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various binary operators available from the Relevance language.

#### Properties of binary operator

{% property left operand type of <binary operator> %}

The type required before the operator in an expression.

{% property name of <binary operator> %}

A phrase naming the operator.

{% property result type of <binary operator> %}

The type that the binary operator produces.

{% property right operand type of <binary operator> %}

The type required after the operator in an expression.

{% property symbol of <binary operator> %}

A phrase or punctuation mark used to invoke the operator.

#### Casts of binary operator

{% cast <binary operator> as string %}

A short description of the use of the operator.

{% type cast %}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various casting operations available from the Relevance language.

#### Properties of cast

{% property name of <cast> %}

The phrase used after the keyword &quot;as&quot; in an expression using the cast.

{% property operand type of <cast> %}

The type required before the keyword &quot;as&quot; in an expression using the cast.

{% property result type of <cast> %}

The type that the casting operator produces.

#### Casts of cast

{% cast <cast> as string %}

A short description of the use of the cast.

{% type property %}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the properties available from the Relevance language.

#### Properties of property

{% property dependency known of <property> %}

This introspector returns TRUE if a property&#39;s dependency is known. If it isn&#39;t, then properties containing the expression can&#39;t be fingerprinted, an optimization that exempts expressions from re-evaluation if their dependencies haven&#39;t changed.

{% property direct object type of <property> %}

The type (if any) required after the keyword &quot;of&quot; in an expression using the property.

{% property index type of <property> %}

The type (if any) required before or without the keyword &quot;of&quot; in an expression using the property.

{% property multivalued of <property> %}

Can the property have more than one value for a single input?.

{% property plural name of <property> %}

The name of the property, in the plural.

{% property result type of <property> %}

The type that the property produces.

{% property singular name of <property> %}

The name of the property, in the singular.

{% property usual name of <property> %}

Returns the usual name of the specified property.Example: usual name of property &quot;booleans&quot; - Returns &quot;boolean&quot;.

#### Casts of property

{% cast <property> as string %}

A short description of the use of the property.

{% type type %}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various type options available from the Relevance language.

#### Properties of type

{% property cast from of <type> %}

Returns the casts that can be created from the specified &lt;type&gt;.

{% property name of <type> %}

A string naming the type.

{% property parent of <type> %}

The types (if any) whose properties are inherited by this type.

{% property property <string> of <type> %}

Returns the inspector property of the specified string and type. Typically there is more than one property, so this is often used in the plural.

{% property property of <type> %}

Returns the inspector property of the specified type. Typically there is more than one property, so this is often used in the plural.

{% property property returning <type> of <type> %}

Returns inspectors of the form &lt;type&gt; of &lt;type&gt;. Typically there is more than one property, so this is often used in the plural.

{% property size of <type> %}

The number of bytes used in the internal representation of an object of the given type.

#### Casts of type

{% cast <type> as string %}

A string indicating the type.

{% type unary operator %}

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various unary operators available from the Relevance language.

#### Properties of unary operator

{% property name of <unary operator> %}

A phrase naming the operator.

{% property operand type of <unary operator> %}

The type required in an expression using the operator.

{% property result type of <unary operator> %}

The type that the unary operator produces.

{% property symbol of <unary operator> %}

A phrase or punctuation mark used to invoke the operator.

#### Casts of unary operator

{% cast <unary operator> as string %}

A short description of the use of the operator.

