---
title: Folders and Files
---

Folders and Files are two out of the most commonly used client inspectors. You can use them both as plurals.

## Folders
 
The `folder` object refers to a folder in the Windows operating system or to a directory in the Unix and Linux operating systems. As for several other inspectors, 
you cannot 

You can query the parent folder of a specific file:

{% qna %}
Q: parent folder of file "/etc/passwd"
A: /etc
{% endqna %}

or you can query the parent folder of a specific folder:

{% qna %}
Q: parent folder of folder "C:\Program Files (x86)\BigFix Enterprise\BES Client"
A: C:\Program Files (x86)\BigFix Enterprise
{% endqna %}
 
in both cases the resulting type is a *folder* type.

The following properties, instead, return a *string* type result:

{% qna %}
Q: name of folder "/usr/bin"
A: bin
{% endqna %}

{% qna %}
Q: pathname of folder "C:\Program Files (x86)\BigFix Enterprise\BES Client"
A: C:\Program Files (x86)\BigFix Enterprise\BES Client
{% endqna %}

On Windows systems you can use the predefined keywords **windows folder** and **system folder** that return a
<folder> object corresponding to the windows or system folder. Since these folders are located in
different locations for different operating systems, these commands are very useful.

## Files

You can identify a file to query either by specifying its name and the name of the folder that contains the file or by specifying the complete path to the file, as follows:

{% qna %}
Q: exists file "passwd" of folder "/etc"
A: True
{% endqna %}

{% qna %}
Q: exists file "c:\windows\notepad.exe"
A: True
{% endqna %}

Another way to identify files on a Windows computer, if they are the executable files of registered applications, is using the regapp inspector. For example,
if you are looking for the path to the Firefox executable file, you can query:

{% qna %}
Q: pathname of regapp "firefox.exe"
A: C:\Program Files (x86)\Mozilla Firefox\firefox.exe
{% endqna %}



These examples show the properties of the file object that you can query:

{% qna %}
Q: exists file "mshtml.dll" of system folder
A: True
{% endqna %}

{% qna %}
Q: name of file "mshtml.dll" of system folder
A: mshtml.dll
{% endqna %}

{% qna %}
Q: name of parent folder of file "mshtml.dll" of system folder
A: System32
{% endqna %}

{% qna %}
Q: pathname of file "mshtml.dll" of system folder
A: C:\windows\system32\mshtml.dll
{% endqna %}

{% qna %}
Q: modification time of file "mshtml.dll" of system folder
A: Mon, 08 Feb 2016 23:05:38 +0200
{% endqna %}

{% qna %}
Q: version of file "mshtml.dll" of system folder
A: 11.0.9600.18231
{% endqna %}

{% qna %}
Q: size of file "mshtml.dll" of system folder
A: 20352512
{% endqna %}

{% qna %}
Q: sha1 of file "mshtml.dll" of system folder
A: 3e32ddbf41d96e72c041248ca8f69f98ba99a6f0
T: 264.912 ms
{% endqna %}

The `sha1` inspector stands for *Secure Hash Algorithm*, and it is a simple checksum that is used to verify the integrity of downloaded files.
You will use it along with the `size` inspector to manage downloads in a Fixlet action.

You can also query the content of the lines included in a specific file as follows:

{% qna %}
Q: line 1 of file "/tmp/myfile.txt"
A: Hello!
{% endqna %}
