# bes filter

The &lt;bes filter&gt; inspectors return the filters, which represent the criteria used by the Find command (Ctrl-F in the BES Console). The filters are specific to computers, computer groups, Actions, Analyses, Baselines, Unmanaged Assets, Users, Tasks or Fixlets, and are appropriately flagged.

# action flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding Actions.

# action set of [bes filter]

Returns a filtered set of Actions. Given an Action filter that specifies &quot;Name contains &#39;Custom Action&#39;&quot;, this inspector returns the set of BES Actions with &#39;Custom Action&#39; in the name.Example: size of (action set of bes filters) - Returns the number of BES Filters that were designed for finding Actions.

# analysis flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding Analyses.

# analysis set of [bes filter]

Returns a filtered set of Analyses. Given an Analysis filter that specifies &quot;Visibility equals Visible&quot;, this inspector returns only the set of BES Analyses that are visible.

# baseline flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding Baselines.

# baseline set of [bes filter]

Returns a filtered set of Baselines. Given a Baseline filter that specifies &quot;Visibility equals Visible&quot;, this inspector returns only the set of BES Baselines that are visible.

# computer flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding computers.

# computer group set of [bes filter]

Returns a filtered set of computer groups. Given a computer group filter that specifies &quot;Name contains &#39;test&#39;&quot;, this inspector returns the set of computer groups that have &#39;test&#39; in their name.

# computer set of [bes filter]

Returns a filtered set of Computers. Given a Computer filter that specifies &quot;OS contains &#39;Win&#39;&quot;, this inspector returns the set of Windows Computers.

# domain of [bes filter]

Returns the BES domain where the specified BES filter(s) were created.

# fixlet flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding Computers.

# fixlet set of [bes filter]

Returns a filtered set of Fixlets. Given a Fixlet filter that specifies &quot;Visibility equals Globally Hidden&quot;, this inspector returns only the set of BES Fixlets that are globally hidden.

# group flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding computer groups.

# id of [bes filter]

Returns the numeric ID unique to the specified BES filter.

# join by intersection flag of [bes filter]

Returns `True` if the various find properties are intersected (included with ALL properties) in the specified filter.

# name of [bes filter]

Returns the name of the specified BES filter.

# private flag of [bes filter]

Returns `True` if the specified BES filter is marked as private.

# set of [bes filter]

Converts the specified BES Filter list to a set that can be arithmetically manipulated.

# task flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding Tasks.

# task set of [bes filter]

Returns a filtered set of Tasks. Given a Task filter that specifies &quot;Visibility equals Locally Hidden&quot;, this inspector returns only the set of BES Tasks that are locally hidden.

# unique value of [bes filter]

Returns the unique values of a given list of &lt;bes filter&gt; types, removing duplicates and sorting by value.

# unmanagedasset flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding Unmanaged Assets.

# user flag of [bes filter]

Returns `True` if the specified BES Filter was designed for finding Users.

# user set of [bes filter]

Returns a filtered set of Console Operators. Given a Console Operator filter that specifies &quot;Name contains Joe&quot;, this inspector returns only the set of Console Operators named Joe.
