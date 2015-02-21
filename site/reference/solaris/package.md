---
title: package
---

{% type uuid with multiplicity%}

The &lt;uuid with multiplicity&gt; inspectors deal with arrays of UUIDs, allowing you to extract unique IDs and count them.

#### Properties

{% property multiplicity of <uuid with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;uuid&gt; types.

{% type uuid%}

UUID is a Universally Unique IDentifier code given to each storage device on your Solaris system. UUIDs are used to identify DVD drives, removable media and drive partitions. The UUID is a  hexadecimal string such as c73a37c8-ef7f-40e4-b9de-8b2f81038441. UUID values may be compared to each other using the arithmetic operators (=, &lt;, &gt;, and more.).

#### Casts

{% property <uuid> as string %}

Casts a UUID as a string type.

#### Properties

{% property unique value of <uuid> %}

Returns the unique values of a given list of &lt;uuid&gt; types, removing duplicates and sorting by value.

{% property minimum of <uuid> %}

Returns the minimum value from a list of &lt;uuid&gt; types.

{% property maximum of <uuid> %}

Returns the maximum value from a list of &lt;uuid&gt; types.

{% property extrema of <uuid> %}

Returns the minimum and maximum extreme values of the given list of UUIDs (Universally Unique Identifiers).

{% type pkginfo%}

Pkginfo is an object containing information about Solaris packages, which are used to deliver patches. Pkginfo contains information about the category, the intended architecture, vendors, patch IDs and revision numbers. Other package information can be inspected using the &quot;param&quot; property which lets you access other parameters by name.

#### Casts

{% property <pkginfo> as string %}

Converts a pkginfo object into a string.

#### Properties

{% property version of <pkginfo> %}

Returns a version number for the specified pkginfo object. Not to be confused with revision numbers of patches. This is the same as the VERSION parameter of the pkginfo.Example: version of pkginfo &quot;SPROhtws&quot; of pkgdb - Returns a version string like &quot;8.0,REV=2003.04.02&quot;.

{% property vendor of <pkginfo> %}

Returns a string containing the name of the package vendor. This is the same as the VENDOR parameter of the pkginfo.

{% property pkginst of <pkginfo> %}

Returns a short string used as an abbreviation for the package name given by the pkginfo object. Typically contains a vendor symbol and an ID, like &quot;CSCOh007&quot;.

{% property patch of <pkginfo> %}

Returns the patch object referenced in the pkginfo object.

{% property patch id of <pkginfo> %}

Returns a space delimited list of patch ids, for example: &quot;123456-01 123456-02 200213-23 501234-02&quot;. This is the same list available from the PATCHLIST parameter of the pkginfo.

{% property patch id <string> of <pkginfo> %}

Returns the specified patch id string from the specified pkginfo of the package database. Typically used for existence tests.Example: exists patch id &quot;123456-01&quot; of pkginfo &quot;SUNWrdm&quot; of pkgdb  - Returns TRUE if the designated patch ID exists in the specified pkginfo of the package database.

{% property patch <string> of <pkginfo> %}

Returns a named patch from the specified pkginfo.

{% property param <string> of <pkginfo> %}

Returns the value of the named parameter (specified by &lt;string&gt;) from the pkginfo object.Example: param &quot;INSTDATE&quot; of pkginfo &quot;SPROhtws&quot; of pkgdb - Returns the install date as a string like &quot;Jul 24 2003 09:45&quot;.

{% property name of <pkginfo> %}

Returns the name of the package from the specified pkginfo object.

{% property category of <pkginfo> %}

Returns a string representing the category of the package specified by pkginfo.

{% property arch of <pkginfo> %}

Returns a string representing the architecture of the package specified by the pkginfo object.

{% type pkgdb%}

This is a database object created by BigFix to keep track of all the Solaris packages (pkginfos) that have been installed on this computer. The pkginfo object, in turn, contains Solaris patches, each with an ID and a revision number. The database essentially contains a comprehensive list of patches, allowing you to directly access a patch without going through pkginfo. The syntax is &quot;patch of pkgdb&quot;, which can greatly simplify your relevance expressions.

#### Properties

{% property pkginfo of <pkgdb> %}

Returns all the packages (as pkginfos) in the given package database.

{% property pkginfo <string> of <pkgdb> %}

Returns the specified pkginfo from the package database. Typically used for existence tests.

{% property patch of <pkgdb> %}

Returns all the patches listed in the given pkgdb (package database).

{% property patch id of <pkgdb> %}

Returns a space-delimited list of patch ids from the specified package database.Example: patch id of pkgdb contains &quot;123456&quot; - Returns TRUE if the designated patch ID exists in the package database.

{% property patch id <string> of <pkgdb> %}

Returns the specified patch id string from the package database. Typically used for existence tests.Example: exists patch id &quot;123456-01 345678-23&quot; of pkgdb - Returns TRUE if these patch ids exist in the package database.Example: exists patch id whose (it contains &quot;123456-01&quot;) of pkgdb - Returns TRUE if the specified patch id exists in the package database.

{% property patch <string> of <pkgdb> %}

Returns the requested patch from the package database. Typically used for existence tests.

{% type patch%}

An object that exposes the properties of a Solaris patch, each of which has a base ID followed by a revision number, such as 123456-12. Here the base is 123456, which identifies the patch, and 12, which represents the revision of this particular patch. 

#### Properties

{% property revision of <patch> %}

Returns an additional revision number which modifies the base of the patch.

{% property revision <string> of <patch> %}

Returns the specified revision string from the given patch. Typically used for existence tests.Example: exists revision &quot;02&quot; of patch &quot;123456&quot; of pkginfo &quot;SUNWrdm&quot; of pkgdb  - Returns TRUE if the specified revision of the given patch in the given pkginfo exists in the package database.Example: exists patch whose (revision of it &lt; &quot;3&quot;) of pkgdb - Returns TRUE if there is a patch in the package database with a revision number less than 3.

{% property least revision of <patch> %}

Returns the lowest revision of the patch.Example: least revision of patch &quot;112233&quot; of pkgdb = &quot;05&quot; - Returns TRUE if the lowest revision of the specified patch is equal to 05.

{% property greatest revision of <patch> %}

Returns the highest revision of the patch.Example: greatest revision of patch &quot;112233&quot; of pkgdb = &quot;12&quot; - Returns TRUE if the highest revision of the specified patch is equal to 12.

{% property base of <patch> %}

Returns the base number of the given patch, which is a unique identifier for the file, as a string.

