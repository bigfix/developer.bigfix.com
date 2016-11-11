---
title: Authentication
---

{% section %}

The login from the REST API Client to the BigFix REST API server uses [basic access authentication](http://en.wikipedia.org/wiki/Basic_access_authentication ).

The credentials are the credentials of a valid BigFix Console operator.

{% endsection %}

{% section %}

By default, the session times out after 5 minutes of idle time. You can modify this timeout from the BigFix Console as follows:

2. Select the BigFix server in the Computers list and click **Edit Settings**.
3. Set the desired value in minutes in the **_BESDataServer_APIAuthenticationTimeoutMinutes** setting.
4. Restart the BigFix Server to activate the change.

{% endsection %}

{% section %}


The default HTTP Authentication Realm is:
* *IBM BigFix Server* for BigFix Server V9.2.6 and later
* *IBM Endpoint Manager Server* for BigFix Server with version earlier than 9.2.6.

As a best practice try not to depend on a hard-coded definition of HTTP Authentication Realm.

{% endsection %}

You can use the header field *SessionToken* supplied by the server as an authentication token by returning it in the same header until it expires on the server.

