---
title: Query
---

{% restapi "/api/clientquery", "POST", "Evaluate a relevance expression and get the result." %}
This runs request is processed through the server to WebReports.
**Request:**  /api/query

**Request Body:**  URL-formatted request
For example: 

```
relevance=names+of+bes+computers

```

**Response:** XML query results.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/clientquery", "GET", "Evaluate a relevance expression and get the result." %}
This runs request is processed through the server to WebReports.
**Request:**  URL with a relevance paramter. 
For example: 

```
/api/query?relevance=names+of+bes+computers.

```

**Response:** XML query results.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

