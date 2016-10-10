---
title: GetRelevanceResult
---

{% section %}

**GetRelevanceResult** is a SOAP method that evaluates a relevance expression and
returns the result as a simple array of strings. This is the only method that does
not require request and response headers.

{% endsection %}

{% section %}

### Parameters

| Name        | Type           | Occurs  |  Description  |
| ------------- | ------------- | ----- | ---- |
| relevanceExpr      | string | 1 |  The relevance expression to be evaluated. |
| username | string | 1 | Login name of Web Reports user used to evaluate relevance. |
| password | string | 1 | Password of Web Reports user used to evaluate relevance. |


{% endsection %}

### Return Values

| Name        | Type           | Occurs  |  Description  |
| ------------- | ------------- | ----- | ---- |
| a      | string | 0+ |  If there is only 1 occurrence, it represents the singular result from the expression. If there are 0 occurrences, it represents an empty plural result. If there are 2 or more occurrences, each occurrence represents one element of a plural result. |



Request example:
```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <GetRelevanceResult xmlns="http://schemas.bigfix.com/Relevance">
         <relevanceExpr>now</relevanceExpr>
         <username>bigfix</username>
         <password>bigfix</password>
      </GetRelevanceResult>
   </s:Body>
</s:Envelope>
```


Response example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Body>
      <GetRelevanceResultResponse xmlns="http://schemas.bigfix.com/Relevance">
         <a>Mon, 13 Sep 2010 14:42:55 -0700</a>
      </GetRelevanceResultResponse>
   </soapenv:Body>
</soapenv:Envelope>
```