---
title: bios
---

## smbios value

Information about the SMBIOS (System Management BIOS) is contained in a set of data values stored in collections of individual smbios structures.

#### &lt;smbios value&gt; as string : string

Casts a smbios value as a string type.

#### type of &lt;smbios value&gt; : string

Returns the data type of the specified smbios value. This can be one of:ByteWordDwordQwordStringBinaryStringMultipleString.

#### structure of &lt;smbios value&gt; : smbios structure

Returns the parent smbios structure(s) containing the specified value.Example: names of structures of values &quot;bios_version&quot; of structures of smbios - Returns the names of the smbios structures that contain the specified value, in this case the named value &#39;bios version&#39;.

#### offset of &lt;smbios value&gt; : integer

Returns the offset position relative to the start of the given smbios value in its smbios structure. For more information about these offsets, see the SMBIOS specification.

#### name of &lt;smbios value&gt; : string

Returns the name(s) of the specified smbios values, typically as derived from a smbios structure.

## smbios structure

The SMBIOS (System Management BIOS) is composed of a set of named structures, such as processor_information, bios_information, and more.

#### value of &lt;smbios structure&gt; : smbios value

Returns the element of the given smbios structure that contains information specific to the particular machine. Values can have integer or string data. There can be multiple value entries with the same name, so values are implemented as iterated and named iterated properties of the smbios structure.

#### value &lt;string&gt; of &lt;smbios structure&gt; : smbios value

Returns the named value of the specified smbios structure.

#### type of &lt;smbios structure&gt; : integer

Returns the type of the smbios structure (as an integer) defined in the SMBIOS specification.

#### string value &lt;string&gt; of &lt;smbios structure&gt; : smbios value

Returns the string value corresponding to the specified value of the smbios structure. This only exists for those values whose data type is string.

#### string &lt;string&gt; of &lt;smbios structure&gt; : string

Returns the named value in the specified smbios structure.

#### name of &lt;smbios structure&gt; : string

Returns a string containing the name of the specified smbios structure as derived from the &#39;Type&#39; entry in the SMBIOS specification. To create a valid Relevance keyword, some rules are applied to the name: Spaces are replaced with underscoresParenthesized sections are deletedLeading and trailing whitespace is removedUppercase is transformed to lowercaseKeywords beginning with a number have a &#39;b&#39; prepended.

#### length of &lt;smbios structure&gt; : integer

Returns the length of the smbios structure as defined in the SMBIOS specification.

#### integer value &lt;string&gt; of &lt;smbios structure&gt; : smbios value

Returns the integer value corresponding to the specified value of the smbios structure. This only exists for those values whose data type is integer.

#### integer &lt;string&gt; of &lt;smbios structure&gt; : integer

Returns the integer data of the named value in a specified smbios structure. Returns NSO if the data type is not integer.

## smbios

The SMBIOS (System Management BIOS) is a database containing information about the system hardware and firmware. It consists of a series of structures that each contain a logical grouping of basic system information such as processor, baseboard, memory, ports, slots, and more. Each structure, in turn, contains specific named values that can be interrogated. For instance, you easily access information about the client processor chip, including the manufacturer, speed and more by accessing the desired value of the &#39;processor information&#39; structure. These SMBIOS inspectors are based on DMTF Standard version 2.6.1. For a complete listing of the SMBIOS structures and the strings used to query them, refer to the SMBIOS inspectors in the Resources section at the end of this guide.

#### structure of &lt;smbios&gt; : smbios structure

A property containing information pertaining to an instance of a given smbios structure as defined in the &#39;Type&#39; entries in the SMBIOS specification. This is implemented as a named iterated property.

#### structure &lt;string&gt; of &lt;smbios&gt; : smbios structure

Returns the smbios structure corresponding to the specified string as defined in the &#39;Type&#39; entries in the SMBIOS specification.

## bios

On Windows computers, this object returns strings that identify the version of the BIOS. On other computers, all bios expressions will fail gracefully, rather than generating an error.

#### &lt;bios&gt; as string : string

This Windows-only inspector returns a string that is the concatenation of the BIOS name and date. On a non-Windows operating system, it returns FALSE.

#### version of &lt;bios&gt; : string

This Windows-only inspector returns the first string of the multi-string version stored in the bios. This string may not exist. The format depends upon your BIOS manufacturer. On a non-Windows operating system, it returns FALSE.

#### date of &lt;bios&gt; : string

This Windows-only inspector returns the date string stored in the bios. This string is formatted as MM/DD/YY. On a non-Windows operating system, it returns FALSE.

#### version string of &lt;bios&gt; : string

No documentation exists for this property.

