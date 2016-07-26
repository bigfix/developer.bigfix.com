---
title: Property
---

{% restapi "properties*", "GET", "Fetches a list of all properties." %}
**Request:** URL is all that is required

**Response:** XML file containing all properties.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "properties", "POST", "Creates a new property." %}
**Request:** BES XML file for the property/properties.

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "property/{id}", "GET", "Fetches detailed information about a specific property." %}
**Request:** URL is all that is required

**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "property/{id}", "PUT", "Updates the specified property." %}
**Request:** Complete XML for the property.

**Request Schema:** BES.xsd

**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "property/{id}", "POST", "Updates the specified property." %}
**Request:** Complete XML for property..

**Request Schema:** BES.xsd

**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "property/{id}", "DELETE", "Deletes the specified property." %}

**Request:** URL is all that is required
{% endrestapi %}

