---
title: Role
---

{% restapi "/api/roles", "GET", "Fetches a list of all Roles." %}
**Request:** URL is all that is required.

**Response:** XML file listing of Roles.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/roles", "POST", "Creates a new role." %}
**Request:** XML for the role.

**Response Schema:** BESAPI.xsd

**Request Schema:** BESAPI.xsd
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

In a BigFix Distributed Server Architecture (DSA) environment, where multiple servers are installed, you can perform actions related to roles only on primary servers. When on a secondary server, you cannot create, modify, or delete roles. Any attempt to perform these actions is prevented and you get the following error message: 

This operation requires a role change that can be performed only on the main server.
{% endrestapi %}
