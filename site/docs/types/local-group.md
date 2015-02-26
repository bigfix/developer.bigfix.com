# type: local group

The &lt;local group&gt; inspectors return information on local groups as defined on the local BES Client computer using the windows NetLocalGroupEnum API, one of Windows Network Management Functions. Local groups have names, comments, members and security IDs.

# comment of &lt;local group&gt;

Returns a string containing a comment associated with the specfied local group (Administrator, Guest, Users).Example: comment of local group &quot;Administrators&quot; - Returns the string &quot;Administrators have complete and unrestricted access to the computer/domain&quot;.

# member of &lt;local group&gt;

Returns a list of the members of the specified local group.

# name of &lt;local group&gt;

Returns the name of the local group.Example: names of local groups - Returns a list of the local groups, such as Administrators, Guests, Users, and others.
