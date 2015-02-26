# preference

The &lt;preference&gt; inspectors provide access to application preference files.

# array <string> of <preference>

Get, from a preference file, an array keyed by the specified string.

# boolean <string> of <preference>

Get, from a preference file, a boolean keyed by the specified string.

# date <string> of <preference>

Get, from a preference, a date keyed by the specified string.Example: date &quot;date&quot; of dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of preference &quot;com.apple.scheduler&quot; - Returns the date of the specified dictionary.

# dictionary <string> of <preference>

Get, from a preference, a dictionary keyed by the specified string.Example: exists dictionary &quot;Timer&quot; of dictionary &quot;SUCheckSchedulerTag&quot; of dictionary &quot;com.apple.SoftwareUpdate&quot; of dictionary &quot;AbsoluteSchedule&quot; of preference &quot;com.apple.scheduler&quot; - Returns `True` if the specified dictionary exists.

# integer <string> of <preference>

Get, from a preference, an integer keyed by the specified string.Example: integer &quot;mod-count&quot; of preference &quot;com.apple.dock&quot; - Returns the mod-count of the specified preference as an integer.

# string <string> of <preference>

Get, from a preference, the string keyed by the specified string.Example: string &quot;FXSearchFieldTarget&quot; of preference &quot;com.apple.finder&quot; - Returns a string, such as Spcf.
