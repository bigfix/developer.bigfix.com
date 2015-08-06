# type: setting

A &lt;setting&gt; is a simple object with name and value properties. It is a property of a client, or a property of a site. Settings of a site have a site scope. Settings of the client have a client scope.  See the  setting&#39; commands in the action guide for more details.

# effective date of &lt;setting&gt; : time

Returns the date when the setting was last modified.

# enabled of &lt;setting&gt; : boolean

Returns `True` if the specified setting is enabled.

# name of &lt;setting&gt; : string

Returns the name of the setting.Example: names of settings of site "actionsite" - Returns the names of all the settings of the site named "actionsite".

# sha256 of &lt;setting&gt; : string

Returns the sha256 of the string value of the setting.

# value of &lt;setting&gt; : string

Returns the value of the setting.

# &lt;setting&gt; as string : string

Returns a string formatted as &lt;name&gt;=&lt;value&gt; for the setting.
