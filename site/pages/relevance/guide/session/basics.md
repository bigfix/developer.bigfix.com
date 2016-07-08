---
title: Basic concepts
---

The Session Inspectors allow you to collect information from the BigFix database and use it to develop interactive displays, 
Dashboards, Wizards and powerful custom reports.

The Session Inspectors can be run mainly in two environments: the Console and the Web Reports. 
Use the following global boolean properties to know whether your Relevance expressions are being evaluated in the Console or Web Reports:

```
in console context
in Web Reports context
```

These Inspectors will return `TRUE` or `FALSE`, depending on which environment is currently active.

---

There are three main categories of Session Inspectors: 
- **[Data-store Inspectors](./datastoreinspectors.html)**, which process items in the database. They start with key *bes*; 
- **[Set Inspectors](./setinspectors.html)**, that allow you to treat lists of objects as mathematical sets;
- **[HTML Inspectors](./htmlinspectors.html)**, that help you to format your presentations using hypertext markup.

Click on the links to know more about each category.

<!--
---

## Shortcuts and Predefined commands

If you want you can use the following shortcuts for registry keys:

<table>
    <tr>
        <td>abbr</td>
		<td>acronym</td>
		<td>address</td>
		<td>anchor</td>
		<td>b</td>
    </tr>
	<tr>
        <td>base</td>
		<td>big</td>
		<td>blockquote</td>
		<td>body</td>
		<td>caption</td>
    </tr>
    <tr>
        <td>cite</td>
		<td>code</td>
		<td>col</td>
		<td>colgroup</td>
		<td>dd</td>
    </tr>
	<tr>
        <td>del</td>
		<td>dfn</td>
		<td>div</td>
		<td>dt</td>
		<td>em</td>
    </tr>
    <tr>
        <td>h1</td>
		<td>h2</td>
		<td>h3</td>
		<td>h4</td>
		<td>h5</td>
    </tr>
	<tr>
        <td>h6</td>
		<td>head</td>
		<td>html</td>
		<td>i</td>
		<td>ins</td>
    </tr>
    <tr>
        <td>kbd</td>
		<td>li</td>
		<td>link</td>
		<td>meta</td>
		<td>ol</td>
    </tr>
	<tr>
        <td>p</td>
		<td>pre</td>
		<td>q</td>
		<td>samp</td>
		<td>small</td>
    </tr>	
	<tr>
        <td>span</td>
		<td>strong</td>
		<td>sub</td>
		<td>sup</td>
		<td>table</td>
    </tr>
    <tr>
        <td>tbody</td>
		<td>td</td>
		<td>tfoot</td>
		<td>th</td>
		<td>thead</td>
    </tr>
	<tr>
        <td>title</td>
		<td>tr</td>
		<td>tt</td>
		<td>ul</td>
		<td>var</td>
    </tr>
</table>

You can use predefined commands to query at runtime the list of reistered applications (`regapps`), the list of application currently running (`running applications`) and the list of most recently accessed applications 
(`recent applications`).

**Note:**If you are using the QnA tool to test your relevance queries, you might need to close and re-open the program to get an updated list of running applications.

## Current user keys

On target systems BigFix runs as LOCAL SYSTEM. To get the logged in user’s HKEY_CURRENT_USER value, you can search through the Logon keys for the name of the current user: 

{% qna %}
Q: name of key whose ((it = name of current user as lowercase OR it starts with 
name of current user as lowercase & "@") of (it as string as lowercase) of value 
"Logon User Name" of key "Software\Microsoft\Windows\CurrentVersion\Explorer" 
of it) of key "HKEY_USERS" of registry
A: S-1-5-21-1214450339-2025729265-839522115-1013
{% endqna %}

-->