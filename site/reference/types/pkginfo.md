# type: pkginfo

Pkginfo is an object containing information about Solaris packages, which are used to deliver patches. Pkginfo contains information about the category, the intended architecture, vendors, patch IDs and revision numbers. Other package information can be inspected using the &amp;quot;param&amp;quot; property which lets you access other parameters by name.

# arch of &lt;pkginfo&gt; : string

Returns a string representing the architecture of the package specified by the pkginfo object.

# category of &lt;pkginfo&gt; : string

Returns a string representing the category of the package specified by pkginfo.

# name of &lt;pkginfo&gt; : string

Returns the name of the package from the specified pkginfo object.

# param &lt;string&gt; of &lt;pkginfo&gt; : string

Returns the value of the named parameter (specified by &amp;lt;string&amp;gt;) from the pkginfo object.Example: param &amp;quot;INSTDATE&amp;quot; of pkginfo &amp;quot;SPROhtws&amp;quot; of pkgdb - Returns the install date as a string like &amp;quot;Jul 24 2003 09:45&amp;quot;.

# patch &lt;string&gt; of &lt;pkginfo&gt; : patch

Returns a named patch from the specified pkginfo.

# patch id &lt;string&gt; of &lt;pkginfo&gt; : string

Returns the specified patch id string from the specified pkginfo of the package database. Typically used for existence tests.Example: exists patch id &amp;quot;123456-01&amp;quot; of pkginfo &amp;quot;SUNWrdm&amp;quot; of pkgdb  - Returns `True` if the designated patch ID exists in the specified pkginfo of the package database.

# patch id of &lt;pkginfo&gt; : string

Returns a space delimited list of patch ids, for example: &amp;quot;123456-01 123456-02 200213-23 501234-02&amp;quot;. This is the same list available from the PATCHLIST parameter of the pkginfo.

# patch of &lt;pkginfo&gt; : patch

Returns the patch object referenced in the pkginfo object.

# pkginst of &lt;pkginfo&gt; : string

Returns a short string used as an abbreviation for the package name given by the pkginfo object. Typically contains a vendor symbol and an ID, like &amp;quot;CSCOh007&amp;quot;.

# vendor of &lt;pkginfo&gt; : string

Returns a string containing the name of the package vendor. This is the same as the VENDOR parameter of the pkginfo.

# version of &lt;pkginfo&gt; : string

Returns a version number for the specified pkginfo object. Not to be confused with revision numbers of patches. This is the same as the VERSION parameter of the pkginfo.Example: version of pkginfo &amp;quot;SPROhtws&amp;quot; of pkgdb - Returns a version string like &amp;quot;8.0,REV=2003.04.02&amp;quot;.

# &lt;pkginfo&gt; as string : string

Converts a pkginfo object into a string.
