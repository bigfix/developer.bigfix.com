---
title: The Client Compliance API
---

{% section %}

The scope of this API is to allow BigFix partners and integrators to make the result of an endpoint inspection, 
run by the BigFix Enterprise Suite (BES) Client, available to 3rd-party applications and clients running on the same system.

You use the relevance expressions and the complete set of [Client Relevance Language](../../relevance/guide/client/) Inspectors to identify and 
expose the client values.  

**Note:** The results are calculated in the environment of the BESClient, which typically has elevated 
privileges and access rights. It is the responsibility of the developer using the API, 
to limit the information exposed through this interface.

{% endsection %}

Even though the Client Compliance API might be general-purpose, as a matter of fact, the result of the 
evaluation is generally used to determine if that specific endpoint is compliant to various policies, based on detecting 
that certain conditions do or do not exist on that system.

Because the evaluation is done locally on the system, if you want to check multiple systems where 
the BES Client is installed, you must enable and configure the Client Compliance API on each of them.

Based on the result of the compliance check, you can decide if the endpoints that are out of compliance 
must be set to quarantine.

Click [Terminology](./cc_terminology.html) to learn about the structure of compliance requests and responses and the way different fields are managed.

Access [Sample Use Cases](./cc_use_cases.html) to know more about the compliance evaluation process. 




