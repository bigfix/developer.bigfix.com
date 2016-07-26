---
title: Import
---

{% restapi "import/{site type}/{site name}", "GET", "Not Supported" %}
{% endrestapi %}

{% restapi "import/{site type}/{site name}", "PUT", "Not Supported" %}
{% endrestapi %}

{% restapi "import/{site type}/{site name}", "POST", "Import all provided objects in XML document." %}
**Note:** This will only import items defined in the BES.XSD.

**Request:** Complete XML for the objects in the body of the request.

**Request Schema:** BES.xsd

**Response:** Response BESAPI XML listing the created objects.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "import/{site type}/{site name}", "DELETE", "Not Supported" %}
{% endrestapi %}


