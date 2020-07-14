---
title: Computer
---

{% restapi "api/computers", "GET", "Fetches a list of computers." %}
**Request:** URL is all that is required. You can reduce the amount of information returned in the response using the ```?fields=``` parameter, as described in **Filtering Response Fields**.

**Response:** List of computers and Last Report time.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}", "GET", "Gets a computer's core properties." %}
**Request:** URL is all that is required. You can use a computer id or a correlation id as {computer id}. You can reduce the amount of information returned in the response using the ?fields= parameter (use --fields in the IEM cli), as described in **Filtering Response Fields**.

**Response:** 
- If it is a computer, it lists all of the computer's properties.
- If it is a correlation, it lists all of the master representation's properties and all of the other representations' properties in different `ManagementExtension` nodes.

The reported properties belong to the master representation. A new xml node called `ManagementExtension` is present for each correlated device, the `Type` attribute of which is set to the AgentType of that specific device. 
All the properties defined for the device are reported within this node. 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}", "DELETE", "Marks a computer as deleted in the database." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "api/computer/{computer id}/settings", "GET", "Gets a computer's settings." %}
**Request:** URL is all that is required.

**Response:** Lists client settings for a computer. 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/settings", "POST", "Updates or creates the value of a setting." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/settings", "DELETE", "Deletes all activations for the specified analysis." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "api/computers/settings", "POST", "Updates or creates settings for multiple computers." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/setting/{setting name}", "GET", "Gets the setting value." %}
**Request:** URL is all that is required.

**Response:** Returns setting value.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/setting/{setting name}", "PUT", "Updates the setting value." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/setting/{setting name}", "POST", "Updates or creates the setting value." %}
**Request:** XML for setting.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/setting/{setting name}", "DELETE", "Delete computer setting." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "api/computer/{computer id}/fixlets", "GET", "Gets the list of relevant Fixlets." %}
**Request:** URL is all that is required.

**Response:** The list of relevant Fixlets and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/tasks", "GET", "Gets the list of relevant tasks." %}
**Request:** URL is all that is required.

**Response:** List of relevant tasks and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/fixletsandtasks", "GET", "Gets the list of all the relevant fixlets and tasks." %}
**Request:** URL is all that is required.

**Response:** List of relevant fixlets and tasks and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "api/computer/{computer id}/analyses", "GET", "Gets the list of relevant analyses and their ID." %}
**Request:** URL is all that is required.

**Response:** List of relevant analyses and their ID.

**Response Schema:** BESAPI.xsd
{% endrestapi %}


{% restapi "api/computer/{computer id}/baselines", "GET", "Gets the list of relevant baselines and their ID." %}
**Request:** URL is all that is required.

**Response:** List of relevant baselines and their ID.

**Response Schema:** BESAPI.xsd 
{% endrestapi %}

{% restapi "api/computer/{computer id}/mailbox", "GET", "Gets contents of the computer's mailbox" %}
**Request:** URL is all that is required.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

#### Filtering Response Fields
You can use the ```?fields=``` parameter to limit the fields returned for a given resource when using the API resources ```/api/computers``` and ```/api/computer/{computer id}```.
The value following the ```?fields=``` parameter is the filter. Because the XML is case sensitive, ensure that you specify the correct case to avoid errors. 

Use these characters to define the filter:
- ```,``` to separate elements, children, and attribute pairs
- ```,``` within the parenthesis to denote multiple children
- ```&```as pairing marker for attributes
- ```<...>``` to denote attributes
- ```=``` to mark LHS and RHS of attributes

**Note:** These are reserved characters. By default, they are not allowed in the name of the filter.

These are some example of filtering results using ```?fields=```:

```xml
/api/computer/1234?fields=Property<Name=Computer%20Name,OS,Last%20Report%20Time>
/api/computer/1234?fields=Property<Analysis&Name=Analysis1&Computer%20Name,&OS,Analysis2&Last%20Report%20Time> 
```
