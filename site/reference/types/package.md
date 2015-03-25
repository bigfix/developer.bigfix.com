# type: package

This filesystem object can inspect the propeties of an RPM (RPM Package Manager) package. Each package contains information about the program, including name and version.

# architecture of &lt;package&gt; : string

The architecture represents the CPU type that the RPM Package was designed to be used on. Typical values are i386, i686, or x86_64, but packages can be created with archtectures like &amp;#39;noarch&amp;#39; or have no architecture specified at all.Example: architecture of package &amp;quot;BESAgent&amp;quot; of rpm - On a SuSE Linux Enterprise Server 9.0, 64 bit, this will return x86_64, while on a Fedora Core 3, 32 bit, it will return i386.

# conflict of &lt;package&gt; : capability

Returns capability objects that conflict with this package in the RPM database.

# installed file of &lt;package&gt; : capability

The list of actual files that the package leaves installed.

# name of &lt;package&gt; : string

Returns the name of the given RPM package.

# obsolete of &lt;package&gt; : capability

Returns a capability object that this package obsoletes.

# provide of &lt;package&gt; : capability

Returns capability objects for each capability that this package provides.

# require of &lt;package&gt; : capability

Returns capability objects for each capability that this package requires.

# rpm version record of &lt;package&gt; : rpm package version record

Returns the RPM version records of the specified package.

# unique name of &lt;package&gt; : string

Returns the unique values of a given list of &amp;lt;package&amp;gt; types, removing duplicates and sorting by value.

# version of &lt;package&gt; : version

Returns the version of the given RPM package.

# &lt;package&gt; as string : string

Creates a string containing the package&amp;#39;s name, version and release.Example: package &amp;quot;apache&amp;quot; of rpm as string - Returns a string with information about the package, such as &amp;quot;apache-1.3.23-88&amp;quot;.
