---
title: BigFix Query
---

{% restapi "/api/clientquery", "POST", "Submits a new BigFix Query request." %}
**Request:** The XML file that contains the query to be sent. This is a sample XML file of the POST request that is sent to the REST API of the Bigfix Server.

```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ClientQuery>
        <ApplicabilityRelevance>true</ApplicabilityRelevance>
        <QueryText>version of operating system</QueryText>
        <Target>
            <ComputerName>Magicbox</ComputerName>
            <ComputerName>Mercury</ComputerName> 
        </Target>
    </ClientQuery>
</BESAPI>
```

- The `ApplicabilityRelevance` element contains the relevance that should be verified before processing the query. 
- The `QueryText` element contains the text of the query
- The `UseClientContext` element, if present and set to `true`, makes the query run in client context.
- The `Target` element is built according to the BESActionTarget.xsd schema.

The following is the schema for building a request file:

```xml
<xs:element name="ClientQuery">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="ApplicabilityRelevance" type="xs:normalizedString" minOccurs="1" maxOccurs="1"/>
            <xs:element name="QueryText" type="xs:normalizedString" minOccurs="1" maxOccurs="1" />
            <xs:element name="UseClientContext" type="xs:boolean" minOccurs="0" />
            <xs:element name="Target" type="BESClientQueryTarget" minOccurs="0" />
        </xs:sequence>
    </xs:complexType>
</xs:element>
```

You can address the request to one of these types of targets:

- Any number of specific computers identified by computer name.
- Any number of specific computers identified by computer identifier.
- The computers for which a custom relevance expression returns TRUE.
- Any number of manual computer groups.

The following is the schema for filling the `Target` field:

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

If you plan to address your query to a computer group, read carefully the information contained in the **Targeting by group** criteria topic.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd

{% endrestapi %}

{% restapi "/api/clientquery/{id}", "GET", "Retrieves the submitted query that was assigned the identifier `{id}`." %}
**Request:** URL is all that is required

**Response:** Submitted query in XML format. 
For example, if you request:

```
$ ./iem get /api/clientquery/12
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
where `IP_address` is the IP address of the BigFix Server.

**Note**: On Windows and Linux, the result of a fast query retrieved using this request is always truncated to 1024 bytes.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/clientqueryresults/{id}?par1=value1&par2=value2&..", "GET", "Retrieves the result of a BigFix Query, optionally with paging options." %}
**Request:** Complete XML for the object in the body of the request. You can specify up to 4 keys when invoking the API:
- `filter=value` to filter the results based on the string specified as value.
- `output=json` to request to generate a result in JSON format. If not specified, the result will be in XML format.
- `stats=1` to display the total number of results and the number of agents that responded.
- `start=x, count=y` to display `y` results starting from result number `x`.

For example:
```xml
<BESAPI xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance xsi:noNamespaceSchemaLocation=”BESAPI.xsd”>
    <ClientQueryResults>
        <QueryResult>
            <ComputerID>549239</ComputerID>
            <ComputerName>theName</ComputerName>
            <SubQueryID>1</SubQueryID>
            <IsFailure>0</IsFailure>
            <Result>True</Result>
            <ResponseTime>4000</ResponseTime>
        </QueryResult>
    </ClientQueryResults>
</BESAPI>
```

**Request Schema:** BES.xsd

**Response:** JSON or XML query results.

**Response Schema:** Results formatted as *QueryResults* in BESAPI.xsd.

{% endrestapi %}

**Note:**
1. The BigFix Query requests and their results are stored in the BigFix database. To avoid using too much space in the database, you can customize the BigFix Query advanced options in the BigFix Administration Tool [as described here](https://help.hcltechsw.com/bigfix/11.0/platform/Platform/Config/c_list_of_advanced_options.html#advanced_opt_bfquery).
2. If you are using the REST API, be aware that only the operator issuing the query can see its results.
3. BigFix now supports queries with inspector context when you set the `UseClientContext` element to `true` in the REST API requests.

## Targeting by group criteria

If you target your query by group, ensure to specify the `SiteName`.
This is an example for a group named manual created by a master operator:

```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ClientQuery>
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
