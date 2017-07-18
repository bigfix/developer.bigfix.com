---
title: RESTAPI Site
---
**Note:** For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

{% restapi "sites", "GET", "Fetches a list of sites and their types." %}
**Request:** URL is all that is required.
For example: 

```
    https://lab.bigfix.me:52311/api/sites
```

**Response:** XML listing all visible sites to the authenticated operator. 
For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <ExternalSite Resource="http://lab.bigfix.me:52311/api/site/external/BES%20Support">
    <Name>BES Support</Name>
  </ExternalSite>
  <OperatorSite Resource="http://lab.bigfix.me:52311/api/site/operator/BigFixAdmin">
    <Name>BigFixAdmin</Name>
  </OperatorSite>
  <ActionSite Resource="http://lab.bigfix.me:52311/api/site/master">
    <Name>ActionSite</Name>
  </ActionSite>
</BESAPI>
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "sites", "POST", "Creates a custom site." %}
**Request:** BES XML for the site.

**Request Schema:** BES:xsd

**Response:** BESAPICustomSite object

**Response Schema:** BESAPI.xsd
{% endrestapi %}


{% restapi "site/{site type}/{site name}", "GET", "Fetches a specific site." %}
**Request:** URL is all that is required.
For example: 

```
    https://lab.bigfix.me:52311/api/site/master
```

**Request Schema:**  BES XML representing a site.

**Response:** BES XML representing a site.
For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
  <ActionSite>
    <Name>ActionSite</Name>
    <Description></Description>
    <GlobalReadPermission>false</GlobalReadPermission>
    <SubscriptionMode>All</SubscriptionMode>
  </ActionSite>
</BES>
```

**Response Schema:** BES.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}", "PUT", "Updates the specified site." %}
**Request:** Complete XML for the object in the body of the request.

**Request Schema:**  BES.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}", "DELETE", "Deletes the specified site and its content." %}
**Request:** URL is all that is required.
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permissions", "GET", "Fetches the list of operators/roles/LDAP groups and their permissions on the specified site." %}
**Request:** URL is all that is required.
For example: 

```
     https://lab.bigfix.me:52311/api/site/master/permission/operator/BigFixAdmin
```

**Request Schema:**  BESAPI.xsd

**Response:** BESAPI XML response.
For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
  <BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <SitePermission Resource="http://lab.bigfix.me:52311/api/site/master/permission/operator/BigFixAdmin">
    <Permission>Owner</Permission>
    <Operator Resource="http://lab.bigfix.me:52311/api/operator/BigFixAdmin">BigFixAdmin</Operator>
  </SitePermission>
</BESAPI>
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permissions", "PUT", "Sets the permissions for a site." %}
**Request:** BESAPI SitePermission XML.

**Request Schema:**  BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permissions", "POST", "Sets the permissions for a site." %}
**Request:**  BESAPI SitePermission XML.

**Request Schema:**  BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permission", "DELETE", "Removes the permissions for a site." %}

**Request:**  URL is all that is required.
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permission/{operator/role}/{name/id}", "GET", "Returns specific site permission for operator or role." %}
**Request:** URL is all that is required
For example: 

```
     https://lab.bigfix.me:52311/api/site/master/permission/operator/BigFixAdmin
```
	 
**Response:** BESAPI.XML file.
For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <SitePermission Resource="http://lab.bigfix.me:52311/api/site/master/permission/operator/BigFixAdmin">
    <Permission>Owner</Permission>
    <Operator Resource="http://lab.bigfix.me:52311/api/operator/BigFixAdmin">BigFixAdmin</Operator>
  </SitePermission>
</BESAPI>
```
	
**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permission/{operator/role}/{name/id}", "PUT", "Updates site permission for specified user or role." %}
**Request:** BESAPI SitePermission XML.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permission/{operator/role}/{name/id}", "POST", "Sets site permission for specified user or role." %}
**Request:** BESAPI SitePermission XML.

**Request Schema:** BESAPI.xsd

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/permission/{operator/role}/{name/id}", "DELETE", "Removes permission from site." %}
**Request:** URL is all that is required
{% endrestapi %}

{% restapi "site/{site type}/{site name}/content", "GET", "Fetches a list all content within a site." %}
**Request:** URL is all that is required
For example: 

```
    https://lab.bigfix.me:52311/api/site/master/content
```

**Response:** BESAPI.XML file.
For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <Fixlet Resource="http://lab.bigfix.me:52311/api/fixlet/master/39" LastModified="Tue, 19 Mar 2013 20:41:37 +0000">
    <Name>Custom Fixlet</Name>
    <ID>39</ID>
  </Fixlet>
  <Analysis Resource="http://lab.bigfix.me:52311/api/analysis/master/40" LastModified="Tue, 19 Mar 2013 20:41:59 +0000">
    <Name>Custom Analysis</Name>
    <ID>40</ID>
  </Analysis>
  <Task Resource="http://lab.bigfix.me:52311/api/task/master/41" LastModified="Tue, 19 Mar 2013 20:43:42 +0000">
    <Name>Custom Task</Name>
    <ID>41</ID>
  </Task>
  <ComputerGroup Resource="http://lab.bigfix.me:52311/api/computergroup/master/47" LastModified="Tue, 19 Mar 2013 22:26:24 +0000">
    <Name>Windows XP Computers</Name>
    <ID>47</ID>
  </ComputerGroup>
</BESAPI>
```
	
**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/files", "GET", "Fetches a list all site files." %}
**Request:** URL is all that is required
For example: 

```
      https://lab.bigfix.me:52311/api/site/master/files
```
	 
**Response:** BESAPI.XML file.
For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <SiteFile Resource="http://lab.bigfix.me:52311/api/site/master/file/33">
    <Name>Relays.dat</Name>
    <ID>33</ID>
    <LastModified>Fri, 15 Mar 2013 01:22:09 +0000</LastModified>
    <FileSize></FileSize>
    <IsClientFile>0</IsClientFile>
  </SiteFile>
  <SiteFile Resource="http://lab.bigfix.me:52311/api/site/master/file/50">
    <Name>MyTextFile.txt</Name>
    <ID>50</ID>
    <LastModified>Wed, 20 Mar 2013 00:52:32 +0000</LastModified>
    <FileSize>7</FileSize>
    <IsClientFile>0</IsClientFile>
  </SiteFile>
</BESAPI>
```
	
**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/site/{site}/files", "POST", "Adds files to a site." %}
**Request:** To post to 'files' instead of 'file' you need to supply the files in a MIME document. In the request you can specify:
- **force=true** to overwrite the file, if already existing in the specified site.
- **isClient=true** to make the file available for download by Clients.

You can also concatenate the two options using the semi-colon ";" as separator.

The simplest example of this would be the curl command:

```
curl -k -u mo -X POST -F "file=@/temp/file.xml" "https://spiffy:52311/api/site/custom/TestSite/files"
```

To send the file to clients, set the "IsClientFile" header to 1. The simplest example of this would be the curl command:

```
curl -k -u master -H "ISClientFile: 1" -X POST -F "file=@/home/test/file.txt" "https://localhost:52311/api/site/custom/master/files"
```

More than one file can be included in this way in a single post.

**Request Schema:** BESAPI.xsd

**Response:** BESAPI showing the ID of the created file.

**Post File Example:**

``` 
    Content-Length: 1136
    Content-Type: multipart/form-data; boundary=----------------------------27beaea68af8
    ------------------------------27beaea68af8
    Content-Disposition: form-data; name="file"; filename="file.data"
    Content-Type: application/octet-stream
    file data goes here
    ------------------------------27beaea68af8-- 
```

{% endrestapi %}

{% restapi "site/{site type}/{site name}/file/{file id}", "GET", "Gets a site file." %}
**Request:** URL is all that is required
For example: 
      https://lab.bigfix.me:52311/api/site/master/file/50
	 
**Response:** application/octet-stream of the file.
This text file returns the contents as below. If it were an image, it'd return the image, etc...
For example: 
    Testing
	
**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/file/{file id}", "PUT", "Updates a site file." %}
**Request:** File contents. In the request you can specify **force=true** to overwrite the file, if already existing in the specified site.

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/file/{file id}", "POST", "Update a site file." %}
**Note:** This method is applicable only to IBM Enpdoint Manager V9.1 and earlier versions. 

**Request:** File contents. In the request you can specify:
- **force=true** to overwrite the file, if already existing in the specified site.
- **isClient=true** to make the file available for download by Clients.

These are examples of adding a file to a custom site:

   https://lab.bigfix.me:52311/api/site/custom/test/file/101?isClientFile=true
   
   https://lab.bigfix.me:52311/api/site/custom/test/file/101?force=true
   
You can also concatenate the two options as follows:
   
   https://lab.bigfix.me:52311/api/site/custom/test/file/101?isClientFile=true;force=true

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "site/{site type}/{site name}/file/{file id}", "DELETE", "Deletes the specified file." %}
**Request:** URL is all that is required
{% endrestapi %}

{% restapi "site/{site type}/{site name}/file/{file name}", "POST", "Creates a site file with the specified name." %}
The parameter "isClientFile" with value 1 can be set in the request to send the file to clients.

**Note:** This method is applicable only to IBM Enpdoint Manager V9.2 and later versions. 

**Request:** File contents. In the request you can specify:
- **force=true** to overwrite the file, if already existing in the specified site.
- **isClient=true** to make the file available for download by Clients.

These are examples of adding a file to a custom site:

   https://lab.bigfix.me:52311/api/site/custom/test/file/file.my?isClientFile=true
   
   https://lab.bigfix.me:52311/api/site/custom/test/file/file.my?force=true
   
You can also concatenate the two options as follows:

   https://lab.bigfix.me:52311/api/site/custom/test/file/file.my?isClientFile=true;force=true

**Response Schema:** BESAPI.xsd
{% endrestapi %}
