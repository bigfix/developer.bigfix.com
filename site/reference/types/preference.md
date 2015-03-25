# type: preference

The &amp;lt;preference&amp;gt; inspectors provide access to application preference files.

# array &lt;string&gt; of &lt;preference&gt; : array

Get, from a preference file, an array keyed by the specified string.

# boolean &lt;string&gt; of &lt;preference&gt; : boolean

Get, from a preference file, a boolean keyed by the specified string.

# date &lt;string&gt; of &lt;preference&gt; : time

Get, from a preference, a date keyed by the specified string.Example: date &amp;quot;date&amp;quot; of dictionary &amp;quot;Timer&amp;quot; of dictionary &amp;quot;SUCheckSchedulerTag&amp;quot; of dictionary &amp;quot;com.apple.SoftwareUpdate&amp;quot; of dictionary &amp;quot;AbsoluteSchedule&amp;quot; of preference &amp;quot;com.apple.scheduler&amp;quot; - Returns the date of the specified dictionary.

# dictionary &lt;string&gt; of &lt;preference&gt; : dictionary

Get, from a preference, a dictionary keyed by the specified string.Example: exists dictionary &amp;quot;Timer&amp;quot; of dictionary &amp;quot;SUCheckSchedulerTag&amp;quot; of dictionary &amp;quot;com.apple.SoftwareUpdate&amp;quot; of dictionary &amp;quot;AbsoluteSchedule&amp;quot; of preference &amp;quot;com.apple.scheduler&amp;quot; - Returns `True` if the specified dictionary exists.

# integer &lt;string&gt; of &lt;preference&gt; : integer

Get, from a preference, an integer keyed by the specified string.Example: integer &amp;quot;mod-count&amp;quot; of preference &amp;quot;com.apple.dock&amp;quot; - Returns the mod-count of the specified preference as an integer.

# string &lt;string&gt; of &lt;preference&gt; : string

Get, from a preference, the string keyed by the specified string.Example: string &amp;quot;FXSearchFieldTarget&amp;quot; of preference &amp;quot;com.apple.finder&amp;quot; - Returns a string, such as Spcf.
