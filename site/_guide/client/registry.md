---
title: Registry
---

Does this registry key exist

{% example %}
Q: exists key "HKLM\Software\Bigfix\EnterpriseClient\Settings" of registry
A: True
{% endexample %}

Remember on wow64 systems it could be slightly different... x64 registry

{% example %}
Q: values of key "HKLM\Software\Bigfix\EnterpriseClient\Settings\Client\_BESClient_LastShutdown_Reason" of registry
A: Service manager shutdown request
A: Thu, 23 Oct 2014 16:36:44 -0700
{% endexample %}

{% example %}
Q: (names of it, it) of values of key "HKLM\Software\Bigfix\EnterpriseClient\Settings\Client\_BESClient_LastShutdown_Reason" of registry
A: value, Service manager shutdown request
A: effective date, ( Thu, 23 Oct 2014 16:36:44 -0700 )
{% endexample %}

{% example %}
Q: names of keys of key "HKLM\Software\Bigfix\EnterpriseClient\Settings\Client" of registry
A: _BESClient_LastShutdown_Reason
A: _BESClient_Resource_StartupNormalSpeed
A: _BESClient_UploadManager_BufferDirectory
A: _BESDataServer_APIAuthenticationTimeoutMinutes
A: _BESDataServer_AuthenticationTimeoutMinutes
A: _BESGather_Comm_UseDownloadService
A: _BESGather_Download_CacheLimitMB
...
A: __Relay_Control_Server2
{% endexample %}

Is the registry key this value (version #, is this version 3 or higher?)

{% example %}
Q: (value "Version" of it) of key "HKLM\Software\Bigfix\EnterpriseClient" of registry
A: 42.0.85.0
{% endexample %}

{% example %}
Q: (value "Version" of it > "42") of key "HKLM\Software\Bigfix\EnterpriseClient" of registry
A: True
{% endexample %}

{% example %}
Q: (value "Version" of it > "43") of key "HKLM\Software\Bigfix\EnterpriseClient" of registry
A: False
{% endexample %}
