# type: format

Format inspectors make it easier for content authors to create localizable content. Similar in concept to the C printf function, they allow you to embed arguments into a formatting string, which is followed by the argument values themselves. The arguments are numbered and enclosed in curly brackets {0} and the values to be substituted are preceded by a plus sign (+). For example:Q: format &amp;quot;At {1}, user {0} is logged on.&amp;quot; + name of current user + nowA: At 9/27/2010 3:03:26 PM, user Scott is logged on.

# &lt;format&gt; as string : string

Returns the formatted output as a string type.

# &lt;format&gt; + &lt;format&gt; : format

This inspector allows you to embed a format inside another one.Example: format &amp;quot;Logged in: {0}&amp;quot; + (format &amp;quot;user {0}&amp;quot; + name of current user) - ReturnsLogged in: user Scott.
