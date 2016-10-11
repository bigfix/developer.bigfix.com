---
title: GetStructuredRelevanceResult
---

{% section %}

**GetStructuredRelevanceResult** is a SOAP method that evaluates a relevance
expression and returns the result as a complex (structured) object. This object gives
access to information about the type of the result, evaluation time, errors, along
with a strongly typed list of results. Note that this method requires request and
response headers.

{% endsection %}

### Parameters

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| relevanceExpr      | string | 1 |  The relevance expression to be evaluated. |


### Return Values

| Name        | Type           | Occurs  |  Description  |
| ------------- | :-------------: | :-----: | ---- |
| StructuredRelevanceResult      | StructuredRelevanceResult | 1 |  An object containing information about the result of the relevance query, along with a list of results. |


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
      <GetStructuredRelevanceResult xmlns="http://schemas.bigfix.com/Relevance">
         <relevanceExpr>ids of bes computers</relevanceExpr>
      </GetStructuredRelevanceResult>
   </s:Body>
</s:Envelope>
```


Example response:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header>
     <bf:ResponseHeaderElement xmlns:bf="http://schemas.bigfix.com/Relevance" xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance">
        <bf:sessionToken>3jPHTrTJSea2o76xiGM4K8fQuSE</bf:sessionToken>
     </bf:ResponseHeaderElement>
   </soapenv:Header>
   <soapenv:Body>
     <GetStructuredRelevanceResultResponse xmlns="http://schemas.bigfix.com/Relevance">
        <StructuredRelevanceResult>
           <results>
              <Integer>10697214</Integer>
              <Integer>14519782</Integer>
           </results>
           <plural>true</plural>
           <type>integer</type>
           <evaltime>24</evaltime>
        </StructuredRelevanceResult>
     </GetStructuredRelevanceResultResponse>
   </soapenv:Body>
</soapenv:Envelope>
```
