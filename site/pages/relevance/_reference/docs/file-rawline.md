# type: file rawline

A &lt;file rawline&gt; object produces strings from a text file, ignoring encoding errors.

# rawline number of &lt;file rawline&gt; : integer

Returns the line number of a given line in the specified file, ignoring encoding errors. Can be used to locate specific lines in a file. Example: line number of line containing "[mciavi]" of file "mmdriver.inf" of system folder.

# next rawline of &lt;file rawline&gt; : file rawline

Returns the line after the specified line in a file, provided that it is not the last line, ignoring encoding errors. This inspector can be chained indefinitely, e.g. next line of next line of ...

# previous rawline of &lt;file rawline&gt; : file rawline

Returns the line before the nth line in a file, provided n&gt;1, ignoring encoding errors. You may repeat this command up to three times.
