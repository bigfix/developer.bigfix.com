---
title: User Authentication and Session Management
---
To start the command line interface, first log in to the server with the following command from a command prompt:

```
iem LOGIN --server <bigfix_server> --user <operator_name> --password <operator_password> [--masthead <path_to_masthead>]
```

If the server uses a self-signed certificate for HTTPS interactions, at the first login you are prompted to accept or decline the certificate. 
If you choose to trust it, the certificate is cached in the local data directory and used to validate all future interactions with the server.
You can use the *--masthead* argument to prevent displaying the certificate trust prompt. In this case, the masthead file is copied into the local cache directory and used for all future interactions with the server.

Upon a successful login, the server provides the IEM CLI utility with a session token that lasts, by default, 5 minutes. After 5 minutes of inactivity, 
the session token expires and you must log in again to the IEM CLI. You can customize the duration of the session token by configuring the 
**_BESDataServer_APIAuthenticationTimeoutMinutes** setting on the server and then restarting the server.

## Updating the root server certificate
If the root server certificate has changed, for example because the server signing certificate was rotated, as described in 
[Generating a new encryption key](http://www.ibm.com/support/knowledgecenter/SSQL82_9.5.0/com.ibm.bigfix.doc/Platform/Config/c_generating_a_new_encryption_ke.html ), the authentication might fail with the following error message:

```
The server's SSL certificate is not trusted.
```

In this case, to update the certificate, delete the IEM CLI data directory folder and then authenticate again.

**Warning:** If the certificate was not rotated, this error might indicate that a man-in-the-middle attack is trying to compromise your password.
