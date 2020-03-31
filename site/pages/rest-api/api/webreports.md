---
title: Web Reports
---

{% restapi "/api/webreports", "GET", "Fetches a list of Web Reports servers." %}
**Request:** URL is all that is required.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/webreports/details", "GET", "Fetches details of the Web Reports servers in terms of ID, priority and server URL." %}
**Request:** URL is all that is required

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/webreports/{id}", "PUT", "Updates the priority of a Web Reports server based on its unique ID​" %}
**Request:** BES API XML.

This is a sample XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <WebReportsPriority>
        <Priority>15</Priority>
    </WebReportsPriority>
</BESAPI>
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

The preferred Web Reports server is the one with the highest value set for `Priority`.