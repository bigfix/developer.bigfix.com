# type: metabase type

The type identifier of the data associated with a metabase key value.

# &lt;metabase type&gt; as integer : integer

Meanings same as registry types:1 = DWORD2 = STRING3 = BINARY4 = EXPANDSZ5 = MULTISZ.

# &lt;metabase type&gt; as string : string

Returns metabase types as strings:"DWord""String""Binary""ExpandSz""MultiSz".

# &lt;metabase type&gt; = &lt;metabase type&gt; : boolean

Compares two metabase types for equality.
