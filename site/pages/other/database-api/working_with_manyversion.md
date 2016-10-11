---
title: Working with ManyVersion Data
---

The Distributed Server Architecture, introduced in BES 7.0, uses a new version scheme in order to allow 
servers to modify objects independently of each other, and later resolve any conficts that arise from those 
modifications by comparing the versions. A DSA version, called a ManyVersion, consists of one integer 
for each DSA server.

If your deployment only contains one DSA server, then all of the ManyVersion values in the database 
will consist of a single integer, and the Version column can be converted to an integer, and compared 
as an integer. If your deployment contains more than one DSA server, then objects may have ManyVersions
 that consist of more than one integer. The first integer is the number of times the object has been 
 modified on the DSA server with server ID 0, the second integer is the number of times the object has
 been modified on the DSA server with server ID 1, and so on. This array of integers is stored in a
 variable length binary object (the SQL type is varbinary(512)).
 
There are several functions defined to help handle DSA versions

```
fn_ManyVersionLessThan(A, B) : returns 1 if A < B, otherwise 0
fn_ManyVersionLessThanOrEqual(A, B) : returns 1 if A <= B, otherwise 0
fn_ManyVersionDominates(A, B) : returns 1 if A dominates B, otherwise 0
fn_ManyVersionConflicts(A, B) : returns 0 if A dominates B or B dominates A or A = B, otherwise 1
```

The less than functions compare ManyVersions using a “strict” ordering such that one version is 
always be less than or equal to another. The “dominates” comparison is not a “strict” ordering. 
A dominates B if all of its version numbers are higher than or equal to B’s version numbers for every 
server. It is possible that A does not dominate B, while B also does not dominate A, and A is not 
equal to B. In this case, A and B are said to “conflict”. Conflicting versions indicate that a 
modification was made to an object on more than one server at “the same time” (i.e. both changes were 
made without knowledge of each other).
