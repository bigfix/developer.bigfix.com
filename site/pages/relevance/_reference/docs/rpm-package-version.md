# type: rpm package version

Returns the RPM package version object created parsing the specified version string.

**Note**: Requires the presence of the RPM library and `librpminfo` (an open source library created by BigFix containing modified RPM library code) on the client machine. `librpminfo` is installed on the client as part of the normal BES client RPM installation procedure.

**Examples**

```
Q: rpm package version "1.0.5"
A: 1.0.5
```

# extrema of &lt;rpm package version&gt; : ( rpm package version, rpm package version )

Returns the minimum and maximum extreme values of the given list of RPM package versions.

# maximum of &lt;rpm package version&gt; : rpm package version

Returns the maximum value from a list of &lt;rpm package version&gt; types.

# minimum of &lt;rpm package version&gt; : rpm package version

Returns the minimum value from a list of &lt;rpm package version&gt; types.

# rpm package version &lt;rpm package version&gt; : rpm package version

Iterates through the RPM package version objects.

# unique value of &lt;rpm package version&gt; : rpm package version with multiplicity

Returns the unique values of a given list of &lt;rpm package version&gt; types, removing duplicates and sorting by value.

# &lt;rpm package version&gt; as rpm package version : rpm package version

No documentation exists.

# &lt;rpm package version&gt; as string : string

Casts an RPM package version as a string type.

# &lt;rpm package version&gt; &lt; &lt;rpm package version&gt; : boolean

No documentation exists.

# &lt;rpm package version&gt; &lt;= &lt;rpm package version&gt; : boolean

No documentation exists.

# &lt;rpm package version&gt; = &lt;rpm package version&gt; : boolean

No documentation exists.
