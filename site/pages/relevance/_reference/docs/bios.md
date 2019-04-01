# type: bios

On Windows computers, this object returns strings that identify the version of the BIOS. On other computers, this object does not exist.

# date of &lt;bios&gt; : string

This Windows-only inspector returns the date string stored in the bios. This string is formatted as MM/DD/YY. On a non-Windows operating system, it returns `False`.

# version of &lt;bios&gt; : string

This Windows-only inspector returns the first string of the multi-string version stored in the bios. This string may not exist. The format depends upon your BIOS manufacturer. On a non-Windows operating system, it returns `False`.

# version string of &lt;bios&gt; : string

No documentation exists.

# &lt;bios&gt; as string : string

This Windows-only inspector returns a string that is the concatenation of the BIOS name and date. On a non-Windows operating system, it returns `False`.
