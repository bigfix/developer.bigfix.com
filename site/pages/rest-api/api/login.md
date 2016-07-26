---
title: RESTAPI Login
---

{% restapi "login/", "GET", "Performs login." %}
This REST API can be used to create/refresh your current logged in session. Returns HTTP 200 on success.

**Note:**  When using the RESTAPI Login, ensure that your API client uses the UTF-8 encoding format to avoid problems with non-ASCII characters.
{% endrestapi %}

