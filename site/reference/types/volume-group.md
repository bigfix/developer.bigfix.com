# type: volume group

On AIX systems, physical disk volumes are organized into volume groups. The partition size of a physical volume is determined by the volume group that it belongs to. If multiple physical volumes belong to the same volume group, then they must all have the same partition size. A typical partition size might be 16 or 32 megabytes.

# free partition count of &lt;volume group&gt; : integer

Returns the number of physical partitions within the specified volume group that are not currently allocated to any logical volume.Example: free partition count of volume group "dave" of logical volume manager - Returns the number of free partitions in the specified volume group.

# logical volume &lt;string&gt; of &lt;volume group&gt; : logical volume

Returns a logical volume within the specified volume group whose "name" property matches the given string.

# logical volume of &lt;volume group&gt; : logical volume

On an AIX system, returns the logical volume corresponding to the specified volume group.Example: logical volumes of volume group "joe" of logical volume manager - Returns a list of the logical volumes in the specified volume group.Example: number of logical volumes of volume group "dave" of logical volume manager - Returns the number of logical volumes in the specified volume group.Example: logical volumes of volume groups of logical volume manager - Returns the list of all the logical volumes in the logical volume manager.

# major number of &lt;volume group&gt; : integer

Returns the major number of the specified volume group. Each logical volume is represented by a device special file (located in directory /etc). The major number of the device special file is associated with the volume group containing the logical volume, and the minor number of the device special file is associated with the logical volume.Example: major number of volume group "dave" of logical volume manager - Returns the major number of the specified volume group.

# name of &lt;volume group&gt; : string

Returns the name of the volume group, eg. "rootvg".Example: name of volume group "dave" of logical volume manager - Returns "dave".

# partition size of &lt;volume group&gt; : integer

Returns the partition size of the specified volume group (in bytes). The partition size of the volume group represents the logical and physical partition sizes for all logical volumes and physical volumes contained within the specified volume group.Example: partition size of volume group "dave" of logical volume manager - Returns the partition size of the specified volume group (in bytes).

# &lt;volume group&gt; as string : string

Casts an AIX volume group as a string type.
