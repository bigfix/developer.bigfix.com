# type: file version block

You can inspect the version blocks of a file. There may be several language-specific version blocks. Version blocks contain version and name information in a human readable form for the specified language. This is the information that Windows displays in the file properties dialog. This technique uses string values and has a limited array of comparators. For better speed, utility and compactness see the version object.

# codepage of &lt;file version block&gt; : string

A string representation of the codepage portion of the id of this version block. See notes for known codepage strings. For example, &#39;Unicode&#39;.Example: codepage of only version block of regapp "bigfix.exe" is "Unicode" - Returns `True` if the version block codepage for the specified file is unicode.

# id of &lt;file version block&gt; : string

A string representation containing both the language and codepage of this version block. The format is 8 hex digits, 4 of the codepage concatenated with 4 of the language. For example, &#39;040904b0&#39;. See notes for known values.Example: id of only version block of regapp "bigfix.exe" is "040904b0" - Returns `True` if the given file&#39;s version block id is the specified string.

# language of &lt;file version block&gt; : string

A string representation of the language portion of the id of this version block. For example, &#39;English (United States)&#39;. See notes for known values.Example: language of version block 1 of regapp "bigfix.exe" = "English (United States)" - Returns `True` if the given file&#39;s version block language is as specified.

# value &lt;string&gt; of &lt;file version block&gt; : string

Returns a string corresponding to the name provided. Values have names such as &#39;CompanyName&#39;, &#39;FileDescription&#39;, &#39;FileVersion&#39;.Example: value "FileVersion" of version block 1 of regapp "bigfix.exe" as version - When casting a string value to a version, the parser skips through the string until it identifies something that can be interpreted as a version. This is convenient for extracting version numbers from strings containing added text.
