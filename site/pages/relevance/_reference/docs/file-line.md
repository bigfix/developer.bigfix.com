# type: file line

A &lt;file line&gt; object produces strings from a text file.

# line number of &lt;file line&gt; : integer

Returns the line number of a given line in the specified file. Can be used to locate specific lines in a file. Example: line number of line containing "[mciavi]" of file "mmdriver.inf" of system folder.

# next line of &lt;file line&gt; : file line

Returns the line after the specified line in a file, provided that it is not the last line. This inspector can be chained indefinitely, e.g. next line of next line of ...

# previous line of &lt;file line&gt; : file line

Returns the line before the nth line in a file, provided n&gt;1. You may repeat this command up to three times.
