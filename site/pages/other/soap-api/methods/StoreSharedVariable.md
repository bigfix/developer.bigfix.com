---
title: StoreSharedVariable
---

{% section %}

**StoreSharedVariable** is a SOAP method that allows a Web Reports administrator to insert a variable into the dashboard
datastore of one or more databases being aggregated by Web Reports. You can save
data into the database by using a script function, and retrieve that data with a
session inspector. Each dashboard has its own name space, so it can use common
names (such as settings) without causing name collisions with another dashboard.
In addition, variables can be flagged as private, in which case they are visible only
to a particular user. So a private settings variable stores the settings for a particular
dashboard for a particular user. A shared settings variable stores the settings for a
particular dashboard and is shared by all users of that dashboard.

If dashboards must share data with each other, they can. The dashboard ID can be
specified in both the script function for writing variable data and in the session
inspectors used to access that data, although typically it is expected that the
current dashboard inspector is used to supply that ID. Note that this method
requires request and response headers to authenticate.

{% endsection %}

### Parameters

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| dashboardVariableIdentifier      | DashboardVariableIdentifier | 1 |  A dashboard ID, variable name, and optional database ID that identify the dashboard variable to be inserted. |
| variableValue | string | 1 | The value to insert for the variable. |


### Return Values

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| success      | boolean | 1 |  True if variable was successfully inserted, otherwise false. |


Request example:
```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Header>
      <h:RequestHeaderElement xsi:type="LoginHeader"
      xmlns:h="http://schemas.bigfix.com/Relevance"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns="http://schemas.bigfix.com/Relevance"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema">
         <username>bigfix</username>
         <password>bigfix</password>
     </h:RequestHeaderElement>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <StoreSharedVariable xmlns="http://schemas.bigfix.com/Relevance">
         <dashboardVariableIdentifier>
            <dashboardID>testID</dashboardID>
            <variableName>testVariable</variableName>
         </dashboardVariableIdentifier>
         <variableValue>testValue</variableValue>
      </StoreSharedVariable>
   </s:Body>
</s:Envelope>
```


Response example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header>
      <bf:ResponseHeaderElement xmlns:bf="http://schemas.bigfix.com/Relevance" xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance">
         <bf:sessionToken>sPu1faAdFGLzqummbcy5ScTYMEE</bf:sessionToken>
      </bf:ResponseHeaderElement>
   </soapenv:Header>
   <soapenv:Body>
      <StoreSharedVariableResponse xmlns="http://schemas.bigfix.com/Relevance">
         <success>true</success>
      </StoreSharedVariableResponse>
   </soapenv:Body>
</soapenv:Envelope>
```
