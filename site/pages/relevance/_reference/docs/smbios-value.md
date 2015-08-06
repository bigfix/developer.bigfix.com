# type: smbios value

Information about the SMBIOS (System Management BIOS) is contained in a set of data values stored in collections of individual smbios structures.

# name of &lt;smbios value&gt; : string

Returns the name(s) of the specified smbios values, typically as derived from a smbios structure.

# offset of &lt;smbios value&gt; : integer

Returns the offset position relative to the start of the given smbios value in its smbios structure. For more information about these offsets, see the SMBIOS specification.

# structure of &lt;smbios value&gt; : smbios structure

Returns the parent smbios structure(s) containing the specified value.Example: names of structures of values "bios_version" of structures of smbios - Returns the names of the smbios structures that contain the specified value, in this case the named value &#39;bios version&#39;.

# type of &lt;smbios value&gt; : string

Returns the data type of the specified smbios value. This can be one of:ByteWordDwordQwordStringBinaryStringMultipleString.

# &lt;smbios value&gt; as string : string

Casts a smbios value as a string type.
