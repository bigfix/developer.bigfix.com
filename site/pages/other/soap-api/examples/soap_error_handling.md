---
title: SOAP error handling
---

Web Reports uses standard SOAP faults for most error handling. This includes
malformed requests, invalid login credentials, and other unexpected errors. It also
includes relevance errors from the **GetRelevanceResult** method, and notrelevance
errors from the **GetStructuredRelevanceResult** method. Relevance errors from
**GetStructuredRelevanceResult** are listed in the **StructuredRelevanceResult** object
returned from the server. For more information, see **GetStructuredRelevanceResult**.

The following demonstrates a request that results in an “invalid user name or
password” error:

Request:

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Header>
      <h:RequestHeaderElement xsi:type="LoginHeader" xmlns:h="http://schemas.example.com/Relevance" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.example.com/Relevance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
         <username>example</username>
         <password>wrong_password</password>
      </h:RequestHeaderElement>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <GetStructuredRelevanceResult xmlns="http://schemas.example.com/Relevance">
         <relevanceExpr>now</relevanceExpr>
      </GetStructuredRelevanceResult>
   </s:Body>
</s:Envelope>
```

Response:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
   <env:Body>
      <env:Fault>
         <faultcode>env:Client</faultcode>
         <faultstring xml:lang="ENU">Invalid username or password.</faultstring>
      </env:Fault>
   </env:Body>
</env:Envelope>
```