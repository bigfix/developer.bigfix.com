---
title: Role
---

{% restapi "/api/roles", "GET", "Fetches a list of all Roles." %}
**Request:** URL is all that is required.

**Response:** XML file listing of Roles.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/roles", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "/api/roles", "POST", "Creates a new role." %}
**Request:** XML for the role.

**Response Schema:** BESAPI.xsd

**Request Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/roles", "DELETE", "Not supported." %}
{% endrestapi %}

{% restapi "role/{role id}", "GET", "Fetches the XML for the specified role." %}
**Request:** URL is all that is required

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "role/{role id}", "PUT", "Updates a role." %}
**Request:** Partial or complete XML for the role.

**Request Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "role/{role id}", "POST", "Replace existing role with supplied XML." %}
**Request:** XML describing the role.

**Request Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "role/{role id}", "DELETE", "Deletes a role." %}
**Request:** URL is all that is required.
{% endrestapi %}