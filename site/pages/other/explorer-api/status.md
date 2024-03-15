---
title: Status
---

This REST API allows you to display the status of the target BigFix Explorer instance.

## GET /api/status
This API returns the status of the BigFix Explorer and of its connection to the BigFix Server.

The status of the BigFix Explorer can be either "Starting" or "Online".
The status of the BigFix Explorer connection to the BigFix Server can be: "Connecting", "Online", or "Server Unreachable".
When the BigFix Explorer is loading the datastores, its status is "Starting" and the status of its connection to the BigFix Server is "Connecting".
When the BigFix Explorer service is online, its status is "Online" and the status of its connection to the BigFix Server is "Online" or "Server Unreachable", depending on whether the connection to the BigFix Server can be established or not.

**Request:** URL is all that is required.

**Response:** The status of the BigFix Explorer and its connection to the BigFix Server.
The response format is JSON.
The response contains the following fields:
* instanceName, the hostname of the BigFix Explorer instance.
* status, a string representing the status of the BigFix Explorer instance.
* rootServerConnection, a string representing the status of the connection between the BigFix Explorer instance and the BigFix Server.

The following is an example of request made using cURL:

```
curl -X GET https://bf-explorer:9383/api/status
```

The following are examples of responses, depending on the different statuses.

This status will be returned while BigFix Explorer is loading the datastores.

```json
{
    "instanceName": "explorer",
    "status": "Starting",
    "rootServerConnection": "Connecting"
}
```

This status will be returned when BigFix Explorer finished loading the datastores and is ready to answer queries.

```json
{
    "instanceName": "explorer",
    "status": "Online",
    "rootServerConnection": "Online"
}
```

This status will be returned when the connection between BigFix Explorer and the BigFix Root Server cannot be established, but the BigFix Explorer service is online.

```json
{
    "instanceName": "explorer",
    "status": "Online",
    "rootServerConnection": "Server Unreachable"
}
```
