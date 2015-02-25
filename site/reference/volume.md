# volume

The &lt;volume&gt; inspectors refer to the mounted drive volumes.

# allocation block count of [volume]

The number of allocation blocks, used or free, on the volume.

# directory count of [volume]

The number of directories on the volume.

# file count of [volume]

The number of files on the volume.

# flag of [volume]

Returns the Mac-specific volume flags.More info on these flags can be found at the Apple developer site, under Carbon &gt; Reference &gt; File Manager.

# free percent of [volume]

Returns the percentage of room available on the specified volume.Example: free percentage of volume 1  - Returns a number between 0 and 100.

# free space of [volume]

The number of free bytes on the volume.

# init date of [volume]

Returns the initialization date of a disk volume.Example: init date of volume of system folder - Returns the date the system folder was initialized.

# modification time of [volume]

Creates a time object corresponding to the time the volume was last modified.

# name of [volume]

The name of the volume.

# size of [volume]

Returns a number corresponding to the total number of bytes (used and unused) on the specified volume.Example: size of volume 1 - Returns the size of the specified volume in bytes, eg. 159697911808.

# total space of [volume]

The total amount of space, used and free, on the volume.

# type of [volume]

This Mac inspector returns the drive type as a string, such as &#39;DRIVE_FIXED&#39;.

# used percent of [volume]

Returns the used percentage of room on the specified volume (or drive or filesystem).Example: used percentage of volume 2 - Returns a number between 0 and 100.

# used space of [volume]

Returns a number corresponding to the used bytes on the specified volume.Example: used space of volume 1 - Returns a number bytes such as 32167669760.
