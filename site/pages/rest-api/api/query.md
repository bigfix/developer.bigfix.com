---
title: Query
---

{% restapi "/api/query", "POST", "Evaluate a session relevance expression and return the result." %}
This API takes a Session Relevance query, forwards it for evaluation and then returns the result.
The BigFix Server takes the request and forwards to a BigFix Explorer server, if present, or to a Web Reports server, otherwise.
The server it is forwarded is the one with the highest priority setting.

**Request:** Specifies a URL with a relevance parameter inside the request body. Relevance parameters as follows:
* 'relevance' to indicate Session Relevance.
* 'output' to indicate the output type of format. The values allowed are 'xml' and 'json' URL with a relevance parameter.

**Response:** Returns the result of the Session Relevance query.

This example shows how to submit a query asking the id of the computers in the deployment.

First, prepare the URL-formatted request that will be passed to the REST API:
```
relevance=ids+of+bes+computers
```

Then, from the terminal, run following command where the -d option specifies the relevance parameter defined above:
```
curl -X POST -d "relevance=ids+of+bes+computers" --user {username}:{password} https://bf-server:52311/api/query
```

If the operation ran successfully, the REST API will return a response like this:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Query Resource="ids of bes computers">
        <Result>
            <Answer type="integer">538222075</Answer>
            <Answer type="integer">538770876</Answer>
            <Answer type="integer">542712582</Answer>
        </Result>
        <Evaluation>
            <Time>0.302ms</Time>
            <Plurality>Plural</Plurality>
        </Evaluation>
    </Query>
</BESAPI>
```

If you prefer using a JSON file as input, create a file named, for example, `query.json`.
```json
{ "relevance": "ids of bes computers" }
```

Then, from the terminal, run the following command by also specifying the `Content-Type` header:
```
curl -X PUT --data-binary @query.json --user {username}:{password} -H "Content-Type: application/json+relevance" https://bf-server:52311/api/query
```

If the operation ran successfully, the REST API will return a response like this:
```json
{
    "result": [
        538222075,
        538770876,
        542712582
    ],
    "count": 3,
    "plural": true,
    "type": "integer",
    "evaltime_ms": 0.366
}
```

{% endrestapi %}

{% restapi "/api/query?relevance={query}", "GET", "Evaluate a session relevance expression and return the result." %}
This API takes a Session Relevance query, forwards it for evaluation and then returns the result.
The BigFix Server takes the request and forwards to a BigFix Explorer server, if present, or to a Web Reports server, otherwise.
The request is forwarded to the server with the highest priority setting.

**Request:** Specifies a URL with a relevance parameter as follows:
* relevance, contains the Session Relevance query
* output, contains the desired response format. It can be 'xml' or 'json'. If absent, it defaults to 'xml'.

**Response:** Returns the Session Relevance result which was submitted in the 'relevance' field, in the format indicated by the 'output' parameter (XML or JSON).

For example, this call:
```
https://server.bigfix.com:52311/api/query?relevance=names+of+bes+computers
```

May return this XML:
```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Query Resource="names of bes computers">
        <Result>
            <Answer type="string">computerA</Answer>
            <Answer type="string">computerB</Answer>
            <Answer type="string">computerC</Answer>
        </Result>
        <Evaluation>
            <Time>11.636ms</Time>
            <Plurality>Plural</Plurality>
        </Evaluation>
    </Query>
</BESAPI>
```

For example, this call: 
```
https://server.bigfix.com:52311/api/query?relevance=names+of+bes+computers&output=json
```

May return this JSON:
```json
{
    "result": [
        "computerA",
        "computerB",
        "computerC"
    ],
    "count": 3,
    "plural": true,
    "type": "string",
    "evaltime_ms": 1.347
}
```

{% endrestapi %}
