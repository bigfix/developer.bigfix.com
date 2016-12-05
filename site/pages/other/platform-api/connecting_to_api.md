---
title: Connecting to the server through the API
---

When connecting, you must specify the BigFix server host name and login credentials
that you use to connect to the BigFix Console.
You can  set the server by running:
```
SetServer( $Hostname )
```
so that each subsequent call uses that server for communication.

The API gets an SSL Certificate from the server and stores it locally. The location
where this key is stored is either the current path of the executable using the API,
or a registry key named:
```
HKEY_LOCAL_MACHINE\Software\BigFix\(ApplicationName)\base
```
The ApplicationName is set from any BESAPI object by using:
```
SetAppName( $ApplicationName )
```
This location also contains the information fetched from the server such as site exports.

If the SSL Certificate on the server changes, you might need to delete the old certificate 
from this location to get a new one.
