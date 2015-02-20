---
title: rpm
---

## short rpm package version record with multiplicity

The &lt;short rpm package version record with multiplicity&gt; inspectors deal with arrays of short RPM package version records, allowing you to extract unique records and count them. 

#### multiplicity of &lt;short rpm package version record with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;short rpm package version record&gt; types.

## short rpm package version record

This is the same as an RPM package version record, except that the epoch (if one exists) is not shown when converted to a string. However, even though it isn&#39;t displayed, the epoch is still retained. If you need to remove the epoch, use one of the &#39;no epoch&#39; inspectors.

#### &lt;short rpm package version record&gt; as string : string

Casts a short RPM Package version record as a string type.

#### &lt;short rpm package version record&gt; as short rpm package version record : short rpm package version record

No documentation exists for this cast.

#### &lt;short rpm package version record&gt; as rpm package version record : rpm package version record

Casts a short RPM Package version record as a long version.

#### version of &lt;short rpm package version record&gt; : rpm package version

Returns the version of the specified short RPM package version record.

#### unique value of &lt;short rpm package version record&gt; : short rpm package version record with multiplicity

Returns the unique values of a given list of &lt;short rpm package version record&gt; types, removing duplicates and sorting by value.

#### release of &lt;short rpm package version record&gt; : rpm package release

Returns the RPM Package release for the specified short version record.

#### no epoch of &lt;short rpm package version record&gt; : short rpm package version record

Returns a short RPM package version record with the epoch stripped out.

#### minimum of &lt;short rpm package version record&gt; : short rpm package version record

Returns the minimum value from a list of &lt;short rpm package version record&gt; types.

#### maximum of &lt;short rpm package version record&gt; : short rpm package version record

Returns the maximum value from a list of &lt;short rpm package version record&gt; types.

#### long form of &lt;short rpm package version record&gt; : rpm package version record

Returns an ROM Package Version record from the short version of the same.

#### extrema of &lt;short rpm package version record&gt; : ( short rpm package version record, short rpm package version record )

Returns the minimum and maximum extreme values of the given list of short RPM package version records.

#### epoch of &lt;short rpm package version record&gt; : integer

Returns the integer Epoch (which grants RPM more flexibility in versioning) of the specified short version of the RPM Package version record.

## rpmdatabase

The &lt;rpmdatabase&gt; objects are the Linux RPM Package Manager inspectors. The RPM database contains entries for all the installed programs on this computer.

#### package requiring &lt;capability&gt; of &lt;rpmdatabase&gt; : package

Returns a package in the RPM database that requires this capability. If any packages are returned, then the rpm command will not allow any installed package that provides this capability to be uninstalled.

#### package providing &lt;capability&gt; of &lt;rpmdatabase&gt; : package

Returns a package in the RPM database that provides this capability. If no packages are returned, then the rpm command will not allow any packages requiring this capability to be installed.

#### package of &lt;rpmdatabase&gt; : package

Returns all the packages in the given RPM database.

#### package installing &lt;capability&gt; of &lt;rpmdatabase&gt; : package

Finds the package that installed the specified capability.

#### package conflicting with &lt;capability&gt; of &lt;rpmdatabase&gt; : package

Returns a package in the RPM database that conflicts with this capability. If any packages are returned, then the rpm command will not allow any package providing this capability to be installed.

#### package &lt;string&gt; of &lt;rpmdatabase&gt; : package

Returns the named package from the given RPM database.

#### installed &lt;string&gt; of &lt;rpmdatabase&gt; : boolean

Returns TRUE if some package in the RPM database provides the capability represented by this string.

#### capability &lt;string&gt; of &lt;rpmdatabase&gt; : capability

Returns a capability object matching this string if some package in the RPM database provides that capability.

## rpm package version with multiplicity

The &lt;rpm package version with multiplicity&gt; inspectors deal with arrays of RPM package versions, allowing you to extract unique versions and count them. 

#### multiplicity of &lt;rpm package version with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;rpm package version&gt; types.

## rpm package version record with multiplicity

The &lt;rpm package version record with multiplicity&gt; inspectors deal with arrays of RPM package version records, allowing you to extract unique records and count them. 

#### multiplicity of &lt;rpm package version record with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;rpm package version record&gt; types.

## rpm package version record

The &lt;rpm package version record&gt; inspectors provide version-related information, such as Epoch, Version and Release, for an RPM package. inspectors of this type are sorted according to an RPM-specific ordering mechanism defined by the rpmVersionCompare() function of the RPM library.Note: Requires the presence of the RPM library and librpminfo (an open source library created by BigFix containing modified RPM library code) on the client machine. librpminfo is installed on the client as part of the normal BES client RPM installation procedure.

#### &lt;rpm package version record&gt; as string : string

Casts an RPM package version record as a string type.

#### &lt;rpm package version record&gt; as short rpm package version record : short rpm package version record

Casts an RPM package version record as a short version by stripping the epoch off.

#### &lt;rpm package version record&gt; as rpm package version record : rpm package version record

No documentation exists for this cast.

#### version of &lt;rpm package version record&gt; : rpm package version

Returns the version of the specified RPM package version record.

#### unique value of &lt;rpm package version record&gt; : rpm package version record with multiplicity

Returns the unique values of a given list of &lt;rpm package version record&gt; types, removing duplicates and sorting by value.

#### short form of &lt;rpm package version record&gt; : short rpm package version record

This inspector strips of the Epoch information from the specified RPM package version record object.

#### release of &lt;rpm package version record&gt; : rpm package release

Returns the RPM Package release for the specified version record.

#### no epoch of &lt;rpm package version record&gt; : rpm package version record

Strips the epoch from the specified RPM package version record.

#### minimum of &lt;rpm package version record&gt; : rpm package version record

Returns the minimum value from a list of &lt;rpm package version record&gt; types.

#### maximum of &lt;rpm package version record&gt; : rpm package version record

Returns the maximum value from a list of &lt;rpm package version record&gt; types.

#### extrema of &lt;rpm package version record&gt; : ( rpm package version record, rpm package version record )

Returns the minimum and maximum extreme values of the given list of RPM package version records.

#### epoch of &lt;rpm package version record&gt; : integer

Returns the integer Epoch (which grants RPM more flexibility in versioning) of the specified RPM Package version record.

## rpm package version

The &lt;rpm package version&gt; inspectors disclose properties of the RPM package version record inspector. They are collected from the &#39;Version&#39; component of the Epoch, Version and Release fields associated with an RPM package. The behavior of this inspector differs from a string, because they are sorted according to RPM rules defined by the rpmvercmp() function of the RPM library. Don&#39;t create an &lt;rpm package release&gt; inspector with embedded &#39;-&#39; or whitespace characters. These characters are disallowed in RPM, and will cause the statement to fail. Note: Requires the presence of the RPM library and librpminfo (an open source library created by BigFix containing modified RPM library code) on the client machine. librpminfo is installed on the client as part of the normal BES client RPM installation procedure.

#### &lt;rpm package version&gt; as string : string

Casts an RPM package version as a string type.

#### &lt;rpm package version&gt; as rpm package version : rpm package version

No documentation exists for this cast.

#### unique value of &lt;rpm package version&gt; : rpm package version with multiplicity

Returns the unique values of a given list of &lt;rpm package version&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;rpm package version&gt; : rpm package version

Returns the minimum value from a list of &lt;rpm package version&gt; types.

#### maximum of &lt;rpm package version&gt; : rpm package version

Returns the maximum value from a list of &lt;rpm package version&gt; types.

#### extrema of &lt;rpm package version&gt; : ( rpm package version, rpm package version )

Returns the minimum and maximum extreme values of the given list of RPM package versions.

## rpm package release with multiplicity

The &lt;rpm package release with multiplicity&gt; inspectors deal with arrays of RPM package releases, allowing you to extract unique releases and count them. 

#### multiplicity of &lt;rpm package release with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;rpm package release&gt; types.

## rpm package release

The &lt;rpm package release&gt; inspectors disclose properties of the RPM package version record inspector. They are collected from the &#39;Release&#39; component of the Epoch, Version and Release fields associated with an RPM package. The behavior of this inspector differs from a string, because they are sorted according to RPM rules defined by the rpmvercmp() function of the RPM library. Don&#39;t create an &lt;rpm package release&gt; inspector with embedded &#39;-&#39; or whitespace characters. These characters are disallowed in RPM, and will cause the statement to fail. Note: Requires the presence of the RPM library and librpminfo (an open source library created by BigFix containing modified RPM library code) on the client machine. librpminfo is installed on the client as part of the normal BES client RPM installation procedure.

#### &lt;rpm package release&gt; as string : string

Casts an RPM Package release object as a string type.

#### &lt;rpm package release&gt; as rpm package release : rpm package release

No documentation exists for this cast.

#### unique value of &lt;rpm package release&gt; : rpm package release with multiplicity

Returns the unique values of a given list of &lt;rpm package release&gt; types, removing duplicates and sorting by value.

#### minimum of &lt;rpm package release&gt; : rpm package release

Returns the minimum value from a list of &lt;rpm package release&gt; types.

#### maximum of &lt;rpm package release&gt; : rpm package release

Returns the maximum value from a list of &lt;rpm package release&gt; types.

#### extrema of &lt;rpm package release&gt; : ( rpm package release, rpm package release )

Returns the minimum and maximum extreme values of the given list of RPM package releases.

## package

This filesystem object can inspect the propeties of an RPM (RPM Package Manager) package. Each package contains information about the program, including name and version.

#### &lt;package&gt; as string : string

Creates a string containing the package&#39;s name, version and release.Example: package &quot;apache&quot; of rpm as string - Returns a string with information about the package, such as &quot;apache-1.3.23-88&quot;.

#### version of &lt;package&gt; : version

Returns the version of the given RPM package.

#### unique name of &lt;package&gt; : string

Returns the unique values of a given list of &lt;package&gt; types, removing duplicates and sorting by value.

#### rpm version record of &lt;package&gt; : rpm package version record

Returns the RPM version records of the specified package.

#### require of &lt;package&gt; : capability

Returns capability objects for each capability that this package requires.

#### provide of &lt;package&gt; : capability

Returns capability objects for each capability that this package provides.

#### obsolete of &lt;package&gt; : capability

Returns a capability object that this package obsoletes.

#### name of &lt;package&gt; : string

Returns the name of the given RPM package.

#### installed file of &lt;package&gt; : capability

The list of actual files that the package leaves installed.

#### conflict of &lt;package&gt; : capability

Returns capability objects that conflict with this package in the RPM database.

#### architecture of &lt;package&gt; : string

The architecture represents the CPU type that the RPM Package was designed to be used on. Typical values are i386, i686, or x86_64, but packages can be created with archtectures like &#39;noarch&#39; or have no architecture specified at all.Example: architecture of package &quot;BESAgent&quot; of rpm - On a SuSE Linux Enterprise Server 9.0, 64 bit, this will return x86_64, while on a Fedora Core 3, 32 bit, it will return i386.

## capability

A package can have capabilities that it requires, provides, obsoletes, or conflicts with. For instance, apache may require sh, and provide httpd. If you want to install apache, you will need to have sh in the RPM database. If you want to install a package that uses httpd, you will need to install apache.

#### &lt;capability&gt; as string : string

Creates a string containing the capability&#39;s name, relation and version.Example: capability &quot;libxml2 &gt;= 2.4.7&quot; - Casts the capability as a string, returning &quot;libxml2 &gt;= 2.4.7&quot;.

#### version of &lt;capability&gt; : string

If this capability object has version information, the version is returned.Example: version of capability &quot;sh &lt;= 4.1&quot; - Returns &quot;4.1&quot;, the version of the specified capability.

#### relation of &lt;capability&gt; : string

If this capability object has version information, the relation is returned.Example: relation of capability &quot;sh &lt;= 4.1&quot; - Returns &quot;&lt;=&quot;, the &quot;less than or equal&quot; relation.

#### name of &lt;capability&gt; : string

Returns the name of this capability object.

