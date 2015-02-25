# rpm package version record

The &lt;rpm package version record&gt; inspectors provide version-related information, such as Epoch, Version and Release, for an RPM package. inspectors of this type are sorted according to an RPM-specific ordering mechanism defined by the rpmVersionCompare() function of the RPM library.Note: Requires the presence of the RPM library and librpminfo (an open source library created by BigFix containing modified RPM library code) on the client machine. librpminfo is installed on the client as part of the normal BES client RPM installation procedure.

# epoch of [rpm package version record]

Returns the integer Epoch (which grants RPM more flexibility in versioning) of the specified RPM Package version record.

# extrema of [rpm package version record]

Returns the minimum and maximum extreme values of the given list of RPM package version records.

# maximum of [rpm package version record]

Returns the maximum value from a list of &lt;rpm package version record&gt; types.

# minimum of [rpm package version record]

Returns the minimum value from a list of &lt;rpm package version record&gt; types.

# no epoch of [rpm package version record]

Strips the epoch from the specified RPM package version record.

# release of [rpm package version record]

Returns the RPM Package release for the specified version record.

# rpm package version record [rpm package version record]

Iterates through the RPM package version record objects.

# short form of [rpm package version record]

This inspector strips of the Epoch information from the specified RPM package version record object.

# short rpm package version record [rpm package version record]

Iterates throught the specified RPM package version record objects, stripping the Epoch information out.

# unique value of [rpm package version record]

Returns the unique values of a given list of &lt;rpm package version record&gt; types, removing duplicates and sorting by value.

# version of [rpm package version record]

Returns the version of the specified RPM package version record.

# [rpm package version record] as rpm package version record

No documentation exists.

# [rpm package version record] as short rpm package version record

Casts an RPM package version record as a short version by stripping the epoch off.

# [rpm package version record] as string

Casts an RPM package version record as a string type.
