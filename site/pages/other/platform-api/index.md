---
title: The Platform API
---

Administrators can integrate the power of the IBM BigFix platform with other systems or workflows within an organization by leveraging the COM-based platform API through almost any programming language, thus enabling administrators to perform almost any BigFix Console function securely without having to log into the console directly:
* Dynamically create new content such as Fixlet/Task Messages, Baselines, Properties, Analyses, Computer groups, etc.
* Dynamically create new single actions, multi-action groups, or baselines that can be targeted to either a single device or a group of devices

The BESImportFile command-line utility allows Administrators to expose the functionality of the Platform API without the need to create or modify custom programs. Since any Console content or Actions can be defined within an XML formatted file, the utility enables Administrators to import content or actions directly into the Console from the command line or through any scripting language. To create these XML files, Administrators can export existing content and actions using the Console File > Export… option or dynamically generate new content and action XML documents through any script or program. Documentation available from the links at the bottom of this page describes the format of the Action or Content XML file.
 
* Microsoft COM based API
* Full programmer’s interface into creating Fixlets/Tasks/Properties/Actions/Analysis in BigFix
* Callable from languages such as Java, VBScript, JavaScript, Perl, C, C++, .NET, and etc.
* Often used to replicate functionality of the BigFix Console
 
 
![Platform Api 1](/static/img/platform_api_1_resized.png)