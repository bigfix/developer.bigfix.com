---
title: Operator
---
**Note:** The following information applies also to LDAP operators.

{% restapi "operators*", "GET", "Fetches all operators." %}
**Request:** URL is all that is required

**Response:** XML list of operators.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operators", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "operators", "POST", "Creates an operator." %}
**Request:** Operator XML file.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operators", "DELETE", "Not supported." %}
{% endrestapi %}

{% restapi "operator/{operator id}", "GET", "Fetches detailed information about an operator." %}
**Request:** URL is all that is required

**Response:** XML for operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator id}", "PUT", "Updates an operator." %}
**Request:** Complete or partial XML for Operator..

**Request Schema:** BESAPI.xsd

**Response:** XML for Operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator id}", "POST", "Updates an operator." %}
**Request:** Complete or partial XML for Operator..

**Request Schema:** BESAPI.xsd

**Response:** XML for Operator.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator id}", "DELETE", "Deletes an operator." %}

**Request:** URL is all that is required
{% endrestapi %}

{% restapi "operator/{operator id}/roles", "GET", "Shows a list of roles the operator is a member of." %}
**Request:** URL is all that is required

**Response:** XML listing roles.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "operator/{operator id}/roles", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "operator/{operator id}/roles", "POST", "Not supported." %}
{% endrestapi %}

{% restapi "operator/{operator id}/roles", "DELETE", "Not supported." %}
{% endrestapi %}
