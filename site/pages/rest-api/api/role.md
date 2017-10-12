---
title: Role
---

{% restapi "/api/roles", "GET", "Fetches a list of all Roles." %}
**Request:** URL is all that is required.

**Response:** XML file listing of Roles.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/roles", "POST", "Creates a new role." %}
**Request:** XML for the role.

**Response Schema:** BESAPI.xsd

**Request Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "role/{role id}", "GET", "Fetches the XML for the specified role." %}
**Request:** URL is all that is required

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "role/{role id}", "PUT", "Updates a role." %}
**Request:** Partial or complete XML for the role.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
   <Role Resource="https://localhost:52311/api/role/63">
      <Name>rhelroleduplicate</Name>
      <ID>63</ID>
      <MasterOperator>0</MasterOperator>
      <CustomContent>1</CustomContent>
      <ShowOtherActions>1</ShowOtherActions>
	  <StopOtherActions>0</StopOtherActions>
      <CanCreateActions>1</CanCreateActions>
      <PostActionBehaviorPrivilege>AllowRestartAndShutdown</PostActionBehaviorPrivilege>
      <ActionScriptCommandsPrivilege>AllowRestartAndShutdown</ActionScriptCommandsPrivilege>
      <CanSendMultipleRefresh>1</CanSendMultipleRefresh>
      <CanLock>1</CanLock>
      <UnmanagedAssetPrivilege>ShowNone</UnmanagedAssetPrivilege>
      <InterfaceLogins>
          <Console>true</Console>
          <WebUI>true</WebUI>
          <API>true</API>
      </InterfaceLogins>
   </Role>
</BESAPI>
```

**Request Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "role/{role id}", "POST", "Replace existing role with supplied XML." %}
**Request:** XML describing the role.

**Request Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "role/{role id}", "DELETE", "Deletes a role." %}
**Request:** URL is all that is required.
{% endrestapi %}

In a BigFix Distributed Server Architecture (DSA) environment, where multiple servers are installed, you can perform actions related to roles only on primary servers. When on a secondary server, you cannot create, modify, or delete roles. Any attempt to perform these actions is prevented and you get the following error message: 

"This operation requires a role change that can be performed only on the main server."
