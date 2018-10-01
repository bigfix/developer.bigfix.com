---
title: Deployment Metrics
---

Deployment metrics documents are very simple objects that have three fields: 

- *tag* that is used to identify metrics.
- *metrics* that is a collection of metrics.
- *lastChanged* that is a time-stamp representing when the metrics were updated.

**Note:** The *platform* tag is reserved to the server collected metrics via DeploymentMetricsCollectorTask, and cannot be updated using this REST API.

{% restapi "/api/deploymentmetrics", "GET", "Returns a JSON array containing a collection of deployment metrics." %}
**Request:** The URL is all that is required, for example:

```xml
https://<bigfix_server>:52311/api/deploymentmetrics
```

**Note:** This method can be invoked by master operators only.

**Response:** A JSON array containing a collection of deployment metrics.

For example:

```xml
[
	{
		"tag": "platform",
		"metrics": [{"number_of_endpoints": "5", ... }],
		"lastChanged": "12 Jan 2018 12:00"
	},
	{
		"tag": "custom",
		"metrics": [{"bla": "3", ... }],
		"lastChanged": "12 Jan 2018 12:00"
	},
]
```

{% endrestapi %}

{% restapi "/api/deploymentmetrics/{tag}", "GET", "Returns a JSON object representing the deployment metrics tagged by {tag}." %}
**Request:** The URL is all that is required, for example:

```xml
https://<bigfix_server>:52311/api/deploymentmetrics/custom
```

**Note:** This method can be invoked by master operators only.

**Response:** A JSON object representing the deployment metrics with the specified tag, for example *custom*.

For example:

```xml

	{
		"tag": "custom",
		"metrics": [{"bla": "3", ... }],
		"lastChanged": "12 Jan 2018 12:00"
	},

```

{% endrestapi %}

{% restapi "/api/deploymentmetrics/{tag}", "POST", "Creates a new deployment metrics object tagged with {tag}." %}
**Request:** The URL and a JSON parseable string as body of the request, for example:

```xml
[{"foo": "bar"}, {"foo2": "bar2"}]
```

In this example the body of the request is a JSON array containing two JSON objects. 

**Note:** This method can be invoked by master operators or from a WebUI Application.

**Response:** The HTTP return code of the operation. If the operation succeeds, the return code will be 200. If the operation fails the body will contain the failure error code and an error message. 

**Note:** Do not use the *platform* tag because it is reserved to the server. 
{% endrestapi %}

{% restapi "/api/deploymentmetrics/{tag}", "POST", "Updates a deployment metrics object tagged with {tag}." %}
**Request:** The URL and a JSON parseable string as body of the request, for example:

```xml
[{"foo": "bar"}, {"foo2": "bar2"}]
```

In this example the body of the request is a JSON array containing two JSON objects.

**Note:** This method can be invoked by master operators or from a WebUI Application.

**Response:** The HTTP return code of the operation. If the operation succeeds, the return code will be 200. If the operation fails the body will contain the failure error code and an error message. 

**Note:** Do not use the *platform* tag because it is reserved to the server. 
{% endrestapi %}
