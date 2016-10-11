---
title: The SOAP Headers
---

{% section %}

Web Reports uses request and response headers in all SOAP methods except for **GetRelevanceResult**. 
Headers are used to send login information to verify that the user associated with the SOAP request has 
the correct permissions to run it. The data that are returned from the SOAP call is filtered by those 
permissions.

Two kinds of headers are used, login or authentication. 
A login header takes a username and a password to authenticate. 
The server replies to the request with a response header that contains a session token. 
In subsequent requests, until the user's session times out, SOAP requests can be authenticated by using 
an authentication header that requires a username and the provided session token.

{% endsection %}

### Request Header

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| RequestHeaderElement      | LoginHeader or AuthenticationHeader | 1 |  Login information to verify that a user has permission to perform this action. |


Request example:
```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Header>
      <h:RequestHeaderElement xsi:type="LoginHeader"
      xmlns:h="http://schemas.example.com/Relevance"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns="http://schemas.example.com/Relevance"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema">
         <username>example</username>
         <password>pswd</password>
      </h:RequestHeaderElement>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
     ...
   </s:Body>
</s:Envelope>
```

### Response Header

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| RequestHeaderElement      | ResponseHeader | 1 |  Contains a session token passed back by the server so that subsequent requests do not need to pass the user's password to the server. |


Response example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header>
      <bf:ResponseHeaderElement
      xmlns:bf="http://schemas.example.com/Relevance"
      xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance">
        <bf:sessionToken>3jPHTrTJSea2o76xiGM4K8fQuSE</bf:sessionToken>
     </bf:ResponseHeaderElement>
   </soapenv:Header>
   <soapenv:Body>
     ...
   </soapenv:Body>
</soapenv:Envelope>
```


Subsequent requests:

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Header>
      <h:RequestHeaderElement xsi:type="AuthenticationHeader"
      xmlns:h="http://schemas.example.com/Relevance"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns="http://schemas.example.com/Relevance"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <username>example</username>
        <sessionToken>3jPHTrTJSea2o76xiGM4K8fQuSE</sessionToken>
      </h:RequestHeaderElement>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
     ...
   </s:Body>
</s:Envelope>
```
