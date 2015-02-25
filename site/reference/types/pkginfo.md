# pkginfo

Pkginfo is an object containing information about Solaris packages, which are used to deliver patches. Pkginfo contains information about the category, the intended architecture, vendors, patch IDs and revision numbers. Other package information can be inspected using the &quot;param&quot; property which lets you access other parameters by name.

# arch of [pkginfo]

Returns a string representing the architecture of the package specified by the pkginfo object.

# category of [pkginfo]

Returns a string representing the category of the package specified by pkginfo.

# name of [pkginfo]

Returns the name of the package from the specified pkginfo object.

# param [string] of [pkginfo]

Returns the value of the named parameter (specified by &lt;string&gt;) from the pkginfo object.Example: param &quot;INSTDATE&quot; of pkginfo &quot;SPROhtws&quot; of pkgdb - Returns the install date as a string like &quot;Jul 24 2003 09:45&quot;.

# patch [string] of [pkginfo]

Returns a named patch from the specified pkginfo.

# patch id [string] of [pkginfo]

Returns the specified patch id string from the specified pkginfo of the package database. Typically used for existence tests.Example: exists patch id &quot;123456-01&quot; of pkginfo &quot;SUNWrdm&quot; of pkgdb  - Returns `True` if the designated patch ID exists in the specified pkginfo of the package database.

# patch id of [pkginfo]

Returns a space delimited list of patch ids, for example: &quot;123456-01 123456-02 200213-23 501234-02&quot;. This is the same list available from the PATCHLIST parameter of the pkginfo.

# patch of [pkginfo]

Returns the patch object referenced in the pkginfo object.

# pkginst of [pkginfo]

Returns a short string used as an abbreviation for the package name given by the pkginfo object. Typically contains a vendor symbol and an ID, like &quot;CSCOh007&quot;.

# vendor of [pkginfo]

Returns a string containing the name of the package vendor. This is the same as the VENDOR parameter of the pkginfo.

# version of [pkginfo]

Returns a version number for the specified pkginfo object. Not to be confused with revision numbers of patches. This is the same as the VERSION parameter of the pkginfo.Example: version of pkginfo &quot;SPROhtws&quot; of pkgdb - Returns a version string like &quot;8.0,REV=2003.04.02&quot;.

# [pkginfo] as string

Converts a pkginfo object into a string.
