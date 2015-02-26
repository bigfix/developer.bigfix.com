# client

The client object allows access to properties of the client application hosting the relevance evaluation, typically a BigFix program. In addition, the client maintains a collection of settings with both name and value properties that are inspectable using the client object. These inspectors share properties of application types, such as version and size.

# administrative rights of <client>

No documentation exists.

# administrator <string> of <client>

If the administrator named in the &lt;string&gt; is enabled on the given &lt;client&gt; computer, this property returns a setting with the given name and the value &#39;allow.&#39; For instance, if the name of the administrator is joe_admin, then the client would return a setting object with the name &#39;joe_admin&#39; and a value of &#39;allow&#39;. Casting this as a string would return &#39;joe_admin=allow&#39;.

# administrator of <client>

Returns one or more settings each representing an administrator of the client.

# authenticating of <client>

Returns `True` when client is performing client authentication to the relay

# banned prefetch plugin <client>

No documentation exists.

# banned prefetch plugin of <client>

No documentation exists.

# brand of <client>

Returns the branding ID of a client computer. BigFix is the norm, but there are other brands that use the technology, including Trend Micro.

# build target of <client>

No documentation exists.

# certificate of <client>

Returns `True` when the client has received its certificate from the server

# character set <client>

No documentation exists.

# character set of <client>

No documentation exists.

# data folder of <client>

Returns the __BESData folder

# deployment character set of <client>

No documentation exists.

# evaluationcycle of <client>

Returns an object corresponding to the time it takes to evaluate the content set on the specified BigFix Client.

# fxf character set of <client>

No documentation exists.

# last command time of <client>

No documentation exists.

# last report time of <client>

No documentation exists.

# local character set of <client>

No documentation exists.

# manual group <string> of <client>

No documentation exists.

# manual group of <client>

No documentation exists.

# process owner of <client>

The name of the owner of the BigFix client.

# registration address of <client>

This inspector returns the IP address (as an &lt;ipv4or6 address&gt; type) that the specified BigFix client registered with.

# registration cidr address of <client>

This inspector returns the cidr address from the adapter that the specified BigFix client registered with.

# registration mac address of <client>

This inspector returns the MAC address that the specified BigFix client registered with.Example: registration mac address of client - Returns a MAC address such as 00-1e-c9-4d-ce-5c.

# registration subnet address of <client>

This inspector returns the subnet address (as an &lt;ipv4or6 address&gt; type) from the adapter that the specified BigFix client registered with.

# report character set of <client>

No documentation exists.

# setting <string> of <client>

Returns a client setting whose name matches the string provided from the client settings.

# setting of <client>

Returns one or more settings from the client settings.

# storage folder of <client>

No documentation exists.

# upload progress of <client>

Returns a status message string indicating No Progress, Errors or a string like the following to indicate the upload progress:&lt;filename&gt;: x of &lt;filesize&gt; bytes in &lt;number&gt; seconds.

# version of <client>

The product version of the BES application (BESClient or QnA).Note: On the Macintosh only, this inspector returns a &lt;string&gt;.Example: version of client as string - Returns a string like &quot;4.0.3.7&quot;.
