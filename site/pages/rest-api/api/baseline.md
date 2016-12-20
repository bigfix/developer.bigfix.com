---
title: Baseline
---


{% restapi "/api/baselines/{site type}/{site name}", "GET", "Lists the baselines belonging to the site {site name}." %}
**Request:** URL is all that is required
 - /api/baselines/master --> returns baselines from the master action site
 - /api/baselines/custom/MyCustomSite --> returns baselines from your MyCustomSite custom site.
 - /api/baselines/external/BES Support --> returns baselines from the external site "BES Support"
 - /api/baselines/operator/Daniel --> returns baselines from Daniel's operator site

**Request Schema:** BES.xsd

**Response:** BESAPI description of contained baselines resources. 

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}", "POST", "Creates a new baseline." %}
**Request:** Complete XML for the object in the body of the request.
This is a sample XML file for creating a new baseline:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Baseline>
		<Title>CustomBaseline-iltest</Title>
		<Description><![CDATA[&lt;enter a description of the baseline here&gt; ]]></Description>
		<Relevance>true</Relevance>
		<Category></Category>
		<Source></Source>
		<SourceID></SourceID>
		<SourceSeverity></SourceSeverity>
		<CVENames></CVENames>
		<SANSID></SANSID>
		<MIMEField>
			<Name>x-fixlet-modification-time</Name>
			<Value>Mon, 19 Dec 2016 19:38:28 +0000</Value>
		</MIMEField>
		<Domain>BESC</Domain>
		<BaselineComponentCollection>
			<BaselineComponentGroup>
				<BaselineComponent Name="CustomFixlet1" IncludeInRelevance="true" SourceSiteURL="http://SAMLRootServ-92.saml.ilwolf.sfolab.ibm.com:52311/cgi-bin/bfgather.exe/actionsite" 
				SourceID="40" SyncStatus="synchronized" ActionName="Action1">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Enter your action script here // fixlet 1</ActionScript>
					<SuccessCriteria Option="OriginalRelevance"></SuccessCriteria>
					<Relevance>true</Relevance>
				</BaselineComponent>
				<BaselineComponent Name="CustomFixlet0" IncludeInRelevance="true" SourceSiteURL="http://SAMLRootServ-92.saml.ilwolf.sfolab.ibm.com:52311/cgi-bin/bfgather.exe/actionsite" SourceID="39" SyncStatus="source fixlet differs" ActionName="Action1">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Enter your action script here // fixlet 0// edit</ActionScript>
					<SuccessCriteria Option="OriginalRelevance"></SuccessCriteria>
					<Relevance>true</Relevance>
				</BaselineComponent>
			</BaselineComponentGroup>
		</BaselineComponentCollection>
	</Baseline>
</BES>

```

**Request Schema:** BES.xsd

**Response:** An XML file returning the {id} of the newly created baseline.

This is a sample response file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
   <Baseline Resource="https://dw001:52311/api/baseline/master/42" LastModified="Fri, 16 Dec 2016 01:12:59 +0000">
      <Name>Custom Baseline made for REST API</Name>
      <ID>42</ID>
   </Baseline>
</BESAPI>
```

**Response Schema:** BESAPI.xsd

{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}", "GET", "Retrieves from the site {site name} the baseline with the specified {id}." %}
**Request:** URL is all that is required

**Request Schema:** BES.xsd

**Response:** The XML representation of the baseline with the specified {id}.

**Response Schema:** BES.xsd.
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}", "PUT", "Updates the baseline with the specified {id}." %}
**Request:** The updated XML representation of the baseline with the specified {id}.
 Based on how you manually modify the content of the XML file, you can:
 - Delete components by removing the components' XML elements from the baseline's XML.
 - Create new components by creating the components' XML elements in the baseline's XML.
 - Create new component groups by creating the components groups' XML elements in the baseline's XML.
 - Reorder components by reordering the components' XML elements from the baseline's XML.
 - Reorder component groups by reordering the components groups' XML elements in the baseline's XML.

**Request Schema:** BES.xsd

**Response:** The baseline {id}.

**Response Schema:** Plain text.
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}", "DELETE", "Deletes a baseline with the specified {id}." %}
**Request:** URL is all that is required

{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}/computers", "GET", "Lists the computers that are relevant for the baseline with the specified {id}." %}
**Request:** URL is all that is required

**Response:** The list of XML representations of the computers that are relevant for the baseline with the specified {id}.

**Response Schema:** BESAPI.xsd.
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}/sync", "GET", "Responds with a synchronized version of the baseline with the specified {id}." %}
**Request:** URL is all that is required

**Response:** If the request succeeds, the response is the XML synchronized representation of the baseline and the value of the `SyncStatus` attribute is set to `Synchronized` in all the baseline's components. the suynchronized baseline XML representation can be then used with the POST method to update the original copy of the baseline stored in the database. If the request fails for any reason, no baseline component is syncronized and the value of the SyncStatus attribute is not updated.

**Response Schema:** BES.xsd.
{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}/sync", "POST", "Ovewrites the baseline definition in the database with the synchronized version." %}
**Request:** Complete XML representation of the synchronized baseline obtained running the GET method against the "/api/baseline/{site type}/{site name}/{id}/sync" resource.

**Request Schema:** BES.xsd.

**Response:** If the request succeeds, the response is the XML synchronized representation of the baseline and the value of the SyncStatus attribute is set to Synchronized in all the baseline's components. If the request fails for any reason, no baseline component is syncronized and the value of the SyncStatus attribute is not updated.
 If the request fails for any reason, no baseline component is syncronized, the value of the SyncStatus attribute is not updated and an HTTP 400 or HTTP 500 response is returned.

 **Response Schema:** BESAPI.xsd.
{% endrestapi %}

## Components manipulation
You can manupulate components or component groups defined in baseline by: 
1. Getting the XML representation of the baseline using the GET method.
2. Editing the content of the XML file to modify the baseline definition.
3. Updating the existing baseline with the new definition using the PUT method of the XML file to the baseline's resource `/api/baseline/{site type}/{site name}/{id}`. 

Following this procedue you can:
- Delete components.
- Create components or component groups. 
- Reordering components or components groups.

## Baseline synchronization
The source of a baseline component is the Fixlet or the task that was added to the baseline as a component. 
The following considerations apply if the REST API XML representation of the baseline component is part of the baseline XML representation that is returned by the `GET /api/baseline/{site type}/{site name}/{id}` request, assuming that {id} is the baseline identifier.

It might happen that, after a baseline started to run, one or more than one source of its components are modified.
To update the components within the processing baseline with the current definitions you must do a synchronization.
The `SyncStatus` attribute and value, specified in the XML representation of each baseline components, identifies the synchronization status of that component.
The `SyncStatus` value is case sensitive.


These are the possible scenarios: 
- The source does not exist anymore: `<SyncStatus>"source unavailable"</SyncStatus>`
- The source exists but the applicability relevance differs: `<SyncStatus>"source fixlet differs"</SyncStatus>`
- The source exists but it does not contain anymore an Action with the ID matching the baseline's component Action ID: `<SyncStatus>"source unavailable"</SyncStatus>`
- The source exists and contains an Action with the ID matching the baseline's component Action ID, but either the action script or success criteria specified in the action, or both, differ: `<SyncStatus>"source fixlet differs"</SyncStatus>`
- None of the difference listed above applies to the component and its source: `<SyncStatus>"synchronized"</SyncStatus>`
