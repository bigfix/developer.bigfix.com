---
title: Files
---

# Files

Does this file exist?

{% qna %}
Q: name of operating system
A: Win2008R2
{% endqna %}

{% qna %}
Q: exists file "C:\windows\system32\drivers\etc\hosts"
A: True
{% endqna %}

{% qna %}
Q: exists file "C:\Windows\system32\drivers\etc\nothosts"
A: False
{% endqna %}

{% qna %}
Q: lines of file "C:\Windows\system32\drivers\etc\hosts"
A: # Copyright (c) 1993-2009 Microsoft Corp.
A: #
A: # This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
A: #
A: # This file contains the mappings of IP addresses to host names. Each
A: # entry should be kept on an individual line. The IP address should
A: # be placed in the first column followed by the corresponding host name.
A: # The IP address and the host name should be separated by at least one
A: # space.
A: #
A: # Additionally, comments (such as these) may be inserted on individual
A: # lines or following the machine name denoted by a '#' symbol.
A: #
A: # For example:
A: #
A: #      102.54.94.97     rhino.acme.com          # source server
A: #       38.25.63.10     x.acme.com              # x client host
A:
A: # localhost name resolution is handled within DNS itself.
A: #%09127.0.0.1       localhost
A: #%09::1             localhost
A: # END
{% endqna %}

{% qna %}
Q: line 3 of file "C:\Windows\system32\drivers\etc\hosts"
A: # This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
{% endqna %}

On a mac

{% qna %}
Q: exists file "/private/etc/hosts"
A: True
{% endqna %}

{% qna %}
Q: exists file "/private/etc/nothosts"
A: False
{% endqna %}

{% qna %}
Q: number of lines of file "/private/etc/hosts"
A: 10
{% endqna %}

What’s a path of one of the special system directories?

Mac

{% qna %}
Q: name of system folder
A: System
{% endqna %}

{% qna %}
Q: pathname of system folder
A: /System
{% endqna %}

{% qna %}
Q: pathname of users folder
A: /Users
{% endqna %}

{% qna %}
Q: pathname of applications folder
A: /Applications
{% endqna %}

{% qna %}
Q: pathname of windows folder
A: C:\Windows
{% endqna %}

{% qna %}
Q: pathname of system folder
A: C:\Windows\system32
{% endqna %}

{% qna %}
Q: pathname of system x32 folder
A: C:\Windows\system32
{% endqna %}

{% qna %}
Q: pathname of system x64 folder
A: C:\Windows\system32
{% endqna %}

{% qna %}
Q: pathname of system wow64 folder
A: C:\Windows\SysWOW64
{% endqna %}

{% qna %}
Q: pathname of program files folder
A: C:\Program Files (x86)
{% endqna %}

{% qna %}
Q: pathname of program files x32 folder
A: C:\Program Files (x86)
{% endqna %}

{% qna %}
Q: pathname of program files x64 folder
A: C:\Program Files
{% endqna %}

{% qna %}
Q: pathname of data folder of client
A: C:\Users\dexter_liu\Downloads\FixletDebugger-9.2.0.363\__BESData
{% endqna %}

Does this text exist in a text file?

Reading a config file to see what a value is, or see if it’s the expected value

{% qna %}
Q: lines of file "C:\Windows\system32\drivers\etc\hosts"
A: # Copyright (c) 1993-2009 Microsoft Corp.
A: #
A: # This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
A: #
A: # This file contains the mappings of IP addresses to host names. Each
A: # entry should be kept on an individual line. The IP address should
A: # be placed in the first column followed by the corresponding host name.
A: # The IP address and the host name should be separated by at least one
A: # space.
A: #
A: # Additionally, comments (such as these) may be inserted on individual
A: # lines or following the machine name denoted by a '#' symbol.
A: #
A: # For example:
A: #
A: #      102.54.94.97     rhino.acme.com          # source server
A: #       38.25.63.10     x.acme.com              # x client host
A:
A: # localhost name resolution is handled within DNS itself.
A: #%09127.0.0.1       localhost
A: #%09::1             localhost
A:
A: 9.39.144.15%09ecengvc01.bigfix.com
A:
A:
A: # Comment out this by Terry
A: # 67.134.15.13%09daemonspawn.bigfix.com
A: # END
{% endqna %}

{% qna %}
Q: content of file "C:\WIndows\system32\drivers\etc\hosts" contains "9.39.144.15"
A: True
{% endqna %}

{% qna %}
Q: content of file "C:\WIndows\system32\drivers\etc\hosts" contains "9.39.144.16"
A: False
{% endqna %}

File modified within the last 30 days:

{% qna %}
Q: (names of it, modification times of it) of files of folder "C:\Users\Bigfix\Downloads"
A: agnc.msi, ( Tue, 17 Jun 2014 17:41:19 -0800 )
A: attachment_14784920_UnmanagedAssetsWithFilters.besrpt, ( Thu, 24 Oct 2013 16:16:25 -0800 )
A: BESAdmin (1).exe, ( Mon, 30 Jun 2014 22:13:34 -0800 )
A: BESAdmin.exe, ( Mon, 30 Jun 2014 21:41:50 -0800 )
A: BESClientSetupMSI.exe, ( Mon, 07 Jul 2014 10:32:55 -0800 )
A: BESConsole.exe, ( Mon, 30 Jun 2014 21:50:47 -0800 )
A: BESGather (1).exe, ( Mon, 30 Jun 2014 21:52:27 -0800 )
{% endqna %}

{% qna %}
Q: (names of it, modification times of it) of files whose (now - modification time of it < 30*day) of folder "C:\Users\Bigfix\Downloads"
A: FixletDebugger-9.2.0.363.zip, ( Fri, 14 Nov 2014 10:43:37 -0800 )
A: QNA9.2.0.375.zip, ( Fri, 07 Nov 2014 01:09:53 -0800 )
{% endqna %}

Getting day month year from modification time of a file:

{% qna %}
Q: modification time of file "C:\Users\Bigfix\Downloads\QNA9.2.0.375.zip"
A: Fri, 07 Nov 2014 01:09:53 -0800
{% endqna %}

{% qna %}
Q: (year of it as string & "/" & month of it as two digits & "/" & day_of_month of it as two digits) of date (local time zone) of modification time of file "C:\Users\Bigfix\Downloads\QNA9.2.0.375.zip"
A: 2014/11/07
{% endqna %}
