# type: rpm package release

Returns the RPM package release object created parsing the specified string.

**Note**: Requires the presence of the RPM library and `librpminfo` (an open source library created by BigFix containing modified RPM library code) on the client machine. `librpminfo` is installed on the client as part of the normal BES client RPM installation procedure.

**Example**

```
Q: rpm package release "4.el6"
A: 4.el6
```

# extrema of &lt;rpm package release&gt; : ( rpm package release, rpm package release )

Returns the minimum and maximum extreme values of the given list of RPM package releases.

# maximum of &lt;rpm package release&gt; : rpm package release

Returns the maximum value from a list of &lt;rpm package release&gt; types.

# minimum of &lt;rpm package release&gt; : rpm package release

Returns the minimum value from a list of &lt;rpm package release&gt; types.

# rpm package release &lt;rpm package release&gt; : rpm package release

Iterates through the RPM package release objects.

# unique value of &lt;rpm package release&gt; : rpm package release with multiplicity

Returns the unique values of a given list of &lt;rpm package release&gt; types, removing duplicates and sorting by value.

# &lt;rpm package release&gt; as rpm package release : rpm package release

No documentation exists.

# &lt;rpm package release&gt; as string : string

Casts an RPM Package release object as a string type.

# &lt;rpm package release&gt; &lt; &lt;rpm package release&gt; : boolean

No documentation exists.

# &lt;rpm package release&gt; &lt;= &lt;rpm package release&gt; : boolean

No documentation exists.

# &lt;rpm package release&gt; = &lt;rpm package release&gt; : boolean

No documentation exists.
