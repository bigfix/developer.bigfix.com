---
title: The SOAP protocol
---

The Simple Object Access Protocol (SOAP) specifies a protocol for exchanging structured data, by using XML format. The protocol has three parts: 
<dl>
   <dt>**Envelope**</dt>
   <dd>Defines the contents of the message and how it is parsed.</dd>
   <dt>**Header**</dt>
   <dd>Web Reports headers are used to send login information verifying that the user of the SOAP application has permission to take the action.</dd>
   <dt>**Body**</dt>
   <dd>The contents of the Web Report request.</dd>
</dl>

Most client libraries require a Web Services Description Language (WSDL) file as well as the method name and parameters to pass into the method. The WSDL file describes the network endpoints required to query the database by using Web Reports.

![Excel Connector](/static/img/soap_api_in session_relevance_tester_resized.png) 
