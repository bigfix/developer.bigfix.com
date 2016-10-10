---
title: Configuring SOAP 
---

The only configuration setting required for SOAP is the location of the WSDL file that is stored in the 
registry. The setting name is *wsdl* and the value is the path to the WSDL file. The default value is the 
sample file, "relevance.wsdl", in the installation directory. This WSDL file defines **relevanceExpr** that 
allows you to evaluate a relevance expression. If you installed BigFix to a folder named "BigFix 
Enterprise", you can find the file in this directory:

```
BigFix Enterprise\BES Server\BESReportsServer\wwwroot\soap
```

The Registry contains the actual location for your particular installation: 

```
HKLM\SOFTWARE\BigFix\Enterprise Server\BESReports\Paths
```

On a 64-bit machine, you must select the Wow6432 node:

```
HKLM\SOFTWARE\BigFix\Enterprise Server\BESReports\Paths
```
