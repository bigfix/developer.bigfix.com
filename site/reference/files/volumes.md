---
title: volumes
---

{% type drive%}

The &lt;drive&gt; object is available to inspect these aspects of the file system.

{% property type of <drive> %}

Returns the type of drive as a string.Example: type of drive of the system folder = &quot;DRIVE_FIXED&quot; - Returns TRUE if the system folder is on a fixed disk drive.

{% property total space of <drive> %}

Returns the size in bytes of the drive. (Only available for fixed disks).Example: total space of drive &quot;c:&quot; &gt; 2000000000 - Returns TRUE when the drive is capable of holding more than 2 billion bytes.

{% property root folder of <drive> %}

Returns the folder corresponding to the root of the drive.

{% property numeric type of <drive> %}

Returns the type of drive as an integer.Example: numeric type of drive &quot;e:&quot; = 5 - Returns TRUE if drive E is a CD-ROM. (See notes).

{% property name of <drive> %}

Returns the name of the drive. Names look like &#39;c:&#39; and &#39;D:&#39;.Example: name of drive of regapp &quot;vshield.exe&quot; as lowercase = &quot;e:&quot; - Returns TRUE if the application exists on drive E.

{% property fs_vol_is_compressed of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property fs_unicode_stored_on_disk of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property fs_persistent_acls of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property fs_file_compression of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property fs_case_sensitive of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property fs_case_is_preserved of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property free space of <drive> %}

Returns the number of unused bytes of storage for the drive. (Only available for fixed disks).Example: free space of drive &quot;c:&quot; &lt; 1000000 - Returns TRUE if there is less than one million bytes of space left on drive C.

{% property folder <string> of <drive> %}

Returns a folder object corresponding to the name given provided that folder exists on the drive.

{% property file_volume_quotas of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property file_supports_sparse_files of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property file_supports_reparse_points of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property file_supports_object_ids of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property file_supports_encryption of <drive> %}

TRUE if bit is returned by GetVolumeInformation.

{% property file system type of <drive> %}

Value as reported by GetVolumeInformation.

{% property volume of <drive> %}

Returns the volume name of the drive if present

{% type volume group%}

On AIX systems, physical disk volumes are organized into volume groups. The partition size of a physical volume is determined by the volume group that it belongs to. If multiple physical volumes belong to the same volume group, then they must all have the same partition size. A typical partition size might be 16 or 32 megabytes.

{% property <volume group> as string %}

Casts an AIX volume group as a string type.

{% property partition size of <volume group> %}

Returns the partition size of the specified volume group (in bytes). The partition size of the volume group represents the logical and physical partition sizes for all logical volumes and physical volumes contained within the specified volume group.Example: partition size of volume group &quot;dave&quot; of logical volume manager - Returns the partition size of the specified volume group (in bytes).

{% property name of <volume group> %}

Returns the name of the volume group, eg. &quot;rootvg&quot;.Example: name of volume group &quot;dave&quot; of logical volume manager - Returns &quot;dave&quot;.

{% property major number of <volume group> %}

Returns the major number of the specified volume group. Each logical volume is represented by a device special file (located in directory /etc). The major number of the device special file is associated with the volume group containing the logical volume, and the minor number of the device special file is associated with the logical volume.Example: major number of volume group &quot;dave&quot; of logical volume manager - Returns the major number of the specified volume group.

{% property logical volume of <volume group> %}

On an AIX system, returns the logical volume corresponding to the specified volume group.Example: logical volumes of volume group &quot;joe&quot; of logical volume manager - Returns a list of the logical volumes in the specified volume group.Example: number of logical volumes of volume group &quot;dave&quot; of logical volume manager - Returns the number of logical volumes in the specified volume group.Example: logical volumes of volume groups of logical volume manager - Returns the list of all the logical volumes in the logical volume manager.

{% property logical volume <string> of <volume group> %}

Returns a logical volume within the specified volume group whose &quot;name&quot; property matches the given string.

{% property free partition count of <volume group> %}

Returns the number of physical partitions within the specified volume group that are not currently allocated to any logical volume.Example: free partition count of volume group &quot;dave&quot; of logical volume manager - Returns the number of free partitions in the specified volume group.

{% type logical volume manager%}

On AIX, the logical volume manager provides a flexible means of allocating disk space using volume groups, logical volumes, and physical volumes. A volume group is a collection of one or more physical volumes and a logical volume is an abstraction representing a pool of disk space. The disk space assigned to a logical volume appears contiguous to the user, but it may actually be distributed across one or more physical volumes within a single volume group.

{% property volume group of <logical volume manager> %}

Returns the volume group corresponding to the given logical volume manager.

{% property volume group <string> of <logical volume manager> %}

On an AIX system, returns a volume group from the logical group whose name property matches the given string.

{% type logical volume%}

A logical volume consists of an array of identically sized logical partitions. The partition size of a logical volume is determined by the volume group that contains it, and is the same as the volume group&#39;s physical partition size. Contiguous logical partitions within a logical volume may map to discontiguous physical partitions, possibly distributed across multiple physical volumes. A logical volume may be configured so that its logical partitions are mirrored to protect data from hardware failures. Mirroring may be configured so that each logical partition maps to either 2 or 3 physical partition mirrors.

{% property <logical volume> as string %}

Casts an AIX logical volume as a string type.

{% property volume group of <logical volume> %}

Returns the volume group that contains the given logical volume.

{% property partition count of <logical volume> %}

Returns the number of partitions in the specified logical volume. If mirroring is not enabled for the logical volume, then each logical partition maps to a physical partition within the logical volume&#39;s volume group. If the logical volume is mirrored, then each logical partition maps to multiple physical partitions within the logical volume group. In this case, the total number of physical partitions occupied by the logical volume will be the product of the partition count and the mirror count.Example: partition count of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the number of partitions existing on the specified logical volume.

{% property name of <logical volume> %}

On an AIX system, returns the name of the logical volume, eg. &quot;hd1&quot;.

{% property mirror count of <logical volume> %}

Returns the number of mirrors that the logical volume has (a value between 1 and 3).Example: mirror count of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the number of mirrors set up for the specified volume.

{% property minor number of <logical volume> %}

Returns the minor number of the specified volume group. Each logical volume is represented by a device special file (located in directory /etc). The major number of the device special file is associated with the volume group containing the logical volume, and the minor number of the device special file is associated with the logical volume.

{% property maximum partition count of <logical volume> %}

Returns the maximum number of logical partitions that the specified logical volume contains. A system administrator may set this value to prevent a logical volume from growing beyond a given size.Example: maximum partition count of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the maximum partition count that has been set for the specified volume.

{% property label of <logical volume> %}

Returns the label of the specified logical volume. If the logical volume contains a filesystem, then then this will be the full pathname of the mount point of the file system, eg. &quot;/home&quot;.Example: label of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the label associated with the specified logical volume, such as &quot;/splat_mount_point&quot;.

