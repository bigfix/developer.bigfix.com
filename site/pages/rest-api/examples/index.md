---
title: REST-API Examples
---

Learn how to implement common use cases with the REST API.

The examples have been implemented for the following tools. See section for usage information:
- [cURL](#cURL)
- [python](#python)

Ror these tools to establish a secure connection to the server, you must install a [custom HTTPS certificate](http://www-01.ibm.com/support/docview.wss?uid=swg21505848). Alternatively, you can provide a *disable HTTPS connection* option to the tool you are using. This is described below for every tool.

For the following examples to work successfully:
* `username` must be your user name.
* `password` must be your password.
* `server` must be the hos tname of your root server.
* `port` must be the port of your root server. By default this is **52311**.

## [cURL](http://curl.haxx.se) Usage
#### Security
Use the `--cacert` option to specify the custom HTTPS certificate. To disable SSL verification, use the `--insecure` option.

## [python](https://www.python.org/) Usage
Examples have been written using the python [Request Package](http://requests.readthedocs.io/en/master/), which can be installed with [pip](https://pip.pypa.io/) using the following command:
```
$ pip install requests
```

#### Security
Requests [verifies SSL certifiates](https://requests.readthedocs.io/en/latest/user/advanced/#ssl-cert-verification) for HTTPS requests. This is enabled by default, and it will throw an SSL error if it's unable to verify the certificate. You can pass `verify` the path to a CA certificate or a custom one. To ignore verifying SSL, set `verify` to False.

```
>>> requests.get('https://bigfix.server:52311/api/help', verify=False)
<Response [200]>
```


