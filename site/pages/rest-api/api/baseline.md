---
title: Baseline
---

{% restapi "/api/baseline/{site type}/{site name}", "POST", "Creates a new baseline." %}
**Request:** Complete XML for the object in the body of the request.
This is a XML file for creating a new baseline:

```xml
<?xml version="1.0"?>
<xs:schema id="BESActionTarget" xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="qualified" elementFormDefault="qualified">
  <xs:element name="BESActionTarget">
    <xs:complexType>
      <xs:choice>
        <xs:element name="ComputerName" type="xs:normalizedString" maxOccurs="unbounded" />
        <xs:element name="ComputerID" type="xs:nonNegativeInteger" maxOccurs="unbounded" />
        <xs:element name="CustomRelevance" type="xs:normalizedString" />
        <xs:element name="ComputerGroup" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Name" type="xs:normalizedString" minOccurs="1" />
              <xs:element name="SiteName" type="xs:normalizedString" minOccurs="1" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:choice>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

**Request Schema:** BES.xsd

**Response Schema:** BESAPI.xsd

{% endrestapi %}

{% restapi "/api/baselines/{site type}/{site name}", "GET", "Lists the baselines belonging to {site name}." %}
**Request:** URL is all that is required

**Response:** Submitted query in XML format. 
For example, if you request:

```
$ ./iem get /api/clientquery/12 <?xml version="1.0" encoding="UTF-8"?>
```

you can get the following response:

```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <ClientQuery Resource="http://IP_address:52311/api/clientquery/12">
  <ApplicabilityRelevance>true</ApplicabilityRelevance>
  <QueryText>version of operating system</QueryText>
    <Target>
      <ComputerName>Magicbox</ComputerName>
      <ComputerName>Mercury</ComputerName>
    </Target>
  </ClientQuery>
</BESAPI>
```

where *IP_address* is the IP address of the BigFix Server.

**Response:** Submitted query in XML format.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}", "GET", "Retrieves from site {site name} the baseline with the specified {id}." %}
**Request:** Complete XML for the object in the body of the request. You can specify up to 4 keys when invoking the API:
- *filter=value* to filter the results based on the string specified as value.
- *output=json* to request to generate a result in JSON format. If not specified, the result will be in XML format.
- *stats=1* to display the total number of results and the number of agents that responded.
- *start=x, count=y* to display y results starting from result number x.

**Request Schema:** BES.xsd

**Response:** JSON or XML query results.

**Response Schema:** Results formatted as *QueryResults* in BESAPI.xsd.
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}/computers", "GET", "Lists the computers that are relevant for the baseline with ID {id}." %}
**Request:** Complete XML for the object in the body of the request. You can specify up to 4 keys when invoking the API:
- *filter=value* to filter the results based on the string specified as value.
- *output=json* to request to generate a result in JSON format. If not specified, the result will be in XML format.
- *stats=1* to display the total number of results and the number of agents that responded.
- *start=x, count=y* to display y results starting from result number x.

**Request Schema:** BES.xsd

**Response:** JSON or XML query results.

**Response Schema:** Results formatted as *QueryResults* in BESAPI.xsd.
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}", "DELETE", "Deletes a baseline with ID {id}." %}
**Request:** Complete XML for the object in the body of the request. You can specify up to 4 keys when invoking the API:
- *filter=value* to filter the results based on the string specified as value.
- *output=json* to request to generate a result in JSON format. If not specified, the result will be in XML format.
- *stats=1* to display the total number of results and the number of agents that responded.
- *start=x, count=y* to display y results starting from result number x.

**Request Schema:** BES.xsd

**Response:** JSON or XML query results.

**Response Schema:** Results formatted as *QueryResults* in BESAPI.xsd.
{% endrestapi %}

**Note:**
1. If you are using the REST API, be aware that only the operator issuing the query can see its results.
2. The BigFix Query feature does not support requests that require the inspector context.

## Syncing out-of-sync baselines

If you target your query by group, ensure to specify the *SiteName*.
This is an example for a group named manual created by a master operator:

```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <ClientQuery Resource="http://IP_address:52311/api/clientquery/12">
  <ApplicabilityRelevance>true</ApplicabilityRelevance>
  <QueryText>names of processes</QueryText>
    <Target>
      <ComputerGroup>
        <Name>manual</Name>
        <SiteName>ActionSite</SiteName>
      </ComputerGroup>
    </Target>
  </ClientQuery>
</BESAPI>
```

By default, the highest number of targets for each group is 100.

You can change this value by editing the **_Enterprise Server_BigFix Query_MaxTargetsForGroups** computer setting.

This is how the **_Enterprise Server_BigFix Query_MaxTargetsForGroups** settings works:
- If the number of targets in a group exceeds the value of **_Enterprise Server_BigFix Query_MaxTargetsForGroups**, the BigFix Query request is sent to all the clients and each client determines whether or not it is a member of the targeted group.
- If the number of targets does not exceed the value of **_Enterprise Server_BigFix Query_MaxTargetsForGroups**, the BigFix server determines which clients are members of the targeted group and the BigFix Query request is sent only to those clients.
- If the list of specified groups contains at least one automatic computer group or one client-evaluated static computer group, this settings is ignored and the BigFix Query request is sent to all the clients. Each client determines whether or not it is a member of the targeted group.
