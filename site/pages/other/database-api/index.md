---
title: Database API 
---

  Provides you with a set of SQL views, or virtual tables to query the BigFix database.
  
  [Documentation](http://www-01.ibm.com/support/knowledgecenter/SS63NW_9.1.0/com.ibm.tivoli.tem.doc_9.1/Platform/API_Reference/DatabaseAPI/DatabaseAPIIntro.html) | [Additional information](http://www-01.ibm.com/support/docview.wss?uid=swg21505950)

  
* The Database API is a published schema describing Views to the underlying tables
* All information collected from managed endpoints available from the database
* Any programming language that has an ODBC interface can be used to access the database
* Used only for reads, no writes
* Some fields are stored as binary data to be extracted with function
  * Fn_Extractfield()
* Online documentation
  
Database API – Example to extract comp properties  
  
![Database 2](/static/img/database_api_1_extract_comp_properties.png)  
  
Database API – Example to extract Fixlet info

![Database 1](/static/img/database_api_1_extract_fixlet.png)

