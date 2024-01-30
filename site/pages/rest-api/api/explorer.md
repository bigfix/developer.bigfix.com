---
title: Explorer
---

The BigFix Explorer is a BigFix Platform component designed to query database data through session relevance. BigFix Explorer registers to a BigFix Server and offers near real-time data about the BigFix environment to BigFix Operators.

This family of REST APIs lets you interact with the BigFix Explorer servers to retrieve data and set the priority of each server.

{% restapi "/api/explorers", "GET", "Fetches a list of BigFix Explorer servers." %}
**Request:** URL is all that is required.

**Response:** An XML containing the list of all the BigFix Explorer servers connected to the BigFix Server, each represented by an `Explorer` element.
Each `Explorer` element has a `Resource` attribute and a `URL` child element.
The `Resource` attribute contains the REST API link to retrieve the details of the corresponding BigFix Explorer server (see `/api/explorer/{name}`).
The `URL` element contains the URL of the corresponding server.

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/explorers
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Explorer Resource="https://server.bigfix.com:52311/api/explorer/ddefefbe1a8b">
        <URL>https://explorer1.bigfix.com</URL>
    </Explorer>
    <Explorer Resource="https://server.bigfix.com:52311/api/explorer/1a8b4decafbd">
        <URL>https://explorer2.bigfix.com</URL>
    </Explorer>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/explorer/{name}", "GET", "Retrieves details about the Explorer server {name}." %}
**Request:** This API requires the unique {name} of a BigFix Explorer to be passed as part of the URL.
The complete URL for this REST API request can be found in the `Resource` attribute of each `Explorer` node returned by the `/api/explorers` request.

**Response:** An XML containing a set of data regarding the specified Explorer server (URL, Name and Priority).

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/explorer/ddefefbe1a8b
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ExplorerDetails>
        <Explorer>
            <URL>https://explorer1.bigfix.com</URL>
            <Name>ddefefbe1a8b</Name>
            <Priority>77</Priority>
        </Explorer>
    </ExplorerDetails>
</BESAPI>
```
{% endrestapi %}

{% restapi "/api/explorer/{name}", "PUT", "​Updates the priority of the BigFix Explorer server {name}." %}
**Request:** This API requires the unique {name} of a BigFix Explorer to be passed as part of the URL and an XML text describing the priority to assign to that server.
The preferred BigFix Explorer server is the one with the highest priority value.

**Response:** In case of success, `ok` is returned.

**Response Schema:** BESAPI.xsd

The following example shows which steps to take to change the priority of the Explorer server named `ddefefbe1a8b` to `15`.

First, prepare the XML that will be passed to the REST API:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ExplorerPriority>
        <Priority>15</Priority>
    </ExplorerPriority >
</BESAPI>
```

Save the XML to a file named, for example, `priority.xml`.

Then, from the terminal, run following command:
```
curl -X PUT --data-binary @priority.xml --user {username}:{password} https://server.bigfix.com:52311/api/explorer/ddefefbe1a8b
```

If the operation ran succesfully, the REST API will return this response:
```
ok
```
{% endrestapi %}
