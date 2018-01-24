---
title: Deployment Metrics
---

Deployment metrics documents are very simple objects that have three fields: 

- *tag* that is used to identify metrics.
- *metrics* that is a collection of metric.
- *lastChanged* that is a time-stamp of when metrics have been updated.

**Note:** The platform tag is reserved to the server collected metrics via DeploymentMetricsCollectorTask, and cannot be updated via REST API.

{% restapi "/api/deploymentmetrics", "GET", "Returns a JSON array containing a collection of deployment metrics." %}
**Request:** URL is all that is required, for example:

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

{% restapi "/api/deploymentmetrics/{tag}", "GET", "Returns a JSON object representing deployment metrics tagged by {tag}." %}
**Request:** URL is all that is required, for example:

```xml
https://<bigfix_server>:52311/api/deploymentmetrics/custom
```

**Note:** This method can be invoked by master operators only.

**Response:** A JSON object representing deployment metrics with tag *custom*.

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
**Request:** BES XML for the action. 

For example:

```xml

```

**Note:** This method can be invoked by master operators or from a WebUI Application.

**Response:** A deployment metrics object tagged with {tag}. The metrics field will contain the content of the body. Whatever JSON parseable string is acceptable. 

**Note:** Do not use the *platform* tag because it is reserved to the server. 
{% endrestapi %}

{% restapi "/api/deploymentmetrics/{tag}", "POST", "Updates a deployment metrics object tagged with {tag}." %}
**Request:** BES XML for the action.

For example:

```xml

```

**Note:** This method can be invoked by master operators or from a WebUI Application.

**Response:** A deployment metrics object tagged with {tag}. The metrics field will contain the content of the body. Whatever JSON parseable string is acceptable. 

**Note:** Do not use the *platform* tag because it is reserved to the server. 
{% endrestapi %}
