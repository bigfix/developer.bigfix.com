# smbios structure

The SMBIOS (System Management BIOS) is composed of a set of named structures, such as processor_information, bios_information, and more.

# integer &lt;string&gt; of &lt;smbios structure&gt;

Returns the integer data of the named value in a specified smbios structure. Returns NSO if the data type is not integer.

# integer value &lt;string&gt; of &lt;smbios structure&gt;

Returns the integer value corresponding to the specified value of the smbios structure. This only exists for those values whose data type is integer.

# length of &lt;smbios structure&gt;

Returns the length of the smbios structure as defined in the SMBIOS specification.

# name of &lt;smbios structure&gt;

Returns a string containing the name of the specified smbios structure as derived from the &#39;Type&#39; entry in the SMBIOS specification. To create a valid Relevance keyword, some rules are applied to the name: Spaces are replaced with underscoresParenthesized sections are deletedLeading and trailing whitespace is removedUppercase is transformed to lowercaseKeywords beginning with a number have a &#39;b&#39; prepended.

# string &lt;string&gt; of &lt;smbios structure&gt;

Returns the named value in the specified smbios structure.

# string value &lt;string&gt; of &lt;smbios structure&gt;

Returns the string value corresponding to the specified value of the smbios structure. This only exists for those values whose data type is string.

# type of &lt;smbios structure&gt;

Returns the type of the smbios structure (as an integer) defined in the SMBIOS specification.

# value &lt;string&gt; of &lt;smbios structure&gt;

Returns the named value of the specified smbios structure.

# value of &lt;smbios structure&gt;

Returns the element of the given smbios structure that contains information specific to the particular machine. Values can have integer or string data. There can be multiple value entries with the same name, so values are implemented as iterated and named iterated properties of the smbios structure.
