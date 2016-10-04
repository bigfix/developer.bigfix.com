---
title: Sample Use Cases
---

{% section %}

Compliance can be determined based on detecting that certain conditions do or do not exist on the
endpoint.
You can specify a compliance policy that checks:
<dl>
   <dt>**Security Configuration**</dt>
   <dd>Check that all security policies are in place and there are no security vulnerabilities such as 
   weak passwords, open shares, unauthorized USB/wireless devices, insecure and firewall settings, and so on.</dd>
   <dt>**Patch Status**</dt>
   <dd>Check that the computer has all the latest patches that are required by company policy.</dd>
   <dt>**AntiVirus Status**</dt>
   <dd>Check that the AntiVirus agent is installed and enabled, the definitions are up-to-date, and 
   no viruses are currently detected.</dd>
   <dt>**AntiSpyware Status**</dt>
   <dd>Check that the computer has AntiSpyware protection installed, running, and up-to-date, or that a set of executable files is not installed.</dd>
   <dt>**Configuration Standards**</dt>
   <dd>Custom compliance checks can easily be added to allow for additional policies.</dd>
</dl>

For example, this is a compliance expression that returns true when there are no critical patches 
that are relevant on the endpoint:

```
number of relevant fixlets whose (value of header "x-fixlet-source-severity" of it as lowercase = "critical”) of sites = 0
```

{% endsection %}

You can use the description and comment fields of the compliance expression as a way to provide
content for your custom application. For example, you might mark specific compliance expression 
items with comments like "Compliant if true" or "Quarantine if true." and then program your
application to react based on the results of evaluating the expression and the comments that 
are returned.

Possible applications include configurable watchdog software designed to look for specific conditions 
and, based on compliance results, able to limit, disable, or enable functions such as:
- Network shares
- Wireless networks
- Network access
