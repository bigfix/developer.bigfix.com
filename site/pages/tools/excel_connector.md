---
title: The Excel Connector
---

IBM BigFix operators often find that it is useful to extract the wealth of data on the BigFix Server for analysis and reporting. 
They either process the data themselves, or will often send the information to other consumers in an Excel format.

The IBM BigFix Excel Connector is created to simplify the data extraction process.
In fact, it has a Wizard-like interface that makes it easier to extract data from the BigFix Server without the need to write Session Relevance language.

![Excel Connector](/static/img/excel_connector.png) 

In addition, the Connector has a** *built-in Session Relevance Editor* **to query Web Reports.
**Note:** The Session Relevance Editor is also included in the [Session Relevance Tester]((./session_relevance_tester.html) an additional BigFix tool dedicated to the development of custom Web Reports.

## Features

This is the list of the main features of the BigFix Excel Connector:
- The built-in Session Relevance Editor allows:
   - Allows free form session relevance.
   - Returns results automatically split into Excel columns.
   - Highlights Relevance Language syntax. 
   ![Session Relevance Editor](/static/img/session_relevance_editor.jpg)
- The Query Wizard supports extracting data from some common BigFix objects such as Fixlets, Actions, Computer properties, and so on.
- Users can choose the available properties for the target objects. This makes extracting computer properties particularly easy.  
![Query Wizard](/static/img/query_wizard.jpg)
- Filters can be created to limit and hone in on the desired data set.

## Requirements
- BigFix 7.2.x and above.
- Supports Excel 2003, Excel 2007 and Excel 2010.
- Tested against Windows XP, Vista, Windows 7, and Windows 2008, on 32 and 64-bit variants.

## Download
Click [this link](http://support.bigfix.com/labs/license.html ) and accept the license agreement to download the BigFix Excel Connector tool.
