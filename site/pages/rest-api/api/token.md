---
title: Token
---

Up to version 11.0.5, BigFix REST API only supports Basic Authentication. Starting from version 11.0.6, BigFix will also issue tokens which can be used to access REST APIs, BigFix Explorer and the IEM CLI, in addition to Basic Authentication. The token name is shown only to its owner and it has a specific validity period.

This family of REST APIs allow you to create, modify and delete the tokens.

{% restapi "/api/tokens", "GET", "Returns the list of tokens of the currently logged on operator." %}

**Request:** URL is all that is required.

**Response:** A JSON object with a `"Tokens"` field containing a list with the tokens owned by the operator that made the request.
The format of the response is the following.
```
{
    "tokens": [
        {
            "Id": token_id_1,
            "Name": "token_name_1",
            "Expiration": timestamp_ms_1,
            "User": user_id_1
        },
        {
            "Id": token_id_2,
            "Name": "token_name_2",
            "Expiration": timestamp_ms_2,
            "User": user_id_2
        }
    ]
}
```

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/tokens
```

May return this output:
```
{
    "tokens": [
        {
            "Id": 1,
            "Name": "token_for_env1",
            "Expiration": 1772191430000000,
            "User": 1
        },
        {
            "Id": 2,
            "Name": "token_for_env2",
            "Expiration": 1774084440000000,
            "User": 2
        }
    ]
}
```
{% endrestapi %}

{% restapi "/api/token/name/{token_name}", "GET", "Returns the information about the specified token." %}

**Request:** URL is all that is required. `{token_name}` is a string that represents the unique name of the token.

**Response:** A JSON object containing the token information.
The format of the response is the following.
```
{
    "Id": token_id,
    "Name": "token_name",
    "Expiration": timestamp_ms,
    "User": user_id
}
```

**Response Schema:** BES.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/token/name/token_for_env1
```

May return this output:
```
{
    "Id": 1,
    "Name": "token_for_env1",
    "Expiration": 1772191430000000,
    "User": 1
}
```
{% endrestapi %}

{% restapi "api/tokens/user/{user_id}", "GET", "Allows master operators to see the tokens of the other operators." %}

**Request:** URL is all that is required. `{user_id}` is a natural number that uniquely identifies a BigFix operator.

**Response:** A JSON object with a `"Tokens"` field containing a list with the tokens owned by the specified operator.
The format of the response is the following.
```
{
    "Tokens": [
        {
            "Id": token_id,
            "Name": "token_name",
            "Expiration": timestamp_ms,
            "User": user_id
        }
    ]
}
```

**Response Schema:** BES.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/tokens/user/1
```

May return this output:
```
{
    "Tokens": [
        {
            "Id": 1,
            "Name": "token_for_env1",
            "Expiration": 1772191430000000,
            "User": 1
        }
    ]
}
```
{% endrestapi %}

{% restapi "api/token/id/{token_id}", "GET", "Returns the information about the specified token." %}

**Request:** URL is all that is required.

**Response:** A JSON object containing the token information.
The format of the response is the following.
```
{
    "Id": token_id,
    "Name": "token_name",
    "Expiration": timestamp_ms,
    "User": user_id
}
```

**Response Schema:** BES.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/token/id/1
```

May return this output:
```
{
    "Id": 1,
    "Name": "token_for_env1",
    "Expiration": 1772191430000000,
    "User": 1
}
```
{% endrestapi %}

{% restapi "api/token", "POST", "Creates a new token." %}

**Request:** URL is all that is required.
You **must** add the following parameter:
* `name`, containing the private name to assign to that token

You can add the following parameter:
* `duration`, containing the duration of the token, in days. The default is 30 days. Specify 0 for a token that never expires.

**Response:** A JSON object containing the token and related information. **The actual token is only returned by this API call.** Save it to avoid losing it.
The format of the response is the following.
```
{
    "Token": "base64_token_string",
    "Id": token_id,
    "Name": "token_name",
    "Expiration": timestamp_ms,
    "User": user_id
}
```

**Response Schema:** BES.xsd

The following example shows how create a new token named "my_first_token".
From the terminal, run following command:
```
curl -X POST --user {username}:{password} https://server.bigfix.com:52311/api/token?name=my_first_token
```

Which may return this output:
```
{
    "Token": "CcZv3xTcSxkFQBLQ+56RmIeaJPaZyUZ0c746XiCMihcmyBsPlL2B6tJWsxWq3S/hNbFmL7t1/bMzf9Jh+wL5AQ=="
    "Id": 1,
    "Name": "my_first_token",
    "Expiration": 1772191430000000,
    "User": 1
}
```
{% endrestapi %}

{% restapi "api/token/{token_id}", "PUT", "Updates the specified token." %}

**Request:** URL is all that is required.
You can add the following parameters:
* `name`, containing the updated private name to assign to that token
* `duration`, containing the duration of the token, in days. The default is 30 days. Specify 0 for a token that never expires.

**Response:** In case of success, it returns HTTP 200 OK. In case of failure, it returns a standard HTTP error code (e.g. 400 bad request).

**Response Schema:** BES.xsd

The following example shows how edit the token with id `1`, changing its name to "my_edited_token" and its duration to 10 days.
From the terminal, run following command:
```
curl -X PUT --user {username}:{password} https://server.bigfix.com:52311/api/token/edit/1?name=my_edited_token&duration=10
```

Upon successful execution, the command will return a HTTP 200 OK success status response code.
{% endrestapi %}

{% restapi "api/token/{token_id}", "DELETE", "Revokes the specified token." %}

**Request:** URL is all that is required.

**Response:** In case of success, it returns HTTP 200 OK. In case of failure, it returns a standard HTTP error code (e.g. 400 bad request).

**Response Schema:** BES.xsd

The following example shows how delete the token with id `1`.
From the terminal, run following command:
```
curl -X DEL --user {username}:{password} https://server.bigfix.com:52311/api/token/1
```

Upon successful execution, the command will return a HTTP 200 OK success status response code.
{% endrestapi %}

## Common URL placeholders

The following placeholders appear in the URL of most of the above APIs:
- `{token_id}`, a natural number, it uniquely identifies the token

## Common response parameters

The following fields appear in the response of the above APIs:
- `Id`, a natural number, it uniquely identifies the token
- `Name`, a string, it represents the unique name of the token
- `Expiration`, a natural number, it is the token expiration date, expressed as a UNIX timestamp
- `User`, a natural number, it uniquely identifies the BigFix user that owns the token
