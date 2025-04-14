---
title: Admin
---

In order to run the Admin APIs, you must be logged in as Master Operator (MO).

{% restapi "/api/admin/fields", "GET", "Returns the list of admin fields." %}

**Request:** URL is all that is required

For example: ```https://server.bigfix.com:52311/api/admin/fields```

**Response:** XML results.

For example: 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <AdminField Resource="http://server.bigfix.com:52311/api/admin/field/usePre70ClientCompatibleMIME">
        <Name>usePre70ClientCompatibleMIME</Name>
        <Value>false</Value>
    </AdminField>
</BESAPI>
``` 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/admin/fields", "POST", "Sets one or more admin fields." %}
**Request:** One or more admin fields in a XML document.

**Request Schema:** BESAPI.xsd

**Response:** Details of all the admin fields after update..

**Response Schema:** BESAPI.xsd
{% endrestapi %}


{% restapi "/api/admin/field/{field}", "GET", "Fetches specific admin field value." %}
**Request:** URL is all that is required

For example: ```https://server.bigfix.com:52311/api/admin/field/usePre70ClientCompatibleMIME```

**Response:** XML results

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <AdminField Resource="http://server.bigfix.com:52311/api/admin/field/usePre70ClientCompatibleMIME">
        <Name>usePre70ClientCompatibleMIME</Name>
        <Value>false</Value>
    </AdminField>
</BESAPI>
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/admin/field/{field}", "PUT", "Sets a specific admin field." %}
**Request:** Send an XML with the admin field value.

**Request Schema:** BESAPI.xsd

**Response:** Details of the admin field after update.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/admin/field/{field}", "POST", "Sets a specific admin field." %}
**Request:** Send an XML with the admin field value.

**Request Schema:** BESAPI.xsd

**Response:** Details of the admin field after update.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/admin/field/{field}", "DELETE", "Deletes the specific admin field." %}
**Request:** Send XML with the admin field value.

For example: ```https://server.bigfix.com:52311/api/admin/field/usePre70ClientCompatibleMIME```

**Request Schema:** BESAPI.xsd

**Response:** Details of the admin field after update.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/admin/masthead", "GET", "Exports the current masthead." %}
**Response:**  Masthead file. 
{% endrestapi %}

{% restapi "/api/admin/masthead", "POST", "Updates the masthead in the database." %}
**Request:** Masthead file in post body

**Response:** Details of the admin field after update. You will get HTTP 200 upon success.

**Notes**: If FIPS setting is changed, the server will need to be restarted. 
{% endrestapi %}

{% restapi "/api/admin/masthead/parameters", "GET", "Returns the list of the masthead configuration parameters and values." %}
**Response:** XML results.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <MastheadParameters Resource="http://server.bigfix.com:52311/api/admin/masthead/parameters">
        <PortNumber>52311</PortNumber>
        <GatherInterval>Half Day</GatherInterval>
        <Controller>console</Controller>
        <InitialLockState>Unlocked</InitialLockState>
        <RequireFIPSCompliantCrypto>false</RequireFIPSCompliantCrypto>
    </MastheadParameters>
</BESAPI>
```

**Response schema:** BESAPI.xsd.
{% endrestapi %}


{% restapi "/api/admin/icon", "GET", "Exports the current client icon." %}
**Response:** Icon file.

**Content type:** image/bmp
{% endrestapi %}

{% restapi "/api/admin/icon", "PUT", "Updates/sets client icon." %}
**Request:** Icon in POST body.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "/api/admin/icon", "POST", "Updates/sets client icon." %}
**Request:** Icon in POST body.

**Response:** HTTP 200 upon success.
{% endrestapi %}

{% restapi "/api/admin/icon", "DELETE", "Deletes current client icon." %}
{% endrestapi %}

{% restapi "/api/admin/propagate/operator/{operator}", "POST", "Propagates the specified operator site." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}


{% restapi "/api/admin/propagate/actionsite", "POST", "Propagates the master action site." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}


{% restapi "/api/admin/propagate/operators", "POST", "Propagates all operator sites." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}


{% restapi "/api/admin/propagate/resetepoch", "POST", "Resets the database epoch forcing Console's to refresh their cache." %}
**Request:** URL Only.

**Response:** HTTP 200 upon success.
{% endrestapi %}


{% restapi "/api/admin/options", "GET", "Displays the current admin options for the server." %}
**Request:** URL Only.

**Response:** HTTP 200, BESAPI XML of admin options.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <SystemOptions Resource="http://server.bigfix.com:52311/api/admin/options">
        <MinimumRefreshSeconds>15</MinimumRefreshSeconds>
        <DefaultFixletVisibility>Visible</DefaultFixletVisibility>
    </SystemOptions>
</BESAPI>
```

{% endrestapi %}

{% restapi "/api/admin/options", "POST", "Updates the admin options from the provided BESAPI XML." %}
**Request:** BESAPI representation of 1 or more admin options.

**Response:** HTTP 200 on success, BESAPI XML of admin options.

For example: 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ClientReports Resource="http://server.bigfix.com:52311/api/admin/reports">
        <EncryptionStatus>Disabled</EncryptionStatus>
        <Details>Report encryption is currently DISABLED.</Details>
    </ClientReports>
</BESAPI>
```

**Response schema:** BESAPI.xsd
{% endrestapi %}


{% restapi "/api/admin/reports", "GET", "Returns the client report settings." %}
**Request:** BESAPI XML of settings.

**Response:** BESAPI.xsd
{% endrestapi %}


{% restapi "/api/admin/reports/cert", "GET", "Returns the server certificate." %}
**Response:** Certificate in PEM format.
{% endrestapi %}


{% restapi "/api/admin/reports/key", "GET", "Returns the server certificate." %}
**Response:** Certificate in PEM format.
{% endrestapi %}

