---
title: Role
---

These REST APIs, introduced in 11.0.7, allow a BigFix master operator to assign other operators to a BigFix role and to remove them from it. Either operation only requires a single call.

Up to BigFix 11.0.6, to achieve the same effect, two separate calls to a different set of APIs were needed, first a GET and then a PUT.
https://developer.bigfix.com/rest-api/api/operator.html

## POST  /api/role/{role_id}/addoperators
This API adds one or more BigFix operators to the specified role. Only a Master Operator (MO) has the permissions required to update role membership.

**Request:** Specifies in the URL the unique number `{role_id}` of a BigFix role. Contains in its body a JSON text with the `ids` and/or the `names` of the BigFix operator(s). It expresses the intent to add the specified operators to the specified role.

**Response:** Depending on the result of the operation, the API returns the following:
- HTTP 200 OK, if successful
- HTTP 400 Bad Request, if the specified role does not exist
- HTTP 403 Forbidden, if one of the specified operators does not exist

**Response Schema:** none.

The following example shows how to add the BigFix operator named "BFAdmin" with id 2 to the role with id 1.
First, prepare the JSON that will be passed to the REST API:
```json
{
  "operators": {
    "names": [
      "BFAdmin"
    ],
    "ids": [
      2
    ]
  }
}
```

Save the JSON to a file named, for example, `operators.json`.

Then, from the terminal, run following command:
```
curl -X POST --data-binary @operators.json --user {username}:{password} https://bf-explorer:9383/api/role/1/addoperators
```

If the operation ran successfully, the REST API will return a response with a HTTP 200 OK code.

## POST /api/role/{role_id}/removeoperators
This API adds one or more BigFix operators to the specified role. Only a Master Operator (MO) has the permissions required to update role membership.

**Request:** Specifies in the URL the unique number `{role_id}` of a BigFix role. Contains in its body a JSON text with the `ids` and/or the `names` of the BigFix operator(s). It expresses the intent to remove the specified operators from the specified role.

**Response:** Depending on the result of the operation, the API returns the following:
- HTTP 200 OK, if successful
- HTTP 400 Bad Request, if the specified role does not exist
- HTTP 403 Forbidden, if one of the specified operators does not exist

**Response Schema:** none.

The following example shows how to remove the BigFix operator named "BFAdmin" with id 2 from the role with id 1.
First, prepare the JSON that will be passed to the REST API:
```json
{
  "operators": {
    "names": [
      "BFAdmin"
    ],
    "ids": [
      2
    ]
  }
}
```

Save the JSON to a file named, for example, `operators.json`.

Then, from the terminal, run following command:
```
curl -X POST --data-binary @operators.json --user {username}:{password} https://bf-explorer:9383/api/role/1/removeoperators
```

If the operation ran successfully, the REST API will return a response with a HTTP 200 OK code.

### Commonly used elements
In the request URL, the `role_id` is a non-negative integer that is the id of the BigFix role to update.

The format of the body of a request to add BigFix operators to a role (or to remove them from it) is the following.
```json
{
  "operators": {
    "names": [
      "operatorName"
    ],
    "ids": [
      1
    ]
  }
}
```

Where:
- `ids` is a list of non-negative integers that contains the ids of the BigFix operators
- `names` is a list of strings that contains the names of the BigFix operators

You can specify both `ids` and `names` or just one of them.
There is no need for an element in the `ids` list to have a corresponding entry in the `names` list or vice-versa.
