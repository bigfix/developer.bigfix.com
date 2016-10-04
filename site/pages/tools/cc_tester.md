---
title: The Client API Tester 
---

On Windows systems you can use the BigFix Client API Tester to test your queries to the BigFix Client via the [Client Compliance API](/other/cc-api/). The results are not immediate; rather, the BigFix Client will process and prioritize accordingly. 

To install the Client API Tester, simply unzip the following [file](http://support.bigfix.com/labs/downloads/bes_client_api_tester_7.2.5.22_20100525_02.zip) and run the EXE file.

The following figure shows the Client API Tester User Interface:

![CC API Tester](/static/img/cc_api_tester.png) 

Before using the Client API Tester ensure that:
- the "InstallLocation" registry entry has the correct location of the BigFix Client, for example:
"HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{BF7023BC-319B-4FE1-B569-C854A19F81F8}\InstallLocation"
- The Registry entry is not empty and has a value similar to "C:\Program Files\BigFix Enterprise\BES Client".
