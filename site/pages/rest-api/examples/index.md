---
title: REST-API Examples
---

Learn how to implement common use cases with the REST API.

The examples have been implemented for the following tools. See section for usage information:
- [cURL](#cURL)
- [python](#python)

For these tools to establish a secure connection to the server, you must install a [custom HTTPS certificate](https://help.hcl-software.com/bigfix/11.0/platform/Platform/Config/c_config_custom_certificates.html). Alternatively, you can provide a *disable HTTPS connection* option to the tool you are using. This is described below for every tool.

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
Requests [verifies SSL certificates](https://requests.readthedocs.io/en/latest/user/advanced/#ssl-cert-verification) for HTTPS requests. This is enabled by default, and it will throw an SSL error if it's unable to verify the certificate. You can pass `verify` the path to a CA certificate or a custom one. To ignore verifying SSL, set `verify` to False.

```
>>> requests.get('https://bigfix.server:52311/api/help', verify=False)
<Response [200]>
```

#### How to download the BigFix REST API certificate
If your BigFix REST API is using a self signed certificate, you may need to download it and install it on your computer to avoid certificate verification errors.

To download the authentication certificate, open your browser and visit your BigFix REST API help page
```https://{server IP or hostname}:52311/api/help```

If you are using Firefox, click the warning icon next to the URL, click "Connection not secure", click "More information", which opens a dialog.
Click the "View Certificate" button, which opens a page with the certificate information.
In the "Miscellaneous" section, you can click "PEM (cert)" to download the certificate as a .pem file.

If you are using Chrome, click the warning icon next to the URL, click "Certificate", which opens a dialog.
Go in the "Details" tab, click the "Copy to File..." button, which opens the wizard to export the certificate.
In the wizard, choose "Base-64 encoded X.509 (.CER)" as the export file format.
Follow the wizard until it finishes and exports the certificate as a .cer file.

If you are using a self-signed certificate, you will need to download it again after every certificate rotation.

When using curl, if your BigFix REST API is using a self signed certificate, you will likely get this error:
```
curl: (60) SSL certificate problem: unable to get local issuer certificate
```

To avoid that error, you can skip the certificate validation by passing the "-k" or "--insecure" options. However, it is not a good security practice.

Instead, you can download and install the certificate, or pass it to curl by specifying its path with the "--capath" option.

Here is an example of how to invoke curl and pass it your certificate
```
curl -X GET --cacert "{cert file path}" --user {username}:{password} https://{server IP or hostname}:52311/api/help
```

