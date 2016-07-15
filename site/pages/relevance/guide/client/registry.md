---
title: Registry
---

On Windows systems you can use the `registry` inspector to retrieve information about registry keys. 
For example, you can: 

- test for the existence of a specific key:

{% qna %}
Q: exists key "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\BigFix\EnterpriseClient" of registry 
A: True
{% endqna %}

- test the existence of a key with a value assigned:

{% qna %}
Q: exists value whose (name of it is "Version") of key "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\BigFix\EnterpriseClient" of registry
A: True
T: 0.139 ms
{% endqna %}

- retrieve the value of a specific key:

{% qna %}
Q: value "Version" of key "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\BigFix\EnterpriseClient" of registry
A: 9.2.6.94
T: 0.092 ms
{% endqna %}

- iterate through the names and values of keys in the registry:

{% qna %}
Q: (names of it, it) of values of key "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\BigFix\EnterpriseClient" of registry
A: Version, 9.2.6.94
A: EnterpriseClientFolder, C:\Program Files (x86)\BigFix Enterprise\BES Client\
T: 41.472 ms
{% endqna %}

- discover the last time a given registry key was written:

{% qna %}
Q: last write time of key "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\BigFix\EnterpriseClient" of registry
A: Fri, 26 Feb 2016 16:35:15 +0200
T: 35.340 ms
{% endqna %}

When examining registry keys ensure to:
- include the word `key` in the expression
- surround by double quotes (") key values and key names
- write `of registry` after the key name

**Tip:** Values from the registry are pre-defined as registry objects. This means that, even if they look like a string, 
folder, or time, you have to cast the value into the type you want by using the commands `as string`, `as folder`,
or `as time`. For example, if we want to know the frst three characters of the value returned by this query:

{% qna %}
Q: value "BDEInstallFolder" of key "HKLM\Software\BigFix\BDE" of registry
A: C:\Program Files\BigFix Development\BDE\
T: 35.340 ms
{% endqna %}

we must specify `as string` as follows:

{% qna %}
Q: first 3 of (value "BDEInstallFolder" of key "HKLM\Software\BigFix\BDE" of registry as string)
A: C:\
T: 10.340 ms
{% endqna %}

## Shortcuts and Predefined commands

If you want you can use the following shortcuts for registry keys:

<table>
    <tr>
        <td><b>HKCR</b></td>
		<td>HKEY_CLASSES_ROOT</td>
    </tr>
	<tr>
        <td><b>HKCU</b></td>
		<td>HKEY_CURRENT_USER</td>
    </tr>
	<tr>
        <td><b>HKLM</b></td>
		<td>HKEY_LOCAL_MACHINE</td>
    </tr>
	<tr>
        <td><b>HKU</b></td>
		<td>HKEY_USERS</td>
    </tr>
	<tr>
        <td><b>HKCC</b></td>
		<td>HKEY_CURRENT_CONFIG</td>
    </tr>
</table>

You can use predefined commands to query at runtime the list of reistered applications (`regapps`), the 
list of application currently running (`running applications`) and the list of most recently accessed applications 
(`recent applications`).

**Note:**If you are using the QnA tool to test your relevance queries, you might need to close and re-open the program to get an updated list of running applications.

## Current user keys

On target systems BigFix runs as LOCAL SYSTEM. To get the logged in user’s HKEY_CURRENT_USER value, you can search through the Logon keys for the name of the current user: 

{% qna %}
Q: name of key whose ((it = name of current user as lowercase OR it starts with name of current user as lowercase & "@") of (it as string as lowercase) of value "Logon User Name" of key "Software\Microsoft\Windows\CurrentVersion\Explorer" of it) of key "HKEY_USERS" of registry
A: S-1-5-21-1214450339-2025729265-839522115-1013
{% endqna %}

