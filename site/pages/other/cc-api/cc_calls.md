---
title: Running the API calls
---

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

