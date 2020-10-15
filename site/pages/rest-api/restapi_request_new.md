---
title: Hints about BigFix REST API requests
---

{% section %}

The BigFix REST API allows you to: 
* Operate on a category, that is a set of objects of the same type defined on a specific site. 
* Operate on an item belonging to a category.
* Perform specific activities, for example administrative tasks, upload, login and import.

This is accomplished by means of REST API requests issued from the REST API Client user interface against the REST API Server component.

The way you run these REST API requests depends on the HTTP client that you want to use (for example [cURL, python](./examples/), or [IEM Command-Line Interface](./iem_cli/)).

{% endsection %}

Generally speaking, a REST API request includes:

* An ** *HTTP Method* ** among those supported by the resource represented by the *URL*.
* An ** *XML input file* ** if you are running PUT and POST methods. The input file contains the description, in XML format, of the object to create or to update. The XML structures to use are documented in [schema files](./schema_files.html). This is a sample XML input file used to create a new action:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
 <SourcedFixletAction>
   <SourceFixlet>
     <Sitename>TestSite</Sitename>
     <FixletID>83</FixletID>
     <Action>Action1</Action>
   </SourceFixlet>
   <Target>
     <ComputerID>13863357</ComputerID>
   </Target>
  <Parameter Name="_BESClient_EMsg_Detail">1000</Parameter>
 </SourcedFixletAction>
</BES>
```
* An ** *URL* ** that identifies the resource that you want to manage using the method. Depending on the type of resource that you want to work with, you use structures similar to the following:
   * **/api/*category*[/site type | /site type/site name]** if you want to manipulate a category of resources of the same type. For example this URL represents the category of all computers defined in the master actionsite: ``` /api/computers ```
   * **/api/category[/site type | /site type/site name]/*object id* ** if you want to manipulate an object with a specific ID belonging to that category. For example, this URL identifies the computer with ID 13863357 defined in the master actionsite: ``` /api/computers/13863357 ```
   * **/api/category[/site type | /site type/site name]/object id/*context specific* ** if you want to manipulate a property of an object with a specific ID belonging to that category. For example, this URL identifies the status of the action with ID 44: ``` /api/action/44/status ```
  
  In [REST API Resource](./api/) you see, for each resource, the structure to use for each supported HTTP Method.
  
  The notation ** */site type* ** or ** */site type/site name* ** is used to specify the type and the URL-encoded name of the site where that resource resides. It can be:
   * Omitted if the resource does not relate to a site but is specific to your environment. This applies, for example, to operators, roles, computers, and so on.
   * Set to *master* if you logged in as a non-master operator and the category is defined on the master actionsite.
   * Set to /operator/*operator_name* if the category is defined in the operator site of a specific non-master operator (NMO).
   * Set to /external/*site name* if the category is defined on an external site. For example, ```/api/tasks/external/BES Support``` identifies the category of tasks available on the BES Support site.
   * Set to /custom/*site name* if the category is defined on a custom site of your BigFix environment.
   

**Notes:** 
<ol>
<li>GET requests are idempotent because they do not change any underlying resource data. You can do measurements and tracking on retrieved data, but the resource data identified by the URI does not change.</li>
<li>The time fields returned in the REST API response are expressed in the GMT time zone. If another time zone is required, the REST API client must convert the time zone.</li>
<li>At the following [link](http://blog.mashape.com/30-ways-to-make-rest-calls-in-node-js-php-python/) you find useful information to make REST calls in different languages.</li> 
</ol>
