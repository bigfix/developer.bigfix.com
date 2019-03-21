# type: debian package version revision

The version string of a Debian package, as displayed by the ```dpkg -l``` command, follows this format: ```<epoch>:<upstream-version>-<debian.version>```.

Only the ```<upstream-version>``` is required, and the other parts are optional. The name structure of Debian packages is documented [Debian package file names](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_debian_package_file_names).

The inspector ```debian package version revision``` returns the ```<debian.version.revision>``` part of the string, or an empty string, if that part is absent.

<strong>Note</strong>: The official Debian documentation refers to ```<debian.version.revision>``` simply as ```<debian.version>```. The extended name is used to distinguish this part of the version string from the full Debian package version string.

Also known as the &#39;debian_revision&#39;, these inspectors reveal the revision of a Debian package based on the upstream_version. The revision component of the version is optional. Typically, the revision is set to 1 whenever the upstream_version is increased.

# debian package version revision &lt;debian package version revision&gt; : debian package version revision

A reflexive typing of the specified debian package version revision.

# extrema of &lt;debian package version revision&gt; : ( debian package version revision, debian package version revision )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version revision&gt; types.

# maximum of &lt;debian package version revision&gt; : debian package version revision

Returns the maximum value from the specified list of Debian package version revisions.

# minimum of &lt;debian package version revision&gt; : debian package version revision

Returns the minimum value from the specified list of Debian package version revisions.

# unique value of &lt;debian package version revision&gt; : debian package version revision with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version revision&gt; types, removing duplicates and sorting by value.

# &lt;debian package version revision&gt; as debian package version revision : debian package version revision

Reflexive cast for completeness.

# &lt;debian package version revision&gt; as string : string

Converts a Debian package version_revision into a string.

# &lt;debian package version revision&gt; &lt; &lt;debian package version revision&gt; : boolean

No documentation exists.

# &lt;debian package version revision&gt; &lt;= &lt;debian package version revision&gt; : boolean

No documentation exists.

# &lt;debian package version revision&gt; = &lt;debian package version revision&gt; : boolean

No documentation exists.
