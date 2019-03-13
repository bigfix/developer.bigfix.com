# type: debianpackagecache

The &lt;debianpackagecache&gt; inspectors refer to the cache directory set up for Debian packages.

Objects of type &lt;debianpackagecache&gt; are created with the "**debianpackage**" creation function.</b>

# base package &lt;string&gt; of &lt;debianpackagecache&gt; : debian base package

Returns a Debian base package object corresponding to the given string of the specified Debian package cache.

# base package of &lt;debianpackagecache&gt; : debian base package

Returns a Debian base package object corresponding to the specified Debian package cache.

# package &lt;string&gt; of &lt;debianpackagecache&gt; : debian versioned package

Returns a list of Debian packages and associated versions from the given Debian package cache.

# package of &lt;debianpackagecache&gt; : debian versioned package

Returns a Debian package and its associated version from the given string and Debian package cache.

# pkglibversion of &lt;debianpackagecache&gt; : string

Returns a string containing the version of libapt-pkg.
