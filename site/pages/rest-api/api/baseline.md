---
title: Baseline
---


{% restapi "/api/baselines/{site type}/{site name}", "GET", "Lists all baselines in a site." %}

**Request:** URL is all that is required.

 - /api/baselines/master --> Returns baselines in the master action site.
 - /api/baselines/custom/MyCustomSite --> Returns baselines in MyCustomSite custom site.
 - /api/baselines/external/BES Support --> Returns baselines in the external site "BES Support".
 - /api/baselines/operator/Daniel --> Returns baselines in Daniel's operator site.

**Request Schema:** BES.xsd

**Response:** BESAPI XML list of baselines. 

**Response Schema:** BESAPI.xsd

{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}", "POST", "Creates a baseline." %}

**Request:** The body must be the complete baseline XML. This is a sample XML:

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

**Response:** BES API XML containing the {id} of the created baseline. This is a sample XML:

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

{% restapi "/api/baseline/{site type}/{site name}/{id}", "GET", "Shows the baseline with the specified {id}." %}

**Request:** URL is all that is required

**Request Schema:** BES.xsd

**Response:** The BES XML baseline representation.

**Response Schema:** BES.xsd.

{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}", "PUT", "Modifies the baseline with the specified {id}." %}
For more information, see the *Manipulating Baseline Components* section below.

**Request:** The body must be the modified XML representation of the baseline.

**Request Schema:** BES.xsd

**Response:** The baseline {id}.

**Response Schema:** Plain text.

{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}", "DELETE", "Deletes the baseline with the specified {id}." %}

**Request:** URL is all that is required

{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}/computers", "GET", "Lists all relevant computers of the baseline with  the specified {id}." %}

**Request:** URL is all that is required

**Response:** BESAPI XML list of computers.

**Response Schema:** BESAPI.xsd.

{% endrestapi %}

{% restapi "/api/baseline/{site type}/{site name}/{id}/sync", "GET", "Shows a synchronized version of the baseline with the specified {id}." %}
You can use the above request to synchronize a baseline as follows:

1. Retrieve and store a baseline's synchronized version using the above request.
2. Replace the baseline with its synchronized version using a `PUT /api/baseline/{site type}/{site name}/{id}` request.

**Request:** URL is all that is required

**Response:** BES XML baseline representation. 

**Response Schema:** BES.xsd.

{% endrestapi %}

## Manipulating Baseline Components
Baseline components, or component groups, can be manipulated in several ways using the REST API. Because a baseline's components are specified in the baseline's XML, you can manipulate the components by manipulating the XML. 

Run these steps to manipulate a baseline's components:

1. Get the baseline XML using `GET /api/baseline/{site type}/{site name}/{id}` request.
2. Manipulate the XML.
3. Update the baseline using `PUT /api/baseline/{site type}/{site name}/{id}` request. 

Following the steps listed above you can:
- Create components, or component groups, by creating their elements in the baseline XML. 
- Reorder components, or components groups, by reordering their elements in the baseline XML.
- Delete components, or components groups, by deleting their elements in the baseline XML.

## Baseline Component Synchronization Status
A baseline component is created from a Fixlet or a task and one of its actions. The Fixlet or task and the selected action are recorded as the component's source. If the source is modified, the component is not automatically updated. For example, if a source Fixlet is modified, or a source action is deleted, the corresponding component is not automatically updated. This is why components become out-of-sync.

You can determine if a component is out-of-sync by examining its element in the baseline XML. Each component's element has a `SyncStatus` attribute that indicates the component's synchronization status. The possible values of this attribute are defined below:
- `SyncStatus="synchronized"` - The component is synchronized.
- `SyncStatus="source fixlet differs"` - The component is not synchronized because it differs from the source.
- `SyncStatus="source fixlet differs (source action has been deleted)"` - The component is not synchronized because the source's action used to create the component no longer exists.
- `SyncStatus="source unavailable"` - The component is not synchronized because the source no longer exists.
