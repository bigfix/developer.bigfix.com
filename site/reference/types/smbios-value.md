# smbios value

Information about the SMBIOS (System Management BIOS) is contained in a set of data values stored in collections of individual smbios structures.

# name of <smbios value>

Returns the name(s) of the specified smbios values, typically as derived from a smbios structure.

# offset of <smbios value>

Returns the offset position relative to the start of the given smbios value in its smbios structure. For more information about these offsets, see the SMBIOS specification.

# structure of <smbios value>

Returns the parent smbios structure(s) containing the specified value.Example: names of structures of values &quot;bios_version&quot; of structures of smbios - Returns the names of the smbios structures that contain the specified value, in this case the named value &#39;bios version&#39;.

# type of <smbios value>

Returns the data type of the specified smbios value. This can be one of:ByteWordDwordQwordStringBinaryStringMultipleString.

# <smbios value> as string

Casts a smbios value as a string type.
