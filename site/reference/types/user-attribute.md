# user attribute

These Macintosh inspectors provide information, such as user ID and home directory, about the specified user.

# key of <user attribute>

Returns the key names of the specified user attribute, as specified by the LocalHost node of Apple&#39;s OpenDirectory system.

# value of <user attribute>

Returns the value of the specified user attribute, as specified by the LocalHost node of Apple&#39;s OpenDirectory system.

# <user attribute> as string

Returns a list of user attributes. These can be inspected for value and key, but this inspector concatenates them so the cast yields a string of the form &quot;key: value&quot;. These attributes are gathered from the LocalHost node of Apple&#39;s OpenDirectory system (much like ActiveDirectory). For more information, see the Apple developer site.
