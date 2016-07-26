---
title: Computer
---

{% restapi "computers", "GET", "Fetches a list of computers." %}
**Request:** URL is all that is required.

**Response:** List of computers and Last Report time.

**Response Schema:** BESAPI.xsd
{% endrestapi %}


{% restapi "computer/{computer id}", "GET", "Gets a computer's core properties." %}
**Request:** URL is all that is required.

**Response:** Lists all of a computer's properties.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}", "DELETE", "Marks a computer as deleted in the database." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "computer/{computer id}/settings", "GET", "Gets a computer's settings." %}
**Request:** URL is all that is required.

**Response:** Lists client settings for a computer. 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/settings", "POST", "Updates or creates the value of a setting." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/settings", "DELETE", "Deletes all activations for the specified analysis." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "computers/settings", "POST", "Updates or creates settings for multiple computers." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "GET", "Gets the setting value." %}
**Request:** URL is all that is required.

**Response:** Returns setting value.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "PUT", "Updates the setting value." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "POST", "Updates or creates the setting value." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "DELETE", "Delete computer setting." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "computer/{computer id}/fixlets", "GET", "Gets the list of relevant Fixlets." %}
**Request:** URL is all that is required.

**Response:** The list of relevant Fixlets and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/tasks", "GET", "Gets the list of relevant tasks." %}
**Request:** URL is all that is required.

**Response:** List of relevant tasks and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/mailbox", "GET", "Gets contents of the computer's mailbox" %}
**Request:** URL is all that is required.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

