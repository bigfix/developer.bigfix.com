---
title: Fixlet
---

{% restapi "fixlets/{site type}/{site name}", "GET", "Fetch list of Fixlets of a particular site" %}
**Request:** URL is all that is required

**Response:** BESAPI description of contained Fixlet resources.

**Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "fixlets/{site type}/{site name}", "POST", "Create a fixlet in the specified site" %}
**Request:** Complete XML for the object in the body of the request

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "fixlet/{site type}/{site name}/{fixlet id}", "GET", "Returns the details of the specified Fixlet" %}
**Request:** URL is all that is required

**Response:** XML of Fixlet

**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "fixlet/{site type}/{site name}/{fixlet id}", "PUT", "Updates a Fixlet" %}
**Request:** Complete XML for the object in the body of the request

**Request Schema:** BES.xsd

**Response:** Fixlet ID
{% endrestapi %}

{% restapi "fixlet/{site type}/{site name}/{fixlet id}", "POST", "Creates a Fixlet in the specified site" %}
**Request:** Complete XML for the object in the body of the request

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "fixlet/{site type}/{site name}/{fixlet id}", "DELETE", "Delete a Fixlet" %}
The same command applies to a task if you specify the task id in place of fixlet id.

**Request:** URL is all that is required
{% endrestapi %}