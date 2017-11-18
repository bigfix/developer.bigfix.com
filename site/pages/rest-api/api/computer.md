---
title: Computer
---

{% restapi "computers", "GET", "Fetches a list of computers." %}
**Request:** URL is all that is required.

**Response:** List of computers and Last Report time.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}", "GET", "Gets a computer's core properties." %}
**Request:** URL is all that is required.


#### Filtering Response Fields
You can use the ```?fields=``` parameter to limit the fields returned for a given resource. 
The value following the ```?fields=``` parameter is the filter. Because the XML is case sensitive, ensure that you specify the correct case to avoid errors. These are some example of filtering results using ```?fields=```:

Use ```,``` to denote multiple fields, for example:

```xml
/api/action/<id>/status?fields=Status,Computer
```

Use the following syntax ```:(...)``` to denote children within a field, for example:  

```xml
/api/action/<id>/status?fields=Computer:(Status)
```

Use ```,``` within the parenthesis to denote multiple children, for example:

```xml
/api/action/<id>/status?fields=Computer:(Status,State,StartTime)
```

You can denote children recursively, for example:

```xml
/api/operators?fields=Operator:(InterfaceLogins:(Console,API))
```

Use ```:[...]``` to denote attributes, for example:

```xml
/api/computer/<id>?fields=Property:[Name=Computer%20Name,OS]
```

Use both formats separated by ```,``` to denote both children and attributes, for example:

```xml
/api/operators?fields=Operator:[Resource=<operator resource location>],Operator:(Name,LastLoginTime)
```

**Response:** Lists all of a computer's properties.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}", "DELETE", "Marks a computer as deleted in the database." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "computer/{computer id}/settings", "GET", "Gets a computer's settings." %}
**Request:** URL is all that is required.

**Response:** Lists client settings for a computer. 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/settings", "POST", "Updates or creates the value of a setting." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/settings", "DELETE", "Deletes all activations for the specified analysis." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "computers/settings", "POST", "Updates or creates settings for multiple computers." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "GET", "Gets the setting value." %}
**Request:** URL is all that is required.

**Response:** Returns setting value.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "PUT", "Updates the setting value." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "POST", "Updates or creates the setting value." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/setting/{setting name}", "DELETE", "Delete computer setting." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "computer/{computer id}/fixlets", "GET", "Gets the list of relevant Fixlets." %}
**Request:** URL is all that is required.

**Response:** The list of relevant Fixlets and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/tasks", "GET", "Gets the list of relevant tasks." %}
**Request:** URL is all that is required.

**Response:** List of relevant tasks and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computer/{computer id}/mailbox", "GET", "Gets contents of the computer's mailbox" %}
**Request:** URL is all that is required.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

