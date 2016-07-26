---
title: Replication
---

{% restapi "/api/replication/servers", "GET", "Fetches a list of all replication servers and their links." %}
**Request:** URL is all that is required.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/replication/servers", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "/api/replication/servers", "POST", "Posts settings for a single or all servers at once." %}
**Request:** Supply the BESAPI xml for the DSA server settings you want to change.
This is a sample:

```
 <BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
   <ReplicationServer>
      <ServerID>0</ServerID>
      <URL>http://spiffy:52311</URL>
      <DNS>spiffy</DNS>
      <ReplicationIntervalSeconds>500</ReplicationIntervalSeconds>
      <ReplicationLink>
         <SourceServerID>0</SourceServerID>
         <DestinationServerID>1</DestinationServerID>
         <Weight>1</Weight>
      </ReplicationLink>
   </ReplicationServer>
   <ReplicationServer>
      <ServerID>1</ServerID>
      <URL>http://spiffy-dsa-1:52311</URL>
      <DNS>spiffy-dsa-1</DNS>
      <ReplicationIntervalSeconds>500</ReplicationIntervalSeconds>
      <ReplicationLink>
         <SourceServerID>1</SourceServerID>
         <DestinationServerID>0</DestinationServerID>
         <Weight>1</Weight>
      </ReplicationLink>
   </ReplicationServer>
</BESAPI>
```

{% endrestapi %}

{% restapi "/api/replication/servers", "DELETE", "Not supported." %}
{% endrestapi %}

{% restapi "replication/server/{id}", "GET", "Fetches the XML for a specific replication server and it's link." %}
**Request:** URL is all that is required

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "replication/server/{id}", "PUT", "Updates the replication server **ReplicationIntervalSeconds** and associated links if supplied." %}
**Request:** BES API XML.

**Response:** Updated ReplicationServer XML.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "replication/server/{id}", "POST", "Updates the replication server **ReplicationIntervalSeconds** and associated links if supplied." %}
**Request:** BES API XML.

**Response:** Updated ReplicationServer XML.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "replication/server/{id}", "DELETE", "Not supported." %}
{% endrestapi %}

{% restapi "replication/server/{source id}/link/{destination id}", "GET", "Fetches the XML for a specific replication server link." %}
**Request:** URL is all that is required

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "replication/server/{source id}/link/{destination id}", "PUT", "Updates replication link weight." %}
**Request:** XML describing the link.

**Request/Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "replication/server/{source id}/link/{destination id}", "POST", "Update replication link weight." %}
**Request:** XML describing the link.

**Request/Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "replication/server/{source id}/link/{destination id}", "DELETE", "Deletes the specified link." %}
**Request:** URL is all that is required.
{% endrestapi %}