# type: bes computer group

The &lt;bes computer group&lt; inspectors return an iterated list of computer groups, as defined in the BES Console.

# automatic flag of &lt;bes computer group&gt; : boolean

Returns the value of the &#39;Automatic&#39; flag corresponding to the specified BES Computer Group. Groups can be manual, automatic or ad-hoc.

# client evaluated flag of &lt;bes computer group&gt; : boolean

Returns `True` if the specified BES computer group is determined by client acknowledgement.

# creation time of &lt;bes computer group&gt; : time

Returns the time when the specified BES computer group was created.

# database id of &lt;bes computer group&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES computer group resides.

# domain of &lt;bes computer group&gt; : bes domain

A domain is attached to a BES computer group when one is created. This inspector returns the domain associated with the specified group.

# id of &lt;bes computer group&gt; : integer

Returns the numeric ID corresponding to the specified BES Computer Group.

# issuer of &lt;bes computer group&gt; : bes user

Returns the &lt;bes user&lt; object corresponding to the bes computer group that issued the specified activation.

# manual flag of &lt;bes computer group&gt; : boolean

Returns the value of the &#39;Manual&#39; flag corresponding to the specified BES Computer Group. Groups can be manual, automatic or ad-hoc.

# member of &lt;bes computer group&gt; : bes computer

Returns the set of computers that comprise the specified BES Computer Group.

# member set of &lt;bes computer group&gt; : bes computer set

Returns the computer set that comprise the specified BES Computer Group.

# name of &lt;bes computer group&gt; : string

Returns the name corresponding to the specified BES Computer Group.

# set of &lt;bes computer group&gt; : bes computer group set

Converts the specified BES computer group list to a set that can be arithmetically manipulated.

# site of &lt;bes computer group&gt; : bes site

Returns the site corresponding to the specified BES Computer Group.

# unique value of &lt;bes computer group&gt; : bes computer group with multiplicity

Returns the unique values of a given list of &lt;bes computer group&lt; types, removing duplicates and sorting by value.

# &lt;bes computer group&gt; as xml : utf8 string

Converts the specified BES computer group to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

# &lt;bes computer group&gt; = &lt;bes computer group&gt; : boolean

Compares two BES Computer Group types and returns `True` if they are equal.
