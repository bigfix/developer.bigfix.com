# type: device file

These inspector types interrogate Unix-style device files, which contain device drivers or system resources. Unix identifies these resources by a major number and a minor number, both stored as part of a node structure. Typically, the major number identifies the device driver and the minor number identifies the particular device controlled by that driver.

# device type of &lt;device file&gt;

Returns the device type corresponding to the give device file, as a string.

# drive of &lt;device file&gt;

Returns the drive associated with the specified device file.

# filesystem of &lt;device file&gt;

Returns the filesystem object corresponding to the specified device file.

# major of &lt;device file&gt;

Returns the major number of the specified device file.

# minor of &lt;device file&gt;

Returns the minor number of the specified device file.
