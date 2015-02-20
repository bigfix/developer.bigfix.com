---
title: debian
---

## debianpkg version

The pkg inspectors deal with base packages, i.e., packages stripped of their version information. This set of inspectors deals with the versions corresponding to the given package(s).

#### &lt;debianpkg version&gt; as debian package version : debian package version

Converts a Debian Pkg version into a Debian package version.

#### &lt;debianpkg version&gt; as string : string

Returns a string containing the package version in its canonical form.

#### section of &lt;debianpkg version&gt; : string

Returns a string corresponding to the directory (section) of the FTP site where Debian packages are stored.

#### base package of &lt;debianpkg version&gt; : debian base package

Returns a Debian base package object corresponding to the specified Debian Pkg version.

#### architecture of &lt;debianpkg version&gt; : string

Returns a string representing the architecture (such as i386) of a Debian Pkg version.

## debianpkg verfile

The pkg inspectors deal with base packages, i.e., packages stripped of their version information. This set of inspectors lists the names of the APT system files that describe the package in question. If you edit and search the files that result from this inspector, you can find descriptive information about the specified packages.

#### &lt;debianpkg verfile&gt; as string : string

Converts a Debian Pkg verfile into a string.

## debianpkg reverse dependencies

Debian packages often depend on other packages, with you can find by looking in the given package. You can reverse the situation and instead use the Advanced Packageing Tool (APT) to discover which programs are dependent on a given package. These inspectors allow you to find these reverse dependencies.

#### &lt;debianpkg reverse dependencies&gt; as string : string

Converts Debian Pkg reverse dependencies into a string.

#### version of &lt;debianpkg reverse dependencies&gt; : string

Returns the Debian package version from the given debianpkg reverse dependency as a string.

## debianpkg dependency

A package may depend on the previous installation of other software packages. The &lt;debianpkg dependency&gt; inspectors detail those dependencies. A Debian package may replace another package, conflict with it or depend on it. For more information, see the Debian.org site.

#### &lt;debianpkg dependency&gt; as string : string

Converts a Debian Pkg dependency into a string.

#### version of &lt;debianpkg dependency&gt; : debian package version

Returns the Debian package version from the given debianpkg dependency.

#### type of &lt;debianpkg dependency&gt; : string

Returns a string corresponding to the relationship this package has with other Debian packages. This string might be one of the following:DependsReplacesConflictsPreDependsRecommends.

#### critical of &lt;debianpkg dependency&gt; : boolean

Returns TRUE if the specified Debian Pkg dependency is critical.

#### compare_op of &lt;debianpkg dependency&gt; : string

Returns a string corresponding to the comparison operator of the specified Debian Pkg dependency.

## debianpackagecache

The &lt;debianpackagecache&gt; inspectors refer to the cache directory set up for Debian packages.

#### package of &lt;debianpackagecache&gt; : debian versioned package

Returns a Debian package and its associated version from the given string and Debian package cache.

#### package &lt;string&gt; of &lt;debianpackagecache&gt; : debian versioned package

Returns a list of Debian packages and associated versions from the given Debian package cache.

#### base package of &lt;debianpackagecache&gt; : debian base package

Returns a Debian base package object corresponding to the specified Debian package cache.

#### base package &lt;string&gt; of &lt;debianpackagecache&gt; : debian base package

Returns a Debian base package object corresponding to the given string of the specified Debian package cache.

#### pkglibversion of &lt;debianpackagecache&gt; : string

Returns a string containing the version of libapt-pkg.

## debian versioned package

The &lt;debian versioned package&gt; inspectors return all the versions of the Debian package that are available for the base package.

#### &lt;debian versioned package&gt; as string : string

Converts a Debian versioned package into a string.

#### version of &lt;debian versioned package&gt; : debian package version

Returns the Debian package version from the given versioned package.

#### verfile of &lt;debian versioned package&gt; : debianpkg verfile

Returns the Debian Pkg verfile from the specified versioned package. This contains names derived from the APT system.

#### section of &lt;debian versioned package&gt; : string

Returns a string corresponding to the directory (section) of the FTP site where Debian packages are stored.

#### reverse dependency of &lt;debian versioned package&gt; : debianpkg reverse dependencies

Returns a list of Debian packages that are dependent on the specified Debian versioned package.

#### release of &lt;debian versioned package&gt; : string

Returns a string representing the release of the specified Debian versioned package.

#### name of &lt;debian versioned package&gt; : string

Strips out the version information and returns the name of the specified debian versioned package as a string.

#### dependency of &lt;debian versioned package&gt; : debianpkg dependency

Returns the dependencies, if any, for the specified Debian versioned package.

#### currently installed of &lt;debian versioned package&gt; : boolean

Returns TRUE if the specified Debian versioned package is currently installed.

#### architecture of &lt;debian versioned package&gt; : string

Returns a string representing the architecture (such as i386) of a Debian versioned package.

## debian package version with multiplicity

The &lt;debian package version with multiplicity&gt; inspectors deal with arrays of Debian packages, allowing you to extract unique versions and count them.

#### multiplicity of &lt;debian package version with multiplicity&gt; : integer

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package versions.

## debian package version revision with multiplicity

The &lt;debian package version revision with multiplicity&gt; inspectors deal with arrays of Debian package  allowing you to extract unique version revisions and count them.

#### multiplicity of &lt;debian package version revision with multiplicity&gt; : integer

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package version revisions.

## debian package version revision

Also known as the &#39;debian_revision&#39;, these inspectors reveal the revision of a Debian package based on the upstream_version. The revision component of the version is optional. Typically, the revision is set to 1 whenever the upstream_version is increased.

#### &lt;debian package version revision&gt; as string : string

Converts a Debian package version_revision into a string.

#### &lt;debian package version revision&gt; as debian package version revision : debian package version revision

Reflexive cast for completeness.

#### unique value of &lt;debian package version revision&gt; : debian package version revision with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version revision&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;debian package version revision&gt; : debian package version revision

Returns the minimum value from the specified list of Debian package version revisions.

#### maximum of &lt;debian package version revision&gt; : debian package version revision

Returns the maximum value from the specified list of Debian package version revisions.

#### extrema of &lt;debian package version revision&gt; : ( debian package version revision, debian package version revision )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version revision&gt; types.

## debian package version epoch with multiplicity

The &lt;debian package version epoch with multiplicity&gt; inspectors deal with arrays of Debian packages, allowing you to extract unique version &#39;epochs&#39; and count them.

#### multiplicity of &lt;debian package version epoch with multiplicity&gt; : integer

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package epochs.

## debian package version epoch

The &lt;debian package version epoch&gt; inspectors deal with the &#39;epoch&#39; component of a Debian package version. The epoch is an unsigned integer, typically a small number. If it is omitted,  zero is the default. It allows the package provider to create a fresh start with version numbering schemes.

#### &lt;debian package version epoch&gt; as string : string

Converts a Debian package version &#39;epoch&#39; into a string.

#### &lt;debian package version epoch&gt; as debian package version epoch : debian package version epoch

Reflexive cast for completeness.

#### unique value of &lt;debian package version epoch&gt; : debian package version epoch with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version epoch&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;debian package version epoch&gt; : debian package version epoch

Returns the minimum value from the specified list of Debian package version epochs.

#### maximum of &lt;debian package version epoch&gt; : debian package version epoch

Returns the maximum value from the specified list of Debian package version epochs.

#### extrema of &lt;debian package version epoch&gt; : ( debian package version epoch, debian package version epoch )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version epoch&gt; types.

## debian package version

For Tivoli inspectors, a Debian package is considered to include both the package and the version. This allows the inspectors to home in on specific versioned packages and not just the package itself, which may have numerous versions. These version inspectors return just the version(s) of a given Debian package. A version is composed of three parts: an epoch, an upstream_version and a debian_revision.

#### &lt;debian package version&gt; as string : string

Converts a Debian package version (including epoch, upstream_version and revision) into a string.

#### &lt;debian package version&gt; as debian package version : debian package version

Reflexive cast for completeness.

#### upstream of &lt;debian package version&gt; : debian package upstream version

Returns the Debian package upstream_version from the specified Debian package version.

#### unique value of &lt;debian package version&gt; : debian package version with multiplicity

Returns the unique values and counts of a given list of &lt;debian package version&gt; types, removing duplicates and sorting by value.

#### revision of &lt;debian package version&gt; : debian package version revision

Returns the Debian revision from the specified package version.

#### minimum of &lt;debian package version&gt; : debian package version

Returns the minimum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

#### maximum of &lt;debian package version&gt; : debian package version

Returns the maximum value from the specified list of Debian package versions. See the Debian man pages for more information on how to compare package versions.

#### extrema of &lt;debian package version&gt; : ( debian package version, debian package version )

Returns the minimum and maximum extreme values of the given list of &lt;debian package version&gt; types.

#### epoch of &lt;debian package version&gt; : debian package version epoch

Returns the epoch component of the specified debian package version. This is primarily used to correct for mistaken version numbers.

## debian package upstream version with multiplicity

The &lt;debian package upstream version with multiplicity&gt; inspectors deal with arrays of Debian packages, allowing you to extract unique upstream_versions and count them.

#### multiplicity of &lt;debian package upstream version with multiplicity&gt; : integer

Returns a list of the unique values (along with their frequency count) as extracted from the specified list of debian package upstream versions.

## debian package upstream version

The upstream_version of a Debian package is the main version number. Along with the epoch and revision, it is one of the components of the Debian versioning scheme.

#### &lt;debian package upstream version&gt; as string : string

Converts a Debian package upstream_version into a string.

#### &lt;debian package upstream version&gt; as debian package version upstream : debian package upstream version

This is a reflexive casting for the sake of completeness. Note: upstream version is treated the same as version upstream.

#### unique value of &lt;debian package upstream version&gt; : debian package upstream version with multiplicity

Returns the unique values and counts of a given list of &lt;debian package upstream version&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;debian package upstream version&gt; : debian package upstream version

Returns the minimum value from the specified list of Debian package upstream versions.

#### maximum of &lt;debian package upstream version&gt; : debian package upstream version

Returns the maximum value from the specified list of Debian package upstream versions.

#### extrema of &lt;debian package upstream version&gt; : ( debian package upstream version, debian package upstream version )

Returns the minimum and maximum extreme values of the given list of &lt;debian package upstream version&gt; types.

## debian base package

For Tivoli inspectors, a Debian package is considered to include both the package and the version. This allows the inspectors to home in on specific versioned packages and not just the package itself, which may have numerous versions. The base package inspectors help to tease these two aspects apart, stripping the version info and returning a list of the packages by name only.

#### &lt;debian base package&gt; as string : string

Converts a Debian base package into a string.

#### pkg version of &lt;debian base package&gt; : debianpkg version

Returns a Debian pkg version from the specified Debian base package.

#### name of &lt;debian base package&gt; : string

Returns the name of the specified debian base package as a string.

#### installed version of &lt;debian base package&gt; : debianpkg version

Returns the currently installed debianpkg version of the specified Debian base package.

#### currently installed of &lt;debian base package&gt; : boolean

Returns TRUE if the specified Debian base package is currently installed.

