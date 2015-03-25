# type: security identifier

A Security Identifier, or SID, is a data structure that identifies user, group, and computer accounts. Every account on a network is issued a unique SID when the account is first created. Internal processes in Windows refer to an account&amp;#39;s SID rather than the account&amp;#39;s user or group name.

# account name of &lt;security identifier&gt; : string

Retrieves the name of the account for this SID and the name of the first domain on which this SID is found.

# component string of &lt;security identifier&gt; : string

This inspector returns a string formatted using the [ConvertSidToStringSid](https://msdn.microsoft.com/en-us/library/windows/desktop/aa376399%28v=vs.85%29.aspx) function.

{{#example}}
Q: component string of owner of security descriptor of windows folder
A: S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464
I: singular string
{{/example}}

# domain name of &lt;security identifier&gt; : string

Returns the domain name of the first domain on which the specified SID is found.

# rsop user wmi &lt;security identifier&gt; : wmi

Each user has its own RSoP (Resultant Set of Policy) namespace based on the user&amp;#39;s Security Identifier (SID). This inspector returns the namespace specified by the &amp;lt;security identifier&amp;gt;.

# user of &lt;security identifier&gt; : user

No documentation exists.

# &lt;security identifier&gt; as string : string

Returns the security identifier in string format.

# &lt;security identifier&gt; = &lt;security identifier&gt; : boolean

Tests two &amp;lt;security identifier&amp;gt; (SID) values for equality using EqualSid.
