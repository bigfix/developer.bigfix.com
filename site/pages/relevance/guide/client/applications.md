---
title: Applications
---

There are a number of inspectors that are particularly useful for inspecting installed applications on the system. 

The first inspector is the Registered Applications inspector, which is called by using "regapps". This inspector returns the list 
of applications installed on the system.

On Windows systems:

{% qna %}
Q: names of regapps
A: 7zFM.exe
A: AcroRd32.exe
A: BESConsole.exe
A: chrome.exe
A: dexplore.exe
A: firefox.exe
A: iediagcmd.exe
A: iediagcmd.exe
A: iexplore.exe
A: javaws.exe
A: notepad++.exe
A: vsta.exe
A: WinMergeU.exe
A: WinMergeU.exe
A: WinRAR.exe
{% endqna %}

On Mac OS systems:

{% qna %}
Q: names of regapps
A: Dota 2.app
A: GitHub.app
A: Google Chrome.app
A: Adium.app
A: Adobe Reader.app
A: App Store.app
A: AT&T Global Network Client Uninstaller.app
A: AT&T Global Network Client.app
A: Automator.app
A: Balsamiq Mockups.app
A: Calculator.app
{% endqna %}

You can also get the version:

Windows systems:

{% qna %}
Q: (names of it, versions of it) of regapps
A: 7zFM.exe, 9.20.0.0
A: AcroRd32.exe, 11.0.9.29
A: BESConsole.exe, 9.1.909.0
A: chrome.exe, 54.0.151.5
A: dexplore.exe, 8.0.50727.1826
A: firefox.exe, 33.0.2.5413
A: iediagcmd.exe, 11.0.9600.16428
A: iediagcmd.exe, 11.0.9600.16428
A: iexplore.exe, 11.0.9600.17344
A: javaws.exe, 10.67.2.1
A: notepad++.exe, 6.5.1.0
A: vsta.exe, 9.0.30729.1
A: WinMergeU.exe, 2.12.4.0
A: WinMergeU.exe, 2.12.4.0
A: WinRAR.exe, 5.1.0.0
{% endqna %}

Mac OS systems:

{% qna %}
Q: (names of it, versions of it) of regapps
A: Dota 2.app, 1.0
A: GitHub.app, Medium Hefson
A: Adium.app, 1.5.10
A: Adobe Reader.app, 11.0.9
A: App Store.app, 1.3
A: AT&T Global Network Client Uninstaller.app, 1.0
A: AT&T Global Network Client.app, 1.5.0.3024
A: Automator.app, 2.4
A: Balsamiq Mockups.app, 2.2.22
A: Calculator.app, 10.8
A: Google Chrome.app, 54.0.151.5
{% endqna %}

From the examples above, you know that on Windows systems the executable is called, "chrome.exe" and on Mac OS the executable 
is called (Case-sensitive!), "Google Chrome.app". Knowing this, you can check to see if a specific application is installed:

Windows systems: 

{% qna %}
Q: exists regapp "chrome.exe"
A: True
{% endqna %}

Mac OS systems:

{% qna %}
Q: exists regapp "Google Chrome.app"
A: True
{% endqna %}

If you want to deploy Google Chrome you could use the following query:

Windows systems: 

{% qna %}
Q: not exists regapp "chrome.exe"
A: True
{% endqna %}

Mac OS systems:

{% qna %}
Q: not exists regapp "Google Chrome.app"
A: True
{% endqna %}

The query returns true if Chrome is not installed on the computer.

## Comparing Versions

Versions are not numbers in the traditional sense, they are made of multiple segments separated by periods, such as "6.01.2.3".
A common (but not universal) structure numbers the releases like this:
`major.minor[.revision[.build]]`

So, when you compare versions, you must specify all the relevant segments to
get a proper comparison. If you compare them as if they were integers or floating
point numbers, you might get the wrong answer. 

The Relevance language compares the numeric values of the version segments
(separated by periods), regardless of the number of digits in the segment, so ensure that you write the complete version numbers.

If the latest version of Chrome is "55.0.5.14", you can test if your endpoint is running the latest version.

Windows systems: 

{% qna %}
Q: exists regapp "chrome.exe" whose (version of it < "55.0.5.14" as version)
A: True
{% endqna %}

Mac OS systems:

{% qna %}
Q: exists regapp "Google Chrome.app" whose (version of it < "55.0.5.14" as version)
A: True
{% endqna %}

These statements return true only if Chrome exists and the version is less than "55.0.5.14". This is perfect if you want to patch 
Google Chrome but you don't want to install the patch if Chrome is not installed on the system.

These are additional examples of versions comparisons:

{% qna %}
Q: "6" as version < "6.44" as version
A: False

Q: "6.0" as version < "6.44" as version
A: True

Q: "5" as version = "5.50" as version
A: True

Q: "5.00" as version = "5.50" as version
A: False
{% endqna %}

