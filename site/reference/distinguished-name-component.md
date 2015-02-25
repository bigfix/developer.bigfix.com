# distinguished name component

The &lt;distinguished name component&gt; inspectors refer to the various components of the distinguished name (DN) as defined by the Microsoft Active Directory API. A DN is a sequence of relative distinguished names (RDN) connected by commas. An RDN is an attribute with an associated value in the form attribute=value; normally expressed in a UTF-8 string format. For more information, see the MSDN article on Distinguished Names.

# type of [distinguished name component]

Returns the type of the specified component of the distinguished name.Example: (type of it, value of it) of components of distinguished name &quot;CN=BIGFOOT,CN=Computers,DC=devlan,DC=bigfix,DC=com&quot; - Returns the list: CN, BIGFOOTCN, ComputersDC, devlanDC, bigfixDC, com.

# value of [distinguished name component]

Returns the value of the specified component of the distinguished name.Example: value of component 0 of distinguished name &quot;CN=BIGFOOT,CN=Computers,DC=devlan,DC=bigfix,DC=com&quot; - Returns &quot;BIGFOOT&quot;.
