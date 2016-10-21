---
title: Running the API calls
---

{% section %}

When everything is configured as explained in [Configuring the components](./cc_configuration_steps.html), you can run your call by submitting your compliance document to the client. Do this by using the gather application as follows:

**On Windows systems:**
```
ClientCompliance.exe -c http://<server>:52311/cgi-bin/bfgather.exe/actionsite your_compliance_doc.xml
```

**On UNIX systems:** 
```
./compliance -c http://<server>:52311/cgi-bin/bfgather.exe/actionsite your_compliance_doc.xml
```

**On Mac OSX systems:** 
```
./BESClientCompliance -c http://<server>:52311/cgi-bin/bfgather.exe/actionsite your_compliance_doc.xml
```

**Important:** The specified URL cannot be an IP address and must match the URL defined in the masthead.

{% endsection %}

This is how the API processing flows on a client upon an API call request:

![client compliance logic](/static/img/cc_api_graphic_80_n.png)

1. On the BigFix Client, the Client API add a *Compliance Request* into the **RequestDir**. The *Compliance Request* contains one or more *Compliance Expression Item*.
Each *Client Expression Item* is used to request the BES Client to evaluate the *Relevance Expression*. 
The *Description* and *Comments* are fields used to add information useful for the Client API to correctly manage the way the *Relevance Result* affects the BigFix Client status, for example by issuing a quarantine state if a lack of compliance was found when running the *Relevance Expression*.
2. The BES Client evaluates the *Relevance Expression* and saves its result in the *Relevance Result* field in the *Compliance Response* under the **ResponseDir**.
3. The Client API accesses the *Compliance Response* and, based on the content of the *Relevance Result*, the *Comments* and the *Description* fields, takes the corrective actions, if necessary.
