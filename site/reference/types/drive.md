# drive

The &lt;drive&gt; object is available to inspect these aspects of the file system.

# file system type of <drive>

Value as reported by GetVolumeInformation.

# file_supports_encryption of <drive>

TRUE if bit is returned by GetVolumeInformation.

# file_supports_object_ids of <drive>

TRUE if bit is returned by GetVolumeInformation.

# file_supports_reparse_points of <drive>

TRUE if bit is returned by GetVolumeInformation.

# file_supports_sparse_files of <drive>

TRUE if bit is returned by GetVolumeInformation.

# file_volume_quotas of <drive>

TRUE if bit is returned by GetVolumeInformation.

# folder <string> of <drive>

Returns a folder object corresponding to the name given provided that folder exists on the drive.

# free space of <drive>

Returns the number of unused bytes of storage for the drive. (Only available for fixed disks).Example: free space of drive &quot;c:&quot; &lt; 1000000 - Returns `True` if there is less than one million bytes of space left on drive C.

# fs_case_is_preserved of <drive>

TRUE if bit is returned by GetVolumeInformation.

# fs_case_sensitive of <drive>

TRUE if bit is returned by GetVolumeInformation.

# fs_file_compression of <drive>

TRUE if bit is returned by GetVolumeInformation.

# fs_persistent_acls of <drive>

TRUE if bit is returned by GetVolumeInformation.

# fs_unicode_stored_on_disk of <drive>

TRUE if bit is returned by GetVolumeInformation.

# fs_vol_is_compressed of <drive>

TRUE if bit is returned by GetVolumeInformation.

# name of <drive>

Returns the name of the drive. Names look like &#39;c:&#39; and &#39;D:&#39;.Example: name of drive of regapp &quot;vshield.exe&quot; as lowercase = &quot;e:&quot; - Returns `True` if the application exists on drive E.

# numeric type of <drive>

Returns the type of drive as an integer.Example: numeric type of drive &quot;e:&quot; = 5 - Returns `True` if drive E is a CD-ROM. (See notes).

# root folder of <drive>

Returns the folder corresponding to the root of the drive.

# total space of <drive>

Returns the size in bytes of the drive. (Only available for fixed disks).Example: total space of drive &quot;c:&quot; &gt; 2000000000 - Returns `True` when the drive is capable of holding more than 2 billion bytes.

# type of <drive>

Returns the type of drive as a string.Example: type of drive of the system folder = &quot;DRIVE_FIXED&quot; - Returns `True` if the system folder is on a fixed disk drive.

# volume of <drive>

Returns the volume name of the drive if present
