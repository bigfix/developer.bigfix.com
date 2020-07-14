---
title: Baseline
---
Available starting from BigFix version 9.5.5

**Note:** For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

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


{% restapi "/api/baselines/{site type}/{site name}", "POST", "Creates a baseline." %}

**Request:** The body must be the baseline XML.

Baseline components can be created directly from their source, or they can be created from a full specification in the XML.

#### Creating Baseline Components Directly From Source
To create a component directly from source, the baseline component XML needs to contain the location of the source. This is specified with the SourceSiteURL and SourceID XML attributes.


**Selecting Source Action: **
The component can be created with an action taken from the source. The desired action is specified with the ActionName XML attribute. If you desire to take no action from the source, do not include ActionName attribute.


**Baseline Can Be Relevant When Component Is Relevant: **
If you want the entire baseline to be considered relevant when the baseline component is relevant, set the IncludeInRelevance XML attribute to `true`. Otherwise set it to `false`.


**Example: **
Below is an example of creating a baseline with one component being created directly from a custom fixlet and its action named "Action1". Additionally, the baseline will be relevant when the component is relevant.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
    <Baseline>
       <Title>Custom Baseline</Title>
       <Description />
       <Relevance>true</Relevance>
       <BaselineComponentCollection>
          <BaselineComponentGroup>
             <BaselineComponent IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" SourceID="40" ActionName="Action1" />
       </BaselineComponentCollection>
    </Baseline>
</BES>
```

#### Creating Baseline Components From XML
To create a component from XML, all details must be specified in the component XML. These include the details from above and the below details.
- Component name should be defined in the Name XML attribute.
- Action script should be defined in the ActionScript child XML element.
- The success criteria should be defined in the SuccessCriteria child XML element.
- The relevance should be defined in the Relevance child XML element.

This creation format is the same format returned by using GET to view a baseline, or from the Console when performing a BES XML export. This can be useful when learning to properly format a baseline component in XML and using it to create a baseline.


**Example: **
Below is an example of creating a baseline with one component entirely specified in the XML.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Baseline>
		<Title>Custom Baseline</Title>
		<Description />
		<Relevance>true</Relevance>
		<BaselineComponentCollection>
			<BaselineComponentGroup>
				<BaselineComponent Name="CustomFixlet1" IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" 
				SourceID="40" ActionName="Action1">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Enter your action script here</ActionScript>
					<SuccessCriteria Option="OriginalRelevance" />
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

## Baseline Component Synchronization Status
A baseline component is created from a Fixlet or a task and one of its actions. The Fixlet or task and the selected action are recorded as the component's source. If the source is modified, the component is not automatically updated. For example, if a source Fixlet is modified, or a source action is deleted, the corresponding component is not automatically updated. This is why components become out-of-sync.

You can determine if a component is out-of-sync by examining its element in the baseline XML. Each component's element has a `SyncStatus` attribute that indicates the component's synchronization status. The possible values of this attribute are defined below:
- `SyncStatus="synchronized"` - The component is synchronized.
- `SyncStatus="source fixlet differs"` - The component is not synchronized because it differs from the source.
- `SyncStatus="source fixlet differs (source action has been deleted)"` - The component is not synchronized because the source's action used to create the component no longer exists.
- `SyncStatus="source unavailable"` - The component is not synchronized because the source no longer exists.

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
- Selectively synchronize components: See the section below for how to do this.

### Selectively Synchronizing Baseline Components
It is possible for you to synchronize all of a baseline's components using the two step process described for the request `GET /api/baseline/{site type}/{site name}/{id}/sync`.

However, it is also possible to selectively synchronize only some components. You can do this by modifying their elements to have the same format as when creating a component from source. This format is described in the *Creating Baseline Components Directly From Source* section for the request `POST /api/baseline/{site type}/{site name}`.

Specifically, to get this format, you will need to manipulate the XML by manipulating each BaselineComponent XML element that corresponds to a component that you want synchronize. The manipulation is described as follows:
- Delete the Name XML attribute.
- Delete all the children XML elements, making sure that no ActionScript, Relevance, SuccessCriteria, or Delay child elements exist.

#### Example
Let's say that you want to synchronize only the first component of the below baseline:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Baseline>
		<Title>Custom Baseline</Title>
		<Description />
		<Relevance>true</Relevance>
		<BaselineComponentCollection>
			<BaselineComponentGroup>
				<BaselineComponent Name="CustomFixlet1" IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" SourceID="40" ActionName="Action1" SyncStatus="source fixlet differs">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Unsynchronized action script</ActionScript>
					<SuccessCriteria Option="CustomRelevance">"unsynchronized custom relevance"</SuccessCriteria>
					<Relevance>"unsynchronized relevance"</Relevance>
				</BaselineComponent>
				<BaselineComponent Name="CustomFixlet2" IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" SourceID="41" ActionName="Action1" SyncStatus="source fixlet differs">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Unsynchronized action script</ActionScript>
					<SuccessCriteria Option="OriginalRelevance" />
					<Relevance>true</Relevance>
				</BaselineComponent>
			</BaselineComponentGroup>
		</BaselineComponentCollection>
	</Baseline>
</BES>
```

You would accomplish the synchronization by first manipulating the above XML to produce the below XML, and then updating the baseline by performing the PUT request using the below XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Baseline>
		<Title>Custom Baseline</Title>
		<Description />
		<Relevance>true</Relevance>
		<BaselineComponentCollection>
			<BaselineComponentGroup>
				<BaselineComponent IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" SourceID="40" ActionName="Action1" SyncStatus="source fixlet differs" />
				<BaselineComponent Name="CustomFixlet2" IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" SourceID="41" ActionName="Action1" SyncStatus="source fixlet differs">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Unsynchronized action script</ActionScript>
					<SuccessCriteria Option="OriginalRelevance" />
					<Relevance>true</Relevance>
				</BaselineComponent>
			</BaselineComponentGroup>
		</BaselineComponentCollection>
	</Baseline>
</BES>
```

After the baseline is synchronized, showing it using GET request should return the below XML, which has the first component synchronized:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Baseline>
		<Title>Custom Baseline</Title>
		<Description />
		<Relevance>true</Relevance>
		<BaselineComponentCollection>
			<BaselineComponentGroup>
				<BaselineComponent Name="CustomFixlet1" IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" SourceID="40" ActionName="Action1" SyncStatus="synchronized">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Synchronized action script</ActionScript>
					<SuccessCriteria Option="CustomRelevance">"synchronized custom relevance"</SuccessCriteria>
					<Relevance>"synchronized relevance"</Relevance>
				</BaselineComponent>
				<BaselineComponent Name="CustomFixlet2" IncludeInRelevance="true" SourceSiteURL="http://{root-server}:52311/cgi-bin/bfgather.exe/actionsite" SourceID="41" ActionName="Action1" SyncStatus="source fixlet differs">
					<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Unsynchronized action script</ActionScript>
					<SuccessCriteria Option="OriginalRelevance" />
					<Relevance>true</Relevance>
				</BaselineComponent>
			</BaselineComponentGroup>
		</BaselineComponentCollection>
	</Baseline>
</BES>
```
