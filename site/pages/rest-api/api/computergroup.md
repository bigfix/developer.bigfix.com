---
title: Computer Group
---
**Note:** For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

{% restapi "computergroups/{site type}/{site name}", "GET", "Fetches the list of computer groups in the specified site." %}
**Request:** URL is all that is required.

**Response:** List of groups.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computergroups/{site type}/{site name}", "POST", "Creates a computer group in the specified site as described in the posted XML document." %}
**Request:** The definition of the computer group, written in XML.
Below is a sample XML code that can be sent to the REST API with a POST request to the create a Server Based computer group.
This group will contain all the correlation devices administered by `admin@example.com`. In this example, we assume that there is a property with ID `70` that reports the email address of the administrator of that machine as saved in the hypervisor. In a vSphere environment, such a property could be created to represent a field of the VM Notes section.

```
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ServerBasedGroup>
        <Name>Agents administered by admin@example.com</Name>
        <MembershipRules JoinByIntersection="true">
            <MembershipRule Comparison="Contains">
                <PropertyID>70</PropertyID>
                <SearchText>admin@example.com</SearchText>
            </MembershipRule>
            <MembershipRule Comparison="Equals">
                <PropertyID>24</PropertyID>
                <SearchText>native</SearchText>
            </MembershipRule>
        </MembershipRules>
    </ServerBasedGroup>
</BESAPI>
```


**Request Schema:** BES.xsd

**Response:** Response BESAPI XML listing the created objects.
{% endrestapi %}


{% restapi "computergroup/{site type}/{site name}/{id}", "GET", "Fetches the BES XSD representation of the specified computer group." %}
**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}/{id}", "PUT", "Updates the specified computer group." %}
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}", "POST", "Creates a computer group in the specified site." %}
**Request:** XML file describing the computer group.

**Request Schema:** BES.xsd

**Response:** New BESAPI XML for the computer group.

**Response Schema:** BESAPI.xsd

**Note:** For backward compatibility, this action still accepts an id but ignore it even if referencing a non-existing object.
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}/{id}", "DELETE", "Deletes the indicated computer group." %}
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}/{id}/computers", "GET", "Fetches a list of computer relevant to this computer group. This essentially gives you the computers that are members of this group." %}
**Response:** List of computer resources that are relevant. 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "computergroup/{site type}/{site name}/{id}/refresh", "POST", "Refreshes a computer group of the server based type." %}
**Request:** URL is all that is required. For example: https://server.bigfix.com:52311/api/computergroup/44/refresh

**Request Schema:** BES.xsd
{% endrestapi %}
