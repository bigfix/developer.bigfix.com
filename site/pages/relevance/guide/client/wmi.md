---
title: WMI
---

# WMI

Serial number of computer, or serial number for a computer for a mac

Mac:

{% qna %}
Q: string "IOPlatformSerialNumber" of dictionary of service plane of iokit registry
A: C02MF1BKFD59
{% endqna %}

Windows:

{% qna %}
Q: if (exists wmi) then (string values of selects "SerialNumber from Win32_BIOS" of wmi) else ("N/A")
A: VMware-56 4d 2f f4 23 f3 d2 3f-7a b7 1c 5a 10 d0 1d f5
{% endqna %}

This one should work on Unix (haven't tested though):

{% qna %}
Q: if (exists dmi AND exists serial_number of system_information of dmi) then (serial_number of system_information of dmi)
{% endqna %}
