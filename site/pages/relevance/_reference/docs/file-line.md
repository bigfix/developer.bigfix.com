# type: file rawline

A &lt;file rawline&gt; object produces strings from a text file, ignoring encoding errors.

# rawline number of &lt;file line&gt; : integer

Returns the line number of a given line. Can be used to locate specific lines in a file.Example:  line number of line containing "[mciavi]" of file "mmdriver.inf" of system folder - Returns the line number of the specified line in the given file.

# next rawline of &lt;file line&gt; : file rawline

Returns the line after the specified line in a file ignoring encoding errors (provided that it is not the last line). This inspector can be chained indefinitely, eg., next line of next line of ...

# previous rawline of &lt;file line&gt; : file rawline

Returns the line before the nth line in a file ignoring encoding errors, provided n&gt;1. You may repeat this command up to three times.