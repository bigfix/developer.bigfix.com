# type: xml dom node

The &lt;xml dom node&gt; objects are the inspectors for the XML Document Object Module (DOM) nodes. The console uses MSXML 6.0 if it is available. Otherwise it falls back to 4.0. The console requires at least 4.0 since 3.0 does not provide XML schema validation.

# attribute &lt;integer&gt; of &lt;xml dom node&gt; : xml dom node

Returns the numbered attribute of the specified XML DOM node.

# attribute &lt;string&gt; of &lt;xml dom node&gt; : xml dom node

Returns the named attribute of the specified node.

# attribute of &lt;xml dom node&gt; : xml dom node

Returns the attribute(s) of the specified XML DOM node.

# child node &lt;integer&gt; of &lt;xml dom node&gt; : xml dom node

Returns the child node by number.

# child node of &lt;xml dom node&gt; : xml dom node

By chaining this inspector, you can find the child nodes of any given node.

# first child of &lt;xml dom node&gt; : xml dom node

Returns the first child node in the specified node. When applied to an XML DOM file, it returns the first node in the file.

# last child of &lt;xml dom node&gt; : xml dom node

Returns the last child node in the specified node. When applied to an XML DOM file, it returns the last node in the file.

# next sibling of &lt;xml dom node&gt; : xml dom node

Returns the next child node after the current one.

# node name of &lt;xml dom node&gt; : string

Returns the name of the specified XML DOM node as a string.Example: node names of child nodes of xml document of file "C:\WINDOWS\system32\icsxml\cmnicfg.xml" - Returns a list of the names of each node in the specified XML document.

# node type of &lt;xml dom node&gt; : integer

Returns the numeric node type of the specified Document Object Module (DOM) node, 1-12 as shown in the creation inspector.Example: node types of child nodes of xml document of file "icsxml\cmnicfg.xml" of system folder - Returns a list of numeric types for each of the nodes in the specified XML document.

# node value of &lt;xml dom node&gt; : string

Returns the node value, which varies depending on the node type. If the standard interface produces a null type, the inspector throws NoSuchObject.Example: node value of first child of xml document of file "icsxml\cmnicfg.xml" of system folder - Returns the value of the first node in the specified file. If the first statement of the file is &lt;xml version="1.0"&gt;, for instance, the name would be "xml" and the value would be version="1.0".

# owner document of &lt;xml dom node&gt; : xml dom document

Returns a document belonging to the owner of the specified node.

# parent node of &lt;xml dom node&gt; : xml dom node

Returns the parent node of the specified node.

# previous sibling of &lt;xml dom node&gt; : xml dom node

Returns the child node before the one specified.

# select &lt;string&gt; of &lt;xml dom node&gt; : xml dom node

Uses an Xpath string to specify an XML DOM node. For instance, to select all elements BBB which are children of the root element AAA, use:selects "/AAA/BBB" of xml dom document &lt;string&gt;.

# xpath &lt;( string, string )&gt; of &lt;xml dom node&gt; : xml dom node

The iterated named property xpaths (&lt;namespace&gt;, &lt;query&gt;) provides a way of specifying the namespaces for the query. If the XML document you are querying over uses namespaces, you must use them in the query and use this property. You create the namespace with `xmlns:a='https://namespace'` and leverage the namespace in your query with `a:`. 

This example pulls commands from Windows Scheduled tasks and uses the `a:` identifier for the namespace
{% qna %}
q: node values of xpaths ("xmlns:a='http://schemas.microsoft.com/windows/2004/02/mit/task'","/a:Task/a:Actions/a:Exec/a:Command/text()") of xml documents of xmls of scheduled tasks
A: C:\Program Files (x86)\Common Files\Adobe\ARM\1.0\AdobeARM.exe
A: C:\Program Files (x86)\Google\Update\GoogleUpdate.exe
{% endqna %}

This example pulls details from the Windows system event log and uses a `b:` as the namespace identifier. 
{% qna %}
q: node values of xpaths ("xmlns:b='http://schemas.microsoft.com/win/2004/08/events/event'","/b:Event/b:System/b:Computer/text()") of XML of record (oldest record number of it) of system event log
A: COMPUTER-123
{% endqna %}

You could have several namespaces in the same xpath query, although this is rare. Two namespaces would appear as `xpath ("xmlns:a='https://namespaceA' xmlns:b='https://namespaceB'", "/a:Node1/a:Node2/b:Node3") of &ltxml dom node&gt`

# xpath &lt;string&gt; of &lt;xml dom node&gt; : xml dom node

Returns an iterated list of matching xml dom nodes, given the xpath query specified by &lt;string&gt;.

# &lt;xml dom node&gt; as text : string

Casts an xml document object module node as text.

# &lt;xml dom node&gt; as xml : string

Casts an xml document object module node as xml.
