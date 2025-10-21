# type: bes filter

The &lt;bes filter&gt; inspectors return the filters, which represent the criteria used by the Find command (Ctrl-F in the BES Console). The filters are specific to computers, computer groups, Actions, Analyses, Baselines, Unmanaged Assets, Users, Tasks or Fixlets, and are appropriately flagged.

# action flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding Actions.

# action set of &lt;bes filter&gt; : bes action set

Returns a filtered set of Actions. Given an Action filter that specifies "Name contains &#39;Custom Action&#39;", this inspector returns the set of BES Actions with &#39;Custom Action&#39; in the name.Example: size of (action set of bes filters) - Returns the number of BES Filters that were designed for finding Actions.

# analysis flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding Analyses.

# analysis set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Analyses. Given an Analysis filter that specifies "Visibility equals Visible", this inspector returns only the set of BES Analyses that are visible.

# baseline flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding Baselines.

# baseline set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Baselines. Given a Baseline filter that specifies "Visibility equals Visible", this inspector returns only the set of BES Baselines that are visible.

# computer flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding computers.

# computer group set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of computer groups. Given a computer group filter that specifies "Name contains &#39;test&#39;", this inspector returns the set of computer groups that have &#39;test&#39; in their name.

# computer set of &lt;bes filter&gt; : bes computer set

Returns a filtered set of Computers. Given a Computer filter that specifies "OS contains &#39;Win&#39;", this inspector returns the set of Windows Computers.

# domain of &lt;bes filter&gt; : bes domain

Returns the BES domain where the specified BES filter(s) were created.

# fixlet flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding Computers.

# fixlet set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Fixlets. Given a Fixlet filter that specifies "Visibility equals Globally Hidden", this inspector returns only the set of BES Fixlets that are globally hidden.

# group flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding computer groups.

# id of &lt;bes filter&gt; : integer

Returns the numeric ID unique to the specified BES filter.

# join by intersection flag of &lt;bes filter&gt; : boolean

Returns `True` if the various find properties are intersected (included with ALL properties) in the specified filter.

# name of &lt;bes filter&gt; : string

Returns the name of the specified BES filter.

# private flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES filter is marked as private.

# set of &lt;bes filter&gt; : bes filter set

Converts the specified BES Filter list to a set that can be arithmetically manipulated.

# task flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding Tasks.

# task set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Tasks. Given a Task filter that specifies "Visibility equals Locally Hidden", this inspector returns only the set of BES Tasks that are locally hidden.

# unique value of &lt;bes filter&gt; : bes filter with multiplicity

Returns the unique values of a given list of &lt;bes filter&gt; types, removing duplicates and sorting by value.

# unmanagedasset flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding Unmanaged Assets.

# user flag of &lt;bes filter&gt; : boolean

Returns `True` if the specified BES Filter was designed for finding Users.

# user set of &lt;bes filter&gt; : bes user set

Returns a filtered set of Console Operators. Given a Console Operator filter that specifies "Name contains Joe", this inspector returns only the set of Console Operators named Joe.

# &lt;bes filter&gt; = &lt;bes filter&gt; : boolean

Compares two `bes filter` objects and returns `True` if they are equal.
