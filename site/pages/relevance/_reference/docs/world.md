# above normal priority : priority class

A priority class constant signifying above normal priority.

# account with privileges : security account

Returns a security account constant corresponding to an &#39;account with privileges&#39;.

# action : action

Returns the action currently being parsed.

# action lock state : action lock state

Returns the client action lock state.

# active action : action

Returns the action currently executing.

# active device : active device

Returns a list of all active devices found using the Configuration Manager SetupDiGetClassDevs NT API.

# active device file : file

Under Windows NT, returns a list of file objects corresponding the list returned from the Windows NT EnumDeviceDrivers() function.

# active directory : active directory server

No documentation exists.

# active state : power state

Returns a power state constant signifying that the client system is active.

# administrator &lt;( bes computer, bes user )&gt; : boolean

Returns `True` if the specified user is an administrator of the given computers.

# administrator &lt;( bes user, bes computer )&gt; : boolean

Returns `True` if the specified user is an administrator of the given computers.

# all bes site : bes site

This iterative inspector returns a list of all external, master, operator, and custom sites.

# all computer count : historical computer count

Returns a list of all &lt;historical_computer_count&gt; objects.

# all firewall scope : firewall scope

Returns the scope of computers that allow ALL traffic through the firewall, corresponding to the Microsoft enumerated type NET_FW_SCOPE_ALL.

# all fixlet count : historical fixlet count

Returns a list of all the historical Fixlet counts.Note: This is a Web Reports-only inspector.

# all running service : service

Returns a list of all running Windows 32 services, such as ATAPI and BESRelay.

# all service : service

Returns a list of all Windows 32 services, including the BESRelay.

# allow firewall action : firewall action

Returns a value corresponding to the NET_FW_ACTION enumerated type, which specifies the action for a rule or default setting. This is a Vista inspector. For more information, see the MSDN Library entry for NET_FW_ACTION.

# analysis : analysis

No documentation exists.

# anonymous logon group : security account

This refers to  users who have logged in anonymously.

# ansi code page : integer

Returns an integer value of the Windows API GetACP.

# any ip version : ip version

Returns a type corresponding to the Microsoft enumerated value NET_FW_IP_VERSION_ANY.

# apparent registration server time : time

Shorthand for &#39;now of registration server&#39;. When the client registers with the server, the server passes its current time back to the client. The client starts a stop watch at that time. The apparent registration server time is the time the server passed back to the client, plus the elapsed time on the stop watch.

# apple extras folder : folder

Returns the apple extras folder of the system domain

# apple menu items folder : folder

Returns the apple menu items folder of the system domain

# application : application

Starting from IBM BigFix V9.5 Patch 5, the inspector for Mac systems finds all applications bundles and executables anywhere on the local hard drives and matches an application bundle to the path of the actual executable inside the bundle. For example, both queries `Q: application "/Applications/iTunes.app"` and `Q: application "/Applications/iTunes.app/Contents/MacOS/iTunes"` now recognize correctly the iTunes application package. This version of Inspector for Mac systems requires OS X Spotlight service to be enabled.

# application : filesystem object

The Inspector for Mac systems recursively finds all applications (bundles) and executables under the /Applications directory, as well as all of those under the Applications directories of all local users of the machine.

This Inspector was replaced by another Inspector returning an *application* type. You find the currently supported Inspector in [application : application](/relevance/reference/application.html#application-application).

# application event log : event log

Returns the object corresponding to the application event log, which records certain application events, such as the failure of MS SQL to access a database.

# application support folder : folder

Returns the application support folder of the system domain

# application usage summary : application usage summary

Returns an application usage summary containing information including the start time, duration and other statistics on client applications.

# applications folder : folder

Returns the applications folder of the system domain

# april : month

Returns april as an object of type month.

# assistants folder : folder

Returns the assistants folder of the system domain

# audio folder : folder

Returns the audio folder of the system domain

# audit failure event log event type : event log event type

Returns an object corresponding to an audit failure -- an event related to the failed execution of an action.

# audit policy : audit policy

Windows Vista (and later versions of Windows) allows a finer granularity with audit policies by using subcategories. Setting audit policy at the category level overrides the new subcategory feature. A new registry key introduced in Vista is used to manage subcategories without requiring a change to Group Policy. This registry can be set to prevent the application of category-level audit policy from both Group Policy and the Local Security Policy admin tool.

# audit success event log event type : event log event type

Returns an object corresponding to an audit success in an event log.

# august : month

Returns August as an object of type month.

# authenticated users group : security account

This refers to a group including users whose identities were authenticated when they logged on. Membership is controlled by the operating system.

# batch group : security account

This refers to a group including all users who have logged on through a batch queue facility such as the task scheduler. Membership is controlled by the operating system.

# below normal priority : priority class

Returns a priority class object with &#39;below normal&#39; priority. This applies to threads that can wait for other threads to complete before running. Threads with this status are in between idle and normal priority.

# bes action : bes action

Returns all actions, except those that are normally hidden in the console, such as subscription actions, management rights actions, etcetera.

# bes action set : bes action set

Returns the current list of BES Actions in the form of a set, which can be arithmetically manipulated.

# bes action status constrained : bes action status

Returns the BES Action status corresponding to constraints. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status disk free limited : bes action status

No documentation exists.

# bes action status disk limited : bes action status

No documentation exists.

# bes action status download failed : bes action status

Returns the BES Action status corresponding to failed downloads. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status download size limited : bes action status

Returns the BES Action status as unable to download data because the size of the data to download exceeds the threshold specified in `_BESClient_Download_SizeLimitMB`. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status error : bes action status

Returns the BES Action status corresponding to errors. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status evaluating : bes action status

Returns the BES Action status corresponding to evaluation. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status expired : bes action status

Returns the BES Action status corresponding to expiration. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status failed : bes action status

Returns the BES Action status corresponding to failure. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status fixed : bes action status

Returns the BES Action status corresponding to successful fixes. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status hash mismatch : bes action status

No documentation exists.

# bes action status invalid signature : bes action status

Returns the BES Action status corresponding to invalid signatures. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status irrelevant : bes action status

Returns the BES Action status corresponding to irrelevance This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status locked : bes action status

Returns the BES Action status corresponding to locking. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status offers disabled : bes action status

Returns the BES Action status corresponding to disabled offers. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending downloads : bes action status

Returns the BES Action status corresponding to pending downloads. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending login : bes action status

Returns the BES Action status corresponding to pending logins. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending message : bes action status

Returns the BES Action status corresponding to pending messages. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending offer : bes action status

Returns the BES Action status corresponding to pending offers. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending restart : bes action status

Returns the BES Action status corresponding to pending restarts. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status postponed : bes action status

Returns the BES Action status corresponding to postponements. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status running : bes action status

Returns the BES Action status corresponding to whether or not it is running. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status timeout reached : bes action status

No documentation exists.

# bes action status unreported : bes action status

Returns a constant representing an action status of &#39;not reported&#39;.

# bes action status user cancelled : bes action status

Returns the BES Action status corresponding to user cancelation. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status waiting : bes action status

Returns the BES Action status corresponding to waiting. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes analysis : bes fixlet

This inspector iterates over all of the Analysis objects. This is equivalent to "bes fixlets whose ( analysis flag of it )".

# bes analysis set : bes fixlet set

This inspector returns all of the Analysis objects as a set. This is equivalent to "bes fixlets whose ( analysis flag of it )".

# bes baseline : bes fixlet

This inspector iterates over all of the Baseline objects. This is equivalent to "bes fixlets whose ( baseline flag of it )".

# bes baseline set : bes fixlet set

This inspector returns all of the Baseline objects as a set. This is equivalent to "bes fixlets whose ( baseline flag of it )".

# bes brand : string

As of version 7.2, the BES Console can be branded by third parties who want to use the engine to deliver specific content. This inspector returns a string that identifies any branding associated with the BES Console. The unbranded Console returns &#39;bigfix&#39;, but other third-party brands may result.

# bes computer : bes computer

Returns a list of all the BES computers visible to the current console user.

# bes computer group : bes computer group

Returns the current list of BES computer groups.

# bes computer group set : bes computer group set

Returns the current list of BES computer groups in the form of a set, which can be arithmetically manipulated.

# bes computer set : bes computer set

Returns the current list of BES computers in the form of a set, which can be arithmetically manipulated.

# bes current wruser : string

No documentation exists.

# bes custom site : bes site

Returns a list of all custom sites. Deprecated as of version 7.0; instead use "all bes sites whose (custom site flag of it)".

# bes deployment option : bes deployment option

Returns the current deployment options as listed in the BES Admin Tool, under the Advanced Options tab. You can add your own name/value pairs to this list.

# bes domain : bes domain

Returns all the BES Domain objects.

# bes domain set : bes domain set

Returns all the BES Domain objects as a set.

# bes filter : bes filter

Returns the list of the currently defined BES Filters, collected across all topics, including Baselines, Actions, Fixlets, etcetera.

# bes filter set : bes filter set

Iterates over the BES Filters and converts the list to a set.

# bes fixlet : bes fixlet

Returns a list of all the BES properties.

# bes fixlet set : bes fixlet set

Returns the current list of BES fixlets in the form of a set, which can be arithmetically manipulated.

# bes language : string

Returns a string corresponding to the national language of the program, such as ENU for English or ESP for Spanish.

# bes ldap directory : bes ldap directory

No documentation exists.

# bes ldap directory set : bes ldap directory set

No documentation exists.

# bes license : license

Synonym for &#39;client license&#39;.

# bes property : bes property

Returns a list of all the BES custom site objects.

# bes property set : bes property set

Returns the current list of BES Properties in the form of a set, which can be arithmetically manipulated.

# bes role : bes role

No documentation exists.

# bes role set : bes role set

No documentation exists.

# bes site : bes site

Returns a list of all the BES sites.

# bes task : bes fixlet

This inspector returns all of the tasks objects. This is equivalent to "bes fixlets whose ( task flag of it )".

# bes task set : bes fixlet set

This inspector returns all of the tasks objects as a set. This is equivalent to "bes fixlets whose ( task flag of it )".

# bes unmanagedasset : bes unmanagedasset

Returns a list of all the Unmanaged Assets currently defined in BES.

# bes unmanagedasset set : bes unmanagedasset set

Returns a set of all BES Unmanaged Assets.

# bes user : bes user

Returns a list of all the BES users.

# bes user set : bes user set

Returns the current list of BES Users in the form of a set, which can be arithmetically manipulated.

# bes wakeonlan status : bes wakeonlan status

Returns the current BES WakeOnLan status.

# bes webui : bes webui

No documentation exists.

# bes webui app : bes webui app

Returns all WebUI applications.

# bes webui app set : bes webui app set

Returns all WebUI applications as a set.

# bes wizard : bes wizard

Returns a list of all the available BES Wizards.Note: This is a Console-only inspector.

# bes wizard set : bes wizard set

Returns a set of all BES Wizards.

# binary operator : binary operator

Returns all available binary operators.

{% qna %}
Q: binary operators
A: <rpm package version record> = <rpm package version record>: boolean
A: <rpm package version record> < <rpm package version record>: boolean
A: <rpm package version record> <= <rpm package version record>: boolean
A: <rpm package version record> = <string>: boolean
A: ...
{% endqna %}

This inspector can be used with `whose` to find binary operators that work on a specfic type.

{% qna %}
Q: binary operators whose (it as string contains "ipv6")
A: <ipv6 address> = <ipv6 address>: boolean
A: <ipv6 address> < <ipv6 address>: boolean
A: <ipv6 address> <= <ipv6 address>: boolean
{% endqna %}

# bios : bios

No documentation exists.

# block firewall action : firewall action

Returns a value corresponding to the NET_FW_ACTION enumerated type, which specifies the action for a rule or default setting. This is a Vista inspector. For more information, see the MSDN Library entry for NET_FW_ACTION.

# boot task trigger type : task trigger type

Creates a task trigger type corresponding to a boot trigger, which starts a task when the system is booted up.

# br : html

Creates an HTML &lt;br/&gt; tag to output a line break.

# builtin administrators group : security account

This refers to a built-in group . After the initial installation of the OS, the first member of the group is the Administrator account. When a computer then joins a domain, the Domain Admins group is added to the Administrators group. When a server becomes a domain controller, the Enterprise Admins group is also added to the Administrators group. The Administrators group has built-in capabilities that give its members full control over the system. The group is the default owner of any object that is created by any other member of the group.

# builtin backup operators group : security account

This refers to a built-in group which, by default, has no members. Backup Operators can back up and restore all files on a computer, regardless of file permissions. Backup Operators can log on to a computer and shut it down.

# builtin guests group : security account

This refers to a built-in group which, by default, only contains the Guest account. This group allows otherwise unauthorized users to log on with limited privileges to a computer&#39;s built-in Guest account.

# builtin network configuration operators group : security account

This refers to XP machines, where some admin privileges include managing the configuration of networking features.

# builtin power users group : security account

This refers to a built-in group which, by default, has no members. This group does not exist for domain controllers. Power Users can create other local users and groups as well as modify and delete accounts. They can also remove users from the other groups. Power Users also can install, manage and delete applications,  local printers and file shares.

# builtin remote desktop users group : security account

This refers to the XP only. Members of this group are granted the right to log in remotely.

# builtin replicator group : security account

This refers to Windows NT domains. This group is called Replicators and is used by the directory replication service. In 2K/XP the group is present but is not used.

# builtin users group : security account

This refers to a built-in group. After the initial installation of the OS, the first member is the Authenticated Users group. When a computer subsequently joins a domain, the Domain Users group is added to the Users group. These users can perform tasks such as running applications, using printers, shutting down or locking the computer. Users can install applications for their use only, provided the installation program supports per-user installation.

# cache folder : folder

Returns the cache folder of the system domain

# carbon folder : folder

Returns the carbon folder of the system domain

# cast : cast

No documentation exists.

# chewable items folder : folder

Returns the chewable items folder of the system domain

# classic domain : domain

Returns a classic domain object.

# classic folder : folder

Returns the classic folder of the system domain

# client : client

Returns the client object corresponding to the BigFix application evaluating the current relevance expression. This is equivalent to the file system object of the BigFix Client executable.

# client cryptography : client_cryptography

This inspector is similar to the core cryptography object except that it returns properties exclusive to the client (whereas &lt;cryptography&gt; is also available in the Console/Web Reports contexts).

# client license : license

Global object containing client licensing information.

# color sync folder : folder

Returns the color sync folder of the system domain

# colorsync profiles folder : folder

Returns the colorsync folder folder of the system domain

# com handler task action type : task action type

Returns a &#39;task action type&#39; corresponding to a task that activates a COM handler.

# component : component

Is an iterated property. The MacOS supports software "components", for example QuickTime codecs. This iterator can examine the components that are available.

# component folder : folder

Returns the component folder of the system domain

# computer : computer

Refers to the computer itself.

# computer id : integer

This is a unique integer assigned to the computer by the BES system.

# computer name : string

Returns a string corresponding to the name of the computer as it appears on the network.

# connection status authenticating : connection status

Returns the value NCS_AUTHENTICATING: The connection is waiting for authentication to occur.

# connection status authentication failed : connection status

Returns the value NCS_AUTHENTICATION_FAILED: Authentication has failed on this connection.

# connection status authentication succeeded : connection status

Returns the value NCS_AUTHENTICATION_SUCCEEDED: Authentication has succeeded on this connection.

# connection status connected : connection status

Returns the value NCS_CONNECTED: The connection is in a connected state.

# connection status connecting : connection status

Returns the value NCS_CONNECTING: The connection is in the process of connecting.

# connection status disconnected : connection status

Returns the value NCS_DISCONNECTED: The connection is disconnected.

# connection status disconnecting : connection status

Returns the value NCS_DISCONNECTING: The connection is in the process of disconnecting.

# connection status hardware disabled : connection status

Returns the value NCS_HARDWARE_DISABLED: The hardware for the connection is present, but is not enabled.

# connection status hardware malfunction : connection status

Returns the value NCS_HARDWARE_MALFUNCTION: A malfunction has occurred in the hardware for the connection.

# connection status media disconnected : connection status

Returns the value NCS_MEDIA_DISCONNECTED: The media, for example the network cable, is disconnected.

# connection status no hardware present : connection status

Returns the value NCS_NO_HARDWARE_PRESENT: The hardware for the connection, for example network interface card (NIC), is not present.

# contextual menu items folder : folder

Returns the contextual menu items folder of the system domain

# control panel : enableable_file

No documentation exists.

# control panels folder : folder

Returns the control panels folder of the system domain

# control strip modules folder : folder

Returns the control strip modules folder of the system domain

# core services folder : folder

Returns the core services folder of the system domain

# cpu speed : integer

Returns the clock speed of the cpu in Hz.

# cpupackage : cpupackage

No documentation exists.

# creator group group : security account

This refers to a placeholder in an inheritable access control entry (ACE). When the ACE is inherited, the system replaces the SID with the one from the primary group of the object&#39;s current owner. The primary group is used only by the POSIX subsystem.

# creator owner group : security account

This refers to a placeholder in an inheritable access control entry (ACE). When the ACE is inherited, the system replaces this SID with the one from the object&#39;s current owner.

# cryptography : cryptography

A global object that implements the FIPS 140-2 standard for secure signing and authentication throughout the BigFix application.

# current analysis : bes fixlet

This Client inspector is used to locate the site corresponding to the current analysis in order to look at certain related files.  This is helpful for SCM content that resides in Fixlet sites and can be copied to custom sites.  The value of &#39;current analysis&#39; will move with the copy. In the Client context, this inspector has global scope and returns a Fixlet.Note: When used in a session context, this inspector has a scope limited to the BES Fixlet.

# current analysis : fixlet

No documentation exists.

# current bes server : bes server

Returns a &lt;bes server&gt; object corresponding to the BES Server currently connected to the Console or Web Reports applications. The current bes server inspectors allow dashboards to access files hosted on the current BES Server.

# current bes site : bes site

Returns the site that is the source of the current relevance evaluation. Items in a site that can evaluate relevance include fixlets, Tasks, Baselines, Analyses, Wizards and Dashboards.

# current computer : bes computer

This inspector returns the computer that is currently selected by a right-click in the BES Console. This inspector is designed to assist you in the creation of extended Context menu applications.

# current console user : bes user

Returns a user object for the user currently logged into the BES Console.

# current date : date

Returns the current date.

{% qna %}
Q: current date
A: Wed, 18 Mar 2015
{% endqna %}

# current day_of_month : day of month

Returns the current day of the month.

{% qna %}
Q: current day_of_month
A: 21
{% endqna %}

# current day_of_week : day of week

Returns the current day of the week.

{% qna %}
Q: current day_of_week
A: Saturday
{% endqna %}

# current day_of_year : day of year

Returns the current day of the year.

{% qna %}
Q: current day_of_year
A: March 21
{% endqna %}

# current domain : bes domain

Returns the domain that is the source of the current relevance evaluation. Items in the domain that can evaluate relevance include fixlets, Tasks, Baselines, Analyses, Wizards and Dashboards and Domains.

# current firewall profile type : firewall profile type

Retrieves the type of firewall profile that is currently in effect.

# current fixlet : bes fixlet

When this inspector is evaluated in the context of a fixlet, it returns the associated Fixlet object.Note: This is a Console-only inspector.

# current month : month

Returns the current month.

{% qna %}
Q: current month
A: March
{% endqna %}

# current month_and_year : month and year

Returns the current date in month year format.

{% qna %}
Q: current month_and_year
A: March 2015
{% endqna %}

# current relay : current relay

Returns an object corresponding to the server or relay that the client last registered with. This may be a BES Relay or the BES root server.

# current site : site

Returns the current site object. See site.

# current task : bes fixlet

When this inspector is evaluated in the context of a Task, it returns the associated Fixlet object.Note: This is a Console-only inspector.

# current time_of_day : time of day with time zone

Returns the current time of day in the local time zone.

{% qna %}
Q: current time_of_day
A: 10:58:08 -0700
{% endqna %}

# current unmanagedasset : bes unmanagedasset

Returns the unmanaged asset that is currently selected in the BES Console from the right-click context menu under the Unmanaged Assets tab. This inspector is designed to assist you in the creation of extended Context Menu applications.

# current user : logged on user

Returns the active console (local) user, if logged on, otherwise returns "Does not exist". For all users that are logged on remotely, for instance through RDP, telnet, ssh, VNC, putty and so on, this inspector returns "Does not exist".

# current user : user

Returns the active, local user, if logged on. Otherwise does not exist.

{% qna %}
Q: name of current user
A: greenb
{% endqna %}

# current user folder : folder

Returns the current user folder of the system domain

# current wizard : bes wizard

If this inspector is being evaluated in the context of a Wizard, then it returns the corresponding &lt;bes wizard&gt; object.

# current year : year

Returns the current year.

{% qna %}
Q: current year
A: 2015
{% endqna %}

# custom bes fixlet : bes fixlet

This inspector iterates over all of the fixlet objects, only returning fixlets where "custom flag" is TRUE.

# custom bes fixlet set : bes fixlet set

This inspector iterates over all of the fixlet objects, only returning sets of fixlets where "custom flag" is TRUE.

# custom firewall scope : firewall scope

Returns the custom firewall scope, corresponding to the Microsoft enumerated type: NET_FW_SCOPE_CUSTOM.

# daily task trigger type : task trigger type

Creates a task trigger type corresponding to a daily trigger, which starts a task on a daily schedule.

# datastore inspector : module

No documentation exists.

# day : time interval

Returns a time interval corresponding to 1 day.

{% qna %}
Q: march 11 of 1984 + day
A: Mon, 12 Mar 1984
{% endqna %}

# debianpackage : debianpackagecache

Returns a list of all the Debian packages on the client machine.

# december : month

Returns December as an object of type month.

# default web browser : application

No documentation exists.

# default web browser : file

Returns a global object corresponding to the WinCE web browser installed on the Client Windows Mobile device. Windows Embedded CE uses IE, which has been optimized for WinCE devices.

# desktop folder : folder

Returns the desktop folder of the system domain

# developer docs folder : folder

Returns the developer docs folder of the system domain

# developer folder : folder

Returns the developer folder of the system domain

# developer help folder : folder

Returns the developer help folder of the system domain

# device type : string

Returns the type of the device (desktop, laptop or server, in case of VMWare virtual systems). The evaluation is determined by the hardware installed, not by the operating system definitions. The result is returned by the WMI, if it is active on the device, otherwise it is determined by the type of battery installed on the device.

# dialup group : security account

Refers to a group implicitly including all users who logged in to the system through a dial-up connection. Membership is controlled by the operating system.

# disabled control panel : enableable_file

No documentation exists.

# disabled control panels folder : folder

Returns the dsiabled control panels folder of the system domain

# disabled extension : enableable_file

No documentation exists.

# disabled extensions folder : folder

Returns the disabled extensions folder of the system domain

# disabled shutdown item : enableable_file

No documentation exists.

# disabled shutdown items folder : folder

Returns the disabled shutdown items folder of the system domain

# disabled startup item : enableable_file

No documentation exists.

# disabled startup items folder : folder

Returns the disabled startup items folder of the system domain

# disabled system extensions folder : folder

Returns the disabled system extensions folder of the system domain

# dmi : dmi

Creates the global dmi object. If no dmi information is available, creation of the object will fail.

# dns name : string

Returns the DNS name of the computer.

# documentation folder : folder

Returns the documentation folder of the system domain

# documents folder : folder

Returns the documents folder of the system domain

# domain firewall profile type : firewall profile type

Creates a domain firewall profile type for comparison.

# domain library folder : folder

Returns the domain library folder of the system domain

# domain name : string

Returns the fully qualified domain name of the machine.

# domain top folder : folder

Returns the domain top folder of the system domain

# domain user : local user

Returns all of the users that are members of the domain for which the machine is a user.

Since version 8.1.535.0, "domain user" creation returns &lt;{{'user' | linkType}}> type. See [domain user : user](/relevance/reference/user.html#domain-user-user).

# domain user : user

Returns all of the users that are members of the domain for which the machine is a user.

# domainname : string

Same as domain name.

# download folder : folder

This inspector is available in relevance subsitution action processing. When the action is active, this inspector returns a folder object for `__Download`, otherwise it returns a folder object for `__Global\sitename\actionid\named`. This inspector is designed for the prefetch process of action execution.

# download server : download server

No documentation exists.

# download storage folder : download storage folder

This inspector creates a pointer to the current download storage folder.

# drive : drive

No documentation exists.

# drive : filesystem

Iterates through all valid drives on the system. Typically used to return a list of the drives (volumes, filesystems) on the client computer. On Windows computers, this returns a &lt;drive&gt; object.On *nix computers, this returns a &lt;filesystem&gt; object.Drives, volumes and filesystems are treated the same on the Macintosh and return a &lt;volume&gt; type.

# drive : volume

No documentation exists.

# driver running service : service

Returns a list of all running Windows 32 system drivers.

# driver service : service

Returns a list of all Windows 32 system drivers.

# email task action type : task action type

Returns a &#39;task action type&#39; corresponding to a task that sends an email.

# enabled control panel : enableable_file

No documentation exists.

# enabled extension : enableable_file

No documentation exists.

# enabled shutdown item : enableable_file

No documentation exists.

# enabled startup item : enableable_file

No documentation exists.

# environment : environment

Returns an object corresponding to the currently defined set of environment variables.

# error event log event type : event log event type

Returns an object corresponding to an error in the event log, such as the failure of a service to start.

# event task trigger type : task trigger type

Creates a task trigger type corresponding to an event trigger, which starts a task when a system event occurs.

# everyone group : security account

This refers to a group including all users, even anonymous users and guests. Membership is controlled by the operating system.

# exec task action type : task action type

Returns a &#39;task action type&#39; corresponding to a task that runs a program.

# extension : enableable_file

No documentation exists.

# extensions folder : folder

Returns the extensions folder of the system domain

# false : boolean

Returns the boolean `False`.

{% qna %}
Q: if false then "What is going on?!" else "Looks false to me"
A: Looks false to me
{% endqna %}

# favorites folder : folder

Returns the favorites folder of the system domain

# february : month

Returns February as an object of type month.

# file_and_print firewall service type : firewall service type

Returns the global service type for file and print sharing, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_FILE_AND_PRINT.

# filesystem : filesystem

Returns the volume corresponding to the filesystem. Typically used to return a list of the filesystems (drives, volumes) on the client computer. Drives, volumes and filesystems are treated the same on the Macintosh and return a &lt;volume&gt; type.

# filesystem : volume

No documentation exists.

# firewall : firewall

Returns the global firewall object for this computer.

# first interface scheduled task : scheduled task

Returns a list of all the scheduled tasks.1.0 interface only.

# fonts folder : folder

Returns the fonts folder of the system domain

# framework folder : folder

Returns the framework folder of the system domain

# friday : day of week

Returns Friday as a day of week object.

# ghz : hertz

Returns a Hertz object corresponding to 1 giga-hertz.

{% qna %}
Q: speed of main processor / ghz
A: 3
{% endqna %}

# gp override firewall local policy modify state : firewall local policy modify state

Returns a value corresponding to the NET_FW_MODIFY_STATE enumerated type, which specifies the effect of modifications to the current policy. For more information, see the MSDN Library entry for NET_FW_MODIFY_STATE.

# greatest hz : hertz

Returns the largest hertz object that can be represented on this machine.

{% qna %}
Q: greatest hz
A: 9223372036854775807 hertz
{% endqna %}

# greatest integer : integer

Returns the largest signed 64-bit integer.

{% qna %}
Q: greatest integer
A: 9223372036854775807
{% endqna %}

# greatest time interval : time interval

Returns the greatest time interval representable.

{% qna %}
Q: greatest time interval
A: 106751991 days, 04:00:54.775807
{% endqna %}

# grub config file : grub config file

Returns the grub config file from the default location, either "/boot/grub/menu.lst" or "/boot/grub/grub.conf".

# hardware : hardware

Returns an object containing properties of the hardware.

# help folder : folder

Returns the help folder of the system domain

# hidden bes action : bes action

Returns all actions that are normally hidden by the console, such as subscription actions, management rights actions, etcetera.

# hidden bes action set : bes action set

Retrieves the set (iterated list) of hidden BES Actions.

# high priority : priority class

Returns a priority class object with &#39;high&#39; priority. These threads will steal processor time from other threads and should be used very carefully. Typically, they are used strictly for responding to time-critical events.

# host name : string

Returns the machine name. This is the same as the computer name or hostname on UNIX machines.

# hostname : string

Returns the standard host name, usually for the computer&#39;s network.

{% qna %}
Q: hostname
A: Hound
{% endqna %}

# hotsync manager : hotsync manager

No documentation exists.

# hour : time interval

Returns a time interval corresponding to 1 hour.

# hr : html

Creates a horizontal line tag.

{% qna %}
Q: hr
A: &lt;hr/&gt;
{% endqna %}

# html tag &lt;( string, html )&gt; : html

Returns an HTML snippet containing the specified html enclosed in an html tag specified by string.

# html tag &lt;( string, html attribute list )&gt; : html

Returns an HTML snippet containing a HTML attribute list enclosed in an html tag specified by the string.

# html tag &lt;( string, html attribute list, html )&gt; : html

Returns an HTML snippet enclosed in a tag specified by the string, modified by the html attribute list and bracketing the html argument.

# html tag &lt;( string, html attribute list, string )&gt; : html

Returns an HTML snippet enclosed in a tag specified by the first string, modified by the html attribute list and bracketing the second string argument.

# html tag &lt;( string, string )&gt; : html

Returns an HTML snippet containing the second string enclosed in an html tag specified by the first string.

# hyperthreading capable : boolean

Returns `True` if the processor is capable of running with [hyperthreading](http://en.wikipedia.org/wiki/Hyper-threading) enabled.

{% qna %}
Q: hyperthreading capable
A: True
{% endqna %}

# hyperthreading enabled : boolean

Returns `True` if the machine is running with [hyperthreading](http://en.wikipedia.org/wiki/Hyper-threading) enabled.

{% qna %}
Q: hyperthreading enabled
A: False
{% endqna %}

# hz : hertz

Returns a hertz object corresponding to 1 hertz.

# idle priority : priority class

Returns a priority class object with &#39;idle&#39; priority. Processes that monitor the Client, such as screen savers, typically use this priority to keep them from interrupting higher priority threads.

# idle state : power state

Returns a power state constant signifying that the client system is idle.

# idle task trigger type : task trigger type

Creates a task trigger type corresponding to a idle trigger, which starts a task when the system is enters the idle state.

# in agent context : boolean

Returns `True` if this inspector is being evaluated in the BigFix Agent.

# in console context : boolean

Returns `True` if this inspector is being evaluated in the BigFix Console.

# in proxy agent context : boolean

Returns `True` if this inspector is being evaluated in the BigFix Proxy Agent.

# in web reports context : boolean

Returns `True` if this inspector is being evaluated in Web Reports.

# inbound blocked firewall local policy modify state : firewall local policy modify state

Returns a value corresponding to the NET_FW_MODIFY_STATE enumerated type, which specifies the effect of modifications to the current policy. For more information, see the MSDN Library entry for NET_FW_MODIFY_STATE.

# information event log event type : event log event type

Returns an object corresponding to an information event -- An informational event which is generally related to a successful action.

# integer in &lt;( integer, integer )&gt; : integer

Returns a list of the integers contained between the endpoints.

{% qna %}
Q: integers in (1, 5)
A: 1
A: 2
A: 3
A: 4
A: 5
{% endqna %}

{% qna %}
Q: integers in (5, 1)
A: 5
A: 4
A: 3
A: 2
A: 1
{% endqna %}

# integer in &lt;( integer, integer, integer )&gt; : integer

Returns a list of the integers contained between the endpoints specified by the first two integers, with a step size specified by the third integer.

{% qna %}
Q: integers in (1, 5, 2)
A: 1
A: 3
A: 5
{% endqna %}

{% qna %}
Q: integers in (5, 1, -2)
A: 5
A: 3
A: 1
{% endqna %}

# interactive group : security account

This refers to a group including all users who have logged on interactively. Membership is controlled by the operating system.

# internet plugins folder : folder

Returns the folder object corresponding to the internet plugins.

# invalid state : power state

Returns a power state constant signifying that the client system is invalid.

# iokit registry : registryroot

Returns the root of the registry; the place to start with the registry.

# ips image : ips image

No documentation exists.

# ipv4 : ip version

Provides a comparison value for a firewall or other ip version inspector.

# ipv4 routing table : ipv4 routing table

Returns the ipv4 routing table. Use &#39;routes of ipv4 routing table&#39; or &#39;all routes of ipv4 routing table&#39; to get more information.

# ipv4 routing table : routing table

No documentation exists.

# ipv6 : ip version

Provides a comparison value for a firewall or other ip version inspector.

# ipv6 routing table : routing table

No documentation exists.

# iss download folder : folder

The Macintosh download folder. This inspector was previously labeled "download," which now refers to a world object that performs dynamic downloading.

# january : month

Returns January as an object of type month.

# july : month

Returns July as an object of type month.

# june : month

Returns June as an object of type month.

# kernel extension : kernel_extension

Returns all the kernel extensions objects.

# kernel extensions folder : folder

Returns the kernel extensions folder of the system domain

# keyboard type : integer

Returns an integer representing the keyboard type

# khz : hertz

Returns a hertz object corresponding to 1 kilohertz.

# last relay select time : time

Returns the time when last relay selection took place.

# least hz : hertz

Returns the least hertz value that can be represented on this machine.

{% qna %}
Q: least hz
A: -9223372036854775808 hertz
{% endqna %}

# least integer : integer

Returns the least 64-bit integer value.

{% qna %}
Q: least integer
A: -9223372036854775808
{% endqna %}

# least time interval : time interval

Returns the least time interval that can be represented on this machine.

{% qna %}
Q: least time interval
A: -106751991 days, 04:00:54.775808
{% endqna %}

# local administrator : boolean

Returns the boolean TRUE if the user belongs to the local administrator group. Also returns `True` for Win9x and WinME.

# local domain : domain

Returns a local domain object.

# local group : local group

Returns local groups defined on the local computer using the windows NetLocalGroupEnum API. Several local groups are defined simply by a default operating system install, and have names such as Administrators, Backup Operators, Guests, Network Configuration Operators, Power users, Users, etcetera. Some software applications also define local groups in order to help manage protections.

# local mssql database : local mssql database

Returns local MSSQL database objects.

# local service group : security account

Returns a security account constant corresponding to a &#39;local service group&#39;.

# local subnet firewall scope : firewall scope

Returns the local subnet firewall scope, corresponding to the Microsoft enumerated type: NET_FW_SCOPE_LOCAL_SUBNET.

# local time zone : time zone

Returns a time zone object corresponding to the local time zone.

# local user : local user

Itererates of all cached Active Directory local users. This inspector only works in the client context when caching is enabled.

Since version 8.1.535.0, "local user" creation returns &lt;{{'user' | linkType}}> type. See [local user : user](/relevance/reference/user.html#local-user-user).

# local user : user

Returns all local user objects.

On Unix/Linux platform with Bigfix client version below 9.5, this returns only logged-on users. Since 9.5, this returns all local users, logged in or not.

# locales folder : folder

Returns the locales folder of the system domain

# location manager modules folder : folder

Returns the location manager modules folder of the system domain

# location manager preferences folder : folder

Returns the location manager preferences folder of the system domain

# locations folder : folder

Returns the locations folder of the system domain

# logged off state : power state

Returns a power state constant signifying that the client system is logged off.

# logged on user : logged on user

Returns zero or more users logged on to this computer. This inspector iterates through all logged-on users, using Fast User Switching, Terminal Services, ACLs, and on Win 9x, the registry.

# logical processor count : integer

Returns the number of logical processors available per physical processor. This can be interpreted as the number of hyperthreads that could be enabled on the machine. On a machine with 2 physical processors, each with 2 possible hyperthreads per processor, the &#39;physical processor count&#39; and the &#39;logical processor count&#39; would both return 2, while the &#39;number of processors&#39; would return 4, since there are a total of 4 logical processors available for work. With hyperthreading turned off, the &#39;number of processors&#39;, &#39;logical processor count&#39; and &#39;physical processor count&#39; would all be 2. Disabling one of those processors will then give &#39;number of processors&#39;=1, &#39;logical processor count&#39;=2, and &#39;physical processor count&#39;=1. If the number of processors / physical processor count != logical processor count, you can turn on hyperthreading.

# logical ram : integer

Returns the amount of logical ram in the computer, physical plus virtual.

# logical volume manager : logical volume manager

Returns the global logical volume manager on AIX systems.

# logon task trigger type : task trigger type

Creates a task trigger type corresponding to a logon trigger, which starts a task when a user logs on. When the scheduler starts, all the logged-on users are noted, and any logon triggers that match the users will launch their associated task.

# machine name : string

Returns the machine name. The value is from a long enumeration of all Mac platforms. See the header file Gestalt.h or Apple&#39;s web site.

# machine type : integer

Returns an integer representing the machine type

# macos read me folder : folder

Returns the macos read me folder of the system domain

# main gather service : nothing

No documentation exists.

# main gather service : service

Returns a service object for the main gathering service, typically located on the main server.Note: On a Macintosh, returns &lt;nothing&gt;. Included for compatibility.

# main palm device : palm device

No documentation exists.

# main processor : processor

Returns the processor object corresponding to the main processor.

# march : month

Returns March as an object of type month.

# may : month

Returns May as an object of type month.

# media type bridge : media type

Returns the value NCM_BRIDGE: Bridged connection.

# media type direct : media type

Returns the value NCM_DIRECT: Direct serial connection through a serial port.

# media type isdn : media type

Returns the value NCM_ISDN: Connection is through an integrated services digital network (ISDN) line.

# media type lan : media type

Returns the value NCM_LAN: Connection is to a local area network (LAN).

# media type phone : media type

Returns the value NCM_PHONE: Dial-up connection over a conventional phone line.

# media type pppoe : media type

Returns the value NCM_PPPOE: Point-to-Point protocol (PPP) over Ethernet.

# media type shared access host lan : media type

Returns the value NCM_SHAREDACCESSHOST_LAN: Shared connection to a LAN.

# media type shared access host ras : media type

Returns the value NCM_SHAREDACCESSHOST_RAS: Shared connection to a remote or wide area network (WAN).

# media type tunnel : media type

Returns the value NCM_TUNNEL: Virtual private network (VPN) connection.

# metabase : metabase

Returns the IIS metabase object.

# mhz : hertz

Returns a hertz object corresponding to 1 megahertz.

# microsecond : time interval

Returns a time interval corresponding to .000001 seconds.

# midnight : time of day

Returns 00:00:00 as a time of day object.

# millisecond : time interval

Returns a time interval corresponding to .001 seconds.

# minute : time interval

Returns a time interval corresponding to 1 minute.

# model : string

Returns the model of the computer.

# modem scripts folder : folder

Returns the modem scripts folder of the system domain

# module : module

No documentation exists.

# monday : day of week

Returns the day of week object for Monday.

# monitor invalid state : power state

Returns a power state constant signifying that the attached computer monitor state is invalid.

# monitor off state : power state

Returns a power state constant signifying that the attached computer monitor is off.

# monitor on state : power state

Returns a power state constant signifying that the attached computer monitor is on.

# monitor standby state : power state

Returns a power state constant signifying that the attached computer monitor is in a standby state.

# month : number of months

Returns the specified number of months.

# monthly task trigger type : task trigger type

Creates a task trigger type corresponding to a Monthly trigger, which starts a task when the associated day of the week occurs, such as the third of each month from July through December.

# monthlydow task trigger type : task trigger type

Creates a task trigger type corresponding to a MonthlyDOW trigger, which starts a task when the associated day of the week occurs, such as the second Monday from January through June.

# name registry version : version

Returns the version of the Macintosh Name Registry.

# native program files folder : folder

No documentation exists.

# native registry : registry

On 32 bit versions of windows, this returns the same as registry32 and registry. On 64 bit versions of windows, this returns the same as registry64.

# native system folder : folder

No documentation exists.

# network : network

Returns an object containing properties of the network.

# network domain : domain

Returns a network domain object.

# network group : security account

This refers to a group implicitly including all users who are logged on through a network connection. Membership is controlled by the operating system.

# network option : network_option

Returns all network parameter objects.

# network service group : security account

Returns a security account constant corresponding to a &#39;network service group&#39;.

# network share : network share

Creates a network shared object.

# nil : undefined

No documentation exists.

# none firewall service type : firewall service type

Returns the no firewall service type, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_NONE.

# noon : time of day

Returns 12:00:00 as a time of day object.

# normal priority : priority class

Returns a priority class object with &#39;normal&#39; priority. This is the default priority class of a process.

# november : month

Returns November as an object of type month.

# now : time

Returns the current time as a time object.

# nt domain controller product type : operating system product type

Returns an object corresponding to OS product type of nt domain controller.

# nt server product type : operating system product type

Returns an object corresponding to OS product type of nt server.

# nt workstation product type : operating system product type

Returns an object corresponding to OS product type of nt workstation.

# nubus map : integer

Returns the nubus map.

# null : undefined

No documentation exists.

# object repository : object repository

No documentation exists.

# object repository : object_repository

Returns the object repository. Use &#39;filesets of object repository&#39; or &#39;products of object repository&#39; for more information.

# october : month

Returns October as an object of type month.

# odm : odm

Returns the odm base object.

# oem code page : integer

Returns an integer value of the Windows API GetOEMCP.

# off state : power state

Returns a power state constant signifying that the client system is off.

# ok firewall local policy modify state : firewall local policy modify state

Returns a value corresponding to the NET_FW_MODIFY_STATE enumerated type, which specifies the effect of modifications to the current policy. For more information, see the MSDN Library entry for NET_FW_MODIFY_STATE.

# on appropriate disk domain : domain

Returns one of the Macintosh domains. In most cases, this is the equivalent of kOnAppropriateDisk. On Mac OS X, this constant is used instead of the constant kOnSytemDisk to indicate any disk. For more information, see the Apple documentation on Carbon domain constants.

# on system disk domain : domain

Returns the OnSystemDisk domain.

# operating system : operating system

Returns the operating system object.

{% qna %}
Q: operating system
A: Win8.1 6.3.9600
{% endqna %}

{% qna %}
Q: operating system
A: Mac OS X 10.10.2
{% endqna %}

{% qna %}
Q: operating system
A: Linux Ubuntu 14.04.1 LTS (3.13.0-33-generic)
{% endqna %}

# palm device : palm device

No documentation exists.

# pending license update : boolean

Returns `True` if the license update is currently pending. This means that the license has been updated in the database, but has not yet been put into a masthead and pushed down to clients.  It is used by the license overview to tell you that you have an updated license, but your clients may still be in restricted mode because they aren&#39;t aware of the new license parameters.

# pending login : boolean

Installers may leave values in the registry that the operating system will execute when the next user logs in. Pending login can detect these registry entries.

# pending restart : boolean

Returns `True` if the operating system indicates that a restart needs to occur.

# pending restart name : string

This iterated inspector returns the names of currently pending restarts.

# physical processor count : integer

Returns the number of physical processors on the machine. Note that &#39;number of processors&#39; returns the number of logical processors. To determine the number of logical processors per physical processor, use &#39;number of processors / physical processor count&#39;.

# physical ram : integer

Returns the amount of physical ram in the computer.

# pkgdb : pkgdb

A top-level object containing a list of all the installed packages, in the form of pkginfos.

# plain bes fixlet : bes fixlet

This inspector returns all of the plain fixlet objects. This is equivalent to "bes fixlets whose ( fixlet flag of it )".

# plain bes fixlet set : bes fixlet set

This inspector returns all of the plain fixlet objects as a set. This is equivalent to "bes fixlets whose ( fixlet flag of it )".

# power history : power history

Returns the power history of the client computer. This points to historical information (the default is 14 days) about the power usage of the client computer and its attached monitor.

# power level : power level

Returns a power level representing the underlying state of the battery or charging system.

# powerpc : boolean

Returns `True` if the cpu is a PowerPC, FALSE if it is a 68000 chip.

# preferences folder : folder

Returns the preferences folder of the system domain

# preferred bes language : string

Returns a string corresponding to the preferred national language of the current program installation.

# primary internet connection : network ip interface

This contains information about the current internet connection.

# printer descriptions folder : folder

Returns the preinter descriptions folder of the system domain

# printer drivers folder : folder

Returns the printer drivers folder of the system domain

# printers folder : folder

Returns the printers folder of the system domain

# printmonitor documents folder : folder

Returns the printmonitor documents folder of the system domain

# private firewall profile type : firewall profile type

Retrieves the enumerated variable corresponding to private profile type. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

# private framework folder : folder

Returns the private framework folder of the system domain

# private variable &lt;( string, string )&gt; : string

This inspector returns a string containing the dashboard datastore private variable corresponding to the dashboard ID and name provided in the first and second items in the tuple.

# process : process

Returns all process objects currently running.

{% qna %}
Q: (pid of it, name of it) of processes
A: 1, node
A: 18, qna
{% endqna %}

# processor : processor

Returns all the processor objects defined on the machine. See processor.

# program files folder : folder

Returns the 32 bit program folder correct for the OS. On 64 bit this is C:\Program Files (x86) and 32 bit it is C:\Program Files

# program files x32 folder : folder

Returns the 32 bit program folder correct for the OS. On 64 bit this is C:\Program Files (x86) and 32 bit it is C:\Program Files

# program files x64 folder : folder

Returns the 64 bit program folder on a 64 bit OS. Returns an error on a 32 bit OS.

# property : property

No documentation exists.

# proxy agent service : service

Returns a service object of the BESProxyAgent if one is present

# public firewall profile type : firewall profile type

Retrieves the enumerated variable corresponding to public profile type. This profile type is used for public internet access points. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

# quickdraw version : version

Returns the version of QuickDraw installed.

# quicktime folder : folder

Returns the quicktime folder of the system domain

# ram : ram

Returns a ram object for inspecting the properties of random access memory installed on the machine.

# random access memory : ram

Returns a ram object for inspecting the properties of random access memory installed on the machine.

# random floating point : floating point

No documentation exists.

# random integer : integer

No documentation exists.

# realtime priority : priority class

Returns a priority class object with &#39;realtime&#39; priority. These threads should be sparingly used, since they may interrupt user input and some disk operations. They are typically used for short, time-sensitive communication with low level hardware.

# receipts folder : folder

Returns the receipts folder of the system domain

# recent application : application

Returns all the application objects that have recently been executing on the machine. See application.

# regapp : application

No documentation exists.

# regapp : filesystem object

This inspector returns the applications available to the Client. On Windows systems, this inspector returns all the application objects defined under the &#39;App Paths&#39; key of the registry. On a Macintosh, it recursively finds all applications (bundles) and executables under the /Applications directory, as well as all of those under the Applications directories of all local users of the machine. It returns a &lt;filesystem object&gt;. This inspector is the same as application, and is included for compatibility with Windows.

# registration server : registration server

No documentation exists.

# registration task trigger type : task trigger type

Creates a task trigger type corresponding to a registration trigger, which starts a task whenever it gets registered or updated.

# registry : dummy type

Returns a registry object. Note: On a Macintosh, this returns a &lt;dummy type&gt; object.

# registry : registry

No documentation exists.

# relay service : nothing

No documentation exists.

# relay service : service

Returns a service object for the relay component of BES. Note: On a Macintosh, this returns &lt;nothing&gt;.

# relevant &lt;( bes computer, bes fixlet )&gt; : boolean

Returns `True` if the given fixlet is relevant on the specified computer.

# relevant &lt;( bes fixlet, bes computer )&gt; : boolean

Returns `True` if the given fixlet is relevant on the specified computer.

# remote desktop firewall service type : firewall service type

Returns the remote desktop firewall service type, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_REMOTE_DESKTOP.

# remote interactive logon group : security account

Refers to the group of users who log on using an RDP connection.

# result &lt;( bes action, bes computer )&gt; : bes action result

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result from &lt;bes action&gt; of &lt;bes computer&gt;.

# result &lt;( bes computer, bes action )&gt; : bes action result

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result from &lt;bes action&gt; of &lt;bes computer&gt;.

# result &lt;( bes computer, bes fixlet )&gt; : bes fixlet result

Returns a Fixlet result for the given computer and Fixlet. This command is a variant of other result inspectors, such as result from &lt;bes fixlet&gt; of &lt;bes computer&gt;.

# result &lt;( bes computer, bes property )&gt; : bes property result

Returns the result of the specified BES property and computer.

# result &lt;( bes fixlet, bes computer )&gt; : bes fixlet result

Returns a Fixlet result for the given computer and Fixlet. This command is a variant of other result inspectors, such as result from &lt;bes fixlet&gt; of &lt;bes computer&gt;.

# result &lt;( bes property, bes computer )&gt; : bes property result

Returns the result of the specified BES property and computer.

# rom version : version

Returns the version of the system ROM.

# root folder : folder

Returns the folder corresponding to &#39;/&#39;.

# root server : root server

Returns an object representing the root BES Server to which the client last registered.

# routing table : routing table

No documentation exists.

# rpc program : rpc_program

Returns a list of the current Remote Procedure Call (RPC) program-to-port mappings on localhost.

# rpm : rpmdatabase

Returns an object representing the rpm database of the machine.

# rsop computer wmi : wmi

Provides access to the Resultant Set of Policy (RSoP) WMI classes via the RsopLoggingModeProvider. This is used to examine the state of the GPO (Group Policy object) security policies.

# runlevel : runlevel

Returns the current runlevel of the local machine.

# running application : application

Returns all the application objects that are currently executing on the machine. See application.

# running service : service

Returns all the running service objects.

# running task : running task

Retrieves a list of all the currently running tasks, including hidden tasks.

# saturday : day of week

Returns Saturday as a day of week object.

# scheduled task : scheduled task

This inspector is typically used to return a list of all scheduled tasks. It attempts to use the 2.0 interface first (which includes hidden tasks), then drops down to 1.0 if necessary.

# scripting additions folder : folder

Returns the scripting additions folder of the system domain

# scsibus : scsibus

An iterated property. When used without a number and not iterated it means SCSI bus 0.

# scsidevice : scsidevice

An iterated property. It is derived from calls to the MacOS.

# second : time interval

Returns a time interval corresponding to 1 second.

# security database : security database

Returns the security accounts manager (SAM) database or, in the case of domain controllers, the Active Directory.

# security event log : event log

Returns a security event log, which records global or local group policy events.

# selected server : selected server

The BES Server or BES Relay to which the agent reports. Returned as the "selected server" type.

# selinux boolean : SELinux Boolean

Returns all SELinux Booleans.

# september : month

Returns September as an object of type month.

# service : service

Returns all the service objects.

# service group : security account

This refers to a group including all security principals that have logged on as a service. Membership is controlled by the operating system.

# session state change task trigger type : task trigger type

Creates a task trigger type corresponding to a session state change trigger, which starts a task on console connects or disconnects, remote connects or disconnects, or workstation lock or unlock notifications.

# shared folder : folder

Returns the shared folder of the system domain

# shared libraries folder : folder

Returns the shared libraries folder of the system domain

# shared variable &lt;( string, string )&gt; : string

This inspector returns strings containing the  variables shared across console users for the given dashboard ID and name provided in the first and second items in the tuple.

# show message task action type : task action type

Returns a &#39;task action type&#39; corresponding to a task that creates a message that will pop up on the desktop.

# shutdown item : enableable_file

No documentation exists.

# shutdown items folder : folder

Returns the shutdown items folder of the system domain

# site : site

Returns all the site objects that are currently loaded into memory. See site.

# smbios : smbios

Returns a basic smbios object, a function formerly served by the Desktop Management Interface, or DMI. This object contains searchable structures related to the computer BIOS.

# smf : smf

Returns the smf object. Use &#39;services of smf&#39; for more information.

# software depot : software_depot

Accesses the set of installed software and products.

# sound folder : folder

Returns the sound folder of the system domain

# speech folder : folder

Returns the speech folder of the system domain

# sqlite version : version

No documentation exists.

# standard firewall profile type : firewall profile type

Returns the Standard firewall profile type. This is a global property.

# standby state : power state

Returns the power state corresponding to standby.

# startup item : enableable_file

No documentation exists.

# startup items folder : folder

Returns the startup items folder of the system domain

# subscribed &lt;( bes computer, bes site )&gt; : boolean

Returns `True` if the given computer is subscribed to the given BES site.

# subscribed &lt;( bes site, bes computer )&gt; : boolean

Returns `True` if the given computer is subscribed to the given BES site.

# sunday : day of week

Returns Sunday as a day of week object.

# swap : swap

Returns an object containing information about the swap partition.

# system domain : domain

Returns a system domain object.

# system event log : event log

Returns a system event log, which records OS or component events, such as the failure of a bootup service.

# system folder : folder

Windows systems, returns the 32 bit "System32" folder. eg: C:\Windows\System32 or C:\Windows\SysWow64. Platforms other than Windows this is a synonym for &lt;root folder&gt;

# system group : security account

Returns a security account constant corresponding to a &#39;system group&#39;.

# system ini device file : file

Returns a list of file objects corresponding to all the device files loaded as a result of a device= lines of the system.ini file. See file.

# system language : string

Returns the language of the system as a string.

On Windows, this is identified using the [GetSystemDefaultLangID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318120%28v=vs.85%29.aspx) function and corresponds to the default locale of the system.

{% qna %}
Q: system language
A: English (United States)
{% endqna %}

On Unix, this is identified using:

* The [setlocale](http://man7.org/linux/man-pages/man3/setlocale.3.html) function.
* The `LANG` environment variable.
* The `LC_CTYPE` environment variable.

{% qna %}
Q: system language
A: English
{% endqna %}

See also [system ui language](/relevance/reference/language.html#system-ui-language-language) and [user ui language](/relevance/reference/language.html#user-ui-language-language).

# system locale : language

Determines which bitmap fonts, and OEM, ANSI, and MAC code pages are defaults for the system. This only affects applications that are not fully Unicode.

# system ui language : language

Returns the default language of menus, dialogs, messages and help files. This is identified using the [GetSystemDefaultUILanguage](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318123%28v=vs.85%29.aspx) function.

{% qna %}
Q: system ui language
A: English (United States)
{% endqna %}

# system version : version

Returns the version of MacOS.

# system wow64 folder : folder

Returns a filesystem object corresponding to a "Windows On Windows 64" system folder, which does not exist on 32-bit Windows. You can find out more about the WOW64 system folder at the Microsoft site: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/sysinfo/base/getsystemwow64directory.asp.

# system x32 folder : folder

Returns a filesystem object corresponding to a 32-bit system folder. On a 32-bit machine, this is equivalent to the normal system folder.

# system x64 folder : folder

Returns a filesystem object corresponding to a 64-bit system folder. This is the same as the system folder, but with file system redirection disabled. For more information about file redirection, see the Microsoft site http://msdn.microsoft.com/library/default.asp?url=/library/en-us/win64/win64/file_system_redirector.asp.

# tcp : internet protocol

Returns an internet protocol corresponding to the Microsoft enumerated type: NET_FW_IP_PROTOCOL_TCP.

# temporary items folder : folder

Returns the temporary items folder of the system domain

# terminal server user group : security account

Refers to a group including all users who have logged on to a Terminal Services server. Membership is controlled by the operating system.

# text encodings folder : folder

Returns the text encodings folder of the system domain

# themes folder : folder

Returns the themes folder of the system domain

# thursday : day of week

Returns Thursday as a day of week object.

# time task trigger type : task trigger type

Creates a task trigger type corresponding to a time trigger, which starts a task on a specific date and time.

# top level bes action : bes action

Returns all top-level actions. Does not include actions that are normally hidden or sub-actions of a multiple action group.

# top level bes action set : bes action set

Returns all top level actions as a mathematical set. Does not include actions that are normally hidden, and sub-actions of a multiple action group.

# total processor core count : integer

Returns an integer corresponding to the total number of processor cores.

# true : boolean

Returns the boolean `True`.

{% qna %}
Q: if true then 1 else 0
A: 1
{% endqna %}

# tuesday : day of week

Returns Tuesday as a day of week object.

# type : type

Returns a list of all types in the relevance language.

{% qna %}
Q: names of types
A: 
A: action
A: action lock state
A: administrative rights
A: ...
{% endqna %}

# udp : internet protocol

Returns an internet protocol corresponding to the Microsoft enumerated type: NET_FW_IP_PROTOCOL_UDP.

# unary operator : unary operator

No documentation exists.

# universal time zone : time zone

Returns a time zone object corresponding to the universal time zone.

# upnp firewall service type : firewall service type

Returns the UPnP (Universal Plug and Play) firewall service type, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_UPNP.Note: UPnP is not the same as PnP. UPnP is used for network connectivity via TCP/IP to various devices (scanners, printers, etcetera.).

# usb : usb

The Universal Serial Bus.

# user : user

Returns objects for all users of the computer, logged in or not.

# user domain : domain

Returns a user domain object.Note: The "user domain" refers to the root user, not the currently logged in user.

# user language : string

Returns the default locale of the `SYSTEM` user as a string. It is identified by using the [GetUserDefaultLangID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318134%28v=vs.85%29.aspx) function.

{% qna %}
Q: user language
A: English (United States)
{% endqna %}

See also [system ui language](/relevance/reference/language.html#system-ui-language-language) and [user ui language](/relevance/reference/language.html#user-ui-language-language).

# user locale : language

Determines which settings are used for formatting dates, times, currency, and numbers as a default for each user. Also determines the sort order for sorting text.

# user temp folder : folder

Returns the user temp folder of the system domain

# user ui language : language

Returns the language of menus, dialogs, messages, and help files for the `SYSTEM` user. This is identified using the [GetUserDefaultUILanguage](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318137%28v=vs.85%29.aspx) function.

{% qna %}
Q: user ui language
A: English (United States)
{% endqna %}

# users folder : folder

Returns the users folder of the system domain

# utilities folder : folder

Returns the utilities folder of the system domain

# virtual memory : boolean

Returns `True` if virtual memory is turned on.

# voices folder : folder

Returns the voices folder of the system domain

# volume : volume

An iterated property. Examines all currently mounted volumes which will include the startup volume, CD-ROM, disk images and other removable media and file sharing volumes.

# volume settings folder : folder

Returns the volume settings folder of the system domain

# wake on lan subnet cidr string : string

Returns the subnet the client is in for Wake on Lan (WoL) purposes. The client sends information to the relay during registration that is used to decide which subnet the client is in. The relay returns the subnet to the client, which is the value this inspector exposes. This value is used to send WoL commands to forwarders. To wake a machine by computer ID, the server looks up the mac address and subnet of that machine. It then tries to identify clients that have been configured as WoL forwarders within the same subnet and routes WoL commands to those forwarders, sending them the mac address of the machine that needs to be awoken.

# warning event log event type : event log event type

Returns an object corresponding to a warning in the event log. Warnings can be used to prevent future system problems.

# webui enabled : boolean

Returns `True` if the WebUI is enabled.

# webui service : service

Returns a service object for the &#39;BESWebUI&#39; service, if available on the local system.

# wednesday : day of week

Returns Wednesday as a day of week object.

# week : time interval

Returns a time interval corresponding to 1 week.

# weekly task trigger type : task trigger type

Creates a task trigger type corresponding to a weekly trigger, which starts a task on a weekly schedule, such as 9:00 AM each Wednesday.

# win32 running service : service

A synonym for &#39;running service&#39;. This can be any running service from atapi to the BESRelay.

# win32 service : service

A synonym for &#39;service&#39;. This can be anything from atapi to the BESRelay.

# windows folder : folder

Returns a folder object of the Windows folder This is operating system dependent. Under Win98 this is usually c:\Windows.

# winrt package : winrt package

No documentation exists.

# wmi : wmi

Returns the wmi object corresponding to the "root\cimv2" namespace.

# x32 registry : registry

Returns a 32-bit registry object. This inspector is equivalent to the ordinary registry inspector.

# x64 registry : registry

Returns a 64-bit registry object. This inspector is for 64-bit computers only; there is no 64-bit registry on a 32-bit computer. Note that "x64 registry" and "native registry" on 64-bit machines do NOT provide the same view as the 64-bit version of regedit (the "physical" view). If you try to access the physical location of the 32-bit view keys using a 64-bit view, it will be mapped back to the equivalent location in the 64-bit view.

# xinetd service : Xinetd Service

Returns all xinetd services.

# year : number of months

Returns the specified number of years as a &lt;number of months&gt; type.

# zone : zone

Returns the global Solaris zones.
