# power level

The &lt;power level&gt; inspectors provide exposure to the underlying batter and power information used by low-power modes. On Windows, this uses the GetSystemPowerStatus system call, and on OSX, it uses the IOPSCopyPowerSourcesList functionality.

# full of <power level>

Returns `True` if the battery is fully charged.Example: full of power level - Returns `True` if the battery is currently topped off.

# low of <power level>

Returns `True` if the battery is at a low charge level.

# normal of <power level>

Returns `True` if the battery is at a normal charge level.

# plugged of <power level>

Returns `True` if the computer is currently plugged in to AC power.Example: plugged of power level - Returns `True` if the computer is currently plugged in.

# ups of <power level>

Returns `True` if the computer is currently being powered by a UPS.

# <power level> as string

Converts a power level into a human-readable string.
