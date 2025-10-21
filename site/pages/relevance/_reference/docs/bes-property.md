# type: bes property

The &lt;bes property&gt; inspectors return information about the properties of BES Client computers. Properties -- along with their names, IDs and definitions -- can be iterated to produce property lists of all your networked BES computers.

# analysis flag of &lt;bes property&gt; : boolean

Returns `True` if the specified BES property is an analysis property.

# category of &lt;bes property&gt; : string

Returns the optional category created for the specified BES property.

# custom flag of &lt;bes property&gt; : boolean

Returns `True` if the specified BES property is custom.

# database id of &lt;bes property&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database containing the specified BES property.

# default flag of &lt;bes property&gt; : boolean

Returns `True` if the specified BES property is the default.

# definition of &lt;bes property&gt; : string

Returns the relevance expression which defines the specified property.

# disk usage of &lt;bes property&gt; : integer

Gives the size in bytes of the cache file holding the results for the given property.

# display category of &lt;bes property&gt; : string

Returns the category of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display name of &lt;bes property&gt; : string

Returns the name of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display simple name of &lt;bes property&gt; : string

Returns the simple name of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

# evaluation period of &lt;bes property&gt; : time interval

Returns the &lt;time interval&gt; that controls how frequently clients will submit reports for the specified property.

# id of &lt;bes property&gt; : ( integer, integer, integer )

Returns a 3-tuple of integers composed of the site ID, analysis ID and property ID. The first integer identifies the site hosting the Analysis. For custom properties not contained in an analysis (those created using the Manage Properties dialog), it is the ID of the Action site. The second integer indentifies the Analysis containing the property. For custom properties, this is 0. The third integer identifies the property itself. This is the same as the source ID if the property is defined in an Analysis. If it is not defined in an Analysis then this is the unique object ID for the property.

# keep statistics flag of &lt;bes property&gt; : boolean

Returns `True` if statistics are being kept for the specified BES property.

# memory usage of &lt;bes property&gt; : integer

Returns an estimate of the number of bytes of virtual memory that is currently being used to store the result of the given property.

# name of &lt;bes property&gt; : string

Returns the name of the specified BES property. This name is not guaranteed to be unique.

# reported computer set of &lt;bes property&gt; : bes computer set

Returns a list of all the computers that have reported for the specified BES property. The list is formatted as a mathematical set.

# reserved flag of &lt;bes property&gt; : boolean

Returns `True` if the specified BES property is reserved.

# result from &lt;bes computer&gt; of &lt;bes property&gt; : bes property result

Returns the result of the specified BES property and computer.

# result of &lt;bes property&gt; : bes property result

Returns a list of the BES property results for every computer reporting a result for the specified property.

# set of &lt;bes property&gt; : bes property set

Converts the specified BES Property list to a set that can be arithmetically manipulated.

# simple name of &lt;bes property&gt; : string

Returns the non-category portion of the property name.

# source analysis of &lt;bes property&gt; : bes fixlet

Returns the &lt;bes fixlet&gt; object corresponding to the analysis that defines the specified property.

# source evaluation period of &lt;bes property&gt; : time interval

Returns the period of the property as specified by the analysis that defines it. This period is not necessarily the same as the period of the property.

# source id of &lt;bes property&gt; : integer

Returns the ID of the property as specified by the analysis that defines it. This is not the same as the unique property ID.

# source name of &lt;bes property&gt; : string

Returns the name of the property as specified by the analysis that defines it. This name is not necessarily the same as the name of the property.

# statistic range of &lt;bes property&gt; : statistic range

Returns the range of statistical bins associated with the given property. The property must be marked for statistical aggregation. If not, or if no clients have reported results, it throws NoSuchObject.

# unique value of &lt;bes property&gt; : bes property with multiplicity

Returns the unique values of a given list of &lt;bes property&gt; types, removing duplicates and sorting by value.

# &lt;bes property&gt; as xml : utf8 string

Converts the specified BES Property to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

# &lt;bes property&gt; = &lt;bes property&gt; : boolean

Compares two `bes property` objects and returns `True` if they are equal.
