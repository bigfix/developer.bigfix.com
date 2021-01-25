---
title: Task
---
**Note:** For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

{% restapi "/api/tasks/{site type}/{site name}", "GET", "Fetches a list of tasks of a particular site." %}
**Request:** URL is all that is required

**Response:** BESAPI description of contained task resources.

**Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/tasks/{site type}/{site name}", "POST", " Creates a task in the specified site." %}
**Request:** Complete XML for the object in the body of the request

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/task/{site type}/{site name}/{task id}", "GET", "Returns the details of the specified task." %}
**Request:** URL is all that is required

**Response:** XML of task. 

**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "/api/task/{site type}/{site name}/{task id}", "PUT", "Updates a task." %}
**Request:** Complete XML for the object in the body of the request.

**Request Schema:** BES.xsd

**Response:** Task ID.
{% endrestapi %}

{% restapi "/api/task/{site type}/{site name}", "POST", "Creates a task in the specified site." %}
**Request:** Complete XML for the object in the body of the request.

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd

**Note:** For backward compatibility, this action still accepts an id but ignore it even if referencing a non-existing object.
{% endrestapi %}

{% restapi "/api/task/{site type}/{site name}/{task id}", "DELETE", "Deletes a task." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "/api/task/{site type}/{site name}/{task id}/computers", "GET", "Retrieves the list of computers that are relevant for this task." %}
**Request:** URL is all that is required. 

**Response:** XML list of computers.

**Response Schema:** BESAPI.xsd
{% endrestapi %}
