# type: rpm package version record

The &lt;rpm package version record&gt; inspectors provide version-related information, such as Epoch, Version and Release, for an RPM package. Inspectors of this type are sorted according to an RPM-specific ordering mechanism defined by the rpmVersionCompare() function of the RPM library.

**Note**: Requires the presence of the RPM library and `librpminfo` (an open source library created by BigFix containing modified RPM library code) on the client machine. `librpminfo` is installed on the client as part of the normal BES client RPM installation procedure.

# epoch of &lt;rpm package version record&gt; : integer

Returns the integer Epoch (which grants RPM more flexibility in versioning) of the specified RPM Package version record.

# extrema of &lt;rpm package version record&gt; : ( rpm package version record, rpm package version record )

Returns the minimum and maximum extreme values of the given list of RPM package version records.

# maximum of &lt;rpm package version record&gt; : rpm package version record

Returns the maximum value from a list of &lt;rpm package version record&gt; types.

# minimum of &lt;rpm package version record&gt; : rpm package version record

Returns the minimum value from a list of &lt;rpm package version record&gt; types.

# no epoch of &lt;rpm package version record&gt; : rpm package version record

Strips the epoch from the specified RPM package version record.

# release of &lt;rpm package version record&gt; : rpm package release

Returns the RPM Package release for the specified version record.

**Example**

```
Q: release of (rpm package version record "1:2.28.4-4.el6")
A: 4.el6
```

# rpm package version record &lt;rpm package version record&gt; : rpm package version record

Iterates through the RPM package version record objects.

# short form of &lt;rpm package version record&gt; : short rpm package version record

Strips the epoch from the RPM package version record object, if present, and returns a "short RPM package version record" object.

**Examples**

```
Q: short form of (rpm package version record "1:2.28.4-4.el6")
A: 2.28.4-4.el6
```
```
Q: short form of (rpm package version record "1.0.5-7.el6_0")
A: 1.0.5-7.el6_0
```

# short rpm package version record &lt;rpm package version record&gt; : short rpm package version record

Iterates throught the specified RPM package version record objects, stripping the Epoch information out.

# unique value of &lt;rpm package version record&gt; : rpm package version record with multiplicity

Returns the unique values of a given list of &lt;rpm package version record&gt; types, removing duplicates and sorting by value.

# version of &lt;rpm package version record&gt; : rpm package version

Returns the version of the specified RPM package version record.

**Example**

```
Q: version of (rpm package version record "1:2.28.4-4.el6")
A: 2.28.4
```

# &lt;rpm package version record&gt; as rpm package version record : rpm package version record

No documentation exists.

# &lt;rpm package version record&gt; as short rpm package version record : short rpm package version record

Casts an RPM package version record as a short version by stripping the epoch off.

# &lt;rpm package version record&gt; as string : string

Casts an RPM package version record as a string type.

# &lt;rpm package version record&gt; &lt; &lt;rpm package version record&gt; : boolean

No documentation exists.

# &lt;rpm package version record&gt; &lt;= &lt;rpm package version record&gt; : boolean

No documentation exists.

# &lt;rpm package version record&gt; = &lt;rpm package version record&gt; : boolean

No documentation exists.
