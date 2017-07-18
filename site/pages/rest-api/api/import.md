---
title: Import
---
**Note:** For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

{% restapi "import/{site type}/{site name}", "POST", "Import all provided objects in XML document." %}
**Note:** This will only import items defined in the BES.XSD.

**Request:** Complete XML for the objects in the body of the request.

**Request Schema:** BES.xsd

**Response:** Response BESAPI XML listing the created objects.

**Response Schema:** BESAPI.xsd
{% endrestapi %}


