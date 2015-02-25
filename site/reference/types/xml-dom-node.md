# xml dom node

The &lt;xml dom node&gt; objects are the inspectors for the XML Document Object Module (DOM) nodes. The console uses MSXML 6.0 if it is available. Otherwise it falls back to 4.0. The console requires at least 4.0 since 3.0 does not provide XML schema validation.

# attribute [integer] of [xml dom node]

Returns the numbered attribute of the specified XML DOM node.

# attribute [string] of [xml dom node]

Returns the named attribute of the specified node.

# attribute of [xml dom node]

Returns the attribute(s) of the specified XML DOM node.

# child node [integer] of [xml dom node]

Returns the child node by number.

# child node of [xml dom node]

By chaining this inspector, you can find the child nodes of any given node.

# first child of [xml dom node]

Returns the first child node in the specified node. When applied to an XML DOM file, it returns the first node in the file.

# last child of [xml dom node]

Returns the last child node in the specified node. When applied to an XML DOM file, it returns the last node in the file.

# next sibling of [xml dom node]

Returns the next child node after the current one.

# node name of [xml dom node]

Returns the name of the specified XML DOM node as a string.Example: node names of child nodes of xml document of file &quot;C:\WINDOWS\system32\icsxml\cmnicfg.xml&quot; - Returns a list of the names of each node in the specified XML document.

# node type of [xml dom node]

Returns the numeric node type of the specified Document Object Module (DOM) node, 1-12 as shown in the creation inspector.Example: node types of child nodes of xml document of file &quot;icsxml\cmnicfg.xml&quot; of system folder - Returns a list of numeric types for each of the nodes in the specified XML document.

# node value of [xml dom node]

Returns the node value, which varies depending on the node type. If the standard interface produces a null type, the inspector throws NoSuchObject.Example: node value of first child of xml document of file &quot;icsxml\cmnicfg.xml&quot; of system folder - Returns the value of the first node in the specified file. If the first statement of the file is &lt;xml version=&quot;1.0&quot;&gt;, for instance, the name would be &quot;xml&quot; and the value would be version=&quot;1.0&quot;.

# owner document of [xml dom node]

Returns a document belonging to the owner of the specified node.

# parent node of [xml dom node]

Returns the parent node of the specified node.

# previous sibling of [xml dom node]

Returns the child node before the one specified.

# select [string] of [xml dom node]

Uses an Xpath string to specify an XML DOM node. For instance, to select all elements BBB which are children of the root element AAA, use:selects &quot;/AAA/BBB&quot; of xml dom document &lt;string&gt;.

# xpath <string, string> of [xml dom node]

The iterated named property xpaths (&lt;namespace&gt;, &lt;query&gt;) provides a way of specifying the namespaces for the query. If the XML document you are querying over uses namespaces, you must use them in the query and use this property.

# xpath [string] of [xml dom node]

Returns an iterated list of matching xml dom nodes, given the xpath query specified by &lt;string&gt;.

# [xml dom node] as text

Casts an xml document object module node as text.

# [xml dom node] as xml

Casts an xml document object module node as xml.
