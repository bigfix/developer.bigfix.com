---
title: RESTAPI Help
---

{% restapi "help/", "GET", "Returns a list of top-level available resources." %}
For example: 

```
https://lab.bigfix.me:52311/api/help/
    /api/action
    /api/actions
    /api/admin
	....
	..
```

{% endrestapi %}

{% restapi "help/{resource}", "GET", "Returns a list of all available commands for the specified resource for each supported HTTP method." %}
For example: 

```
https://lab.bigfix.me:52311/api/help/action
    GET:
      /api/action/{id}
      /api/action/{id}/status
    POST:
      /api/action/{id}/stop
    DELETE:
      /api/action/{id}
```
	  
{% endrestapi %}

