# type: preference

The &lt;preference&lt; inspectors provide access to application preference files.

# array &lt;string&gt; of &lt;preference&gt; : array

Get, from a preference file, an array keyed by the specified string.

# boolean &lt;string&gt; of &lt;preference&gt; : boolean

Get, from a preference file, a boolean keyed by the specified string.

# date &lt;string&gt; of &lt;preference&gt; : time

Get, from a preference, a date keyed by the specified string.Example: date "date" of dictionary "Timer" of dictionary "SUCheckSchedulerTag" of dictionary "com.apple.SoftwareUpdate" of dictionary "AbsoluteSchedule" of preference "com.apple.scheduler" - Returns the date of the specified dictionary.

# dictionary &lt;string&gt; of &lt;preference&gt; : dictionary

Get, from a preference, a dictionary keyed by the specified string.Example: exists dictionary "Timer" of dictionary "SUCheckSchedulerTag" of dictionary "com.apple.SoftwareUpdate" of dictionary "AbsoluteSchedule" of preference "com.apple.scheduler" - Returns `True` if the specified dictionary exists.

# integer &lt;string&gt; of &lt;preference&gt; : integer

Get, from a preference, an integer keyed by the specified string.Example: integer "mod-count" of preference "com.apple.dock" - Returns the mod-count of the specified preference as an integer.

# string &lt;string&gt; of &lt;preference&gt; : string

Get, from a preference, the string keyed by the specified string.Example: string "FXSearchFieldTarget" of preference "com.apple.finder" - Returns a string, such as Spcf.
