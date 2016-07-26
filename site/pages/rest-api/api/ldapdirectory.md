---
title: LDAP Directory
---

{% restapi "ldapdirectories", "GET", "Fetches all LDAP Directories." %}
**Request:** URL is all that is required.

**Response:** BESAPI XML for the directories.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "ldapdirectories", "PUT", "Not Supported" %}
{% endrestapi %}

{% restapi "ldapdirectories", "POST", "Creates LDAP Directory." %}
**Request:** BESAPI XML file.

**Response:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "ldapdirectories", "DELETE", "Not Supported" %}
{% endrestapi %}

{% restapi "ldapdirectory/{id}", "GET", "Fetches detailed information for a directory." %}
**Request:** URL is all that is required.

**Response:** BESAPI XML for the directories.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "ldapdirectory/{id}", "PUT", "Updates LDAP directory." %}
**Request:** Complete XML for LDAP Directory.

**Request Schema:** BESAPI.xsd

**Response:** BESAPI XML for the directories.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "ldapdirectory/{id}", "POST", "Updates LDAP directory." %}
**Request:** Complete XML for LDAP Directory.

**Request Schema:** BESAPI.xsd

**Response:** BESAPI XML for the directories.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "ldapdirectory/{id}", "DELETE", " Deletes LDAP Directory." %}
**Request Schema:** URL is all that is required.

{% endrestapi %}