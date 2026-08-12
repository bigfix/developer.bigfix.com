# type: idp user

This inspector type, available starting with BigFix version 11.0.7, represents a user defined within an identity provider (IdP).
The currently supported IdPs are Active Directory and Microsoft Entra ID.

# city of &lt;idp user&gt; : string

Returns the city of the user. Returns an error if this information is not available.

{% qna %}
Q: city of idp user of client
A: Rome
{% endqna %}

# common name of &lt;idp user&gt; : string

If the IdP user represents an Active Directory account, returns its LDAP Common Name (CN). Otherwise, returns an error.

{% qna %}
Q: common name of idp user of client
A: Alberto Lima
{% endqna %}

# department of &lt;idp user&gt; : string

Returns the department of the IdP user. Returns an error if this information is not available.

{% qna %}
Q: department of idp user of client
A: HCL BigFix Rome Lab
{% endqna %}

# directory type of &lt;idp user&gt; : string

Returns the user's identity provider type. The possible return values are:
* `ActiveDirectory`, for an Active Directory account
* `EntraID`, for an Entra ID account
* `Manual`, if the client settings `_BESClient_ManageBy_UserPrincipalName` or `_BESClient_ManageBy_MemberOf` are set.

{% qna %}
Q: directory type of idp user of client
A: ActiveDirectory
{% endqna %}

# distinguished name of &lt;idp user&gt; : string

If the IdP user represents an Active Directory account, returns their distinguished name (DN). Otherwise, returns an error.

{% qna %}
Q: distinguished name of idp user of client
A: cn=alberto lima,ou=developers,ou=_users,ou=_hclcerter,dc=hclima,dc=local
{% endqna %}

# id of &lt;idp user&gt; : string

If the IdP user represents an Entra ID account, returns its GUID. Otherwise, returns an error.

{% qna %}
Q: id of idp user of client
A: 7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e
{% endqna %}

# idp group of &lt;idp user&gt; : idp group

Returns a list of objects representing the groups that the IdP user belongs to. Returns an error if this information is not available.

{% qna %}
Q: names of idp groups of idp user of client
A: Developers_Users
A: Testers_Users
{% endqna %}

# name of &lt;idp user&gt; : string

Returns the display name of the IdP user. Returns an error if this information is not available.

{% qna %}
Q: name of idp user of client
A: Test Name User
{% endqna %}

# office location of &lt;idp user&gt; : string

Returns information regarding the IdP user's office location. Returns an error if this information is not available.

{% qna %}
Q: office location of idp user of client
A: Rome, 7th floor
{% endqna %}

# sam account name of &lt;idp user&gt; : string

If the IdP user is an Active Directory account, returns their Security Account Manager (SAM) account name. Otherwise, returns an error.

{% qna %}
Q: sam account name of idp user of client
A: alberto-lima
{% endqna %}

# state of &lt;idp user&gt; : string

Returns the State of the IdP user. Returns an error if this information is not available.

{% qna %}
Q: state of idp user of client
A: Italy
{% endqna %}

# user principal name of &lt;idp user&gt; : string

Returns the user principal name (UPN) of the IdP user. Returns an error if this information is not available.

{% qna %}
Q: user principal name of idp user of client
A: alberto-lima@hclima.local
{% endqna %}
