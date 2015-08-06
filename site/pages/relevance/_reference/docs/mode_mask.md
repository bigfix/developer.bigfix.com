# type: mode_mask

The &lt;mode_mask&gt; inspector is a differently formatted version of the mode, created by shifting the key information down to the low three bits.

# execute of &lt;mode_mask&gt; : boolean

Returns `True` if the execute flag (x) of the rwx mode mask is on. (binary 001 = 1).

# read of &lt;mode_mask&gt; : boolean

Returns `True` if the read flag of the rwx mode mask is on. (binary 100 = 4).

# write of &lt;mode_mask&gt; : boolean

Returns `True` if the write flag (w) of the rwx mode mask is on. (binary 010 = 2).

# &lt;mode_mask&gt; as integer : integer

Converts the mode mask to an integer, 1-4.

# &lt;mode_mask&gt; as string : string

Converts the mode mask to a string, for example "rwx".
