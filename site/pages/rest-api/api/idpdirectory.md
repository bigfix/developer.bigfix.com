---
title: Identity Provider Directory
---

By Identity Provider Directory (IDPD) we mean the set of information required to connect to an identity provider that stores user credentials used for authentication in BigFix. The IDPD can be:
* Generic LDAP, a general-purpose directory service that stores user information in a standard format.
* Active Directory, Microsoft's proprietary directory service commonly used in Windows environments.
* Microsoft Entra ID, a cloud-based identity and access management (IAM) service offered by Microsoft.

By integrating BigFix with these IDPDs, users can log in to the BigFix Console and Web Reports using their existing credentials stored in the above identity providers.

This REST API allows you to list, retrieve, update or remove the Identity Provider Directories.

{% restapi "idpdirectories", "GET", "Fetches all Identity Provider Directories." %}
**Request:** URL is all that is required.

**Response:** An XML text containing a list of `IDPDirectory` elements, one for each Identity Provider Directory added to the BigFix Server.

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/idpdirectories
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory Resource="https://server.bigfix.com:52311/idpdirectory/55">
        <ID>55</ID>
        <Name>Microsoft Entra ID</Name>
        <IdpType>2</IdpType>
        <TenantID>h3g43h4g-fb3e-4d5c-b203-df710afd029d</TenantID>
        <ClientID>klk24h2h-8677-4a53-95f8-7d3gfhid8d9d</ClientID>
    </IDPDirectory>
    <IDPDirectory Resource="https://server.bigfix.com:52311/api/idpdirectory/59">
        <ID>59</ID>
        <Name>Generic LDAP server</Name>
        <IdpType>0</IdpType>
        <UseSSL>true</UseSSL>
        <BaseDN>dc=bigfix,dc=com</BaseDN>
        <UIDAttribute>uid</UIDAttribute>
        <UserFilter>(objectclass=account)</UserFilter>
        <GroupFilter>(objectclass=posixGroup)</GroupFilter>
        <User>cn=Admin,dc=bigfix,dc=com</User>
        <Servers>
            <Server>
                <Host>10.10.0.175</Host>
                <Port>636</Port>
                <Priority>0</Priority>
            </Server>
        </Servers>
    </IDPDirectory>
</BESAPI>
```
{% endrestapi %}

{% restapi "idpdirectories", "POST", "Adds one or more Identity Provider Directories." %}
**Request:** Contains in its body an XML text with the Identity Provider Directories to add to the BigFix Server.
The XML text is a list of `IDPDirectory` elements, one for each Identity Provider Directory.

**Response:** In case of success, the list of the added Identity Provider Directories is returned.

**Response Schema:** BESAPI.xsd

The following example shows the steps to take to add two new Identity Provider Directories:
* a Microsoft Entra ID named `Microsoft Entra ID`
* a generic LDAP server named `Generic LDAP server`.

First, prepare the XML that will be passed to the REST API:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory>
        <Name>Microsoft Entra ID</Name>
        <IdpType>2</IdpType>
        <TenantID>h3g43h4g-fb3e-4d5c-b203-df710afd029d</TenantID>
        <ClientID>klk24h2h-8677-4a53-95f8-7d3gfhid8d9d</ClientID>
        <ClientSecret>3Hp6Q~HNBO3Z8gAOY_VOXTydsAsfHeeIofUIecbz</ClientSecret>
    </IDPDirectory>
    <IDPDirectory>
        <Name>Generic LDAP server</Name>
        <IdpType>0</IdpType>
        <UseSSL>true</UseSSL>
        <BaseDN>dc=bigfix,dc=com</BaseDN>
        <UIDAttribute>uid</UIDAttribute>
        <UserFilter>(objectclass=account)</UserFilter>
        <GroupFilter>(objectclass=posixGroup)</GroupFilter>
        <User>cn=Admin,dc=bigfix,dc=com</User>
        <Password>mypassword</Password>
        <Servers>
            <Server>
                <Host>10.10.0.175</Host>
                <Port>636</Port>
                <Priority>0</Priority>
            </Server>
        </Servers>
    </IDPDirectory>
</BESAPI>
```

Save the XML to a file named, for example, `idpdirectories.xml`.

Then, from the terminal, run following command:
```
curl -X POST --data-binary @idpdirectories.xml --user {username}:{password} https://server.bigfix.com:52311/api/idpdirectories
```

If the operation ran succesfully, the REST API will return a response like this:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory Resource="https://server.bigfix.com:52311/idpdirectory/55">
        <ID>55</ID>
        <Name>Microsoft Entra ID</Name>
        <IdpType>2</IdpType>
        <TenantID>h3g43h4g-fb3e-4d5c-b203-df710afd029d</TenantID>
        <ClientID>klk24h2h-8677-4a53-95f8-7d3gfhid8d9d</ClientID>
    </IDPDirectory>
    <IDPDirectory Resource="https://server.bigfix.com:52311/api/idpdirectory/59">
        <ID>59</ID>
        <Name>Generic LDAP server</Name>
        <IdpType>0</IdpType>
        <UseSSL>true</UseSSL>
        <BaseDN>dc=bigfix,dc=com</BaseDN>
        <UIDAttribute>uid</UIDAttribute>
        <UserFilter>(objectclass=account)</UserFilter>
        <GroupFilter>(objectclass=posixGroup)</GroupFilter>
        <User>cn=Admin,dc=bigfix,dc=com</User>
        <Servers>
            <Server>
                <Host>10.10.0.175</Host>
                <Port>636</Port>
                <Priority>0</Priority>
            </Server>
        </Servers>
    </IDPDirectory>
</BESAPI>
```
{% endrestapi %}

{% restapi "idpdirectory/{id}", "GET", "Fetches information about the Identity Provider Directory with {id}." %}
**Request:** Specifies in the URL the unique `{id}` of an Identity Provider Directory used by the BigFix Server.

The complete URL for this REST API request can be found in the `Resource` attribute of each `IDPDirectory` element returned by the `/api/idpdirectories` request.

**Response:** An XML text containing a single `IDPDirectory` element with all the information regarding the specified Identity Provider Directory.

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/idpdirectory/55
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory Resource="https://server.bigfix.com:52311/idpdirectory/55">
        <ID>55</ID>
        <Name>Microsoft Entra ID</Name>
        <IdpType>2</IdpType>
        <TenantID>h3g43h4g-fb3e-4d5c-b203-df710afd029d</TenantID>
        <ClientID>klk24h2h-8677-4a53-95f8-7d3gfhid8d9d</ClientID>
    </IDPDirectory>
</BESAPI>
```
{% endrestapi %}

{% restapi "idpdirectory/{id}", "PUT", "Updates the information of the Identity Provider Directory with {id}." %}
**Request:** Specifies in the URL the unique `{id}` of an Identity Provider Directory and contains in its body an XML text with the information to update.

The complete URL for this REST API request can be found in the `Resource` attribute of each `IDPDirectory` node returned by the `/api/idpdirectories` request.

**Response:** In case of success, the XML text containing the updated information of the Identity Provider Directory.

**Response Schema:** BESAPI.xsd

The following example shows which steps to take to update a Microsoft Entra ID Identity Provider Directory named `Microsoft Entra ID` with the new name `Updated Microsoft Entra ID`.

First, prepare the XML that will be passed to the REST API:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory>
        <Name>Updated Microsoft Entra ID</Name>
        <IdpType>2</IdpType>
        <TenantID>h3g43h4g-fb3e-4d5c-b203-df710afd029d</TenantID>
        <ClientID>klk24h2h-8677-4a53-95f8-7d3gfhid8d9d</ClientID>
        <ClientSecret>3Hp6Q~HNBO3Z8gAOY_VOXTydsAsfHeeIofUIecbz</ClientSecret>
    </IDPDirectory>
</BESAPI>
```

Save the XML to a file named, for example, `idpdirectory.xml`.

Then, from the terminal, run following command:
```
curl -X PUT --data-binary @idpdirectory.xml --user {username}:{password} https://server.bigfix.com:52311/api/idpdirectory/55
```

If the operation ran succesfully, the REST API will return a response like this:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory Resource="https://server.bigfix.com:52311/idpdirectory/55">
        <ID>55</ID>
        <Name>Updated Microsoft Entra ID</Name>
        <IdpType>2</IdpType>
        <TenantID>h3g43h4g-fb3e-4d5c-b203-df710afd029d</TenantID>
        <ClientID>klk24h2h-8677-4a53-95f8-7d3gfhid8d9d</ClientID>
    </IDPDirectory>
</BESAPI>
```
{% endrestapi %}

{% restapi "idpdirectory/{id}", "POST", "Updates the information of the Identity Provider Directory with {id}." %}
**Request:** Specifies in the URL the unique `{id}` of an Identity Provider Directory and contains in its body an XML text with the information to update.

The complete URL for this REST API request can be found in the `Resource` attribute of each `IDPDirectory` node returned by the `/api/idpdirectories` request.

**Response:** In case of success, the XML text containing the updated information of the Identity Provider Directory.

**Response Schema:** BESAPI.xsd

The following example shows which steps to take to update an Identity Provider Directory named `Generic LDAP server` with the new name `Updated Generic LDAP server`.

First, prepare the XML that will be passed to the REST API:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory>
        <Name>Updated Generic LDAP server</Name>
        <IdpType>0</IdpType>
        <UseSSL>true</UseSSL>
        <BaseDN>dc=bigfix,dc=com</BaseDN>
        <UIDAttribute>uid</UIDAttribute>
        <UserFilter>(objectclass=account)</UserFilter>
        <GroupFilter>(objectclass=posixGroup)</GroupFilter>
        <User>cn=Admin,dc=bigfix,dc=com</User>
        <Servers>
            <Server>
                <Host>10.10.0.175</Host>
                <Port>636</Port>
                <Priority>0</Priority>
            </Server>
        </Servers>
    </IDPDirectory>
</BESAPI>
```

Save the XML to a file named, for example, `idpdirectory.xml`.

Then, from the terminal, run following command:
```
curl -X POST --data-binary @idpdirectory.xml --user {username}:{password} https://server.bigfix.com:52311/api/idpdirectory/59
```

If the operation ran succesfully, the REST API will return a response like this:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <IDPDirectory Resource="https://server.bigfix.com:52311/api/idpdirectory/59">
        <ID>59</ID>
        <Name>Updated Generic LDAP server</Name>
        <IdpType>0</IdpType>
        <UseSSL>true</UseSSL>
        <BaseDN>dc=bigfix,dc=com</BaseDN>
        <UIDAttribute>uid</UIDAttribute>
        <UserFilter>(objectclass=account)</UserFilter>
        <GroupFilter>(objectclass=posixGroup)</GroupFilter>
        <User>cn=Admin,dc=bigfix,dc=com</User>
        <Servers>
            <Server>
                <Host>10.10.0.175</Host>
                <Port>636</Port>
                <Priority>0</Priority>
            </Server>
        </Servers>
    </IDPDirectory>
</BESAPI>
```
{% endrestapi %}

{% restapi "idpdirectory/{id}", "DELETE", " Deletes Identity Provider Directory." %}
**Request Schema:** This API requires the unique `{id}` of an Identity Provider directory to be passed as part of the URL.

The complete URL for this REST API request can be found in the `Resource` attribute of each `IDPDirectory` node returned by the `/api/idpdirectories` request.

For example, to delete the Identity Provider directory with ID `55`, run the following command:
```
curl -X DEL --user {username}:{password} https://server.bigfix.com:52311/api/idpdirectory/55
```
Upon successful execution, the command will return a HTTP 200 OK success status response code, indicating that the Identity Provider Directory has been deleted.
{% endrestapi %}

### Commonly used elements

Description of the `IDPDirectory` XML element.
`IDPDirectory` contains the following elements:
* `ID` contains the ID of the corresponding Identity Provider Directory.
* `Name` contains the Name of the corresponding Identity Provider Directory.
* `IdpType` contains the type of the corresponding Identity Provider Directory. The `IdpType` value is a numeric value that identifies the type of identity provider. The possible values are:
    * 0 Generic LDAP servers
    * 1 Active Directory LDAP servers
    * 2 Microsoft Entra ID

The other XML elements differ depending on the value of `IdpType`.
If `IdpType` is 0 or 1, the following elements are present:
* `UseSSL` is a boolean value (either true or false) that indicates whether to use the SSL protocol when contacting the corresponding LDAP server.
* `BaseDN` contains the base distinguished name of the corresponding LDAP server.
* `UIDAttribute` contains the attribute to consider as uid in the corresponding LDAP server.
* `UserFilter` contains the filter to map the list of the users of the corresponding LDAP server.
* `GroupFilter` contains the filter to map the list of the groups of the corresponding LDAP server.
* `User` contains the LDAP username of the corresponding LDAP directory to connect using credentials.
* `Servers` contains the list of `Server` elements associated to the LDAP server.
 
If `IdpType` is 1, the following element is also present:
* `IsGlobalCatalog` is a boolean value (either true or false) that indicates whether the global catalog feature is enabled.
 
For each `Server` element:
* `Host` contains the host name, IP Address or fully qualified domain name of the server.
* `Port` contains the Port of the server.
* `Priority` contains the priority assigned to the server.
 
If `IdpType` is 2, the following elements are present for Microsoft Entra ID:
* `TenantID` contains the tenant ID of the corresponding Identity Provider Directory. It is a unique identifier for an Microsoft Entra ID tenant. It is used to identify the tenant when communicating with Microsoft services.
* `ClientID` contains the client ID of the corresponding Identity Provider Directory. It is a unique identifier for an application that has been registered with Microsoft Entra ID. It is used to identify the application when communicating with Microsoft Entra ID.

### Privileges required to use these REST APIs

These REST APIs can only be used if you are logged on as Master Operator (MO).

