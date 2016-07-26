---
title: Dashboard Variables
---

{% restapi "dashboardvariables", "GET", "Fetch list of dashboard IDs that have stored information." %}
**Request:** URL is all that is required.

**Response:** XML List of dashboards.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "dashboardvariables/{dashboard ID}", "GET", "Lists variables for the specified dashboard." %}
**Note:** If the variables are private only, the ones for the requesting operator will be shown.

**Response:** List of Dashboard variables XML.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "dashboardvariables/{dashboard ID}", "POST", "Creates new dashboard variable." %}
**Request:** XML for Dashboard variable.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "dashboardvariables/{dashboard ID}", "DELETE", "Deletes all stored variables for a dashboard." %}
{% endrestapi %}

{% restapi "dashboardvariable/{dashboard ID}/{variable name}", "GET", "Fetches value of a specific dashboard variable." %}
**Request:** XML for Dashboard variable.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "dashboardvariable/{dashboard ID}/{variable name}", "PUT", "Updates a specific dashboard variable." %}
**Request:** XML for Dashboard variable.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "dashboardvariable/{dashboard ID}/{variable name}", "POST", "Updates a specific dashboard variable." %}
**Request:** XML for Dashboard variable.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "dashboardvariable/{dashboard ID}/{variable name}", "DELETE", "Deletes the specified dashboard variable." %}
{% endrestapi %}