---
title: Query
---

{% restapi "/api/query", "POST", "Evaluate a relevance expression and get the result." %}
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

{% restapi "/api/query", "GET", "Evaluate a relevance expression and get the result." %}
This runs request is processed through the server to WebReports.

**Request:**  URL with a relevance parameter. 

For example to get XML query results: 

```
/api/query?relevance=names+of+bes+computers
```

For example to get JSON query results: 

```
/api/query?relevance=names+of+bes+computers&output=json
```

**Response:** XML or JSON query results.

**Response Schema:** BESAPI.xsd
{% endrestapi %}
