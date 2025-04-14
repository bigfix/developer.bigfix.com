---
title: Exported Metrics
---

The metrics to be collected and exposed by the BigFix Relay, in the context of its HTTP server operations, are summarized in the table below:


| Name | Type | Description |
| ---  | --- | --- |
| bigfix_http_server_handled_requests_count | Counter | The number of requests handled by the HTTP server. |
| bigfix_http_server_accepted_sockets_count | Counter | The number of sockets accepted by the HTTP server. |
| bigfix_http_server_active_connections | Gauge | The number of currently active connections to the HTTP server. |
| bigfix_http_server_request_parsing_time | Histogram | The time spent by the HTTP server to accept and parse the request parameters. This information is aggregated in buckets, plus total time and request count. |
| bigfix_http_server_handlers_processing_time | Histogram | The time spent by the HTTP server to process the request until its end on the dedicated handler for the specified route. This information is aggregated in buckets, plus total time and request count. |
| bigfix_relay_active_persistent_connections | Gauge | The number of currently active persistent connections in the BigFix Relay. |
