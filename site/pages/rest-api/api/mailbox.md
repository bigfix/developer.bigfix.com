---
title: RESTAPI Mailbox
---
Manage computer mailboxes and the files they contain.

{% restapi "mailbox/{computer id}", "GET", "Fetches a list of files in a given computer's mailbox." %}
**Request:** URL is all that is required

**Response:** List of files in the mailbox.
- HTTP 200 - Returns XML in body of response.
- HTTP 404 - Returns empty response if action is not found.

**Response Schema:** BESAPI.xsd

{% endrestapi %}

{% restapi "mailbox/{computer id}", "PUT", "Not Supported" %}
{% endrestapi %}

{% restapi "mailbox/{computer id}", "POST", "Creates a new mailbox file." %}
**Request:** The file(s) to be uploaded in multipart form encoding. 
For uploading a single file you can specify the filename in the content-disposition header and send the file as the body.

**Response:** List of files in the mailbox.
- HTTP 200 - Returns XML in body of response.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "mailbox/{computer id}", "DELETE", "Not Supported" %}
{% endrestapi %}

{% restapi "mailbox/{computer id}/{file id}", "GET", "Fetches the details of the specified file in the specified computer's mailbox." %}
**Request:** URL is all that is required

**Response:** List of files in the mailbox.
- HTTP 200 - Returns XML in body of response.
- HTTP 404 - Returns empty response if action is not found.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "mailbox/{computer id}/{file id}", "PUT", "Updates the specified mailbox file." %}

**Request:** The file(s) to be uploaded in multipart form encoding. 

**Response:** List of files in the mailbox.
- HTTP 200 - Returns XML in body of response.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "mailbox/{computer id}/{file id}", "POST", "Updates the specified new mailbox file." %}

**Request:** The file(s) to be uploaded in multipart form encoding. 

**Response:** List of files in the mailbox.
- HTTP 200 - Returns XML in body of response.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "mailbox/{computer id}/{file id}", "DELETE", "Deletes the specified files from the specified computer's mailbox." %}

**Request:** The file(s) to be uploaded in multipart form encoding. 

**Response:** List of files in the mailbox.
- HTTP 200 - Returns XML in body of response.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "mailbox/", "GET", "Not Supported" %}
{% endrestapi %}

{% restapi "mailbox/", "PUT", "Not Supported" %}
{% endrestapi %}

{% restapi "mailbox/", "POST", "Creates a new mailbox file." %}
**Request:** The file(s) to be uploaded in multipart form encoding. 

**Response:** List of files in the mailbox.
- HTTP 200 - Returns XML in body of response.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "mailbox/", "DELETE", "Not Supported" %}
{% endrestapi %}