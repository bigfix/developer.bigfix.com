---
title: RESTAPI Upload
---

{% restapi "upload", "POST", "Uploads one or more files." %}
This can be used to upload a single file as the POST body, or multiple files in a mime document. 
This is an example of uploading multiple files using the curl command:

```
    curl -k -u mo -X POST -F "file=@/temp/file.xml" -F "file=@/temp/file2.xml" "https://spiffy:52311/api/upload"
```

**Multiple-file POST body example:**
You can include more than one file in a single post using the following syntax for each file:

```
    Content-Length: 1136
    Content-Type: multipart/form-data; boundary=----------------------------27beaea68af8
    
    ------------------------------27beaea68af8
    Content-Disposition: form-data; name="file"; filename="file.data"
    Content-Type: application/octet-stream
    
    file data goes here
    ------------------------------27beaea68af8--
```
	
**Single-file POST body example:**
For uploading a single file you can specify the filename in the content-disposition header and send the file as the body, for example:

```
    Content-Disposition: attachment; filename="file.xml"
```

To add files to a custom site, use the site/{site type}/{site name}/files resource in the [**Site resource**](./site.html) page.

**Response:** BESAPI showing the name, url, sha1, and size of file.
{% endrestapi %}

{% restapi "uploads", "GET", "Returns a list of all FileUpload elements." %}
Optionally you can filter the results based on "sha1", "sha256", and/or "available" parameters, for example:

```
    GET uploads?sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```
	
Only one hash parameter can be supplied per query.
{% endrestapi %}

{% restapi "upload/{filelocation}", "GET", "Returns a FileUpload at {filelocation}. {filelocation} is a hash/name form." %}
{filelocation} is a hash/name form, for example: 

```
    514e37eda5a64ca9872f4972618eaf41e981e8e9/icon.bmp
```
	
{% endrestapi %}

{% restapi "upload/{filelocation}/references", "GET", "Returns a list of FileUploadReference for a FileUpload at {filelocation}." %}
Returns all of the references to a given file. If the command is made by a master operator, and it will return only the shared references otherwise. 
References are essentially markers saying that the file is still useful to somebody. 
{% endrestapi %}

{% restapi "upload/{filelocation}/references", "POST", "Creates a FileUploadReference for a FileUpload at {filelocation}. This also returns a FileUploadReference." %}
Sets a new reference to the given file. As with action/{action id}/stop, no actual data is posted. Only the URL is needed. 
In the URL, you can specify whether or not the reference can be seen by others. For example:

```
    upload/514e37eda5a64ca9872f4972618eaf41e981e8e9/icon.bmp?private=1
```

means that only you and the MO can see that reference in GET uploads/{filelocation}/references and GET uploads/{filelocation}/reference/{ID}.
If private is not specified, the default is 0 (not private).
{% endrestapi %}

{% restapi "upload/{filelocation}/reference/{id}", "GET", "Returns a FileUploadReference with {id} for a FileUpload at {filelocation}." %}
{% endrestapi %}

{% restapi " ", "DELETE", "Deletes a FileUploadReference with {id} for a FileUpload at {filelocation}." %}
When a FileUpload does not have any references, the file is deleted from the server.
{% endrestapi %}
