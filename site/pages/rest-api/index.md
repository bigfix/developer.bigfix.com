---
title: The BigFix REST API
---

The goal of the BigFix REST API is to allow you to implement and run the tasks available on the BigFix console from outside the console using standardized and operating system independent methods. Use the REST API if you want to automate tasks in your BigFix environment. 
The server part of the REST API is available on the BigFix server. You can use your preferred REST API client to interrogate the server part through HTML calls.

{% note %}

As a prerequisite, the WebReports service must be running to work with the BigFix REST API. The Web Reports server, local or remote, is selected from entries in the BigFix database [BFEnterprise].[dbo].[AGGREGATEDBY] in the order they appear in the table.

{% endnote %}

If you are new to the REST API, navigate the following [Tutorial](http://www.restapitutorial.com/).

<!---If you are new to BigFix REST API, navigate the **Guide** [Guide](/rest-api/guide/) section to get oriented. --->

In the [REST-API Resources](/rest-api/api/) section you find the description, the available methods and the syntax of each BigFix REST API resource.

In the [Examples](/rest-api/examples/) section you find an usage sample for each BigFix REST API resource.
 
<!--- {% note %}

This project is implemented in stages. You can find the documentation and media that will be included in the next steps at the following links:

* **Documentation:**
 [Introduction](https://developer.bigfix.com/rest-api/) |
 [Documentation](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Tivoli%20Endpoint%20Manager/page/REST%20API) |
 [Examples](https://github.com/jpsthecelt/bfReSTexamplesInstructions?cm_mc_uid=63332368808014350632302&amp;cm_mc_sid_50200000=1440718187) |
 [Usage examples](https://github.com/bigfix/restapi-examples) |
 [Tutorial](http://www.restapitutorial.com/)

{% endnote %} --->
