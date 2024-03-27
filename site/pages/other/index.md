---
title: Other APIs
---

The following table lists the available APIs and gives you a few more details about them. 

| API | Runs against | Description | Language / Interface | Read / Write |
| --- | --- | --- | --- | --- |
| REST API (Platform) | BigFix Server | Performs most tasks present in the Console via a standardized and operating system independent method | Any Language / HTTPS | Read / Write |
| SOAP API | Web Reports | XML based SOAP API for querying objects in Web Reports | Session Relevance / SOAP | Read |
| Dashboard API | BigFix Console | An interface to author own dashboard, and wizards, and to create customized views | Session Relevance / - | Read / Write |
| Explorer API | BigFix Explorer | A standalone service to query the data collected by the BigFix Platform using the Session Relevance | Any Language / HTTPS | Read |
| Web Reports API | Relevance queries available in memory | Provides an interface to author own custom reports | Session Relevance / - | Read |
| Server API | BigFix Server | Microsoft COM based API for creating Fixlets / Tasks / Properties / Actions / Analysis | Any Language / Ms COM | Write |
| Database API | BigFix Database | A published schema describing Views to the underlying tables containing all the information collected from managed endpoints and available in the database | SQL / (ODBC, ADO, JDBC) | Read |
| Client Compliance API | BigFix Client | Microsoft COM based API for exposing the results of a BigFix Client inspection to 3rd party clients running on the client system | Client Relevance / Ms COM | Read |

Click on the API names listed in the navigation tree on the right to access all the information about that specific API.
The [REST API](../rest-api/) is described in a dedicated subtree.

**Note:** The only encoding format supported is UTF-8.
    

