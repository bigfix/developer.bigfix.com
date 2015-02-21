---
title: debian
---

{% type debianpkg version%}

The pkg inspectors deal with base packages, i.e., packages stripped of their version information. This set of inspectors deals with the versions corresponding to the given package(s).

{% property <debianpkg version> as debian package version %}

Converts a Debian Pkg version into a Debian package version.

{% property <debianpkg version> as string %}

Returns a string containing the package version in its canonical form.

{% property section of <debianpkg version> %}

Returns a string corresponding to the directory (section) of the FTP site where Debian packages are stored.

{% property base package of <debianpkg version> %}

Returns a Debian base package object corresponding to the specified Debian Pkg version.

{% property architecture of <debianpkg version> %}

Returns a string representing the architecture (such as i386) of a Debian Pkg version.

{% type debianpkg verfile%}

The pkg inspectors deal with base packages, i.e., packages stripped of their version information. This set of inspectors lists the names of the APT system files that describe the package in question. If you edit and search the files that result from this inspector, you can find descriptive information about the specified packages.

{% property <debianpkg verfile> as string %}

Converts a Debian Pkg verfile into a string.

{% type debianpkg reverse dependencies%}

Debian packages often depend on other packages, with you can find by looking in the given package. You can reverse the situation and instead use the Advanced Packageing Tool (APT) to discover which programs are dependent on a given package. These inspectors allow you to find these reverse dependencies.

{% property <debianpkg reverse dependencies> as string %}

Converts Debian Pkg reverse dependencies into a string.

{% property version of <debianpkg reverse dependencies> %}

Returns the Debian package version from the given debianpkg reverse dependency as a string.

{% type debianpkg dependency%}

A package may depend on the previous installation of other software packages. The &lt;debianpkg dependency&gt; inspectors detail those dependencies. A Debian package may replace another package, conflict with it or depend on it. For more information, see the Debian.org site.

{% property <debianpkg dependency> as string %}

Converts a Debian Pkg dependency into a string.

{% property version of <debianpkg dependency> %}

Returns the Debian package version from the given debianpkg dependency.

{% property type of <debianpkg dependency> %}

Returns a string corresponding to the relationship this package has with other Debian packages. This string might be one of the following:DependsReplacesConflictsPreDependsRecommends.

{% property critical of <debianpkg dependency> %}

Returns TRUE if the specified Debian Pkg dependency is critical.

{% property compare_op of <debianpkg dependency> %}

Returns a string corresponding to the comparison operator of the specified Debian Pkg dependency.

{% type debianpackagecache%}

The &lt;debianpackagecache&gt; inspectors refer to the cache directory set up for Debian packages.

{% property package of <debianpackagecache> %}

Returns a Debian package and its associated version from the given string and Debian package cache.

{% property package <string> of <debianpackagecache> %}

Returns a list of Debian packages and associated versions from the given Debian package cache.

{% property base package of <debianpackagecache> %}

Returns a Debian base package object corresponding to the specified Debian package cache.

{% property base package <string> of <debianpackagecache> %}

Returns a Debian base package object corresponding to the given string of the specified Debian package cache.

{% property pkglibversion of <debianpackagecache> %}

Returns a string containing the version of libapt-pkg.

{% type debian versioned package%}

The &lt;debian versioned package&gt; inspectors return all the versions of the Debian package that are available for the base package.

{% property <debian versioned package> as string %}

Converts a Debian versioned package into a string.

{% property version of <debian versioned package> %}

Returns the Debian package version from the given versioned package.

{% property verfile of <debian versioned package> %}

Returns the Debian Pkg verfile from the specified versioned package. This contains names derived from the APT system.

{% property section of <debian versioned package> %}

Returns a string corresponding to the directory (section) of the FTP site where Debian packages are stored.

{% property reverse dependency of <debian versioned package> %}

Returns a list of Debian packages that are dependent on the specified Debian versioned package.

{% property release of <debian versioned package> %}

Returns a string representing the release of the specified Debian versioned package.

{% property name of <debian versioned package> %}

Strips out the version information and returns the name of the specified debian versioned package as a string.

{% property dependency of <debian versioned package> %}

Returns the dependencies, if any, for the specified Debian versioned package.

{% property currently installed of <debian versioned package> %}

Returns TRUE if the specified Debian versioned package is currently installed.

{% property architecture of <debian versioned package> %}

Returns a string representing the architecture (such as i386) of a Debian versioned package.

{% type debian package version with multiplicity%}

The &lt;debian package version with multiplicity&gt; inspectors deal with arrays of Debian packages, allowing you to extract unique versions and count them.

{% property multiplicity of <debian package version with multiplicity> %}

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package versions.

{% type debian package version revision with multiplicity%}

The &lt;debian package version revision with multiplicity&gt; inspectors deal with arrays of Debian package  allowing you to extract unique version revisions and count them.

{% property multiplicity of <debian package version revision with multiplicity> %}

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package version revisions.

{% type debian package version revision%}

Also known as the &#39;debian_revision&#39;, these inspectors reveal the revision of a Debian package based on the upstream_version. The revision component of the version is optional. Typically, the revision is set to 1 whenever the upstream_version is increased.

{% property <debian package version revision> as string %}

Converts a Debian package version_revision into a string.

{% property <debian package version revision> as debian package version revision %}

Reflexive cast for completeness.

{% property unique value of <debian package version revision> %}

Returns the unique values and counts of a given list of &lt;debian package version revision&gt; types, removing duplicates and sorting by value.

{% property minimum of <debian package version revision> %}

Returns the minimum value from the specified list of Debian package version revisions.

{% property maximum of <debian package version revision> %}

Returns the maximum value from the specified list of Debian package version revisions.

{% property extrema of <debian package version revision> %}

Returns the minimum and maximum extreme values of the given list of &lt;debian package version revision&gt; types.

{% type debian package version epoch with multiplicity%}

The &lt;debian package version epoch with multiplicity&gt; inspectors deal with arrays of Debian packages, allowing you to extract unique version &#39;epochs&#39; and count them.

{% property multiplicity of <debian package version epoch with multiplicity> %}

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package epochs.

{% type debian package version epoch%}

The &lt;debian package version epoch&gt; inspectors deal with the &#39;epoch&#39; component of a Debian package version. The epoch is an unsigned integer, typically a small number. If it is omitted,  zero is the default. It allows the package provider to create a fresh start with version numbering schemes.

{% property <debian package version epoch> as string %}

Converts a Debian package version &#39;epoch&#39; into a string.

{% property <debian package version epoch> as debian package version epoch %}

Reflexive cast for completeness.

{% property unique value of <debian package version epoch> %}

Returns the unique values and counts of a given list of &lt;debian package version epoch&gt; types, removing duplicates and sorting by value.

{% property minimum of <debian package version epoch> %}

Returns the minimum value from the specified list of Debian package version epochs.

{% property maximum of <debian package version epoch> %}

Returns the maximum value from the specified list of Debian package version epochs.

{% property extrema of <debian package version epoch> %}

Returns the minimum and maximum extreme values of the given list of &lt;debian package version epoch&gt; types.

{% type debian package version%}

For Tivoli inspectors, a Debian package is considered to include both the package and the version. This allows the inspectors to home in on specific versioned packages and not just the package itself, which may have numerous versions. These version inspectors return just the version(s) of a given Debian package. A version is composed of three parts: an epoch, an upstream_version and a debian_revision.

{% property <debian package version> as string %}

Converts a Debian package version (including epoch, upstream_version and revision) into a string.

{% property <debian package version> as debian package version %}

Reflexive cast for completeness.

{% property upstream of <debian package version> %}

Returns the Debian package upstream_version from the specified Debian package version.

{% property unique value of <debian package version> %}

Returns the unique values and counts of a given list of &lt;debian package version&gt; types, removing duplicates and sorting by value.

{% property revision of <debian package version> %}

Returns the Debian revision from the specified package version.

{% property minimum of <debian package version> %}

Returns the minimum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

{% property maximum of <debian package version> %}

Returns the maximum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

{% property extrema of <debian package version> %}

Returns the minimum and maximum extreme values of the given list of &lt;debian package version&gt; types.

{% property epoch of <debian package version> %}

Returns the epoch component of the specified debian package version. This is primarily used to correct for mistaken version numbers.

{% type debian package upstream version with multiplicity%}

The &lt;debian package upstream version with multiplicity&gt; inspectors deal with arrays of Debian packages, allowing you to extract unique upstream_versions and count them.

{% property multiplicity of <debian package upstream version with multiplicity> %}

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package upstream versions.

{% type debian package upstream version%}

The upstream_version of a Debian package is the main version number. Along with the epoch and revision, it is one of the components of the Debian versioning scheme.

{% property <debian package upstream version> as string %}

Converts a Debian package upstream_version into a string.

{% property <debian package upstream version> as debian package version upstream %}

This is a reflexive casting for the sake of completeness. Note: upstream version is treated the same as version upstream.

{% property unique value of <debian package upstream version> %}

Returns the unique values and counts of a given list of &lt;debian package upstream version&gt; types, removing duplicates and sorting by value.

{% property minimum of <debian package upstream version> %}

Returns the minimum value from the specified list of Debian package upstream versions.

{% property maximum of <debian package upstream version> %}

Returns the maximum value from the specified list of Debian package upstream versions.

{% property extrema of <debian package upstream version> %}

Returns the minimum and maximum extreme values of the given list of &lt;debian package upstream version&gt; types.

{% type debian base package%}

For Tivoli inspectors, a Debian package is considered to include both the package and the version. This allows the inspectors to home in on specific versioned packages and not just the package itself, which may have numerous versions. The base package inspectors help to tease these two aspects apart, stripping the version info and returning a list of the packages by name only.

{% property <debian base package> as string %}

Converts a Debian base package into a string.

{% property pkg version of <debian base package> %}

Returns a Debian pkg version from the specified Debian base package.

{% property name of <debian base package> %}

Returns the name of the specified debian base package as a string.

{% property installed version of <debian base package> %}

Returns the currently installed debianpkg version of the specified Debian base package.

{% property currently installed of <debian base package> %}

Returns TRUE if the specified Debian base package is currently installed.

