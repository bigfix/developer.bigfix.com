# type: array

The &lt;array&gt; inspectors return a list of values in a dictionary array.

# array &lt;integer&gt; of &lt;array&gt; : array

An array from an array by index.

# boolean &lt;integer&gt; of &lt;array&gt; : boolean

Get, from an array, a boolean keyed by the specified integer.Example: boolean 1 of array "NSTableView Sort Ordering NSNavOutlineColumnSettings.v1" of preference "com.apple.Console" - Returns the first boolean value in the array.

# date &lt;integer&gt; of &lt;array&gt; : time

Get, from an array, a date keyed by the specified integer.

# dictionary &lt;integer&gt; of &lt;array&gt; : dictionary

Get, from an array, a dictionary keyed by the specified integer.

# integer &lt;integer&gt; of &lt;array&gt; : integer

Get, from an array, an integer keyed by the specified integer.

# real &lt;integer&gt; of &lt;array&gt; : floating point

No documentation exists.

# size of &lt;array&gt; : integer

Returns the number of unique elements in the given array.Example: size of array "persistent-apps" of preference "com.apple.dock" - Returns the number of unique elements in the specified array.

# string &lt;integer&gt; of &lt;array&gt; : string

Get, from an array, a string keyed by the specified integer.Example: string 0 of array "RecentSearchStrings" of preference "com.apple.safari" - Returns the most recent search string.

# value of &lt;array&gt; : osxvalue

Values of the array.
