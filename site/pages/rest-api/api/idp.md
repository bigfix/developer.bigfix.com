---
title: Identity Provider
---

This family of REST APIs, available starting with BigFix version 11.0.7, allows you to retrieve details about specific users, computers, and groups of the identity providers (IdP) used across your deployment.

Computers and users can be members members of multiple groups and of the same groups.

{% restapi "/api/idp/user/{user_id}", "GET", "Returns the properties of the specified IdP user." %}
**Request:** URL is all that is required. `{user_id}` is the user's identifier as defined by the identity provider.

**Response:** An XML text containing a single `IDPUser` element with the properties of the specified IdP user.

**Response Schema:** BESAPI.xsd

Example. On a deployment with computers joined to Active Directory, this call:
```
https://server.bigfix.com:52311/api/idp/user/cn=alice,cn=users,dc=temx,dc=test,dc=com
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPUser>
        <DisplayName>alice</Name>
        <DistinguishedName>cn=alice,cn=users,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>alice</CommonName>
        <SAMAccountName>alice</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
        <UserPrincipalName>alice@temx.test.com</UserPrincipalName>
        <MemberOf>
            <Group>cn=administrators,cn=builtin,dc=temx,dc=test,dc=com</Group>
            <Group>cn=domain admins,cn=users,dc=temx,dc=test,dc=com</Group>
            <Group>cn=group1,dc=temx,dc=test,dc=com</Group>
        </MemberOf>
        <Department>HCL</Department>
        <OfficeLocation>Rome</OfficeLocation>
        <City>Pordenone</City>
        <State>Friuli</State>
        <Country>Italy</Country>
    </IDPUser>
</BESAPI>
```

Example. On a deployment with computers joined to Entra ID, this call:
```
https://server.bigfix.com:52311/api/idp/user/7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPUser>
        <DisplayName>Bob Brown</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ID>
        <DirectoryType>EntraID</DirectoryType>
        <UserPrincipalName>bob-entra@idptestentra.onmicrosoft.com</UserPrincipalName>
        <MemberOf>
            <Group>647329b2-f5a3-40be-8bd1-cd0f931cde50</Group>
            <Group>a7f5895d-5398-44ca-9794-b9637309c5f8</Group>
        </MemberOf>
        <Department>HCL BigFix Rome Lab</Department>
        <OfficeLocation>Rome, 7th floor</OfficeLocation>
        <City>Rome</City>
        <State>Lazio</State>
        <Country>Italy</Country>
    </IDPUser>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/idp/user/{user_id}/computers", "GET", "Returns all computers managed by the specified IdP user." %}
**Request:** URL is all that is required. `{user_id}` is the user identifier as defined by the identity provider.

**Response:** An XML text containing an `IDPComputer` element for each computer managed by the specified IdP user.

Example. On a deployment with computers joined to Active Directory, this call:
```
https://server.bigfix.com:52311/api/idp/user/cn=alice,cn=users,dc=temx,dc=test,dc=com/computers
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>WORKSTATION01</Name>
        <DistinguishedName>cn=WORKSTATION01,cn=computers,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>WORKSTATION01</CommonName>
        <SAMAccountName>WORKSTATION01$</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
        <ManagedBy>cn=alice,cn=users,dc=temx,dc=test,dc=com</ManagedBy>
        <MemberOf>
            <Group>cn=group1,dc=temx,dc=test,dc=com</Group>
        </MemberOf>
    </IDPComputer>
</BESAPI>
```

Example. On a deployment with computers joined to Entra ID, this call:
```
https://server.bigfix.com:52311/api/idp/user/7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e/computers
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>bob-portal</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>b3ed6d2f-086a-4b46-90c2-f86b7abe4532</ID>
        <DirectoryType>EntraID</DirectoryType>
        <ManagedBy>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ManagedBy>
        <MemberOf>
            <Group>64101cd0-2b85-4d1c-856c-1f059eece213</Group>
            <Group>fb9a3ed2-c346-4e7e-9df7-1853fed30b43</Group>
        </MemberOf>
    </IDPComputer>
    <IDPComputer>
        <Name>bob-ubuntu</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>12489374-008b-400f-bceb-a6b2c82c48da</ID>
        <DirectoryType>EntraID</DirectoryType>
        <ManagedBy>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ManagedBy>
        <MemberOf>
            <Group>64101cd0-2b85-4d1c-856c-1f059eece213</Group>
            <Group>fb9a3ed2-c346-4e7e-9df7-1853fed30b43</Group>
        </MemberOf>
    </IDPComputer>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/idp/group/{group_id}", "GET", "Returns the properties of the specified IdP group." %}
**Request:** URL is all that is required. `{group_id}` is the group identifier as defined by the identity provider.

**Response:** An XML text containing a single `IDPGroup` element with the properties of the specified IdP group.

The `IDPGroup` element contains a set of elements representing the properties of an IdP group.
* `DisplayName`, the group's display name or, as a fallback on Active Directory, the group's name.
* `DistinguishedName`, for an Active Directory group, its LDAP Distinguished Name, can be empty.
* `CommonName`, for an Active Directory group, its common name (CN), can be empty.
* `SAMAccountName`, for an Active Directory group, its SAM Account Name, can be empty.
* `ID`, for an Entra ID group, its GUID, can be empty.
* `DirectoryType`, the group's identity provider type.

**Response Schema:** BESAPI.xsd

Example. On a deployment with computers joined to Active Directory, this call:
```
https://server.bigfix.com:52311/api/idp/group/cn=domain%20admins,cn=users,dc=temx,dc=test,dc=com
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPGroup>
        <DisplayName>domain admins</Name>
        <DistinguishedName>cn=domain admins,cn=users,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>domain admins</CommonName>
        <SAMAccountName>Domain Admins</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
    </IDPGroup>
</BESAPI>
```

Example. On a deployment with computers joined to Entra ID, this call:
```
https://server.bigfix.com:52311/api/idp/group/a7f5895d-5398-44ca-9794-b9637309c5f8
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPGroup>
        <DisplayName>HCL Software</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>a7f5895d-5398-44ca-9794-b9637309c5f8</ID>
        <DirectoryType>EntraID</DirectoryType>
    </IDPGroup>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/idp/group/{group_id}/users", "GET", "Returns all users belonging to the specified IdP group." %}
**Request:** URL is all that is required. `{group_id}` is the group identifier as defined by the identity provider.

**Response:** An XML text containing an `IDPUser` element for each user belonging to the specified IdP group.

**Response Schema:** BESAPI.xsd

Example. On a deployment with computers joined to Active Directory, this call:
```
https://server.bigfix.com:52311/api/idp/group/cn=domain%20admins,cn=users,dc=temx,dc=test,dc=com/users
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPUser>
        <DisplayName>alice</Name>
        <DistinguishedName>cn=alice,cn=users,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>alice</CommonName>
        <SAMAccountName>alice</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
        <UserPrincipalName>alice@temx.test.com</UserPrincipalName>
        <MemberOf>
            <Group>cn=administrators,cn=builtin,dc=temx,dc=test,dc=com</Group>
            <Group>cn=domain admins,cn=users,dc=temx,dc=test,dc=com</Group>
            <Group>cn=group1,dc=temx,dc=test,dc=com</Group>
        </MemberOf>
        <Department>HCL</Department>
        <OfficeLocation>Rome</OfficeLocation>
        <City>Pordenone</City>
        <State>Friuli</State>
        <Country>Italy</Country>
    </IDPUser>
</BESAPI>
```

Example. On a deployment with computers joined to Entra ID, this call:
```
https://server.bigfix.com:52311/api/idp/group/a7f5895d-5398-44ca-9794-b9637309c5f8/users
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPUser>
        <DisplayName>Bob Brown</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ID>
        <DirectoryType>EntraID</DirectoryType>
        <UserPrincipalName>bob-entra@idptestentra.onmicrosoft.com</UserPrincipalName>
        <MemberOf>
            <Group>647329b2-f5a3-40be-8bd1-cd0f931cde50</Group>
            <Group>a7f5895d-5398-44ca-9794-b9637309c5f8</Group>
        </MemberOf>
        <Department>HCL BigFix Rome Lab</Department>
        <OfficeLocation>Rome, 7th floor</OfficeLocation>
        <City>Rome</City>
        <State>Italy</State>
    </IDPUser>
    <IDPUser>
        <DisplayName>Carl Carter</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>cd45aae5-eb18-487e-bbb4-350cbe0c15d4</ID>
        <DirectoryType>EntraID</DirectoryType>
        <UserPrincipalName>carl@idptestentra.onmicrosoft.com</UserPrincipalName>
        <MemberOf>
            <Group>647329b2-f5a3-40be-8bd1-cd0f931cde50</Group>
            <Group>a7f5895d-5398-44ca-9794-b9637309c5f8</Group>
        </MemberOf>
        <Department>HCL Rome</Department>
        <OfficeLocation>Roma</OfficeLocation>
        <City>Rome</City>
        <State>Lazio</State>
        <Country>Italy</Country>
    </IDPUser>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/idp/group/{group_id}/computers", "GET", "Returns all computers belonging to the specified IdP group." %}
**Request:** URL is all that is required. `{group_id}` is the group identifier as defined by the identity provider.

**Response:** An XML text containing an `IDPComputer` element for each computer belonging to the specified IdP group.

**Response Schema:** BESAPI.xsd

Example. On a deployment with computers joined to Active Directory, this call:
```
https://server.bigfix.com:52311/api/idp/group/cn=group1,dc=temx,dc=test,dc=com/computers
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>WORKSTATION01</Name>
        <DistinguishedName>cn=WORKSTATION01,cn=computers,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>WORKSTATION01</CommonName>
        <SAMAccountName>WORKSTATION01$</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
        <ManagedBy>cn=alice,cn=users,dc=temx,dc=test,dc=com</ManagedBy>
        <MemberOf>
            <Group>cn=group1,dc=temx,dc=test,dc=com</Group>
        </MemberOf>
    </IDPComputer>
</BESAPI>
```

Example. On a deployment with computers joined to Entra ID, this call:
```
https://server.bigfix.com:52311/api/idp/group/64101cd0-2b85-4d1c-856c-1f059eece213/computers
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>bob-portal</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>b3ed6d2f-086a-4b46-90c2-f86b7abe4532</ID>
        <DirectoryType>EntraID</DirectoryType>
        <ManagedBy>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ManagedBy>
        <MemberOf>
            <Group>64101cd0-2b85-4d1c-856c-1f059eece213</Group>
            <Group>fb9a3ed2-c346-4e7e-9df7-1853fed30b43</Group>
        </MemberOf>
    </IDPComputer>
    <IDPComputer>
        <Name>bob-ubuntu</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>12489374-008b-400f-bceb-a6b2c82c48da</ID>
        <DirectoryType>EntraID</DirectoryType>
        <ManagedBy>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ManagedBy>
        <MemberOf>
            <Group>64101cd0-2b85-4d1c-856c-1f059eece213</Group>
        </MemberOf>
    </IDPComputer>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/idp/group/{group_id}/usercomputers", "GET", "Returns all computers managed by users belonging to the specified IdP group." %}
**Request:** URL is all that is required. `{group_id}` is the group identifier as defined by the identity provider.

**Response:** An XML text containing an `IDPComputer` element for each computer managed by users belonging to the specified IdP group.

**Response Schema:** BESAPI.xsd

Example. On a deployment with computers joined to Active Directory, this call:
```
https://server.bigfix.com:52311/api/idp/group/cn=group1,dc=temx,dc=test,dc=com/usercomputers
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>WORKSTATION01</Name>
        <DistinguishedName>cn=WORKSTATION01,cn=computers,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>WORKSTATION01</CommonName>
        <SAMAccountName>WORKSTATION01$</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
        <ManagedBy>cn=alice,cn=users,dc=temx,dc=test,dc=com</ManagedBy>
        <MemberOf>
            <Group>cn=group1,dc=temx,dc=test,dc=com</Group>
        </MemberOf>
    </IDPComputer>
    <IDPComputer>
        <Name>WORKSTATION02</Name>
        <DistinguishedName>cn=WORKSTATION02,cn=computers,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>WORKSTATION02</CommonName>
        <SAMAccountName>WORKSTATION02$</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
        <ManagedBy>cn=john,cn=users,dc=temx,dc=test,dc=com</ManagedBy>
    </IDPComputer>
</BESAPI>
```

Example. On a deployment with computers joined to Entra ID, this call:
```
https://server.bigfix.com:52311/api/idp/group/a7f5895d-5398-44ca-9794-b9637309c5f8/usercomputers
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>bob-portal</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>b3ed6d2f-086a-4b46-90c2-f86b7abe4532</ID>
        <DirectoryType>EntraID</DirectoryType>
        <ManagedBy>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ManagedBy>
        <MemberOf>
            <Group>64101cd0-2b85-4d1c-856c-1f059eece213</Group>
            <Group>fb9a3ed2-c346-4e7e-9df7-1853fed30b43</Group>
        </MemberOf>
    </IDPComputer>
    <IDPComputer>
        <Name>bob-ubuntu</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>12489374-008b-400f-bceb-a6b2c82c48da</ID>
        <DirectoryType>EntraID</DirectoryType>
        <ManagedBy>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ManagedBy>
        <MemberOf>
            <Group>64101cd0-2b85-4d1c-856c-1f059eece213</Group>
            <Group>fb9a3ed2-c346-4e7e-9df7-1853fed30b43</Group>
        </MemberOf>
    </IDPComputer>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/idp/computer/{computer_id}", "GET", "Returns the properties of the specified computer." %}
**Request:** URL is all that is required. `{computer_id}` is the computer identifier as defined by the identity provider.

**Response:** An XML text containing a single `IDPComputer` element with the properties of the specified computer.

**Response Schema:** BESAPI.xsd

Example. On a deployment with computers joined to Active Directory, this call:
```
https://server.bigfix.com:52311/api/idp/computer/cn=WORKSTATION01,cn=computers,dc=temx,dc=test,dc=com
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>WORKSTATION01</Name>
        <DistinguishedName>cn=WORKSTATION01,cn=computers,dc=temx,dc=test,dc=com</DistinguishedName>
        <CommonName>WORKSTATION01</CommonName>
        <SAMAccountName>WORKSTATION01$</SAMAccountName>
        <ID></ID>
        <DirectoryType>ActiveDirectory</DirectoryType>
        <ManagedBy>cn=alice,cn=users,dc=temx,dc=test,dc=com</ManagedBy>
        <MemberOf>
            <Group>cn=group1,dc=temx,dc=test,dc=com</Group>
        </MemberOf>
    </IDPComputer>
</BESAPI>
```

Example. On a deployment with computers joined to Entra ID, this call:
```
https://server.bigfix.com:52311/api/idp/computer/b3ed6d2f-086a-4b46-90c2-f86b7abe4532
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPComputer>
        <Name>bob-portal</Name>
        <DistinguishedName></DistinguishedName>
        <CommonName></CommonName>
        <SAMAccountName></SAMAccountName>
        <ID>b3ed6d2f-086a-4b46-90c2-f86b7abe4532</ID>
        <DirectoryType>EntraID</DirectoryType>
        <ManagedBy>7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e</ManagedBy>
        <MemberOf>
            <Group>64101cd0-2b85-4d1c-856c-1f059eece213</Group>
            <Group>fb9a3ed2-c346-4e7e-9df7-1853fed30b43</Group>
        </MemberOf>
    </IDPComputer>
</BESAPI>
```
{% endrestapi %}

## Common Request Parameters

The `{user_id}` URL path parameter is a user's identifier as defined by the IdP.
It can be:
* for Active Directory, an LDAP Distinguished Name, e.g. `cn=alice,cn=users,dc=temx,dc=test,dc=com`.
* for Entra ID, a GUID, e.g., `7a4050c6-5a1a-4eab-80e6-6a0ed5730f5e`.

The `{group_id}` URL path parameter is a group's identifier as defined by the IdP.
It can be:
* for Active Directory, an LDAP Distinguished Name, e.g., `cn=domain%20admins,cn=users,dc=temx,dc=test,dc=com`.
* for Entra ID, a GUID, e.g. `a7f5895d-5398-44ca-9794-b9637309c5f8`.

The `{computer_id}` URL path parameter is a computer's identifier as defined by the IdP.
It can be:
* for Active Directory, an LDAP Distinguished Name, e.g. `cn=WORKSTATION01,cn=computers,dc=temx,dc=test,dc=com`.
* for Entra ID, a GUID, e.g. `b3ed6d2f-086a-4b46-90c2-f86b7abe4532`.

## Common Response Elements

`IDPUser` elements returned by these REST APIs have the same format:
* GET "/api/idp/user/{user_id}"
* GET "/api/idp/group/{group_id}/users"

Each `IDPUser` element contains a set of elements representing the properties of a user:
* `DisplayName`, the user's display name or, as a fallback on Active Directory, the user's name.
* `DistinguishedName`, for an Active Directory user, their LDAP distinguished name (DN), can be empty.
* `CommonName`, for an Active Directory user, their common name (CN), can be empty.
* `SAMAccountName`, for an Active Directory user, their Security Account Manager (SAM) account name, can be empty.
* `ID`, for an Entra ID user, their GUID, can be empty.
* `DirectoryType`, the user's identity provider type.
* `UserPrincipalName`, the user principal name (UPN) or the email associated to the user account, can be empty.
* `MemberOf`, contains a list of the directory groups the user belongs to, can be empty.
  * `Group`, the LDAP distinguished name (DN) of an Active Directory group or the GUID of an Entra ID group.
* `Department`, the user's department name, can be empty.
* `OfficeLocation`, the user's office location, can be empty.
* `City`, the user's city, can be empty.
* `State`, the user's state, province, or region of the IdP user, can be empty.
* `Country`, the user's country, can be empty.

In this context, the terms "state", "province", and "region" refer to a subnational administrative division. For example, the state of California in the United States, the province of Ontario in Canada, or the region of Lazio in Italy.

`IDPComputer` elements returned by these REST APIs have the same format:
* GET "/api/idp/user/{user_id}/computers"
* GET "/api/idp/group/{group_id}/computers"
* GET "/api/idp/group/{group_id}/usercomputers"
* GET "/api/idp/computer/{computer_id}"

Each `IDPComputer` element contains a set of elements representing the properties of a computer managed by the user:
* `Name`, the computer's display name or, as a fallback on Active Directory, the computer's NETBIOS name.
* `DistinguishedName`, for a computer joined to Active Directory, its LDAP Distinguished Name (DN), can be empty.
* `CommonName`, for a computer joined to Active Directory, its common name (CN), can be empty.
* `SAMAccountName`, for a computer joined to Active Directory, its Security Account Manager (SAM) account name, can be empty.
* `ID`, for a computer joined to Entra ID, its unique GUID, can be empty.
* `DirectoryType`, the computer's identity provider type.
* `ManagedBy`, the user ID (UID) or GUID of the user assigned to manage the computer.
* `MemberOf`, contains a list of the directory groups the computer belongs to, can be empty.
  * `Group`, the LDAP distinguished name (DN) of an Active Directory group or the GUID of an Entra ID group.

## Values of the DirectoryType element

The possible values of the DirectoryType element are:
* `ActiveDirectory`, if the parent element represents a computer, group, or user of Active Directory
* `EntraID`, if the parent element represents a computer, group, or user of Entra ID
* `Manual`, if the client settings `_BESClient_ManageBy_UserPrincipalName` or `_BESClient_ManageBy_MemberOf` are set.
