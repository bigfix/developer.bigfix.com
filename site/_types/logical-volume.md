---
permalink: reference/logical-volume.html
name: logical volume
---

A logical volume consists of an array of identically sized logical partitions. The partition size of a logical volume is determined by the volume group that contains it, and is the same as the volume group's physical partition size. Contiguous logical partitions within a logical volume may map to discontiguous physical partitions, possibly distributed across multiple physical volumes. A logical volume may be configured so that its logical partitions are mirrored to protect data from hardware failures. Mirroring may be configured so that each logical partition maps to either 2 or 3 physical partition mirrors.