---
title: Session Relevance
---

This REST API allows you, as BigFix Operator, to evaluate the Session Relevance using the BigFix Explorer, a BigFix Platform component introduced in 11.0.2.
The BigFix Operator will send a JSON to the REST API "/api/relevance" of the BigFix Explorer to evaluate the Session Relevance. 
The BigFix Operator can also specify, in the same JSON, the keys to be used to populate the result of the Session Relevance evaluation.
This API only supports JSON format. XML format is not supported. If you need to use the XML format, you can use the Server API named query.

## POST /api/relevance
This API evaluates a Session Relevance expression and returns the result.
When this method is invoked, BigFix Explorer evaluates the session relevance in the context of the user authenticated for the request, so the output depends on the visibility granted to the user.

**Request:** Contains in its body a JSON text with the Session Relevance query.

The request can contain the following fields:
* relevance, a string representing the Session Relevance to be evaluated.
* keys, an optional string that can be used to rename and restructure the fields of the answer/answers to the query that is/are returned in the response.
* filters, an optional field that contains elements that can be used to filter the Session Relevance results. This field is available starting from BigFix Version 11.0.3.

The syntax used in the `keys` field is a subset of [GraphQL](https://graphql.org/learn/), a query language for APIs. The name of a key can contain only letters, numbers and underscores. A space separates the name of a key from the name of the following one. If you want one or more keys to be children of another, write the name of the parent key, then write a `{`, then the name of the child keys, and finally write a `}`.

**Response:** The result of the Session Relevance query. The response format is JSON.

The response contains the following fields:
* result, represents the result of the submitted Session Relevance.
* count, is an integer representing the number of tuples in the returned list.
* plural, indicates the plurality of the returned expression. It can be true or false.
* type, is a string that represents each object type contained in the expression.
* evaltime_ms, represents the evalutation time, specified in milliseconds, spent to process the request.

The following example shows how submit a Session Relevance query with a specification on how to structure the results in the JSON text that will be returned.
We want to ask the id, name, agent version and agent type of the computers that are part of our BigFix deployment. The `relevance` field of the example shows the query to do that.
The query result will contain multiple answers, one for each computer. Each answer will have 4 fields, one for each property of the corresponding computer.
We want to assign custom names to the fields of the returned answers. We also want the last two columns, which represent the BigFix agent version and type, to be nested under a key named "agent". The `keys` field of the example shows the syntax to state that.

First, prepare the JSON that will be passed to the REST API:

```json
{
    "relevance": "(id of it, name of it, (agent version of it, agent type of it)) of bes computers",
    "keys": "{id computer_name agent {version type}}"
}
```

Save the JSON to a file named, for example, `query.json`.

Then, from the terminal, run following command:
```
curl -X POST --data-binary @query.json --user {username}:{password} https://bf-explorer:9383/api/relevance
```

If the operation ran successfully, the REST API will return a response like this:
```json
{
    "result": [
        {
            "id": 12261993,
            "computer_name": "a-wonderful-computer-name",
            "agent": {
                "version": "11.0.0.123",
                "type": "Native"
            }
        },
        {
            "id": 122623213,
            "computer_name": "another-wonderful-computer-name",
            "agent": {
                "version": "11.0.0.121",
                "type": "Native"
            }
        }
    ],
    "count": 5,
    "plural": true,
    "type": "( integer, string, ( string, string ) )",
    "evaltime_ms": 5.519
}
```

The following is an example of request using the cURL command directly:
```
curl -X POST -u BFAdmin:BFPass01 --data '{"relevance": "(id of it, name of it, (agent version of it, agent type of it)) of bes computers", "keys": "{id computer_name agent {version type}}"}' https://bf-explorer:9383/api/relevance
```

#### Filtering the Session Relevance results
Starting from BigFix Version 11.0.3, you can filter the results by providing a Session Relevance that they must satisfy.
You must define the filter specifications within the request body of the API. There is no other way to interact with the filters.

The filter should be a single condition for a specific BigFix object type. The supported BigFix objects that can be filtered are:
- actions, a `[bes action set](https://developer.bigfix.com/relevance/reference/bes-action-set.html)` object
- computers, a `[bes computer set](https://developer.bigfix.com/relevance/reference/bes-computer-set.html)` object
- computer groups, a `[bes computer group set](https://developer.bigfix.com/relevance/reference/bes-computer-group-set.html)` object
- content, a `[bes fixlet set](https://developer.bigfix.com/relevance/reference/bes-fixlet-set.html)` object whose 'bes fixlet' elements have the property `[type of] (https://developer.bigfix.com/relevance/reference/bes-fixlet.html#type-of-bes-fixlet-string)` returning 'Analysis', 'Baseline', 'ComputerGroup', 'Fixlet', or 'Task'
- sites, a `[bes site set](https://developer.bigfix.com/relevance/reference/bes-site-set.html)` object

The `keys` and `filters` fields are options.
Take into account that you can use one filter object type at a time.
```json
{
    "relevance": "string",
    "keys": "string",
    "filters": {
        "actions": "a Session Relevance string that returns a single object representing a bes action set",
        "computers": "a Session Relevance string that returns a single object representing a bes computer set",
        "computergroups": "a Session Relevance string that returns a single object representing a bes computer group set ",
        "content": "a Session Relevance string that returns a single object representing BigFix content [bes fixlet set, bes baseline set, bes analysis set]",
        "sites": "a Session Relevance string that returns a single object representing a bes site set"
    }
}
```

In this example, we have a Session Relevance query that would return details of all the reported actions of any computers. The filter will make the query return only results relative to Windows computers.
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

In this example, we have a Session Relevance that would return certain details of all bes fixlets objects (of any type). The filter will make the query return only results relative to bes fixlet objects whose name contains "Restart Needed".
```json
{
    "relevance": "(names of it, ids of it, names of elements of applicable computer sets of it, type of it) of bes fixlets",
    "filters": {
        "content": "set of (bes fixlets whose (name of it contains \"Restart Needed\"))"
    }
}
```

Each filter, in terms of its Session Relevance and the associated BigFix object results, is kept in memory as long as the data used to calculate its results is not changed. Each filter is identified by the associated Session Relevance. Reusing a filter means passing a filter with the same Session Relevance.