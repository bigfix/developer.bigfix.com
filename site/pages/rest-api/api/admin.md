---
title: Admin
---

{% restapi "admin/fields", "GET", "Returns the list of admin fields." %}
**Response:** XML results.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/fields", "PUT", "Not Supported" %}
{% endrestapi %}

{% restapi "admin/fields", "POST", "Sets one or more admin fields." %}
**Request:** One or more admin fields in a XML document.

**Request Schema:** BESAPI.xsd

**Response:** Details of all the admin fields after update..

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/fields", "DELETE", "Not Supported" %}
{% endrestapi %}


{% restapi "admin/field/{field}", "GET", "Fetches specific admin field value." %}
**Response:** XML results

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/field/{field}", "PUT", "Sets a specific admin field." %}
**Request:** Send an XML with the admin field value.

**Request Schema:** BESAPI.xsd

**Response:** Details of the admin field after update.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/field/{field}", "POST", "Sets a specific admin field." %}
**Request:** Send an XML with the admin field value.

**Request Schema:** BESAPI.xsd

**Response:** Details of the admin field after update.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/field/{field}", "DELETE", "Deletes the specific admin field." %}
**Request:** Send XML with the admin field value.

**Request Schema:** BESAPI.xsd

**Response:** Details of the admin field after update.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/masthead", "GET", "Exports the current masthead." %}
**Response:**  Masthead file. 
{% endrestapi %}

{% restapi "admin/masthead", "PUT", "Not supported" %}
{% endrestapi %}

{% restapi "admin/masthead", "POST", "Updates the masthead in the database." %}
**Request:** Masthead file in post body

**Response:** Details of the admin field after update. You will get HTTP 200 upon success.

**Notes**: If FIPS setting is changed, the server will need to be restarted. 
{% endrestapi %}

{% restapi "admin/masthead", "DELETE", "Not supported" %}
{% endrestapi %}

{% restapi "admin/masthead/parameters", "GET", "Returns the list of the masthead configuration parameters and values." %}
**Response:** XML results.

**Response schema:** BESAPI.xsd.
{% endrestapi %}

{% restapi "admin/masthead/parameters", "PUT", "Not supported" %}
{% endrestapi %}

{% restapi "admin/masthead/parameters", "POST", "Not supported" %}
{% endrestapi %}

{% restapi "admin/masthead/parameters", "DELETE", "Not supported" %}
{% endrestapi %}


{% restapi "admin/icon", "GET", "Exports the current client icon." %}
**Response:** Icon file.

**Content type:** image/bmp
{% endrestapi %}

{% restapi "admin/icon", "PUT", "Updates/sets client icon." %}
**Request:** Icon in POST body.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "admin/icon", "POST", "Updates/sets client icon." %}
**Request:** Icon in POST body.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "admin/icon", "DELETE", "Deletes current client icon." %}
{% endrestapi %}


{% restapi "admin/propagate/operator/{operator}", "GET", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/operator/{operator}", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/operator/{operator}", "POST", "Propagates the specified operator site." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "admin/propagate/operator/{operator}", "DELETE", "Not supported." %}
{% endrestapi %}


{% restapi "admin/propagate/actionsite", "GET", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/actionsite", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/actionsite", "POST", "Propagates the master action site." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "admin/propagate/actionsite", "DELETE", "Not supported." %}
{% endrestapi %}


{% restapi "admin/propagate/operators", "GET", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/operators", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/operators", "POST", "Propagates all operator sites." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "admin/propagate/operators", "DELETE", "Not supported." %}
{% endrestapi %}


{% restapi "admin/propagate/resetepoch", "GET", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/resetepoch", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/propagate/resetepoch", "POST", "Resets the database epoch forcing Console's to refresh their cache." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "admin/propagate/resetepoch", "DELETE", "Not supported." %}
{% endrestapi %}


{% restapi "admin/options", "GET", "Displays the current admin options for the server." %}
**Request:** URL Only.

**Response:** HTTP 200, BESAPI XML of admin options.
{% endrestapi %}

{% restapi "admin/options", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/options", "POST", "Updates the admin options from the provided BESAPI XML." %}
**Request:** BESAPI representation of 1 or more admin options.

**Response:** HTTP 200 on success, BESAPI XML of admin options.

**Response schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/options", "DELETE", "Not supported." %}
{% endrestapi %}


{% restapi "admin/reports", "GET", "Returns the client report settings." %}
**Request:** BESAPI XML of settings.

**Response:** BESAPI.xsd
{% endrestapi %}

{% restapi "admin/reports", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/reports", "POST", "Not supported." %}
{% endrestapi %}

{% restapi "admin/reports", "DELETE", "Not supported." %}
{% endrestapi %}


{% restapi "admin/reports/cert", "GET", "Returns the server certificate." %}
**Response:** Certificate in PEM format.
{% endrestapi %}

{% restapi "admin/reports/cert", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/reports/cert", "POST", "Not supported." %}
{% endrestapi %}

{% restapi "admin/reports/cert", "DELETE", "Not supported." %}
{% endrestapi %}


{% restapi "admin/reports/key", "GET", "Returns the server certificate." %}
**Response:** Certificate in PEM format.
{% endrestapi %}

{% restapi "admin/reports/key", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "admin/reports/key", "POST", "Not supported." %}
{% endrestapi %}

{% restapi "admin/reports/key", "DELETE", "Not supported." %}
{% endrestapi %}