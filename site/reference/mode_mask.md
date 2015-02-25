# mode_mask

The &lt;mode_mask&gt; inspector is a differently formatted version of the mode, created by shifting the key information down to the low three bits.

# execute of [mode_mask]

Returns `True` if the execute flag (x) of the rwx mode mask is on. (binary 001 = 1).

# read of [mode_mask]

Returns `True` if the read flag of the rwx mode mask is on. (binary 100 = 4).

# write of [mode_mask]

Returns `True` if the write flag (w) of the rwx mode mask is on. (binary 010 = 2).

# [mode_mask] as integer

Converts the mode mask to an integer, 1-4.

# [mode_mask] as string

Converts the mode mask to a string, for example &quot;rwx&quot;.
