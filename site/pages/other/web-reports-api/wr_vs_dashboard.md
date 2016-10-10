---
title: WEB Reports API content structure
---

Although there is much commonality between dashboards and Web Reports, they have several important differences.
- The Web Reports application maintains Fixlet history inspectors, but the console
does not. Fixlet history inspectors are of the form: *first became relevant of*.
- Some *current* inspectors work only in the console. These include inspectors
such as *current console user* or *current computer*.
- Inspectors that work with Locally Hidden/Visible Fixlets always return nothing.
Global Fixlets, however, still work as expected.
- While the dashboard can report only on the local server, Web Reports can span
multiple servers. The ActionSite has the server name added: ActionSite
(BES_Server_Name).
- Javascript **EvaluateRelevance** calls are instantaneous on the console, but in a Web
Report, they generate HTTP requests that might average up to one second per
call. Web Reports has an **AsyncEvaluateString** call that does not have the same
penalty, because it is asynchronous. It takes an HTML object ID as a parameter,
and the results are set to the object's innerHTML for use with tags like ```<div>```,
```<span>```, or ```<p>```.
- Some links that work in the console do not work in the Web Reports. Links to
Fixlet filters do not work, while links to computer groups, computers, Fixlets,
tasks, and analyses do.



