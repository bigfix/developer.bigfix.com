# Applications

There are a number of inspectors that are particularly useful for inspecting installed applications on the system. 

The first inspector we will look at is the Registered Applications inspector. The Registered Applications inspector is called by using regapps and returns a list of installed applications on the system.

On Windows:

{{#example}}
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
{{/example}}

On Mac OS:

{{#example}}
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
{{/example}}

We can also grab the version:

Windows:

{{#example}}
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
{{/example}}

Mac OS:

{{#example}}
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
{{/example}}

From the examples above we know that on Windows the executable is called, "chrome.exe" and on Mac OS the executable is called (Case-sensitive!), "Google Chrome.app". Knowing this we can check to see if a specific application is installed:

Windows: 

{{#example}}
Q: exists regapp "chrome.exe"
A: True
{{/example}}

Mac OS:

{{#example}}
Q: exists regapp "Google Chrome.app"
A: True
{{/example}}

If the latest version of Chrome is "55.0.5.14" then we can test to see if our endpoint is running the latest version.

Windows: 

{{#example}}
Q: exists regapp "chrome.exe" whose (version of it < "55.0.5.14" as version)
A: True
{{/example}}

Mac OS:

{{#example}}
Q: exists regapp "Google Chrome.app" whose (version of it < "55.0.5.14" as version)
A: True
{{/example}}

These statements return true if and only if Chrome exists and the version is less than "55.0.5.14". This is perfect if we want to patch Google Chrome but we don't want to install the patch if chrome isn't on the system.

If we want to deploy Google Chrome we could use:

Windows: 

{{#example}}
Q: not exists regapp "chrome.exe"
A: True
{{/example}}

Mac OS:

{{#example}}
Q: not exists regapp "Google Chrome.app"
A: True
{{/example}}

These statements return true if and only if Chrome is not installed on the computer.