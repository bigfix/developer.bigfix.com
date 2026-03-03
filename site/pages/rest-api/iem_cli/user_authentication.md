---
title: User Authentication and Session Management
---
To start the command line interface, first log in to the server with the following command from a command prompt:

```
iem LOGIN --server=<bigfix_server> --user=<operator_name> --password=<operator_password> [--masthead=<path_to_masthead>]
```

For more details, see [IEM Command-Line Interface Samples](/rest-api/iem_cli/iem_samples.html#login)

If the server uses a self-signed certificate for HTTPS interactions, at the first login you are prompted to accept or decline the certificate. 
If you choose to trust it, the certificate is cached in the local data directory and used to validate all future interactions with the server.
You can use the *--masthead* argument to prevent displaying the certificate trust prompt. In this case, the masthead file is copied into the local cache directory and used for all future interactions with the server.

Upon a successful login, the server provides the IEM CLI utility with a session token that lasts, by default, 5 minutes. After 5 minutes of inactivity, 
the session token expires and you must log in again to the IEM CLI. You can customize the duration of the session token by configuring the 
**_BESDataServer_APIAuthenticationTimeoutMinutes** setting on the server and then restarting the server.

## Token Authentication
Starting from BigFix Platform 11.0.6, you can authenticate to the IEM CLI by passing the authentication token as a text parameter, as follows:
```
iem login --server=<bigfix_server> --token=<token>
```

In the above, `<token>` is the base64-encoded token.

## Updating the root server certificate
If the root server certificate has changed, for example because the server signing certificate was rotated, as described in 
[Generating a new encryption key](https://help.hcl-software.com/bigfix/11.0/platform/Platform/Config/c_generating_a_new_encryption_ke.html), the authentication might fail with the following error message:

```
The server's SSL certificate is not trusted.
```

In this case, to update the certificate, delete the IEM CLI data directory folder and then authenticate again.

The IEM CLI data directory folder is:
- `/root/.iem` on Linux systems
- `%LOCALAPPDATA%\BigFix` on Windows systems


**Warning:** If the certificate was not rotated, this error might indicate that a man-in-the-middle attack is trying to compromise your password.
