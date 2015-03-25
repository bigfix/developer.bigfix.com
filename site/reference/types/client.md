# type: client

The client object allows access to properties of the client application hosting the relevance evaluation, typically a BigFix program. In addition, the client maintains a collection of settings with both name and value properties that are inspectable using the client object. These inspectors share properties of application types, such as version and size.

# administrative rights of &lt;client&gt; : administrative rights

No documentation exists.

# administrator &lt;string&gt; of &lt;client&gt; : setting

If the administrator named in the &amp;lt;string&amp;gt; is enabled on the given &amp;lt;client&amp;gt; computer, this property returns a setting with the given name and the value &amp;#39;allow.&amp;#39; For instance, if the name of the administrator is joe_admin, then the client would return a setting object with the name &amp;#39;joe_admin&amp;#39; and a value of &amp;#39;allow&amp;#39;. Casting this as a string would return &amp;#39;joe_admin=allow&amp;#39;.

# administrator of &lt;client&gt; : setting

Returns one or more settings each representing an administrator of the client.

# authenticating of &lt;client&gt; : boolean

Returns `True` when client is performing client authentication to the relay

# banned prefetch plugin &lt;client&gt; : string

No documentation exists.

# banned prefetch plugin of &lt;client&gt; : string

No documentation exists.

# brand of &lt;client&gt; : string

Returns the branding ID of a client computer. BigFix is the norm, but there are other brands that use the technology, including Trend Micro.

# build target of &lt;client&gt; : string

No documentation exists.

# certificate of &lt;client&gt; : x509 certificate

Returns `True` when the client has received its certificate from the server

# character set &lt;client&gt; : string

No documentation exists.

# character set of &lt;client&gt; : string

No documentation exists.

# data folder of &lt;client&gt; : folder

Returns the __BESData folder

# deployment character set of &lt;client&gt; : string

No documentation exists.

# evaluationcycle of &lt;client&gt; : evaluation cycle

Returns an object corresponding to the time it takes to evaluate the content set on the specified BigFix Client.

# fxf character set of &lt;client&gt; : string

No documentation exists.

# last command time of &lt;client&gt; : time

No documentation exists.

# last report time of &lt;client&gt; : time

No documentation exists.

# local character set of &lt;client&gt; : string

No documentation exists.

# manual group &lt;string&gt; of &lt;client&gt; : manual group

No documentation exists.

# manual group of &lt;client&gt; : manual group

No documentation exists.

# process owner of &lt;client&gt; : client process owner

The name of the owner of the BigFix client.

# registration address of &lt;client&gt; : ipv4or6 address

This inspector returns the IP address (as an &amp;lt;ipv4or6 address&amp;gt; type) that the specified BigFix client registered with.

# registration cidr address of &lt;client&gt; : string

This inspector returns the cidr address from the adapter that the specified BigFix client registered with.

# registration mac address of &lt;client&gt; : string

This inspector returns the MAC address that the specified BigFix client registered with.Example: registration mac address of client - Returns a MAC address such as 00-1e-c9-4d-ce-5c.

# registration subnet address of &lt;client&gt; : ipv4or6 address

This inspector returns the subnet address (as an &amp;lt;ipv4or6 address&amp;gt; type) from the adapter that the specified BigFix client registered with.

# report character set of &lt;client&gt; : string

No documentation exists.

# setting &lt;string&gt; of &lt;client&gt; : setting

Returns a client setting whose name matches the string provided from the client settings.

# setting of &lt;client&gt; : setting

Returns one or more settings from the client settings.

# storage folder of &lt;client&gt; : folder

No documentation exists.

# upload progress of &lt;client&gt; : string

Returns a status message string indicating No Progress, Errors or a string like the following to indicate the upload progress:&amp;lt;filename&amp;gt;: x of &amp;lt;filesize&amp;gt; bytes in &amp;lt;number&amp;gt; seconds.

# version of &lt;client&gt; : version

The product version of the BES application (BESClient or QnA).Note: On the Macintosh only, this inspector returns a &amp;lt;string&amp;gt;.Example: version of client as string - Returns a string like &amp;quot;4.0.3.7&amp;quot;.
