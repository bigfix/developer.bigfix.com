# type: runlevel

The &lt;runlevel&lt; inspectors refer to a mode of operation in various Unix systems. Typically, when a computer enters runlevel zero, it halts and when it enters runlevel six, it reboots. The intermediate runlevels differ widely among operating systems.

# effective time of &lt;runlevel&gt; : time

Returns the time at which the runlevel was set to its current value.

# previous value of &lt;runlevel&gt; : string

Returns the previous value of the runlevel. In the case where the runlevel has not changed since the system booted, this property evaluates to the empty string.

# value of &lt;runlevel&gt; : string

Returns the current runlevel. It evaluates to a platform-dependent string indicating the current runlevel. For instance, on Linux the value &#39;3&#39; indicates runlevel 3 and &#39;S&#39; indicates single user mode.

# &lt;runlevel&gt; as string : string

Casts a runlevel object as a string.
