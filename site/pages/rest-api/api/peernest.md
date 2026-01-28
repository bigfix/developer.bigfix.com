---
title: PeerNest
---

PeerNest is a BigFix feature that allows you to share binary files among BigFix Clients located in the same subnet. In this context, a "peer host" is a BigFix Client that can serve files to other Clients.

This family of REST APIs lets you retrieve aggregated metrics to monitor the PeerNest activity.
The BigFix Server collects the PeerNest activity information from BigFix Client version 11.0.6 or newer.

{% restapi "/api/peernestmetrics/relays", "GET", "Retrieves metrics about the PeerNest activity under each Relay." %}
**Request:** URL is all that is required.

**Response:** A JSON text that maps each Relay hostname to a set of metrics about the BigFix Clients registered with that Relay.

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/peernestmetrics/relays
```

May return this JSON:
```json
{
    "relay2": {
        "NumberOfDownloadsFromRelay": 1,
        "NumberOfDownloadsFromPeers": 2,
        "BytesDownloadedFromRelay": 11674,
        "BytesDownloadedFromPeers": 23348,
        "PercentageOfDataViaRelay": 33.333,
        "PercentageOfDataViaPeers": 66.667,
        "NumberOfPeersThatServedPeers": 2,
        "NumberOfUniqueFilesServedByPeers": 1,
        "TotalBytesOfUniqueFilesServedByPeers": 11674,
        "NumberOfSubnetsServedByRelay": 2
    },
    "winserver2019": {
        "NumberOfDownloadsFromRelay": 14,
        "NumberOfDownloadsFromPeers": 20,
        "BytesDownloadedFromRelay": 68960197,
        "BytesDownloadedFromPeers": 78680947,
        "PercentageOfDataViaRelay": 46.708,
        "PercentageOfDataViaPeers": 53.292,
        "NumberOfPeersThatServedPeers": 4,
        "NumberOfUniqueFilesServedByPeers": 11,
        "TotalBytesOfUniqueFilesServedByPeers": 59773295,
        "NumberOfSubnetsServedByRelay": 2
    }
}
```
{% endrestapi %}

{% restapi "/api/peernestmetrics/subnets", "GET", "Retrieves metrics about the PeerNest activity in each subnet." %}
**Request:** URL is all that is required.
You can add one of the following optional parameters to filter the results:
* `subnetList`, containing the addresses of the desired subnets, separated by commas
* `relay`, containing the hostname of the relay whose subnet is desired

**Response:** A JSON text that maps each subnet address to a set of metrics about the BigFix Clients in that subnet.

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.test:com/api/peernestmetrics/subnets
```

May return this JSON:
```json
{
    "10.14.74.0/25": {
        "NumberOfPeersThatServedPeers": 1,
        "NumberOfPeersThatRequestedFromPeers": 2,
        "RequestingPeersToServingPeersRatio": 2,
        "NumberOfPeersThatRequestedFiles": 3,
        "NumberOfUniqueFilesServedByPeers": 1,
        "PeerIDThatServedFilesTheMost": 99,
        "PeerIDThatServedFilesTheLeast": 99,
        "TotalBytesServedByPeers": 23348,
        "TotalBytesServedByRelays": 11674
    },
    "10.14.77.0/25": {
        "NumberOfPeersThatServedPeers": 3,
        "NumberOfPeersThatRequestedFromPeers": 4,
        "RequestingPeersToServingPeersRatio": 1.333,
        "NumberOfPeersThatRequestedFiles": 4,
        "NumberOfUniqueFilesServedByPeers": 11,
        "PeerIDThatServedFilesTheMost": 10747714,
        "PeerIDThatServedFilesTheLeast": 537509916,
        "TotalBytesServedByPeers": 78680947,
        "TotalBytesServedByRelays": 68960197
    }
}
```

We can get the same response if we call the API and specify the list of all subnets, as follows.
```
https://server.bigfix.com:52311/api/peernestmetrics/subnets?subnetList=10.14.77.0/25,10.14.74.0/25
```

In the following example, let us assume that the list of subnets served by the relay named "relay2" is just one subnet (10.14.74.0/25). In this case, this call:
```
http://server.bigfix.com:52311/api/peernestmetrics/subnets?relay=relay2
```

Will return the following JSON:
```json
{
    "10.14.74.0/25": {
        "NumberOfPeersThatServedPeers": 1,
        "NumberOfPeersThatRequestedFromPeers": 2,
        "RequestingPeersToServingPeersRatio": 2,
        "NumberOfPeersThatRequestedFiles": 3,
        "NumberOfUniqueFilesServedByPeers": 1,
        "PeerIDThatServedFilesTheMost": 99,
        "PeerIDThatServedFilesTheLeast": 99,
        "TotalBytesServedByPeers": 23348,
        "TotalBytesServedByRelays": 11674
    }
}
```
{% endrestapi %}

{% restapi "/api/peernestmetrics/peerHosts", "GET", "Retrieves statistics about the PeerNest activity for peers acting as hosts." %}
**Request:** URL is all that is required.
You can add one of the following optional parameters to filter the results:
* `hostList`, containing the IDs of the desired peer hosts, separated by commas
* `subnet`, containing the address of the subnet with the desired peer hosts

**Response:** A JSON text that maps each computer ID to a set of metrics about the files its BigFix Client shared as part of the PeerNest.

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/peernestmetrics/peerHosts?hostList=10747714,1611855877
```

May return this JSON:
```json
{
    "10747714": {
        "NumberOfRequestsServed": 10,
        "NumberOfUniqueFilesServed": 6,
        "TotalBytesServed": 39180321,
        "NumberOfPeersServed": 2
    },
    "1611855877": {
        "NumberOfRequestsServed": 7,
        "NumberOfUniqueFilesServed": 5,
        "TotalBytesServed": 34328890,
        "NumberOfPeersServed": 3
    }
}
```

If the subnet `10.14.77.0/25` only contains the peer hosts with ID `10747714` and `1611855877`, the following call will return the same response.
```
https://server.bigfix.com:52311/api/peernestmetrics/peerHosts?subnet=10.14.77.0/25
```

{% endrestapi %}

## Filtering Response Parameters
You can add the following query parameters to filter the data by time:
- `dateFrom`, containing a date in the format `yyyy-mm-dd`, to only consider data collected since that day (included).
- `dateTo`, containing a date in the format `yyyy-mm-dd`, to only consider data collected before that day (excluded).

The time parameters can be used together or separately.

This example shows the URL for a `GET` request that uses the aforementioned parameters to only aggregate data collected between two dates:
```
https://server.bigfix.com:52311/api/peernestmetrics/subnets?dateFrom=2025-11-19&dateTo=2025-12-30
```
