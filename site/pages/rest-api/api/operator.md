---
title: Operator
---
The following information applies also to LDAP operators.


{% restapi "operators", "GET", "Fetches all operators." %}
**Request:** URL is all that is required. You can reduce the amount of information returned in the response using the ```?fields=``` parameter, as described in **Filtering Response Fields**.

**Response:** XML list of operators.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operators", "POST", "Creates an operator." %}
**Request:** Operator XML file.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

**Note:**
The following REST APIs use operator name.
If the deployment option, "enableRESTAPIOperatorID" is enabled, all the REST APIs that use the operator name are disabled and replaced with the equivalent REST APIs that use the operator id, which means enabling any REST API that uses operator ID renders all the REST APIs that use operator name unusable.

{% restapi "operator/{operator name}", "GET", "Fetches detailed information about an operator." %}
**Request:** URL is all that is required. You can reduce the amount of information returned in the response using the ```?fields=``` parameter, as described in **Filtering Response Fields**.

**Response:** XML for operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

**Note:**
The operator name to use for retrieving operator information (especially when the name contains special characters) must be the same as that returned by the get/operators API. 
The field ```PostActionBehaviorPrivilege``` in the XML response is always referred at the "Explicit Permissions" value.

{% restapi "operator/{operator name}", "PUT", "Updates an operator." %}
**Request:** Complete or partial XML for Operator.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
	<Operator Resource="https://w2k12x64backup:52311/api/operator/nmo3">
		<Name>nmo3</Name>
		<MasterOperator>false</MasterOperator>
		<CustomContent>true</CustomContent>
		<ShowOtherActions>true</ShowOtherActions>
		<StopOtherActions>false</StopOtherActions>
		<CanCreateActions>true</CanCreateActions>
		<PostActionBehaviorPrivilege>AllowRestartAndShutdown</PostActionBehaviorPrivilege>
		<ActionScriptCommandsPrivilege>AllowRestartAndShutdown</ActionScriptCommandsPrivilege>
		<CanLock>true</CanLock>
		<CanSendMultipleRefresh>true</CanSendMultipleRefresh>
		<CanSubmitQueries>false</CanSubmitQueries>
		<LoginPermission>Unrestricted</LoginPermission>
		<UnmanagedAssetPrivilege>ShowAll</UnmanagedAssetPrivilege>
		<InterfaceLogins>
			<Console>true</Console>
			<WebUI>true</WebUI>
			<API>true</API>
		</InterfaceLogins>
		<ComputerAssignments></ComputerAssignments>
	</Operator>
</BESAPI>
```

**Request Schema:** BESAPI.xsd

**Response:** XML for Operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator name}", "POST", "Updates an operator." %}
**Request:** Complete or partial XML for Operator..

**Request Schema:** BESAPI.xsd

**Response:** XML for Operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator name}", "DELETE", "Deletes an operator." %}

**Request:** URL is all that is required
{% endrestapi %}

{% restapi "operator/{operator name}/roles", "GET", "Shows a list of roles the operator is a member of." %}
**Request:** URL is all that is required

**Response:** XML listing roles.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

**Note:**
The following APIs use operator ID. Before using any of these APIs, you must enable the deployment option, "enableRESTAPIOperatorID". The enableRESTAPIOperatorID option disables all the REST APIs that use the operator name and replaces them with the equivalent REST APIs that use the operator id, which means enabling any REST APIs that use operator ID renders the REST APIs that use operator name unusable.


{% restapi "operator/{operator ID}", "GET", "Fetches detailed information about a specific operator." %}
**Request:** URL is all that is required. 

**Response:** XML list of operators.

**Response Schema:** BESAPI.xsd

{% endrestapi %}

{% restapi "operator/{operator ID}", "PUT", "Updates an operator." %}
**Request:** Complete or partial XML for Operator.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
	<Operator Resource="https://w2k12x64backup:52311/api/operator/nmo3">
		<Name>nmo3</Name>
		<MasterOperator>false</MasterOperator>
		<CustomContent>true</CustomContent>
		<ShowOtherActions>true</ShowOtherActions>
		<StopOtherActions>false</StopOtherActions>
		<CanCreateActions>true</CanCreateActions>
		<PostActionBehaviorPrivilege>AllowRestartAndShutdown</PostActionBehaviorPrivilege>
		<ActionScriptCommandsPrivilege>AllowRestartAndShutdown</ActionScriptCommandsPrivilege>
		<CanLock>true</CanLock>
		<CanSendMultipleRefresh>true</CanSendMultipleRefresh>
		<CanSubmitQueries>false</CanSubmitQueries>
		<LoginPermission>Unrestricted</LoginPermission>
		<UnmanagedAssetPrivilege>ShowAll</UnmanagedAssetPrivilege>
		<InterfaceLogins>
			<Console>true</Console>
			<WebUI>true</WebUI>
			<API>true</API>
		</InterfaceLogins>
		<ComputerAssignments></ComputerAssignments>
	</Operator>
</BESAPI>
```

**Request Schema:** BESAPI.xsd

**Response:** XML for Operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator ID}", "POST", "Updates an operator." %}
**Request:** Complete or partial XML for Operator.

**Request Schema:** BESAPI.xsd

**Response:** XML for Operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator ID}", "DELETE", "Deletes an operator." %}

**Request:** URL is all that is required
{% endrestapi %}


#### Filtering Response Fields
You can use the ```?fields=``` parameter to limit the fields returned for a given resource when using the API resources ```/api/operators``` and ```/api/operator/{operator name}```.
The value following the ```?fields=``` parameter is the filter. Because the XML is case sensitive, ensure that you specify the correct case to avoid errors. 

Use these characters to define the filter:
- ```,``` to separate elements, children, and attribute pairs
- ```(...)``` to denote children within a field
- ```&```as pairing marker for attributes
- ```<...>``` to denote attributes
- ```=``` to mark LHS and RHS of attributes

**Note:** These are reserved characters. By default, they are not allowed in the name of the filter.

These are some example of filtering results using ```?fields=```:

```xml
/api/operators?fields=Name,MasterOperator,InterfaceLogins(WebUI),InterfaceLogins(Applications)
/api/operator/mo1?fields=LastLoginTime,CanSubmitQueries,InterfaceLogins(API,Console)
/api/operator/nmo1?fields=ShowOtherActions,StopOtherActions,CanCreateActions,LoginPermission,Name
```
