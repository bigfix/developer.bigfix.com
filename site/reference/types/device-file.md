# device file

These inspector types interrogate Unix-style device files, which contain device drivers or system resources. Unix identifies these resources by a major number and a minor number, both stored as part of a node structure. Typically, the major number identifies the device driver and the minor number identifies the particular device controlled by that driver.

# device type of <device file>

Returns the device type corresponding to the give device file, as a string.

# drive of <device file>

Returns the drive associated with the specified device file.

# filesystem of <device file>

Returns the filesystem object corresponding to the specified device file.

# major of <device file>

Returns the major number of the specified device file.

# minor of <device file>

Returns the minor number of the specified device file.
