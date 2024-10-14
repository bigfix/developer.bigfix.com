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
curl -X POST --data-binary @query.json --user {username}:{password} -H "Content-Type: application/json+relevance" https://bf-server:52311/api/query
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

## Request Headers
If you want to:
- forward the evaluation request only towards the BigFix Explorer instances
- leverage both the BigFix Explorer API `/api/relevance` optional parameters `keys` and `filters` described in [Session Relevance](https://developer.bigfix.com/other/explorer-api/session_relevance.html)
then, you must add this request header `Content-Type: application/json+relevance` to the request body of the POST `/api/query`. Passing this header is needed for leveraging both `keys` and `filters` optional parameters of the BigFix Explorer API `/api/relevance`.

Request example:
This example shows how to submit a query with `Content-Type: application/json+relevance` header leveraging also the `keys` and `filters` optional parameters.

Create a JSON file named, for example, query.json:
```json
{
    "relevance":"(((id of it, name of it) of elements of it) of reported action set of it, name of it) of bes computers",
    "keys": "{ reported_action {id name} computer_name }",
    "filters": {
        "computers": "set of (bes computers whose (operating system of it contains \"Win\"))"
    }
}
```
where: 
- 'reported_action' is the label we assign to the pair of properties `id` and `name` of the `elements` of the `reported action set`.
- 'computer_name' is the label we assign to the `name` property of the `bes computers`.

Then, from the terminal, run the following command:
```
curl -X POST --data-binary @query.json --user {username}:{password} -H "Content-Type: application/json+relevance" https://bf-server:52311/api/query
```

## Response Headers
In the response of this API, you will find the following headers. They provide additional information about the BigFix Explorer or the Web Reports server that evaluated the Session Relevance query:

- `x-bes-relevance-engine-id` represents the id of the server that evaluated the query. Its value can be:
  - an integer, the id of a Web Reports server that evaluated the query. It is the same parameter {id} used by the `/api/webreports` REST API.
  - a string, the hostname of the BigFix Explorer server that evaluated the query. It is the same parameter {name} used by the `/api/explorer` REST API.
- `x-bes-relevance-engine-type` represents the type of server that evaluated the session relevance. Its value can be either `BigFix Explorer` or `BigFix Web Reports Server`.

For example, this request:
```
curl -i -k -X GET -u {username}:{password} 'https://localhost:52311/api/query?relevance=ids+of+bes+computers'
```

Will return a response that starts like this:
```
HTTP/1.1 200 OK
Content-Type: application/xml
...
x-bes-relevance-engine-id: explorer
x-bes-relevance-engine-type: BigFix Explorer
```

The response body will be like this:
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
            <Time>0.22ms</Time>
            <Plurality>Plural</Plurality>
        </Evaluation>
    </Query>
</BESAPI>
```
