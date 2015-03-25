# type: setting

A &amp;lt;setting&amp;gt; is a simple object with name and value properties. It is a property of a client, or a property of a site. Settings of a site have a site scope. Settings of the client have a client scope.  See the  setting&amp;#39; commands in the action guide for more details.

# effective date of &lt;setting&gt; : time

Returns the date when the setting was last modified.

# enabled of &lt;setting&gt; : boolean

Returns `True` if the specified setting is enabled.

# name of &lt;setting&gt; : string

Returns the name of the setting.Example: names of settings of site &amp;quot;actionsite&amp;quot; - Returns the names of all the settings of the site named &amp;quot;actionsite&amp;quot;.

# sha256 of &lt;setting&gt; : string

No documentation exists.

# value of &lt;setting&gt; : string

Returns the value of the setting.

# &lt;setting&gt; as string : string

Returns a string formatted as &amp;lt;name&amp;gt;=&amp;lt;value&amp;gt; for the setting.
