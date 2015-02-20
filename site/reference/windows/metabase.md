---
title: metabase
---

## metabase value

This inspector is used to access values stored in an IIS metabase key. The type of the data stored in the value determines what casting operations are allowed. There are several casting inspectors that you can use to extract values from the registry.

#### &lt;metabase value&gt; as string : string

Returns the string value of the metabase value.

#### &lt;metabase value&gt; as integer : integer

Returns the integer value of the metabase value.

#### volatile attribute of &lt;metabase value&gt; : boolean

Returns TRUE if the specified metabase value has the volatile attribute set.Example: volatile attributes of values of key &quot;/LM&quot; of metabase - Returns a boolean True or False depending on the volatile attributes of each sub-key in the specified key of the metabase.

#### user type of &lt;metabase value&gt; : metabase user type

Returns the user type of the specified metabase value.

#### type of &lt;metabase value&gt; : metabase type

Returns the type of the specified metabase value.

#### secure attribute of &lt;metabase value&gt; : boolean

Returns TRUE if the specified metabase value has the secure attribute set.

#### reference attribute of &lt;metabase value&gt; : boolean

Returns TRUE if the specified metabase value has the reference attribute set.

#### insert path attribute of &lt;metabase value&gt; : boolean

Returns TRUE if the specified metabase value has the insert path attribute set.

#### inherit attribute of &lt;metabase value&gt; : boolean

Returns TRUE if the specified metabase value has the inherit attribute set.Example: inherit attributes of values of key &quot;/Schema&quot; of metabase - Returns a boolean True or False depending on the inherit attributes of each sub-key in the specified key of the metabase.

#### identifier of &lt;metabase value&gt; : metabase identifier

Returns the metabase identifier of the specified value.

## metabase user type

The user type is a DWORD that specifies how the property value is used. User types enable IIS to classify properties by application.

#### &lt;metabase user type&gt; as string : string

Returns the metabase user type as a string:&quot;Server&quot;&quot;File&quot;&quot;WAM&quot;&quot;ASP App&quot;&quot;(Other)&quot;.

#### &lt;metabase user type&gt; as integer : integer

Returns the metabase user type as an integer:2 = Server2 = File100 = WAM200 = ASP App.

## metabase type

The type identifier of the data associated with a metabase key value.

#### &lt;metabase type&gt; as string : string

Returns metabase types as strings:&quot;DWord&quot;&quot;String&quot;&quot;Binary&quot;&quot;ExpandSz&quot;&quot;MultiSz&quot;.

#### &lt;metabase type&gt; as integer : integer

Meanings same as registry types:1 = DWORD2 = STRING3 = BINARY4 = EXPANDSZ5 = MULTISZ.

## metabase key

Like a registry key, a metabase key contains named properties about the IIS metabase.

#### value of &lt;metabase key&gt; : metabase value

Returns the value of the specified metabase key.

#### name of &lt;metabase key&gt; : string

Returns the name of the specified metabase key.

#### key of &lt;metabase key&gt; : metabase key

Iterates the subkeys of the specified metabase key.

#### key &lt;string&gt; of &lt;metabase key&gt; : metabase key

Returns the named subkey of the specified metabase key.

## metabase identifier

The &lt;metabase identifier&gt; objects are unique numerical identifiers which IIS recognizes internally.

#### &lt;metabase identifier&gt; as string : string

This is a Casting Operator that takes a &lt;metabase identifier&gt; type and returns a &lt;string&gt; type

#### &lt;metabase identifier&gt; as integer : integer

The integer value of the specified identifier. Use the Microsoft MetaEdit utility to find the integer value of an identifier.

## metabase

The IIS metabase is similar in structure to the Windows Registry, providing hierarchal storage of IIS configuration properties for Web sites, virtual directories, FTP, and more.

#### key of &lt;metabase&gt; : metabase key

Returns the root key of the IIS metabase.

#### key &lt;string&gt; of &lt;metabase&gt; : metabase key

Returns the named key of the metabase.

