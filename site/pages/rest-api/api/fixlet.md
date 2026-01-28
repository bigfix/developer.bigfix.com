---
title: RESTAPI Fixlet
---
**Note:** For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

{% restapi "/api/fixlets/{site type}/{site name}", "GET", "Fetches a list of Fixlets of a particular site." %}
 - /api/fixlets/master --> returns fixlets from the master action site
 - /api/fixlets/custom/MyCustomSite --> returns fixlets from your MyCustomSite custom site.
 - /api/fixlets/external/BES Support --> returns fixlets from the external site "BES Support"
 - /api/fixlets/operator/Daniel --> returns fixlets from Daniel's operator site
 
**Request:** URL is all that is required

**Response:** BESAPI description of contained Fixlet resources.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/fixlets/{site type}/{site name}", "POST", "Creates a fixlet in the specified site." %}
**Request:** Complete XML for the object in the body of the request

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/fixlet/{site type}/{site name}/{fixlet id}", "GET", "Returns the details of the specified Fixlet." %}
**Request:** URL is all that is required 

**Response:** XML of Fixlet

**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "/api/fixlet/{site type}/{site name}/{fixlet id}", "PUT", "Updates a Fixlet." %}

**Request:** Complete XML for the object in the body of the request

**Request Schema:** BES.xsd

**Response:** Fixlet ID.

**Response Schema:** Plain text.
{% endrestapi %}

{% restapi "/api/fixlet/{site type}/{site name}", "POST", "Creates a Fixlet in the specified site." %}
**Request:** Complete XML for the object in the body of the request

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd

**Note:** For backward compatibility, this action still accepts an id but ignore it even if referencing a non-existing object.
{% endrestapi %}

{% restapi "/api/fixlet/{site type}/{site name}/{fixlet id}", "DELETE", "Deletes a Fixlet." %}
The same command applies to a task if you specify the task ID in place of the Fixlet ID.

**Request:** URL is all that is required
{% endrestapi %}

{% restapi "/api/fixlet/{site type}/{site name}/{fixlet id}/computers", "GET", "Lists the computers that are relevant for this Fixlet." %}
**Request:** URL is all that is required

**Response:** XML  list of computers.

**Response Schema:** BESAPI.xsd
{% endrestapi %}
{% restapi "/api/fixlet/{site type}/{site name}/{fixlet id}/visibility", "GET", "Gets the global visibility of a Fixlet." %}
**Request:** This API lets you query the global visibility of a Fixlet. The `{fixlet id}` parameter identifies the target Fixlet.
The caller must be authenticated and a BigFix Master Operator (MO).
By default, the information will be returned in XML format.
If you need the information in JSON format, set the request header `Accept: application/json` or use the `output=json` parameter in the request URL to get a JSON response.

**Response:** In case of success, it returns HTTP 200 OK with the visibility state in the desired response format (JSON or XML).
In case of failure, it returns a standard HTTP error code (e.g. 400 bad request).

**Response Schema:** BESAPI.xsd

The following example shows how to query the global visibility of the Fixlet with ID `46` of the custom site named `MySite`.

This call:
```
https://server.bigfix.com:52311/api/fixlet/custom/MySite/46/visibility
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <FixletVisibility Resource="https://server.bigfix.com:52311/api/fixlet/custom/MySite/46/visibility">
        <Visibility>true</Visibility>
    </FixletVisibility>
</BESAPI>
```

Or this JSON, if the header `Accept: application/json` is set in the request or the `output=json` parameter is used in the request URL:
```json
{"Visibility":true}

```
{% restapi "/api/fixlet/{site type}/{site name}/{fixlet id}/visibility", "PUT", "Sets the global visibility of a Fixlet." %}
**Request:** This API allows you to toggle the global visibility of a Fixlet, hiding or showing it. The `{fixlet id}` parameter identifies the target Fixlet.
The request body can be a JSON or an XML and specifies the desired Fixlet visibility in the `Visibility` field, which must contain a boolean value (`true` or `false`).
The caller must be authenticated and a BigFix Master Operator (MO).
By default, the information will be returned in XML format.
If you need the information in JSON format, set the request header `Accept: application/json` or use the `output=json` parameter in the request URL to get a JSON response.

**Response:** In case of success, it returns HTTP 200 OK with the visibility state in the desired response format (JSON or XML).
In case of failure, it returns a standard HTTP error code (e.g. 400 bad request).

**Response Schema:** BESAPI.xsd

The following example shows the steps to take to globally hide the Fixlet with ID `47` of the custom site named `MySite`.

First, prepare the XML that will be passed to the REST API:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <FixletVisibility>
        <Visibility>false</Visibility>
    </FixletVisibility>
</BESAPI>
```

Save the XML to a file named, for example, `visibility.xml`.

Then, from the terminal, run following command:
```
curl -X PUT --data-binary @visibility.xml --user {username}:{password} https://server.bigfix.com:52311/api/fixlet/custom/MySite/47/visibility
```

If the operation ran succesfully, the REST API will return this response:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <FixletVisibility Resource="https://server.bigfix.com:52311/api/fixlet/custom/MySite/47/visibility">
        <Visibility>false</Visibility>
    </FixletVisibility>
</BESAPI>
```

If you prefer using a JSON file as input, create a file named, for example, `visibility.json`.
The visibility value must be a boolean value, do not quote it.
```json
{ "Visibility": false }
```

Then, from the terminal, run the following command (note that the `Content-Type` header is specified):
```
curl -X PUT --data-binary @visibility.json --user {username}:{password} -H "Content-Type: application/json" https://server.bigfix.com:52311/api/fixlet/custom/MySite/47/visibility?output=json
```

On success, the API will return:
```json
{"Visibility":true}
```
{% endrestapi %}
