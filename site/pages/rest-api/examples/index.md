---
title: REST-API Examples
---

Learn how to implement common use cases with the REST API.

The examples have been implemented for the following tools. See section for usage information:
- [cURL](#cURL)

For the following examples to work successfully:
* `username` must be your username.
* `password` must be your password.
* `server` must be the hostname of your root server.
* `port` must be the port of your root server. By default this is **52311**.

## [cURL](http://curl.haxx.se) Usage
### Security
In order for curl to secure the conecito to the server, you must install a [custom HTTPS certificate](http://www-01.ibm.com/support/docview.wss?uid=swg21505848) and use the `--cacert` option.

Alternatively, you can use the `--insecure` option to disable HTTPS certificate verification.
