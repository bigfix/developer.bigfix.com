# type: drive

The &amp;lt;drive&amp;gt; object is available to inspect these aspects of the file system.

# file system type of &lt;drive&gt; : string

Value as reported by GetVolumeInformation.

# file_supports_encryption of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# file_supports_object_ids of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# file_supports_reparse_points of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# file_supports_sparse_files of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# file_volume_quotas of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# folder &lt;string&gt; of &lt;drive&gt; : folder

Returns a folder object corresponding to the name given provided that folder exists on the drive.

# free space of &lt;drive&gt; : integer

Returns the number of unused bytes of storage for the drive. (Only available for fixed disks).Example: free space of drive &amp;quot;c:&amp;quot; &amp;lt; 1000000 - Returns `True` if there is less than one million bytes of space left on drive C.

# fs_case_is_preserved of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# fs_case_sensitive of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# fs_file_compression of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# fs_persistent_acls of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# fs_unicode_stored_on_disk of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# fs_vol_is_compressed of &lt;drive&gt; : boolean

TRUE if bit is returned by GetVolumeInformation.

# name of &lt;drive&gt; : string

Returns the name of the drive. Names look like &amp;#39;c:&amp;#39; and &amp;#39;D:&amp;#39;.Example: name of drive of regapp &amp;quot;vshield.exe&amp;quot; as lowercase = &amp;quot;e:&amp;quot; - Returns `True` if the application exists on drive E.

# numeric type of &lt;drive&gt; : integer

Returns the type of drive as an integer.Example: numeric type of drive &amp;quot;e:&amp;quot; = 5 - Returns `True` if drive E is a CD-ROM. (See notes).

# root folder of &lt;drive&gt; : folder

Returns the folder corresponding to the root of the drive.

# total space of &lt;drive&gt; : integer

Returns the size in bytes of the drive. (Only available for fixed disks).Example: total space of drive &amp;quot;c:&amp;quot; &amp;gt; 2000000000 - Returns `True` when the drive is capable of holding more than 2 billion bytes.

# type of &lt;drive&gt; : string

Returns the type of drive as a string.Example: type of drive of the system folder = &amp;quot;DRIVE_FIXED&amp;quot; - Returns `True` if the system folder is on a fixed disk drive.

# volume of &lt;drive&gt; : string

Returns the volume name of the drive if present
