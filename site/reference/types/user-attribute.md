# type: user attribute

These Macintosh inspectors provide information, such as user ID and home directory, about the specified user.

# key of &lt;user attribute&gt; : string

Returns the key names of the specified user attribute, as specified by the LocalHost node of Apple&amp;#39;s OpenDirectory system.

# value of &lt;user attribute&gt; : string

Returns the value of the specified user attribute, as specified by the LocalHost node of Apple&amp;#39;s OpenDirectory system.

# &lt;user attribute&gt; as string : string

Returns a list of user attributes. These can be inspected for value and key, but this inspector concatenates them so the cast yields a string of the form &amp;quot;key: value&amp;quot;. These attributes are gathered from the LocalHost node of Apple&amp;#39;s OpenDirectory system (much like ActiveDirectory). For more information, see the Apple developer site.
