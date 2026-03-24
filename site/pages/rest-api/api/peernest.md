---
title: PeerNest
---

PeerNest is a BigFix feature that allows you to share binary files among BigFix Clients located in the same subnet. In this context, a "peer host" is a BigFix Client that can serve files to other Clients.

BigFix Clients version 11.0.6 and newer communicate information about their PeerNest activity to the BigFix Server, if that feature is enabled. The BigFix Server uses that information to calculate several metrics that can help you monitor the PeerNest activity.
This family of REST APIs provides access to those metrics.

By default, the reported metrics are calculated on all available data. These APIs accept optional parameters to filter by date, but older data may not be available anymore, because it is periodically discarded. You can configure the amount of time that PeerNest performance data should be kept for. For more information, see the [Client settings](https://help.hcl-software.com/bigfix/11.0/platform/Platform/Config/r_client_set.html) page.

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
  "relay1": {
    "Prefetch": {
      "NumberOfUniqueFilesServedByPeers": 2,
      "TotalBytesOfUniqueFilesServedByPeers": 26801939,
      "NumberOfDownloadsFromRelay": 2,
      "NumberOfDownloadsFromPeers": 2,
      "BytesDownloadedFromRelay": 26801939,
      "BytesDownloadedFromPeers": 26801939,
      "PercentageOfDataViaRelay": 50,
      "PercentageOfDataViaPeers": 50,
      "NumberOfPeersThatServedPeers": 1,
      "NumberOfSubnetsServedByRelay": 1
    },
    "Gather": {
      "NumberOfDistinctSiteVersionsDistributed": 3,
      "NumberOfSiteVersionsGatheredOnceFromRelay": 2,
      "NumberOfSiteVersionsGatheredMultipleTimesFromRelay": 1,
      "NumberOfDownloadsFromRelay": 8,
      "NumberOfDownloadsFromPeers": 0,
      "BytesDownloadedFromRelay": 3176040,
      "BytesDownloadedFromPeers": 0,
      "PercentageOfDataViaRelay": 100,
      "PercentageOfDataViaPeers": 0,
      "NumberOfPeersThatServedPeers": 0,
      "NumberOfSubnetsServedByRelay": 2
    },
    "All": {
      "NumberOfDownloadsFromRelay": 10,
      "NumberOfDownloadsFromPeers": 2,
      "BytesDownloadedFromRelay": 29977979,
      "BytesDownloadedFromPeers": 26801939,
      "PercentageOfDataViaRelay": 52.797,
      "PercentageOfDataViaPeers": 47.203,
      "NumberOfPeersThatServedPeers": 1,
      "NumberOfSubnetsServedByRelay": 2
    }
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
  "10.14.77.0/25": {
    "Prefetch": {
      "NumberOfUniqueFilesServedByPeers": 2,
      "NumberOfPeersThatServedPeers": 1,
      "NumberOfPeersThatRequestedFromPeers": 1,
      "RequestingPeersToServingPeersRatio": 1,
      "NumberOfPeersThatRequestedFiles": 2,
      "PeerIDThatServedFilesTheMost": 1088993101,
      "PeerIDThatServedFilesTheLeast": 1088993101,
      "TotalBytesServedByPeers": 26801939,
      "TotalBytesServedByRelays": 26801939
    },
    "Gather": {
      "NumberOfDistinctSiteVersionsGathered": 3,
      "NumberOfSiteVersionsGatheredOnce": 0,
      "NumberOfSiteVersionsGatheredMultipleTimes": 3,
      "NumberOfPeersThatServedPeers": 0,
      "NumberOfPeersThatRequestedFromPeers": 0,
      "RequestingPeersToServingPeersRatio": 0,
      "NumberOfPeersThatRequestedFiles": 1,
      "PeerIDThatServedFilesTheMost": 0,
      "PeerIDThatServedFilesTheLeast": 0,
      "TotalBytesServedByPeers": 0,
      "TotalBytesServedByRelays": 3123498
    },
    "All": {
      "NumberOfPeersThatServedPeers": 1,
      "NumberOfPeersThatRequestedFromPeers": 29925437,
      "RequestingPeersToServingPeersRatio": 29925437,
      "NumberOfPeersThatRequestedFiles": 26801939,
      "PeerIDThatServedFilesTheMost": 1088993101,
      "PeerIDThatServedFilesTheLeast": 1088993101,
      "TotalBytesServedByPeers": 2,
      "TotalBytesServedByRelays": 1
    }
  }
}
```

We can get the same response if we call the API and specify the list of all subnets, as follows.
```
https://server.bigfix.com:52311/api/peernestmetrics/subnets?subnetList=10.14.74.0/25
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
You **must** add at least one of the following parameters to filter the results:
* `hostList`, containing the IDs of the desired peer hosts, separated by commas
* `subnet`, containing the address of the subnet with the desired peer hosts

**Response:** A JSON text that maps each computer ID to a set of metrics about the files its BigFix Client shared as part of the PeerNest.

**Response Schema:** BESAPI.xsd

For example, this call:
```
https://server.bigfix.com:52311/api/peernestmetrics/peerHosts?hostList=1088993101
```

May return this JSON:
```json
{
  "1088993101": {
    "Prefetch": {
      "NumberOfUniqueFilesServed": 2,
      "NumberOfRequestsServed": 2,
      "TotalBytesServed": 26801939,
      "NumberOfPeersServed": 1
    },
    "Gather": {
      "NumberOfDistinctSiteVersionServed": 7,
      "NumberOfRequestsServed": 53,
      "TotalBytesServed": 5049501,
      "NumberOfPeersServed": 2
    },
    "All": {
      "NumberOfRequestsServed": 55,
      "TotalBytesServed": 31851440,
      "NumberOfPeersServed": 2
    }
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
