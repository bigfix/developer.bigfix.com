# domain

Mac OS X defines several file system domains to control access to system resources on multi-user systems. These include the User, Local, Network, Classic and System domains. The domain for a given resource or folder determines its accessibility to the user. For example, while a user-installed font is only available to that user, an administrator-installed font is available to all network users. These inspectors allow folder access to be parceled out according to domain.Note: The &quot;user domain&quot; refers to the root user, not the currently logged in user.

# apple extras folder of [domain]

Returns the apple extras folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# apple menu items folder of [domain]

Returns the apple menu items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# application support folder of [domain]

Returns the application support folder of the specified OS X domain, typically /Library/Application Support. If the domain is not specified, it defaults to the system domain.

# applications folder of [domain]

Returns the applications folder of the specified OS X domain, typically /Applications. If the domain is not specified, it defaults to the system domain.

# assistants folder of [domain]

Returns the assistants folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# audio folder of [domain]

Returns the audio folder of the specified OS X domain, typically /Library/Audio. If the domain is not specified, it defaults to the system domain.

# cache folder of [domain]

Returns the cache folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# carbon folder of [domain]

Returns the carbon folder of the specified OS X domain, typically /Library/Carbon. If the domain is not specified, it defaults to the system domain.

# chewable items folder of [domain]

Returns the chewable items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# classic folder of [domain]

Returns the classic folder of the specified OS X domain, typically the /System Folder. If the domain is not specified, it defaults to the system domain.

# color sync folder of [domain]

Returns the color sync folder of the specified OS X domain, typically /System/Library/ColorSync. If the domain is not specified, it defaults to the system domain.Example: color sync folder of system domain - Returns /System/Library/ColorSync.Example: color sync folder of local domain - Returns /Library/ColorSync.

# colorsync profiles folder of [domain]

Returns the colorsync profiles folder of the specified OS X domain, typically /System/Library/ColorSync/Profiles. If the domain is not specified, it defaults to the system domain.

# component folder of [domain]

Returns the component folder of the specified OS X domain, typically /System/Library/Components. If the domain is not specified, it defaults to the system domain.

# contextual menu items folder of [domain]

Returns the contextual menu items folder of the specified OS X domain, typically /Library/Contextual Menu Items. If the domain is not specified, it defaults to the system domain.

# control panels folder of [domain]

Returns the control panels folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# control strip modules folder of [domain]

Returns the control strip modules folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# core services folder of [domain]

Returns the core services folder of the specified OS X domain, typically /System/Library/CoreServices. If the domain is not specified, it defaults to the system domain.

# current user folder of [domain]

Returns the current user folder of the specified OS X domain, typically found at /Users/username. If the domain is not specified, it defaults to the system domain.

# desktop folder of [domain]

Returns the desktop folder of the specified OS X domain, typically /Users/Username/Desktop. If the domain is not specified, it defaults to the system domain.

# developer docs folder of [domain]

Returns the developer docs folder of the specified OS X domain, typically found at /Developer/Documentation. If the domain is not specified, it defaults to the system domain.

# developer folder of [domain]

Returns the developer folder of the specified OS X domain, typically found at /Developer. If the domain is not specified, it defaults to the system domain. If the domain is not specified, it defaults to the system domain.

# developer help folder of [domain]

Returns the help folder of the specified OS X domain, typically /Developer/Documentation/Help. If the domain is not specified, it defaults to the system domain.

# disabled control panels folder of [domain]

Returns the control panels folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# disabled extensions folder of [domain]

Returns the extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# disabled shutdown items folder of [domain]

Returns the shutdown folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# disabled startup items folder of [domain]

Returns the startup items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# disabled system extensions folder of [domain]

Returns the systems extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# documentation folder of [domain]

Returns the documentation folder for the given OS X domain, typically found at /Library/Documentation. If the domain is not specified, it defaults to the system domain.Example: application support folder of user domain - Returns /var/root/Library/Application Support.

# documents folder of [domain]

Returns the documents folder for the specified OS X domain, typically found at /User/Username/Documents. If the domain is not specified, it defaults to the system domain.

# domain library folder of [domain]

Returns the domain library folder of the specified OS X domain, typically found at /Library. If the domain is not specified, it defaults to the system domain.

# domain top folder of [domain]

Returns the top folder of the specified OS X domain, typically found at /System. If the domain is not specified, it defaults to the system domain.

# extensions folder of [domain]

Returns the extensions folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# favorites folder of [domain]

Returns the favorites folder of the specified OS X domain, typically /Users/username/Library/Favorites. If the domain is not specified, it defaults to the system domain.

# fonts folder of [domain]

Returns the font folder of the specified OS X domain, typically /System/Library/Fonts. If the domain is not specified, it defaults to the system domain.

# framework [string] of [domain]

Returns a folder of the form &quot;/System/Library/Frameworks/&lt;string&gt;.framework&quot;.Note: This inspector appends .framework for you, so don&#39;t provide it. The framework inspector needs a domain, and without it defaults to the system domain.Example: framework &quot;MyPrivate&quot; of local domain - Returns /Library/Frameworks/MyPrivate.framework.

# framework folder of [domain]

Returns the framework folder of the specified OS X domain, typically /System/Library/Frameworks. If the domain is not specified, it defaults to the system domain.

# help folder of [domain]

Returns the help folder of the specified OS X domain, typically /Library/Documentation/Help. If the domain is not specified, it defaults to the system domain.

# internet plugins folder of [domain]

Returns the internet plugins folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# iss download folder of [domain]

Returns the Macintosh download folder for the specified domain.

# kernel extensions folder of [domain]

Returns the kernel extensions folder of the specified OS X domain, typically /System/Library/Extensions. If the domain is not specified, it defaults to the system domain.

# locales folder of [domain]

Returns the locales folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# location manager modules folder of [domain]

Returns the location manager modules folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# location manager preferences folder of [domain]

Returns the location manager preferences folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# locations folder of [domain]

Returns the locations folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# macos read me folder of [domain]

Returns the Mac OS read me folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# modem scripts folder of [domain]

Returns the modem scripts folder of the specified OS X domain, typically /System/Library/Modem Scripts. If the domain is not specified, it defaults to the system domain.

# preferences folder of [domain]

Returns the preferences folder of the specified OS X domain, typically /Users/username/Library/Preferences. If the domain is not specified, it defaults to the system domain.

# printer descriptions folder of [domain]

Returns the printer descriptions folder of the specified OS X domain, typically /System/Library/Printers/PPDs. If the domain is not specified, it defaults to the system domain.

# printer drivers folder of [domain]

Returns the printer drivers folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# printers folder of [domain]

Returns the printers folder of the specified OS X domain, typically /System/Library/Printers. If the domain is not specified, it defaults to the system domain.

# printmonitor documents folder of [domain]

Returns the printmonitor documents folder of the specified OS X domain, typically /Library/Printers/PrintMonitor Documents. If the domain is not specified, it defaults to the system domain.

# private framework folder of [domain]

Returns the private framework folder of the specified OS X domain, typically /System/Library/PrivateFrameworks. If the domain is not specified, it defaults to the system domain.

# quicktime folder of [domain]

Returns the quicktime folder of the specified OS X domain, typically /System/Library/QuickTime. If the domain is not specified, it defaults to the system domain.

# receipts folder of [domain]

Returns the receipts folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# scripting additions folder of [domain]

Returns the scripting additions folder of the specified OS X domain, typically /System/Library/Scripting Additions. If the domain is not specified, it defaults to the system domain.

# shared folder of [domain]

Returns the shared folder of the specified OS X domain, typically /Users/Shared. If the domain is not specified, it defaults to the system domain.

# shared libraries folder of [domain]

Returns the shared libraries folder of the specified OS X domain, typically /System/Library/CFMSupport. If the domain is not specified, it defaults to the system domain.

# shutdown items folder of [domain]

Returns the shutdown items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# sound folder of [domain]

Returns the sound folder of the specified OS X domain, typically /System/Library/Sound. If the domain is not specified, it defaults to the system domain.

# speech folder of [domain]

Returns the speech folder of the specified OS X domain, typically /System/Library/Speech. If the domain is not specified, it defaults to the system domain.

# startup items folder of [domain]

Returns the startup items folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# system folder of [domain]

Returns the system folder of the specified OS X domain, typically /System. If the domain is not specified, it defaults to the system domain.

# temporary items folder of [domain]

Returns the temporary items folder of the specified OS X domain, typically /private/tmp/. If the domain is not specified, it defaults to the system domain.

# text encodings folder of [domain]

Returns the text encodings folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# themes folder of [domain]

Returns the themes folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.

# user temp folder of [domain]

Returns the user temp folder of the specified OS X domain, typically /private/tmp/uid where uid is the user ID number. If the domain is not specified, it defaults to the system domain.

# users folder of [domain]

Returns the users folder of the specified OS X domain, typically /Users. If the domain is not specified, it defaults to the system domain.

# utilities folder of [domain]

Returns the utilities folder of the specified OS X domain, typically /Applications/Utilities. If the domain is not specified, it defaults to the system domain.

# voices folder of [domain]

Returns the voices folder of the specified OS X domain, typically /System/Library/Speech/Voices. If the domain is not specified, it defaults to the system domain.

# volume settings folder of [domain]

Returns the volume settings folder of the specified OS X domain. If the domain is not specified, it defaults to the system domain.
