---
title: Services
---

Are services running, do they exist

I think service stuff is only for windows

{{#example}}
Q: exists service "BESClient"
A: True
{{/example}}

{{#example}}
Q: state of service "BESClient"
A: Running
{{/example}}

{{#example}}
Q: service "BESClient"
A: "BESClient" "BES Client" "Running"
{{/example}}

{{#example}}
Q: all services
A: "1394ohci" "1394 OHCI Compliant Host Controller" "Stopped"
A: "ACPI" "Microsoft ACPI Driver" "Running"
A: "AcpiPmi" "ACPI Power Meter Driver" "Stopped"
A: "adp94xx" "adp94xx" "Stopped"
A: "adpahci" "adpahci" "Stopped"
...
A: "WwanSvc" "WWAN AutoConfig" "Stopped"
{{/example}}
