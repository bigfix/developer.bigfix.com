---
title: Web Reports
---

{% restapi "/api/webreports", "GET", "Fetches a list of Web Reports servers." %}
**Request:** URL is all that is required.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/webreports/details", "GET", "Fetches details of the Web Reports servers." %}
**Request:** URL is all that is required

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/webreports/{id}", "PUT", "Updates the priority of a Web Reports server based on its unique ID​" %}
**Request:** BES API XML.

**Response:** Updated ...

**Response Schema:** BESAPI.xsd
{% endrestapi %}