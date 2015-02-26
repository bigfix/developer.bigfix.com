# property

Some inspectors look at the Relevance language itself, inspecting the inspectors, so to speak. There are several aspects to view, including the types, properties, casts and operators. This group of inspectors looks at the properties available from the Relevance language.

# dependency known of &lt;property&gt;

This introspector returns `True` if a property&#39;s dependency is known. If it isn&#39;t, then properties containing the expression can&#39;t be fingerprinted, an optimization that exempts expressions from re-evaluation if their dependencies haven&#39;t changed.

# direct object type of &lt;property&gt;

The type (if any) required after the keyword &quot;of&quot; in an expression using the property.

# index type of &lt;property&gt;

The type (if any) required before or without the keyword &quot;of&quot; in an expression using the property.

# multivalued of &lt;property&gt;

Can the property have more than one value for a single input?.

# plural name of &lt;property&gt;

The name of the property, in the plural.

# result type of &lt;property&gt;

The type that the property produces.

# singular name of &lt;property&gt;

The name of the property, in the singular.

# usual name of &lt;property&gt;

Returns the usual name of the specified property.Example: usual name of property &quot;booleans&quot; - Returns &quot;boolean&quot;.

# &lt;property&gt; as string

A short description of the use of the property.
