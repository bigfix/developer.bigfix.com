# Session Relevance Guide

In this section you find the information about the Inspectors that you can use to extract data stored in the BigFix database. 
This information can be used together with the APIs to customize reports and dashboards or to interact with external applications.


The documentation is divided into the following parts:

### Generic Information

This part describes the general information that applies to all Session Relevance Inspectors.
Refer also to the [Core Inspectors](/relevance/guide/basics/), which define the syntax and the structures that apply to both Client and Session Relevance.
<dl>

  <dt>**[Basic Concepts](./basics.html)**</dt>
  <dd>Explains the basic concepts and categories of session relevance inspectors.</dd>
  
  <dt>**[Running the Presentation Debugger](./presentationdebugger.html)**</dt>
  <dd>Describes how to develop and test your Session Relevance expressions .</dd>

  <dt>**[Adding Relevance to Presentations](./presentationrelevance.html)**</dt>
  <dd>Shows how to evaluate relevance in presentations.</dd>

  <dt>**[Refreshing Relevance](./refreshingrelevance.html)**</dt>
  <dd>Describes how to request to refresh the retrieved data.</dd>
  
  <dt>**[Linking to other documents](./linkingdocs.html)**</dt>
  <dd>Explains how to create hyperlinks to specific pages in the Console or in the Web Reports.</dd>
  

</dl>

---

### Create your query
This part contains the list of Session Relevance Inspectors. 
They allow you to access information in the BigFix databases and display it in the BigFix Console and the Web Reports program. 

<dl>

  <dt>**[Action Inspectors](./actioninspectors.html)**</dt>
  <dd>To query and manage the properties of the actions issued by the BigFix Operators.</dd>
  
  <dt>**[Activation Inspectors](./activationinspectors.html)**</dt>
  <dd>To examine the various Analyses that have been activated.</dd>

  <dt>**[Baseline Inspectors](./baselineinspectors.html)**</dt> 
  <dd>To retrieve information about deployed baselines.</dd>

  <dt>**[Comment Inspectors](./commentinspectors.html)**</dt>
  <dd>To query information about issued comments.</dd> 

  <dt>**[Computer Inspectors](./computerinspectors.html)**</dt>
  <dd>To query and manage the computers that can be listed on the BigFix Console.</dd> 
  
  <dt>**[Client Inspectors](./clientinspectors.html)**</dt>
  <dd>To return the name, value and scope of BES Client settings.</dd> 
  
  <dt>**[Utf8 String](./utf8string.html)**</dt>
  <dd>8-bit Unicode Transformation Format inspectors used by the EvaluateRelevance API.</dd> 

  <dt>**[Deployment Options Inspectors](./deploymentinspectors.html)**</dt>
  <dd>To manage the advanced deployment options set in BigFix Administrators Tool.</dd>
  
  <dt>**[Domain Inspectors](./domaininspectors.html)**</dt>
  <dd>To manage BigFix domains.</dd>

  <dt>**[Filter Inspectors](./filterinspectors.html)**</dt> 
  <dd>To get information about filters criteria.</dd>

  <dt>**[Fixlet Inspectors](./fixletinspectors.html)**</dt>
  <dd>To get information about individual Fixlets.</dd> 

  <dt>**[Networking Inspectors](./networkinginspectors.html)**</dt>
  <dd>To query and manage the networking properties of the BigFix Client.</dd>

  <dt>**[Property Inspectors](./propertyinspectors.html)**</dt> 
  <dd>To query information about the properties of BigFix Client computers.</dd>

  <dt>**[Server Inspectors](./serverinspectors.html)**</dt>
  <dd>To query BES Server data.</dd> 

  <dt>**[Site Inspectors](./siteinspectors.html)**</dt> 
  <dd>To query the properties of Fixlet sites to which the client is subscribed.</dd>

  <dt>**[Unmanaged Asset Inspectors](./unmanagedassetinspectors.html)**</dt>
  <dd>To monitor and report on mobile or hand-held devices that are not traditional BigFix Clients.</dd> 

  <dt>**[Site Inspectors](./siteinspectors.html)**</dt> 
  <dd>To query the properties of Fixlet sites to which the client is subscribed.</dd>

  <dt>**[User Inspectors](./userinspectors.html)**</dt>
  <dd>To query information about BigFix users.</dd> 

  <dt>**[Wake-on-lan Inspectors](./wakeonlaninspectors.html)**</dt> 
  <dd>To query information about the Wake-on-lan capability on the Client.</dd>

  <dt>**[Wizard Inspectors](./wizardinspectors.html)**</dt>
  <dd>To retrieve information about BigFix Wizard. These Inspectors apply only to the BigFix Console.</dd> 
  
  <dt>**[World Inspectors](./worldinspectors.html)**</dt>
  <dd>Plain, named, numbered or indexed global objects.</dd>
  
</dl>

---

### Present retrieved data
This part explains how to view and format in HTML statements the results of your Session Relevance expressions.
<dl>

  <dt>**[HTML Inspectors](./htmlinspectors.html)**</dt>
  <dd>Describes the different ways you can present the retrieved data in HTML format.</dd>

</dl>

---

### Manage historical data
The BES database maintains historical statistics that can be used to create long-term reports.
This part explains how to retrieve such data and lists the Session Statistics Inspectors.

<dl>
  <dt>**[Statistical Aggregation](./stataggregation.html)**</dt>
  <dd>Explains how to expose the data saved in historical databases.</dd>

  <dt>**[Statistics Inspectors](./statisticsinspectors.html)**</dt> 
  <dd>Provides a list of Inspectors that allow to perform statistics during a session.</dd>
  
</dl>

<!---  {% note %}

This project is implemented in stages. Currently, the information about this part are available:

* In the [Reference](/relevance/reference) section under **Session**.

* In the [Session inspectors guide](http://support.bigfix.com/fixlet/documents/Session%20Inspectors%2081_110719.pdf)

* In the following [example](https://www.ibm.com/developerworks/community/blogs/a1a33778-88b7-452a-9133-c955812f8910/entry/session_relevance_analyses_results_and_the_rest_api?lang=en)

{% endnote %} --->
