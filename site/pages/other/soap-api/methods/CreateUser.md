---
title: CreateUser
---

{% section %}

**CreateUser** is a Web Reports SOAP method that allows a Web Reports
administrator to programmatically create new Web Reports users. Note that this
method requires request and response headers to authenticate.

{% endsection %}

### Parameters

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| user      | UserAccount | 1 |  The new Web Reports user account to be created. |


### Return Values

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| success      | boolean | 1 |  True if the user was successfully created, otherwise false. |


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
      <CreateUser xmlns="http://schemas.bigfix.com/Relevance">
         <user>
            <logonName>new_user</logonName>
            <fullName>Mr. New User</fullName>
            <password>new_password</password>
            <role>Normal</role>
         </user>
      </CreateUser>
   </s:Body>
</s:Envelope>
```


Response example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header>
      <bf:ResponseHeaderElement xmlns:bf="http://schemas.bigfix.com/Relevance" xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance">
         <bf:sessionToken>uWGgqjb91IyheW7x+EPGMWERZiU</bf:sessionToken>
      </bf:ResponseHeaderElement>
   </soapenv:Header>
   <soapenv:Body>
      <CreateUserResponse xmlns="http://schemas.bigfix.com/Relevance">
         <success>true</success>
      </CreateUserResponse>
   </soapenv:Body>
</soapenv:Envelope>
```
