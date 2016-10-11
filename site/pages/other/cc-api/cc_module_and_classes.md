---
title: API Objects
---

{% section %}

The Client Compliance API consists of a COM module that registers as **BESClientComplianceMod**.

The module provides three classes:
- Session
- Progress
- Response

These classes are described in the following sections.

**Note:** Ensure that your run the needed configuration steps listed in [Configuring the components](./cc_configuration_steps.html) before exercising the API.

## BESClientComplianceMod.Session

This object is used to interact with the BESClient. 
The object properties *Open* and *Close* can be called to initiate and terminate a compliance evaluation session with the BESClient.

![BESClientComplianceMod.Session](/static/img/BESClientComplianceMod_Session.png)

{% endsection %}
{% section %}

## BESClientComplianceMod.Progress

This object is used to collect the progress of the Open session from the BESClient.

![BESClientComplianceMod.Progress_1](/static/img/BESClientComplianceMod_Progress_1.png)

![BESClientComplianceMod.Progress_2](/static/img/BESClientComplianceMod_Progress_2.png)

## BESClientComplianceMod.Response

![BESClientComplianceMod.Response](/static/img/BESClientComplianceMod_Response.png)

{% endsection %}

