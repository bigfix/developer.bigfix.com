---
permalink: reference/pkgdb.html
name: pkgdb
---

This is a database object created by BigFix to keep track of all the Solaris packages (pkginfos) that have been installed on this computer. The pkginfo object, in turn, contains Solaris patches, each with an ID and a revision number. The database essentially contains a comprehensive list of patches, allowing you to directly access a patch without going through pkginfo. The syntax is "patch of pkgdb", which can greatly simplify your relevance expressions.