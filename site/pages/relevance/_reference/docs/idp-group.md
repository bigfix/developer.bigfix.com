# type: idp group

This inspector type, available starting with BigFix version 11.0.7, represents a group defined within an identity provider (IdP). Such a group can contain both users and enrolled computers.
The currently supported IdPs are Active Directory and Microsoft Entra ID.

# common name of &lt;idp group&gt; : string

If the group's identity provider is Active Directory, returns its common name (CN). Otherwise, returns an error.

{% qna %}
Q: common names of idp groups of client
A: WinLaptop
A: Rome Lab Computers
{% endqna %}

# directory type of &lt;idp group&gt; : string

Returns the group's identity provider type. The possible return values are:
* `ActiveDirectory`, for an Active Directory group
* `EntraID`, for an Entra ID group
* `Manual`, if the client settings `_BESClient_ManageBy_UserPrincipalName` or `_BESClient_ManageBy_MemberOf` are set.

{% qna %}
Q: directory types of idp groups of client
A: ActiveDirectory
A: ActiveDirectory
{% endqna %}

# display name of &lt;idp group&gt; : string

Returns the display name of the IdP group. If the IdP group is an Active Directory group and has no display name, returns its name instead. Returns an error if this information is not available.

{% qna %}
Q: display names of idp groups of client
A: WinLaptop
A: Rome Lab Computers
{% endqna %}

# distinguished name of &lt;idp group&gt; : string

If the group's identity provider is Active Directory, returns its distinguished name (DN). Otherwise, returns an error.

{% qna %}
Q: distinguished names of idp groups of client
A: cn=winlaptop,ou=_computergroups,ou=_hclcerter,dc=hclima,dc=local
A: cn=rome lab computers,ou=_computergroups,ou=_hclcerter,dc=hclima,dc=local
{% endqna %}

# id of &lt;idp group&gt; : string

If the group's identity provider is Entra ID, returns group GUID. Otherwise, returns an error.

{% qna %}
Q: ids of idp groups of client
A: aa71ac1b-e6af-479f-90db-5511fa224dd3
{% endqna %}

# sam account name of &lt;idp group&gt; : string

If the group's identity provider is Active Directory, returns its Security Account Manager (SAM) account name. Otherwise, returns an error.

{% qna %}
Q: sam account names of idp groups of client
A: WinLaptop
A: Rome Lab Computers
{% endqna %}
