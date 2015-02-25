# logical volume

A logical volume consists of an array of identically sized logical partitions. The partition size of a logical volume is determined by the volume group that contains it, and is the same as the volume group&#39;s physical partition size. Contiguous logical partitions within a logical volume may map to discontiguous physical partitions, possibly distributed across multiple physical volumes. A logical volume may be configured so that its logical partitions are mirrored to protect data from hardware failures. Mirroring may be configured so that each logical partition maps to either 2 or 3 physical partition mirrors.

# label of [logical volume]

Returns the label of the specified logical volume. If the logical volume contains a filesystem, then then this will be the full pathname of the mount point of the file system, eg. &quot;/home&quot;.Example: label of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the label associated with the specified logical volume, such as &quot;/splat_mount_point&quot;.

# maximum partition count of [logical volume]

Returns the maximum number of logical partitions that the specified logical volume contains. A system administrator may set this value to prevent a logical volume from growing beyond a given size.Example: maximum partition count of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the maximum partition count that has been set for the specified volume.

# minor number of [logical volume]

Returns the minor number of the specified volume group. Each logical volume is represented by a device special file (located in directory /etc). The major number of the device special file is associated with the volume group containing the logical volume, and the minor number of the device special file is associated with the logical volume.

# mirror count of [logical volume]

Returns the number of mirrors that the logical volume has (a value between 1 and 3).Example: mirror count of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the number of mirrors set up for the specified volume.

# name of [logical volume]

On an AIX system, returns the name of the logical volume, eg. &quot;hd1&quot;.

# partition count of [logical volume]

Returns the number of partitions in the specified logical volume. If mirroring is not enabled for the logical volume, then each logical partition maps to a physical partition within the logical volume&#39;s volume group. If the logical volume is mirrored, then each logical partition maps to multiple physical partitions within the logical volume group. In this case, the total number of physical partitions occupied by the logical volume will be the product of the partition count and the mirror count.Example: partition count of logical volume &quot;splat&quot; of volume group &quot;dave&quot; of logical volume manager - Returns the number of partitions existing on the specified logical volume.

# volume group of [logical volume]

Returns the volume group that contains the given logical volume.

# [logical volume] as string

Casts an AIX logical volume as a string type.
