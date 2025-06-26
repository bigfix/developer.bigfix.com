# type: bes idp directory

The `bes idp directory` returns the Identity Provider Directory (IDPD), the set of information required to connect to an identity provider that stores user credentials used for authentication in BigFix.

# active directory of &lt;bes idp directory&gt; : boolean

Returns `True` if the specified Identity Provider Directory referers to an Active Directory LDAP server.

{% qna %}
Q: active directory of bes idp directory whose( id of it = 55 )
A: False
{% endqna %}

# azure entra id of &lt;bes idp directory&gt; : boolean

Returns `True` if the specified Identity Provider Directory referers to the Microsoft Entra ID identity provider.

{% qna %}
Q: azure entra id of bes idp directory whose( id of it = 55 )
A: True
{% endqna %}

# base distinguished name of &lt;bes idp directory&gt; : string

Returns the base distinguished name of the Identity Provider Directory as a string. It exists only for LDAP identity providers.

{% qna %}
Q: base distinguished name of bes idp directory whose( id of it = 65 )
A: dc=bigfix,dc=com
{% endqna %}

# client id of &lt;bes idp directory&gt; : string

Returns the client id of the specified Identity Provider Directory as a string. It exists only for Microsoft Entra ID identity providers.

{% qna %}
Q: client id of bes idp directory whose( id of it = 65 )
A: 64g6d777-8934-6d52-2gt3-hvch83829hf87
{% endqna %}

# generic ldap of &lt;bes idp directory&gt; : boolean

Returns `True` if the specified Identity Provider Directory referers to a generic LDAP server.

{% qna %}
Q: generic ldap of bes idp directory whose( id of it = 65 )
A: False
{% endqna %}

# global catalog of &lt;bes idp directory&gt; : boolean

Returns `True` if the specified Identity Provider Directory is a Global Catalog Server. It exists only for Active Directory LDAP identity providers.

{% qna %}
Q: global catalog of bes idp directory whose( id of it = 60 )
A: True
{% endqna %}

# group filter of &lt;bes idp directory&gt; : string

Returns the group filter of the specified Identity Provider Directory as a string. It exists only for LDAP identity providers.

{% qna %}
Q: group filter of bes idp directory whose( id of it = 60 )
A: (objectclass=posixGroup)
{% endqna %}

# id of &lt;bes idp directory&gt; : integer

Returns the numeric ID unique to the specified Identity Provider Directory.

{% qna %}
Q: id of bes idp directory whose( name of it = "My Identity Provider Directory" )
A: 60
{% endqna %}

# login user of &lt;bes idp directory&gt; : string

Returns the login user of the specified Identity Provider Directory as a string. It exists only for LDAP identity providers.

{% qna %}
Q: login user of bes idp directory whose( id of it = 60 )
A: cn=Admin,dc=bigfix,dc=com
{% endqna %}

# name of &lt;bes idp directory&gt; : string

Returns the name associated to the specified Identity Provider Directory as a string.

{% qna %}
Q: name of bes idp directory whose( id of it = 60 )
A: My Identity Provider Directory
{% endqna %}

# server of &lt;bes idp directory&gt; : bes idp directory server

Returns the `bes idp directory server` of the specified Identity Provider Directory. It exists only for LDAP identity providers.

{% qna %}
Q: host of server of bes idp directory whose( id of it = 60 )
A: 10.10.10.175
{% endqna %}

# set of &lt;bes idp directory&gt; : bes idp directory set

Converts a list of `bes idp directory` elements to a set that can be arithmetically manipulated. This operation discards non-unique elements in the list.
{% qna %}
Q: size of set of bes idp directories
A: 3
{% endqna %}

# tenant id of &lt;bes idp directory&gt; : string

Returns the tenant id of the specified Identity Provider Directory as a string. It exists only for Microsoft Entra ID identity providers.

{% qna %}
Q: tenant id of bes idp directory whose( id of it = 65 )
A: 83g5d677-3936-6h54-2jk3-hbnh63821hf23
{% endqna %}

# uid attribute of &lt;bes idp directory&gt; : string

Returns the uid of the specified Identity Provider Directory as a string. It exists only for LDAP identity providers.

{% qna %}
Q: uid attribute of bes idp directory whose( id of it = 60 )
A: uid
{% endqna %}

# unique value of &lt;bes idp directory&gt; : bes idp directory with multiplicity

Returns the unique values of a given list of `bes idp directory` types, removing duplicates and sorting by value.

{% qna %}
Q: ids of unique values of bes idp directories
A: 55
A: 59
A: 60
A: 61
A: 65
{% endqna %}

# use ssl of &lt;bes idp directory&gt; : boolean

Returns `True` if the specified Identity Provider Directory use ssl protocol. It exists only for LDAP identity providers.

{% qna %}
Q: use ssl of bes idp directory whose( id of it = 60 )
A: True
{% endqna %}

# user filter of &lt;bes idp directory&gt; : string

Returns the user filter of the specified Identity Provider Directory as a string. It exists only for LDAP identity providers.

{% qna %}
Q: user filter of bes idp directory whose( id of it = 60 )
A: (objectclass=account)
{% endqna %}

# &lt;bes idp directory&gt; = &lt;bes idp directory&gt; : boolean

Compares two `bes idp directory` objects and returns `True` if they are equal.

{% qna %}
Q: bes idp directory whose( id of it = 59 ) = bes idp directory whose( name of it = "My Identity Provider Directory" )
A: True
{% endqna %}