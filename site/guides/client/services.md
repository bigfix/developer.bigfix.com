---
title: Services
---

Are services running, do they exist

I think service stuff is only for windows

{% example %}
Q: exists service "BESClient"
A: True
{% endexample %}

{% example %}
Q: state of service "BESClient"
A: Running
{% endexample %}

{% example %}
Q: service "BESClient"
A: "BESClient" "BES Client" "Running"
{% endexample %}

{% example %}
Q: all services
A: "1394ohci" "1394 OHCI Compliant Host Controller" "Stopped"
A: "ACPI" "Microsoft ACPI Driver" "Running"
A: "AcpiPmi" "ACPI Power Meter Driver" "Stopped"
A: "adp94xx" "adp94xx" "Stopped"
A: "adpahci" "adpahci" "Stopped"
...
A: "WwanSvc" "WWAN AutoConfig" "Stopped"
{% endexample %}
