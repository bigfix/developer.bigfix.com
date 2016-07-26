---
title: Action
---

{% restapi "actions", "GET", "Fetches list of actions." %}
**Request:** URL is all that is required

**Response:** List of Actions.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "actions", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "actions", "POST", "Creates a new action." %}
**Request:** BES XML for the action.

**Response Schema:** BESAPI.xsd

POST Example from Source Fixlet:

In the target section of the XML file, specify the "ComputerID" if you want the action to be sent to the client 
mailbox. For example:

```
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
 <SourcedFixletAction>
   <SourceFixlet>
     <Sitename>TestSite</Sitename>
     <FixletID>83</FixletID>
     <Action>Action1</Action
   </SourceFixlet>
   <Target>
     <ComputerID>13863357</ComputerID>
   </Target>
  <Parameter Name="_BESClient_EMsg_Detail">1000</Parameter>
 </SourcedFixletAction>
</BES>
```

If a "ComputerName" or a list is specified in the target section, the action will not be sent to the client mailbox.

The SourceFixlet can contain SiteID or Sitename. If using Sitename and it's an empty field ActionSite will be assumed.

**Note:** You cannot submit a Multiple Action Group using a MemberAction that contains a FixletSource element. This is relevant to IEM 9.0 and later.
{% endrestapi %}

{% restapi "actions", "DELETE", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}", "GET", "Fetches the BES XML representation of the specified action." %}
**Request:** URL is all that is required

**Response:** 
- HTTP 200 - Returns XML in body of response.
- HTTP 404 - Returns empty response if action is not found.
Response Schema: BES.XSD
{% endrestapi %}

{% restapi "action/{action id}", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}", "POST", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}", "DELETE", "Deletes and stops the specified action." %}

**Request:** URL is all that is required

**Note:** You cannot delete actions that are members of a Multiple Action Group. This note applies to IBM BigFix V9.2 and later.
{% endrestapi %}

{% restapi "action/{action id}/status", "GET", "Gets the status of an action against it's targets." %}
**Request:** URL is all that is required

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "action/{action id}/status", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}/status", "POST", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}/status", "DELETE", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}/stop", "GET", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}/stop", "PUT", "Not supported." %}
{% endrestapi %}

{% restapi "action/{action id}/stop", "POST", "Stops the specified action." %}
**Request:** URL is all that is required
{% endrestapi %}

{% restapi "action/{action id}/stop", "DELETE", "Not supported." %}
{% endrestapi %}