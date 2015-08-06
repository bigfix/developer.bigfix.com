# type: type

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the various type options available from the Relevance language.

# binary operator returning &lt;type&gt; : binary operator

Returns a list of binary operators that return the specified type.

# cast from of &lt;type&gt; : cast

Returns the casts that can be created from the specified &lt;type&gt;.

# cast returning &lt;type&gt; : cast

Returns a list of the objects that can be cast into the specified type.

# name of &lt;type&gt; : string

A string naming the type.

# parent of &lt;type&gt; : type

The types (if any) whose properties are inherited by this type.

# property &lt;string&gt; of &lt;type&gt; : property

Returns the inspector property of the specified string and type. Typically there is more than one property, so this is often used in the plural.

# property of &lt;type&gt; : property

Returns the inspector property of the specified type. Typically there is more than one property, so this is often used in the plural.

# property returning &lt;type&gt; : property

Produces a list of the inspector properties that return the specified &lt;type&gt;.

# property returning &lt;type&gt; of &lt;type&gt; : property

Returns inspectors of the form &lt;type&gt; of &lt;type&gt;. Typically there is more than one property, so this is often used in the plural.

# size of &lt;type&gt; : integer

The number of bytes used in the internal representation of an object of the given type.

# unary operator returning &lt;type&gt; : unary operator

Returns a list of the unary operator inspectors (such as negative) that return the specified type.

# &lt;type&gt; as string : string

A string indicating the type.

# &lt;type&gt; = &lt;type&gt; : boolean

Returns `True` if both expressions denote the same type.
