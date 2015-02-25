# package

This filesystem object can inspect the propeties of an RPM (RPM Package Manager) package. Each package contains information about the program, including name and version.

# architecture of [package]

The architecture represents the CPU type that the RPM Package was designed to be used on. Typical values are i386, i686, or x86_64, but packages can be created with archtectures like &#39;noarch&#39; or have no architecture specified at all.Example: architecture of package &quot;BESAgent&quot; of rpm - On a SuSE Linux Enterprise Server 9.0, 64 bit, this will return x86_64, while on a Fedora Core 3, 32 bit, it will return i386.

# conflict of [package]

Returns capability objects that conflict with this package in the RPM database.

# installed file of [package]

The list of actual files that the package leaves installed.

# name of [package]

Returns the name of the given RPM package.

# obsolete of [package]

Returns a capability object that this package obsoletes.

# provide of [package]

Returns capability objects for each capability that this package provides.

# require of [package]

Returns capability objects for each capability that this package requires.

# rpm version record of [package]

Returns the RPM version records of the specified package.

# unique name of [package]

Returns the unique values of a given list of &lt;package&gt; types, removing duplicates and sorting by value.

# version of [package]

Returns the version of the given RPM package.

# [package] as string

Creates a string containing the package&#39;s name, version and release.Example: package &quot;apache&quot; of rpm as string - Returns a string with information about the package, such as &quot;apache-1.3.23-88&quot;.
