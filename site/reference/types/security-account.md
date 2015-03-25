# type: security account

The &lt;security account&lt; type serves as a base type for the "user" and "local group" types and for properties common to users and groups.

# privilege of &lt;security account&gt; : string

Returns a string describing the privileges assigned to the specified security account. For more information, see the MSDN article on LsaEnumerateAccountRights. For a description of the possible constants that can be returned, see the articles on Account Rights Constants and Privilege Constants.

# sid of &lt;security account&gt; : security identifier

Returns the Security ID (SID) associated with the specified security account.
