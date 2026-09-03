# type: client

The client object allows access to properties of the client application hosting the relevance evaluation, typically a BigFix program. In addition, the client maintains a collection of settings with both name and value properties that are inspectable using the client object. These inspectors share properties of application types, such as version and size.

# administrative rights of &lt;client&gt; : administrative rights

No documentation exists.

# administrator &lt;string&gt; of &lt;client&gt; : setting

If the administrator named in the &lt;string&gt; is enabled on the given &lt;client&gt; computer, this property returns a setting with the given name and the value &#39;allow.&#39; For instance, if the name of the administrator is joe_admin, then the client would return a setting object with the name &#39;joe_admin&#39; and a value of &#39;allow&#39;. Casting this as a string would return &#39;joe_admin=allow&#39;.

# administrator of &lt;client&gt; : setting

Returns one or more settings each representing an administrator of the client.

# agent interface &lt;string&gt; of &lt;client&gt; : agent interface

Returns a specific product interface.

# agent interface of &lt;client&gt; : agent interface

Enumerates the product interfaces for a specific client.

# authenticating of &lt;client&gt; : boolean

Returns `True` when client is performing client authentication to the relay

# banned prefetch plugin &lt;client&gt; : string

No documentation exists.

# banned prefetch plugin of &lt;client&gt; : string

No documentation exists.

# brand of &lt;client&gt; : string

Returns the branding ID of a client computer. BigFix is the norm, but there are other brands that use the technology, including Trend Micro.

# build target of &lt;client&gt; : string

Returns the platform that the client was built on.

{% qna %}
Q: build target of client
A: RedHat 5 x86_64
{% endqna %}

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

Returns the FXF Encoding IANA name of the encoding for your deployment. This encoding represents all FXF files that the server generates.

# idp directory type of &lt;client&gt; : string

Returns the type of the identity provider that the computer is joined to. Otherwise, if no fallback client setting is set, returns an error. The possible return values are:
* `ActiveDirectory`, if the computer is joined to Active Directory
* `EntraID`, if the computer is joined to Entra ID
* `Manual`, if the client settings `_BESClient_ManageBy_UserPrincipalName` or `_BESClient_ManageBy_MemberOf` are set.

{% qna %}
Q: idp directory type of client
A: ActiveDirectory
{% endqna %}

# idp display name of &lt;client&gt; : string

If the computer is joined to an Active Directory, returns the computer's display name or, if that field is empty, its NetBIOS computer name. If the computer is joined to Entra ID, returns the computer's display name. Returns an error if this information is not available.

{% qna %}
Q: idp display name of client
A: ALIMA-RELAY
{% endqna %}

# idp distinguished name of &lt;client&gt; : string

If the computer is joined to an Active Directory, returns the computer's LDAP distinguished name. Otherwise, returns an error.

{% qna %}
Q: idp distinguished name of client
A: cn=alima-ubuntu22,cn=computers,dc=hclima,dc=local
{% endqna %}

# idp group of &lt;client&gt; : idp group

If the computer is joined to an identity provider, returns a list of objects representing the groups it belongs to. Otherwise, returns an error.

{% qna %}
Q: names of idp groups of client
A: WinLaptop
A: Rome Lab Computers
{% endqna %}

# idp id of &lt;client&gt; : string

If the computer is joined to Entra ID, returns the GUID. Otherwise, returns an error.

{% qna %}
Q: idp id of client
A: 12489374-008b-400f-bceb-a6b2c82c48da
{% endqna %}

# idp sam account name of &lt;client&gt; : string

If the computer is joined to Active Directory, returns the computer's SAM account name. Otherwise, returns an error.

{% qna %}
Q: idp sam account name of client
A: ALIMA-UBUNTU22$
{% endqna %}

# idp user of &lt;client&gt; : idp user

If the computer is joined to an identity provider, returns an object representing the user that manages it. Otherwise, returns an error.

{% qna %}
Q: exists idp user of client
A: True
{% endqna %}

# info of &lt;client&gt; : string

No documentation exists.

# last command time of &lt;client&gt; : time

Returns the last time the client received a UDP command.

# last report time of &lt;client&gt; : time

No documentation exists.

# local character set of &lt;client&gt; : string

No documentation exists.

# manual group &lt;string&gt; of &lt;client&gt; : manual group

Returns information on the manual groups the client is member of.

{% qna %}
Q: manual group "Windows systems"of client
A: Windows systems
{% endqna %}

# manual group of &lt;client&gt; : manual group

Returns information on the manual groups the client is member of.

{% qna %}
Q: manual groups of client
A: Physical Only
A: Windows_only
{% endqna %}

# process owner of &lt;client&gt; : client process owner

The name of the owner of the BigFix client.

# registration address of &lt;client&gt; : ipv4or6 address

This inspector returns the IP address (as an &lt;ipv4or6 address&gt; type) that the specified BigFix client registered with.

# registration cidr address of &lt;client&gt; : string

This inspector returns the cidr address from the adapter that the specified BigFix client registered with.

# registration mac address of &lt;client&gt; : string

This inspector returns the MAC address that the specified BigFix client registered with.Example: registration mac address of client - Returns a MAC address such as 00-1e-c9-4d-ce-5c.

# registration subnet address of &lt;client&gt; : ipv4or6 address

This inspector returns the subnet address (as an &lt;ipv4or6 address&gt; type) from the adapter that the specified BigFix client registered with.

# report character set of &lt;client&gt; : string

No documentation exists.

# server based group &lt;string&gt; of &lt;client&gt; : server based group

Returns information on the server based groups the client is member of.

{% qna %}
Q: server based group "Windows systems"of client
A: Windows systems
{% endqna %}

# server based group of &lt;client&gt; : server based group

Returns information on the server based groups the client is member of.

{% qna %}
Q: server based groups of client
A: Dev_version
A: Windows_only
{% endqna %}

# setting &lt;string&gt; of &lt;client&gt; : setting

Returns a client setting whose name matches the string provided from the client settings.

# setting of &lt;client&gt; : setting

Returns one or more settings from the client settings.

# storage folder of &lt;client&gt; : folder

No documentation exists.

# upload progress of &lt;client&gt; : string

Returns a status message string indicating No Progress, Errors or a string like the following to indicate the upload progress:&lt;filename&gt;: x of &lt;filesize&gt; bytes in &lt;number&gt; seconds.

# version of &lt;client&gt; : version

The product version of the BES application (BESClient or QnA).Note: On the Macintosh only, this inspector returns a &lt;string&gt;.Example: version of client as string - Returns a string like "4.0.3.7".
