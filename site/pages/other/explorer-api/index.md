---
title: BigFix Explorer APIs
---

The BigFix Explorer implements an HTTP server and provides a set of REST APIs.
Any BigFix Operator with sufficient authorization can use these REST APIS.

## How to connect to BigFix Explorer
The HTTP Server of BigFix Explorer, deployed by default on port 9383, will enable HTTPs with a self-signed certificate by default.

## Available resources to evaluate session relevance
The REST APIs made available by the BigFix Explorer are:
- api/relevance used to evaluate the session relevance using the new BigFix Platform component which is BigFix Explorer.
- api/status used to display the status of the target BigFix Explorer instance.

## User Authentication
The REST APIs of the BigFix Explorer will require the basic authentication with the BigFix Operator credentials. The target BigFix Explorer will use the provided user credentials to authenticate to the BigFix Server on the user behalf.
