---
title: The Server API
---

The Server API consists of a set of Component Object Model (COM) objects contained in a DLL file. 
The API can be accessed by using COM from a variety of languages and scripting environments, such as 
Java, VBScript, JavaScript, Perl, C, C++, .NET, and so on.

The Server API allows you to import content into the BigFix Console so that you can create and automate your 
Fixlets, tasks, actions, baselines, properties, and analyses. The content to import is contained in a 
[BES XML document](./bes-xml/) with extension ```.bes```.

To use the API, the calling application uses [BESAPI objects](./besapiobject.html). Each BESAPI object is assigned a 
set of methods and properties. There are different BESAPI objects for each activity that can be undertaken 
by using the BigFix console, for example, for creating an action or a task (**BESAPI.XMLImporter**)<!--([BESAPI.XMLImporter](./xmlimporter.html))-->, or 
for managing site subscriptions (**BESAPI.SiteManager**<!--[BESAPI.SiteManager](./sitemanager.html)-->).
