# logical volume manager

On AIX, the logical volume manager provides a flexible means of allocating disk space using volume groups, logical volumes, and physical volumes. A volume group is a collection of one or more physical volumes and a logical volume is an abstraction representing a pool of disk space. The disk space assigned to a logical volume appears contiguous to the user, but it may actually be distributed across one or more physical volumes within a single volume group.

# volume group [string] of [logical volume manager]

On an AIX system, returns a volume group from the logical group whose name property matches the given string.

# volume group of [logical volume manager]

Returns the volume group corresponding to the given logical volume manager.
