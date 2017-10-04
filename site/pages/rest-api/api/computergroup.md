---
title: Computer Group
---
**Note:** For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

{% restapi "computergroups/{site type}/{site name}", "GET", "Fetches the list of computer groups in the specified site." %}
**Request:** URL is all that is required.

**Response:** List of groups.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computergroups/{site type}/{site name}", "POST", "Creates a computer group in the specified site as described in the posted XML document." %}
**Request:** Complete XML for the computer groups in the body of the request.

**Request Schema:** BES.xsd

**Response:** Response BESAPI XML listing the created objects.
{% endrestapi %}


{% restapi "computergroup/{site type}/{site name}/{id}", "GET", "Fetches the BES XSD representation of the specified computer group." %}
**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}/{id}", "PUT", "Updates the specified computer group." %}
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}", "POST", "Create a computer group in the specified site." %}
**Request:** XML file describing the computer group.

**Request Schema:** BES.xsd

**Response:** New BESAPI XML for the computer group.

**Response Schema:** BESAPI.xsd

**Note:** For backward compatibility, this action still accepts an id but ignore it even if referencing a non-existing object.
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}/{id}", "DELETE", "Deletes the indicated computer group." %}
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}/{id}/computers", "GET", "Fetches a list of computer relevant to this computer group. This essentially gives you the computers that are members of this group." %}
**Response:** List of computer resources that are relevant. 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

