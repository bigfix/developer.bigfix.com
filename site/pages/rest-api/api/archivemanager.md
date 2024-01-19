---
title: Archive Manager
---

The Archive Manager can upload a file with a location from a BigFix Client computer with a computer ID to the BigFix Server. Once uploaded, the file gets assigned a sequence ID.

Sequence IDs are assigned as sequential integer numbers. When a file gets uploaded again on the BigFix server, it receives a new sequence ID.

This REST API allows you to list, retrieve or remove the uploaded files.

{% restapi "archivemanager", "GET", "Returns a list of files uploaded by the Archive Manager." %}
**Request:** The URL is all that is required.

By default, the information will be returned in XML format.
If you need the information in JSON format, add `output=json` to the request.

You can reduce the amount of information returned in the response using the filter query parameters, as described in [Filtering Response Parameters](#filtering-response-parameters).

**Response:** Information on files uploaded by the Archive Manager.

For example, this call:
```
https://server.bigfix.com:52311/api/archivemanager
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ArchiveManagerFile>
        <FileName>(LOG)_0_dexreports_copy.json</FileName>
        <FileLocation>/93/1085412093/(LOG)_0_dexreports_copy.json</FileLocation>
        <FileSize>1737</FileSize>
        <ComputerId>1085412093</ComputerId>
        <Sha256Checksum>c6164fc55a554ac3cdfe2f3185d6f1d3f994988b2c2383227195dd8176a1739f</Sha256Checksum>
        <Sequence>196234</Sequence>
        <FileReceivedAt>1704877670000000</FileReceivedAt>
    </ArchiveManagerFile>
    <ArchiveManagerFile>
        <FileName>(LOG)_0_dexreports.json</FileName>
        <FileLocation>/93/1085412093/(LOG)_0_dexreports.json</FileLocation>
        <FileSize>1737</FileSize>
        <ComputerId>1085412093</ComputerId>
        <Sha256Checksum>c6164fc55a554ac3cdfe2f3185d6f1d3f994988b2c2383227195dd8176a1739f</Sha256Checksum>
        <Sequence>196108</Sequence>
        <FileReceivedAt>1704877670000000</FileReceivedAt>
    </ArchiveManagerFile>
</BESAPI>
```

For example, this call: 
```
https://server.bigfix.com:52311/api/archivemanager?output=json
```

May return this JSON:
```json
[
    {
        "FileName": "(LOG)_0_dexreports_copy.json",
        "FileLocation": "\u002f93\u002f1085412093\u002f(LOG)_0_dexreports_copy.json",
        "FileSize": 1737,
        "ComputerId": "1085412093",
        "Sha256Checksum": "c6164fc55a554ac3cdfe2f3185d6f1d3f994988b2c2383227195dd8176a1739f",
        "Sequence": 196234,
        "FileReceivedAt": 1704877670000000
    },
    {
        "FileName": "(LOG)_0_dexreports.json",
        "FileLocation": "\u002f93\u002f1085412093\u002f(LOG)_0_dexreports.json",
        "FileSize": 1737,
        "ComputerId": "1085412093",
        "Sha256Checksum": "c6164fc55a554ac3cdfe2f3185d6f1d3f994988b2c2383227195dd8176a1739f",
        "Sequence": 196108,
        "FileReceivedAt": 1704877670000000
    }
]
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "archivemanager/latestFile", "GET", "Returns the latest file item uploaded by the Archive Manager." %}
**Request:** The URL is all that is required.

By default, the information will be returned in XML format.
If you need the information in JSON format, add `output=json` to the request.

You can reduce the amount of information returned in the response using the filter query parameters, as described in [Filtering Response Parameters](#filtering-response-parameters).

**Response:** The information about the file uploaded by the Archive Manager in XML or JSON format.

For example, this call:
```
https://server.bigfix.com:52311/api/archivemanager/latestFile
```

May return this XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ArchiveManagerFile>
        <FileName>(LOG)_0_dexreports_copy.json</FileName>
        <FileLocation>/93/1085412093/(LOG)_0_dexreports_copy.json</FileLocation>
        <FileSize>1737</FileSize>
        <ComputerId>1085412093</ComputerId>
        <Sha256Checksum>c6164fc55a554ac3cdfe2f3185d6f1d3f994988b2c2383227195dd8176a1739f</Sha256Checksum>
        <Sequence>196234</Sequence>
        <FileReceivedAt>1704877670000000</FileReceivedAt>
    </ArchiveManagerFile>
</BESAPI>
```

For example, this call: 
```
https://server.bigfix.com:52311/api/archivemanager/latestFile?output=json
```

May return this JSON:
```json
[
    {
        "FileName": "(LOG)_0_dexreports_copy.json",
        "FileLocation": "\u002f93\u002f1085412093\u002f(LOG)_0_dexreports_copy.json",
        "FileSize": 1737,
        "ComputerId": "1085412093",
        "Sha256Checksum": "c6164fc55a554ac3cdfe2f3185d6f1d3f994988b2c2383227195dd8176a1739f",
        "Sequence": 196234,
        "FileReceivedAt": 1704877670000000
    }
]
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "archivemanager/files", "GET", "Returns the actual files uploaded by the Archive Manager." %}
**Request:** URL is all that is required.

You can reduce the number of files returned in the response using the filter query parameters, as described in [Filtering Response Parameters](#filtering-response-parameters).

You can delete the requested files by adding the `deleteFiles=true` in the URL. The files will be automatically deleted from the BigFix Server and DB after the request completed successfully.

**Response:** The response consists of files contained in messages with `Content-Type: multipart/mixed`. See the [Multipart Content-Type W3C definition](https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html).

For example, this call:
```
https://server.bigfix.com:52311/api/archivemanager/files
```

May return this:
```
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="YsY2JDKvhN7JqX'(N?xf/wseczPT49R_"


--YsY2JDKvhN7JqX'(N?xf/wseczPT49R_
Content-Disposition: attachment; filename="(LOG)_0_example.txt"; size=39

file line 1
file line 2
end file line
--YsY2JDKvhN7JqX'(N?xf/wseczPT49R_--
```
{% endrestapi %}

{% restapi "archivemanager/file/{filelocation}", "GET", "Returns the file uploaded by the Archive Manager at {filelocation}." %}
**Request:** URL is all that is required.

You can delete the requested file, adding the `deleteFiles=true` in the URL. The file will be automatically deleted from the BigFix Server and DB after the request completed successfully.

**Response:** 
- HTTP 200 - Returns file content in body of response.
- HTTP 400 - Returns error message in body of response.

The response HTTP Headers will be filled-in as follow:
- ComputerId: id of computer
- FileName: file name
- FileLocation: file location
- FileSize: file size
- Sha256Checksum: file sha256 checksum
- Sequence: sequence number registered for this file
- FileReceivedAt: timestamp when file has been received by BES

For example, this call:
```
https://server.bigfix.com:52311/api/archivemanager/file/93/1085412093/(LOG)_0_example.txt
```

May return this response:
```
Response HEADER 
FileLocation: /93/1085412093/(LOG)_0_example.txt
FileName: (LOG)_0_example.txt
FileReceivedAt: 1705501403104826
FileSize: 39
Sequence: 201682
Sha256Checksum: b7960ed1a4927b904c6e3c7b264fa2fe0f6f03b82998a944f4e2076ab5b73172

Response BODY 
file line 1
file line 2
end file line
```
{% endrestapi %}

{% restapi "archivemanager/files", "DELETE", "Deletes a set of files uploaded by the Archive Manager." %}
**Request:** URL and the `fileLocationContains` parameter are both required.
The `fileLocationContains` parameter is mandatory to prevent that all the uploaded files are automatically deleted when using this API.

```
https://<bigfix_server>:<bigfix_server_port>/api/archivemanager/files?fileLocationContains=<part_of_location>
```

You can further reduce the number of files deleted by using the filter query parameters, as described in [Filtering Response Parameters](#filtering-response-parameters).

For example, this call:
```
https://server.bigfix.com:52311/api/archivemanager/files?fileLocationContains=dexreports
```

Will delete the uploaded files whose location contains `dexreports`.
{% endrestapi %}

{% restapi "archivemanager/file/{file_location}", "DELETE", "Deletes the file uploaded by the Archive Manager at {file_location}." %}
**Request:** URL is all that is required

For example, this call:
```
https://server.bigfix.com:52311/api/archivemanager/file/93/1085412093/(LOG)_0_dexreports
```

Will delete the uploaded file whose location contains `dexreports`.
{% endrestapi %}

#### Privileges required to run the Archive Manager APIs
These REST APIs can be run only if you are logged on as Master Operator (MO).

#### Filtering Response Parameters
You can use the query parameters to limit the items returned for a given resource when using the API resources `/api/archivemanager`, `/api/archivemanager/latestFile` and `/api/archivemanager/files`.
Use these query parameters to define the filter:
- `fileLocationContains` is a parameter with a string value that represents a piece of file location. When used, the request will only return files whose location contains that string. For example, setting `fileLocationContains=dexreports` makes the REST API only return files with `dexreports` in their location.
- `fileLocationStartsWith` is a parameter with a string value that represents a piece of file location. When used, the request will only return files whose location starts with that string. For example, setting `fileLocationStartsWith=/13/1616782313/dex` makes the REST API only return files with a location that starts with `/13/1616782313/dex`.
- `computerId` is a parameter with an integer value that represents a computer ID. When used, the request will only return files uploaded by the computer with that ID.
- `sequenceGreaterThan` and `sequenceLessOrEqualTo` are two parameters with integer values that delimitate the exclusive start and the inclusive end of a linear sequence of numbers. They can only be used together. When used, the response will only return files whose IDs are within that range. For example, setting `sequenceGreaterThan=5` and `sequenceLessOrEqualTo=10` makes the REST API only return files with an ID in the sequence `6,7,8,9,10`.

These are some example of filtering results using the above parameters:
```
GET /api/archivemanager?fileLocationContains=dexreports&computerId=12345
GET /api/archivemanager/latestFile?fileLocationContains=dexreports&sequenceLessOrEqualTo=2123
GET /api/archivemanager/files?fileLocationContains=dexreports&sequenceGreaterThan=23000&sequenceLessOrEqualTo=23147
DELETE /api/archivemanager/files?fileLocationContains=dexreports&sequenceGreaterThan=23000&sequenceLessOrEqualTo=23147
```
