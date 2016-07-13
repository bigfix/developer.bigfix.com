---
title: Services
---

The service inspector allows you to query installed services on a computer. You can query about installed services using the **service** inspector, 
or you can query about the installed services that are currently running using the inspector **running service**.

If the BESClient service is installed but not active at the time you run the inspector you will get:

{% qna %}
Q: exists service "BesClient"
A: True
{% endqna %}

and 

{% qna %}
Q: exists running service "BesClient"
A: False
{% endqna %}

You can use the plural **services** to get the list of services, each with its service name, display name and status.

{% qna %}
Q: services
A: "AdobeARMservice" "Adobe Acrobat Update Service" "Running"
A: "AdobeFlashPlayerUpdateSvc" "Adobe Flash Player Update Service" "Stopped"
A: "AeLookupSvc" "Application Experience" "Stopped"
A: "ALG" "Application Layer Gateway Service" "Stopped"
....
{% endqna %}

or to get specific values for all services, such as the display name, the login account under which the
service is configured to run, the status and the ‘imagepath’:

{% qna %}
Q: (display name of it, login account of it, state of it, image paths of it) of services
A: Adobe Acrobat Update Service, LocalSystem, Running, "C:\Program Files (x86)\Common Files\Adobe\ARM\1.0\armsvc.exe"
A: Adobe Flash Player Update Service, LocalSystem, Stopped, C:\windows\SysWOW64\Macromed\Flash\FlashPlayerUpdateService.exe
A: Application Experience, localSystem, Running, C:\windows\system32\svchost.exe -k netsvcs
...
{% endqna %}

