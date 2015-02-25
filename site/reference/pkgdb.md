# pkgdb

This is a database object created by BigFix to keep track of all the Solaris packages (pkginfos) that have been installed on this computer. The pkginfo object, in turn, contains Solaris patches, each with an ID and a revision number. The database essentially contains a comprehensive list of patches, allowing you to directly access a patch without going through pkginfo. The syntax is &quot;patch of pkgdb&quot;, which can greatly simplify your relevance expressions.

# patch [string] of [pkgdb]

Returns the requested patch from the package database. Typically used for existence tests.

# patch id [string] of [pkgdb]

Returns the specified patch id string from the package database. Typically used for existence tests.Example: exists patch id &quot;123456-01 345678-23&quot; of pkgdb - Returns `True` if these patch ids exist in the package database.Example: exists patch id whose (it contains &quot;123456-01&quot;) of pkgdb - Returns `True` if the specified patch id exists in the package database.

# patch id of [pkgdb]

Returns a space-delimited list of patch ids from the specified package database.Example: patch id of pkgdb contains &quot;123456&quot; - Returns `True` if the designated patch ID exists in the package database.

# patch of [pkgdb]

Returns all the patches listed in the given pkgdb (package database).

# pkginfo [string] of [pkgdb]

Returns the specified pkginfo from the package database. Typically used for existence tests.

# pkginfo of [pkgdb]

Returns all the packages (as pkginfos) in the given package database.
