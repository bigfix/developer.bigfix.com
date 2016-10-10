---
title: DeleteSharedVariable
---

{% section %}

**DeleteSharedVariable** is a Web Reports SOAP method that deletes a variable from
the dashboard datastore of one or more databases being aggregated by Web
Reports. Note that this method requires request and response headers to
authenticate.

{% endsection %}

{% section %}

### Parameters

| Name        | Type           | Occurs  |  Description  |
| ------------- | ------------- | ----- | ---- |
| dashboardVariableIdentifier      | DashboardVariableIdentifier | 1 |  A dashboard ID, variable name, and optional database ID that identify the dashboard variable to be deleted. |

{% endsection %}


### Parameters

| Name        | Type           | Occurs  |  Description  |
| ------------- | ------------- | ----- | ---- |
| success      | boolean | 1 |  True if variable was successfully deleted, otherwise false. |


Request example:
```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Header>
      <h:RequestHeaderElement xsi:type="LoginHeader" xmlns:h="http://schemas.bigfix.com/Relevance" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.bigfix.com/Relevance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
         <username>bigfix</username>
         <password>bigfix</password>
      </h:RequestHeaderElement>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <DeleteSharedVariable xmlns="http://schemas.bigfix.com/Relevance">
         <dashboardVariableIdentifier>
            <dashboardID>testID</dashboardID>
            <variableName>testVariable</variableName>
            <databaseID>2147485678</databaseID>
         </dashboardVariableIdentifier>
      </DeleteSharedVariable>
   </s:Body>
</s:Envelope>
```


Response example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header>
      <bf:ResponseHeaderElement xmlns:bf="http://schemas.bigfix.com/Relevance" xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance">
         <bf:sessionToken>QVExtc5suqwQUfBcdw9+Ozs3Aio</bf:sessionToken>
      </bf:ResponseHeaderElement>
   </soapenv:Header>
   <soapenv:Body>
      <DeleteSharedVariableResponse xmlns="http://schemas.bigfix.com/Relevance">
         <success>true</success>
      </DeleteSharedVariableResponse>
   </soapenv:Body>
</soapenv:Envelope>
```