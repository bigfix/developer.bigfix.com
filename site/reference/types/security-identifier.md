# security identifier

A Security Identifier, or SID, is a data structure that identifies user, group, and computer accounts. Every account on a network is issued a unique SID when the account is first created. Internal processes in Windows refer to an account&#39;s SID rather than the account&#39;s user or group name.

# account name of [security identifier]

Retrieves the name of the account for this SID and the name of the first domain on which this SID is found.

# component string of [security identifier]

This Windows-specific inspector returns a string formatted using the ConvertSidToStringSid windows API, discussed at: http://msdn2.microsoft.com/en-us/library/aa376399(VS.85).aspx.Example: component string of owner of security descriptor of windows folder - Returns a string of the form: S-1-5-32-544.

# domain name of [security identifier]

Returns the domain name of the first domain on which the specified SID is found.

# rsop user wmi [security identifier]

Each user has its own RSoP (Resultant Set of Policy) namespace based on the user&#39;s Security Identifier (SID). This inspector returns the namespace specified by the &lt;security identifier&gt;.

# user of [security identifier]

No documentation exists.

# [security identifier] as string

Returns the security identifier in string format.
