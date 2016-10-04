---
title: The Client Compliance API
---

This API is a Microsoft COM based API whose scope is to allow BigFix partners and integrators to make the result of an endpoint inspection, 
run by the BigFix Enterprise Suite (BES) Client, available to 3rd-party applications and clients running on the same system.

The Client Compliance API is: 
- Built into the BigFix Client for Windows systems.
- Included in DMG for Mac BigFix Client. Click [here](http://support.bigfix.com/bes/install/besclients-nonwindows.html#osx) to download it.
- Available also for UNIX systems

You can use relevance expressions and the complete set of [Client Relevance Language](../../relevance/guide/client/) Inspectors to identify and 
expose the client values.  

**Note:** The results are calculated in the environment of the BESClient, which typically has elevated 
privileges and access rights. It is the responsibility of the developer using the API, 
to limit the information exposed through this interface.

The results of the evaluation might then be used to determine if that endpoint is compliant based on 
detecting that certain conditions do or do not exist on that system.
In fact, even though the Client Compliance API is general-purpose, as a matter of fact, it is mainly 
used to support the compliance the of networked endpoints to various policies.

**Note:** The check is done on the local system only. This means that, if you want to check multiple systems with 
the BES Client installed, you must enable and configure the Client Compliance API on each of those systems.

As outcome of the compliance evaluation, you can decide that endpoints that are out of compliance 
must be set to quarantine in one of the following ways:
<dl>
   <dt>**Self Quarantine**</dt>
   <dd>Enables network access control software (such as VPN clients and firewalls) to quarantine 
   the computer based on the compliance evaluation results from the client.</dd>
   <dt>**Network Enforced Quarantine**</dt>
   <dd>Enables network admission control frameworks and technologies (such as Cisco Network 
   Admission Control, InfoExpress CyberGatekeeper, Sygate Secure Enterprise or ZoneLabs Integrity) 
   to quarantine the computer based on the compliance evaluation results from the client.</dd>
</dl>

Click [Sample Use Cases](./cc_use_cases.html) to learn more about the Client Compliance API strengths and applicability. 




