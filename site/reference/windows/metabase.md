---
title: metabase
---

{% type metabase value%}

This inspector is used to access values stored in an IIS metabase key. The type of the data stored in the value determines what casting operations are allowed. There are several casting inspectors that you can use to extract values from the registry.

#### Casts

{% property <metabase value> as string %}

Returns the string value of the metabase value.

{% property <metabase value> as integer %}

Returns the integer value of the metabase value.

#### Properties

{% property volatile attribute of <metabase value> %}

Returns TRUE if the specified metabase value has the volatile attribute set.Example: volatile attributes of values of key &quot;/LM&quot; of metabase - Returns a boolean True or False depending on the volatile attributes of each sub-key in the specified key of the metabase.

{% property user type of <metabase value> %}

Returns the user type of the specified metabase value.

{% property type of <metabase value> %}

Returns the type of the specified metabase value.

{% property secure attribute of <metabase value> %}

Returns TRUE if the specified metabase value has the secure attribute set.

{% property reference attribute of <metabase value> %}

Returns TRUE if the specified metabase value has the reference attribute set.

{% property insert path attribute of <metabase value> %}

Returns TRUE if the specified metabase value has the insert path attribute set.

{% property inherit attribute of <metabase value> %}

Returns TRUE if the specified metabase value has the inherit attribute set.Example: inherit attributes of values of key &quot;/Schema&quot; of metabase - Returns a boolean True or False depending on the inherit attributes of each sub-key in the specified key of the metabase.

{% property identifier of <metabase value> %}

Returns the metabase identifier of the specified value.

{% type metabase user type%}

The user type is a DWORD that specifies how the property value is used. User types enable IIS to classify properties by application.

#### Casts

{% property <metabase user type> as string %}

Returns the metabase user type as a string:&quot;Server&quot;&quot;File&quot;&quot;WAM&quot;&quot;ASP App&quot;&quot;(Other)&quot;.

{% property <metabase user type> as integer %}

Returns the metabase user type as an integer:2 = Server2 = File100 = WAM200 = ASP App.

{% type metabase type%}

The type identifier of the data associated with a metabase key value.

#### Casts

{% property <metabase type> as string %}

Returns metabase types as strings:&quot;DWord&quot;&quot;String&quot;&quot;Binary&quot;&quot;ExpandSz&quot;&quot;MultiSz&quot;.

{% property <metabase type> as integer %}

Meanings same as registry types:1 = DWORD2 = STRING3 = BINARY4 = EXPANDSZ5 = MULTISZ.

{% type metabase key%}

Like a registry key, a metabase key contains named properties about the IIS metabase.

#### Properties

{% property value of <metabase key> %}

Returns the value of the specified metabase key.

{% property name of <metabase key> %}

Returns the name of the specified metabase key.

{% property key of <metabase key> %}

Iterates the subkeys of the specified metabase key.

{% property key <string> of <metabase key> %}

Returns the named subkey of the specified metabase key.

{% type metabase identifier%}

The &lt;metabase identifier&gt; objects are unique numerical identifiers which IIS recognizes internally.

#### Casts

{% property <metabase identifier> as string %}

This is a Casting Operator that takes a &lt;metabase identifier&gt; type and returns a &lt;string&gt; type

{% property <metabase identifier> as integer %}

The integer value of the specified identifier. Use the Microsoft MetaEdit utility to find the integer value of an identifier.

{% type metabase%}

The IIS metabase is similar in structure to the Windows Registry, providing hierarchal storage of IIS configuration properties for Web sites, virtual directories, FTP, and more.

#### Properties

{% property key of <metabase> %}

Returns the root key of the IIS metabase.

{% property key <string> of <metabase> %}

Returns the named key of the metabase.

