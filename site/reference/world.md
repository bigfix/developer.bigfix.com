# above normal priority

A priority class constant signifying above normal priority.

# account with privileges

Returns a security account constant corresponding to an &#39;account with privileges&#39;.

# action

Returns the action currently being parsed.

# action lock state

Returns the client action lock state.

# active action

Returns the action currently executing.

# active device

Returns a list of all active devices found using the Configuration Manager SetupDiGetClassDevs NT API.

# active device file

Under Windows NT, returns a list of file objects corresponding the list returned from the Windows NT EnumDeviceDrivers() function.

# active directory

No documentation exists.

# active state

Returns a power state constant signifying that the client system is active.

# administrator &lt;( bes computer, bes user )&gt;

Returns `True` if the specified user is an administrator of the given computers.

# administrator &lt;( bes user, bes computer )&gt;

Returns `True` if the specified user is an administrator of the given computers.

# all bes site

This iterative inspector returns a list of all external, master, operator, and custom sites.

# all computer count

Returns a list of all &lt;historical_computer_count&gt; objects.

# all firewall scope

Returns the scope of computers that allow ALL traffic through the firewall, corresponding to the Microsoft enumerated type NET_FW_SCOPE_ALL.

# all fixlet count

Returns a list of all the historical Fixlet counts.Note: This is a Web Reports-only inspector.

# all running service

Returns a list of all running Windows 32 services, such as ATAPI and BESRelay.

# all service

Returns a list of all Windows 32 services, including the BESRelay.

# allow firewall action

Returns a value corresponding to the NET_FW_ACTION enumerated type, which specifies the action for a rule or default setting. This is a Vista inspector. For more information, see the MSDN Library entry for NET_FW_ACTION.

# analysis

No documentation exists.

# anonymous logon group

This refers to  users who have logged in anonymously.

# ansi code page

Returns an integer value of the Windows API GetACP.

# any ip version

Returns a type corresponding to the Microsoft enumerated value NET_FW_IP_VERSION_ANY.

# apparent registration server time

Shorthand for &#39;now of registration server&#39;. When the client registers with the server, the server passes its current time back to the client. The client starts a stop watch at that time. The apparent registration server time is the time the server passed back to the client, plus the elapsed time on the stop watch.

# apple extras folder

Returns the apple extras folder of the system domain

# apple menu items folder

Returns the apple menu items folder of the system domain

# application

This Mac inspector recursively finds all applications (bundles) and executables under the /Applications directory, as well as all of those under the Applications directories of all local users of the machine.

# application event log

Returns the object corresponding to the application event log, which records certain application events, such as the failure of MS SQL to access a database.

# application support folder

Returns the application support folder of the system domain

# application usage summary

Returns an application usage summary containing information including the start time, duration and other statistics on client applications.

# applications folder

Returns the applications folder of the system domain

# april

Returns april as an object of type month.

# assistants folder

Returns the assistants folder of the system domain

# audio folder

Returns the audio folder of the system domain

# audit failure event log event type

Returns an object corresponding to an audit failure -- an event related to the failed execution of an action.

# audit policy

Windows Vista (and later versions of Windows) allows a finer granularity with audit policies by using subcategories. Setting audit policy at the category level overrides the new subcategory feature. A new registry key introduced in Vista is used to manage subcategories without requiring a change to Group Policy. This registry can be set to prevent the application of category-level audit policy from both Group Policy and the Local Security Policy admin tool.

# audit success event log event type

Returns an object corresponding to an audit success in an event log.

# august

Returns August as an object of type month.

# authenticated users group

This refers to a group including users whose identities were authenticated when they logged on. Membership is controlled by the operating system.

# batch group

This refers to a group including all users who have logged on through a batch queue facility such as the task scheduler. Membership is controlled by the operating system.

# below normal priority

Returns a priority class object with &#39;below normal&#39; priority. This applies to threads that can wait for other threads to complete before running. Threads with this status are in between idle and normal priority.

# bes action

Returns all actions, except those that are normally hidden in the console, such as subscription actions, management rights actions, etcetera.

# bes action set

Returns the current list of BES Actions in the form of a set, which can be arithmetically manipulated.

# bes action status constrained

Returns the BES Action status corresponding to constraints. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status disk free limited

No documentation exists.

# bes action status disk limited

No documentation exists.

# bes action status download failed

Returns the BES Action status corresponding to failed downloads. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status error

Returns the BES Action status corresponding to errors. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status evaluating

Returns the BES Action status corresponding to evaluation. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status expired

Returns the BES Action status corresponding to expiration. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status failed

Returns the BES Action status corresponding to failure. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status fixed

Returns the BES Action status corresponding to successful fixes. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status hash mismatch

No documentation exists.

# bes action status invalid signature

Returns the BES Action status corresponding to invalid signatures. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status irrelevant

Returns the BES Action status corresponding to irrelevance This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status locked

Returns the BES Action status corresponding to locking. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status offers disabled

Returns the BES Action status corresponding to disabled offers. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending downloads

Returns the BES Action status corresponding to pending downloads. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending login

Returns the BES Action status corresponding to pending logins. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending message

Returns the BES Action status corresponding to pending messages. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending offer

Returns the BES Action status corresponding to pending offers. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status pending restart

Returns the BES Action status corresponding to pending restarts. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status postponed

Returns the BES Action status corresponding to postponements. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status running

Returns the BES Action status corresponding to whether or not it is running. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status unreported

Returns a constant representing an action status of &#39;not reported&#39;.

# bes action status user cancelled

Returns the BES Action status corresponding to user cancelation. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes action status waiting

Returns the BES Action status corresponding to waiting. This result can be cast to a &lt;string&gt; format to give the text as shown in the console.

# bes analysis

This inspector iterates over all of the Analysis objects. This is equivalent to &quot;bes fixlets whose ( analysis flag of it )&quot;.

# bes analysis set

This inspector returns all of the Analysis objects as a set. This is equivalent to &quot;bes fixlets whose ( analysis flag of it )&quot;.

# bes baseline

This inspector iterates over all of the Baseline objects. This is equivalent to &quot;bes fixlets whose ( baseline flag of it )&quot;.

# bes baseline set

This inspector returns all of the Baseline objects as a set. This is equivalent to &quot;bes fixlets whose ( baseline flag of it )&quot;.

# bes brand

As of version 7.2, the BES Console can be branded by third parties who want to use the engine to deliver specific content. This inspector returns a string that identifies any branding associated with the BES Console. The unbranded Console returns &#39;bigfix&#39;, but other third-party brands may result.

# bes computer

Returns a list of all the BES computers visible to the current console user.

# bes computer group

Returns the current list of BES computer groups.

# bes computer group set

Returns the current list of BES computer groups in the form of a set, which can be arithmetically manipulated.

# bes computer set

Returns the current list of BES computers in the form of a set, which can be arithmetically manipulated.

# bes custom site

Returns a list of all custom sites. Deprecated as of version 7.0; instead use &quot;all bes sites whose (custom site flag of it)&quot;.

# bes deployment option

Returns the current deployment options as listed in the BES Admin Tool, under the Advanced Options tab. You can add your own name/value pairs to this list.

# bes domain

Returns all the BES Domain objects.

# bes domain set

Returns all the BES Domain objects as a set.

# bes filter

Returns the list of the currently defined BES Filters, collected across all topics, including Baselines, Actions, Fixlets, etcetera.

# bes filter set

Iterates over the BES Filters and converts the list to a set.

# bes fixlet

Returns a list of all the BES properties.

# bes fixlet set

Returns the current list of BES fixlets in the form of a set, which can be arithmetically manipulated.

# bes language

Returns a string corresponding to the national language of the program, such as ENU for English or ESP for Spanish.

# bes ldap directory

No documentation exists.

# bes ldap directory set

No documentation exists.

# bes license

Synonym for &#39;client license&#39;.

# bes property

Returns a list of all the BES custom site objects.

# bes property set

Returns the current list of BES Properties in the form of a set, which can be arithmetically manipulated.

# bes role

No documentation exists.

# bes role set

No documentation exists.

# bes site

Returns a list of all the BES sites.

# bes task

This inspector returns all of the tasks objects. This is equivalent to &quot;bes fixlets whose ( task flag of it )&quot;.

# bes task set

This inspector returns all of the tasks objects as a set. This is equivalent to &quot;bes fixlets whose ( task flag of it )&quot;.

# bes unmanagedasset

Returns a list of all the Unmanaged Assets currently defined in BES.

# bes unmanagedasset set

Returns a set of all BES Unmanaged Assets.

# bes user

Returns a list of all the BES users.

# bes user set

Returns the current list of BES Users in the form of a set, which can be arithmetically manipulated.

# bes wakeonlan status

Returns the current BES WakeOnLan status.

# bes wizard

Returns a list of all the available BES Wizards.Note: This is a Console-only inspector.

# bes wizard set

Returns a set of all BES Wizards.

# binary operator

No documentation exists.

# bios

No documentation exists.

# block firewall action

Returns a value corresponding to the NET_FW_ACTION enumerated type, which specifies the action for a rule or default setting. This is a Vista inspector. For more information, see the MSDN Library entry for NET_FW_ACTION.

# boot task trigger type

Creates a task trigger type corresponding to a boot trigger, which starts a task when the system is booted up.

# br

Creates an HTML &lt;br/&gt; tag to output a line break.

# builtin administrators group

This refers to a built-in group . After the initial installation of the OS, the first member of the group is the Administrator account. When a computer then joins a domain, the Domain Admins group is added to the Administrators group. When a server becomes a domain controller, the Enterprise Admins group is also added to the Administrators group. The Administrators group has built-in capabilities that give its members full control over the system. The group is the default owner of any object that is created by any other member of the group.

# builtin backup operators group

This refers to a built-in group which, by default, has no members. Backup Operators can back up and restore all files on a computer, regardless of file permissions. Backup Operators can log on to a computer and shut it down.

# builtin guests group

This refers to a built-in group which, by default, only contains the Guest account. This group allows otherwise unauthorized users to log on with limited privileges to a computer&#39;s built-in Guest account.

# builtin network configuration operators group

This refers to XP machines, where some admin privileges include managing the configuration of networking features.

# builtin power users group

This refers to a built-in group which, by default, has no members. This group does not exist for domain controllers. Power Users can create other local users and groups as well as modify and delete accounts. They can also remove users from the other groups. Power Users also can install, manage and delete applications,  local printers and file shares.

# builtin remote desktop users group

This refers to the XP only. Members of this group are granted the right to log in remotely.

# builtin replicator group

This refers to Windows NT domains. This group is called Replicators and is used by the directory replication service. In 2K/XP the group is present but is not used.

# builtin users group

This refers to a built-in group. After the initial installation of the OS, the first member is the Authenticated Users group. When a computer subsequently joins a domain, the Domain Users group is added to the Users group. These users can perform tasks such as running applications, using printers, shutting down or locking the computer. Users can install applications for their use only, provided the installation program supports per-user installation.

# cache folder

Returns the cache folder of the system domain

# carbon folder

Returns the carbon folder of the system domain

# cast

No documentation exists.

# chewable items folder

Returns the chewable items folder of the system domain

# classic domain

Returns a classic domain object.

# classic folder

Returns the classic folder of the system domain

# client

Returns the client object corresponding to the BigFix application evaluating the current relevance expression. This is equivalent to the file system object of the BigFix Client executable.

# client cryptography

This inspector is similar to the core cryptography object except that it returns properties exclusive to the client (whereas &lt;cryptography&gt; is also available in the Console/Web Reports contexts).

# client license

Global object containing client licensing information.

# color sync folder

Returns the color sync folder of the system domain

# colorsync profiles folder

Returns the colorsync folder folder of the system domain

# com handler task action type

Returns a &#39;task action type&#39; corresponding to a task that activates a COM handler.

# component

Is an iterated property. The MacOS supports software &quot;components&quot;, for example QuickTime codecs. This iterator can examine the components that are available.

# component folder

Returns the component folder of the system domain

# computer

Refers to the computer itself.

# computer id

This is a unique integer assigned to the computer by the BES system.

# computer name

Returns a string corresponding to the name of the computer as it appears on the network.

# connection status authenticating

Returns the value NCS_AUTHENTICATING: The connection is waiting for authentication to occur.

# connection status authentication failed

Returns the value NCS_AUTHENTICATION_FAILED: Authentication has failed on this connection.

# connection status authentication succeeded

Returns the value NCS_AUTHENTICATION_SUCCEEDED: Authentication has succeeded on this connection.

# connection status connected

Returns the value NCS_CONNECTED: The connection is in a connected state.

# connection status connecting

Returns the value NCS_CONNECTING: The connection is in the process of connecting.

# connection status disconnected

Returns the value NCS_DISCONNECTED: The connection is disconnected.

# connection status disconnecting

Returns the value NCS_DISCONNECTING: The connection is in the process of disconnecting.

# connection status hardware disabled

Returns the value NCS_HARDWARE_DISABLED: The hardware for the connection is present, but is not enabled.

# connection status hardware malfunction

Returns the value NCS_HARDWARE_MALFUNCTION: A malfunction has occurred in the hardware for the connection.

# connection status media disconnected

Returns the value NCS_MEDIA_DISCONNECTED: The media, for example the network cable, is disconnected.

# connection status no hardware present

Returns the value NCS_NO_HARDWARE_PRESENT: The hardware for the connection, for example network interface card (NIC), is not present.

# contextual menu items folder

Returns the contextual menu items folder of the system domain

# control panel

No documentation exists.

# control panels folder

Returns the control panels folder of the system domain

# control strip modules folder

Returns the control strip modules folder of the system domain

# core services folder

Returns the core services folder of the system domain

# cpu speed

Returns the clock speed of the cpu in Hz.

# cpupackage

No documentation exists.

# creator group group

This refers to a placeholder in an inheritable access control entry (ACE). When the ACE is inherited, the system replaces the SID with the one from the primary group of the object&#39;s current owner. The primary group is used only by the POSIX subsystem.

# creator owner group

This refers to a placeholder in an inheritable access control entry (ACE). When the ACE is inherited, the system replaces this SID with the one from the object&#39;s current owner.

# cryptography

A global object that implements the FIPS 140-2 standard for secure signing and authentication throughout the BigFix application.

# current analysis

This Client inspector is used to locate the site corresponding to the current analysis in order to look at certain related files.  This is helpful for SCM content that resides in Fixlet sites and can be copied to custom sites.  The value of &#39;current analysis&#39; will move with the copy. In the Client context, this inspector has global scope and returns a Fixlet.Note: When used in a session context, this inspector has a scope limited to the BES Fixlet.

# current bes server

Returns a &lt;bes server&gt; object corresponding to the BES Server currently connected to the Console or Web Reports applications. The current bes server inspectors allow dashboards to access files hosted on the current BES Server.

# current bes site

Returns the site that is the source of the current relevance evaluation. Items in a site that can evaluate relevance include fixlets, Tasks, Baselines, Analyses, Wizards and Dashboards.

# current computer

This inspector returns the computer that is currently selected by a right-click in the BES Console. This inspector is designed to assist you in the creation of extended Context menu applications.

# current console user

Returns a user object for the user currently logged into the BES Console.

# current date

Returns the current date in the format:Day of week, Day Month Year.

# current day_of_month

Returns the current day of the month.

# current day_of_week

Returns the current day of the week, eg. Monday, Tuesday, etcetera.

# current day_of_year

Returns the current day of the year, in a Month Day format.

# current domain

Returns the domain that is the source of the current relevance evaluation. Items in the domain that can evaluate relevance include fixlets, Tasks, Baselines, Analyses, Wizards and Dashboards and Domains.

# current firewall profile type

Retrieves the type of firewall profile that is currently in effect.

# current fixlet

When this inspector is evaluated in the context of a fixlet, it returns the associated Fixlet object.Note: This is a Console-only inspector.

# current month

Returns the current month.

# current month_and_year

Returns the current date in month year format, eg. January 2012.

# current relay

Returns an object corresponding to the server or relay that the client last registered with. This may be a BES Relay or the BES root server.

# current site

Returns the current site object. See site.

# current task

When this inspector is evaluated in the context of a Task, it returns the associated Fixlet object.Note: This is a Console-only inspector.

# current time_of_day

Returns the current time of day in the local time zone.

# current unmanagedasset

Returns the unmanaged asset that is currently selected in the BES Console from the right-click context menu under the Unmanaged Assets tab. This inspector is designed to assist you in the creation of extended Context Menu applications.

# current user

Returns the active, console (local) user, if logged on. Otherwise does not exist.

# current user folder

Returns the current user folder of the system domain

# current wizard

If this inspector is being evaluated in the context of a Wizard, then it returns the corresponding &lt;bes wizard&gt; object.

# current year

Returns the current year.

# custom bes fixlet

This inspector iterates over all of the fixlet objects, only returning fixlets where &quot;custom flag&quot; is TRUE.

# custom bes fixlet set

This inspector iterates over all of the fixlet objects, only returning sets of fixlets where &quot;custom flag&quot; is TRUE.

# custom firewall scope

Returns the custom firewall scope, corresponding to the Microsoft enumerated type: NET_FW_SCOPE_CUSTOM.

# daily task trigger type

Creates a task trigger type corresponding to a daily trigger, which starts a task on a daily schedule.

# datastore inspector

No documentation exists.

# day

Returns a time interval corresponding to 1 day.

# debianpackage

Returns a list of all the Debian packages on the client machine.

# december

Returns December as an object of type month.

# default web browser

Returns a global object corresponding to the WinCE web browser installed on the Client Windows Mobile device. Windows Embedded CE uses IE, which has been optimized for WinCE devices.

# desktop folder

Returns the desktop folder of the system domain

# developer docs folder

Returns the developer docs folder of the system domain

# developer folder

Returns the developer folder of the system domain

# developer help folder

Returns the developer help folder of the system domain

# dialup group

This refers to a group implicitly including all users who logged in to the system through a dial-up connection. Membership is controlled by the operating system.

# disabled control panel

No documentation exists.

# disabled control panels folder

Returns the dsiabled control panels folder of the system domain

# disabled extension

No documentation exists.

# disabled extensions folder

Returns the disabled extensions folder of the system domain

# disabled shutdown item

No documentation exists.

# disabled shutdown items folder

Returns the disabled shutdown items folder of the system domain

# disabled startup item

No documentation exists.

# disabled startup items folder

Returns the disabled startup items folder of the system domain

# disabled system extensions folder

Returns the disabled system extensions folder of the system domain

# dmi

Creates the global dmi object. If no dmi information is available, creation of the object will fail.

# dns name

Returns the DNS name of the computer.

# documentation folder

Returns the documentation folder of the system domain

# documents folder

Returns the documents folder of the system domain

# domain firewall profile type

Creates a domain firewall profile type for comparison.

# domain library folder

Returns the domain library folder of the system domain

# domain name

Returns the fully qualified domain name of the machine.

# domain top folder

Returns the domain top folder of the system domain

# domain user

Returns all of the users that are members of the domain for which the machine is a user.

# domainname

Same as domain name.

# download folder

This inspector is available in relevance subsitution action processing. When the action is active, this inspector returns a folder object of __Download\, otherwise it returns a folder object of __Global\sitename\actionid\named. This inspector is designed for the prefetch process of action execution. Macintosh Note: Prior to version 7.2, this inspector referred to the system download folder on the Macintosh. That inspector is referred to as ISS Download as of version 7.2.

# download server

No documentation exists.

# download storage folder

This inspector creates a pointer to the current download storage folder.

# drive

Iterates through all valid drives on the system. Typically used to return a list of the drives (volumes, filesystems) on the client computer. On Windows computers, this returns a &lt;drive&gt; object.On *nix computers, this returns a &lt;filesystem&gt; object.Drives, volumes and filesystems are treated the same on the Macintosh and return a &lt;volume&gt; type.

# driver running service

Returns a list of all running Windows 32 system drivers.

# driver service

Returns a list of all Windows 32 system drivers.

# email task action type

Returns a &#39;task action type&#39; corresponding to a task that sends an email.

# enabled control panel

No documentation exists.

# enabled extension

No documentation exists.

# enabled shutdown item

No documentation exists.

# enabled startup item

No documentation exists.

# environment

Returns an object corresponding to the currently defined set of environment variables.

# error event log event type

Returns an object corresponding to an error in the event log, such as the failure of a service to start.

# event task trigger type

Creates a task trigger type corresponding to an event trigger, which starts a task when a system event occurs.

# everyone group

This refers to a group including all users, even anonymous users and guests. Membership is controlled by the operating system.

# exec task action type

Returns a &#39;task action type&#39; corresponding to a task that runs a program.

# extension

No documentation exists.

# extensions folder

Returns the extensions folder of the system domain

# false

Returns the boolean FALSE.

# favorites folder

Returns the favorites folder of the system domain

# february

Returns February as an object of type month.

# file_and_print firewall service type

Returns the global service type for file and print sharing, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_FILE_AND_PRINT.

# filesystem

Returns the volume corresponding to the filesystem. Typically used to return a list of the filesystems (drives, volumes) on the client computer. Drives, volumes and filesystems are treated the same on the Macintosh and return a &lt;volume&gt; type.

# firewall

Returns the global firewall object for this computer.

# first interface scheduled task

Returns a list of all the scheduled tasks.1.0 interface only.

# fonts folder

Returns the fonts folder of the system domain

# framework folder

Returns the framework folder of the system domain

# friday

Returns Friday as a day of week object.

# ghz

Returns a Hertz object corresponding to 1 giga-hertz. See hertz.

# gp override firewall local policy modify state

Returns a value corresponding to the NET_FW_MODIFY_STATE enumerated type, which specifies the effect of modifications to the current policy. For more information, see the MSDN Library entry for NET_FW_MODIFY_STATE.

# greatest hz

Returns the largest hertz object that can be represented on this machine. See hertz.

# greatest integer

Returns the largest integer that can be represented on this machine. See integer.

# greatest time interval

Returns the greatest time interval representable. The value corresponds to 106751991 days, 04:00:54.775807.

# grub config file

Returns the grub config file from the default location, either &quot;/boot/grub/menu.lst&quot; or &quot;/boot/grub/grub.conf&quot;.

# help folder

Returns the help folder of the system domain

# hidden bes action

Returns all actions that are normally hidden by the console, such as subscription actions, management rights actions, etcetera.

# hidden bes action set

Retrieves the set (iterated list) of hidden BES Actions.

# high priority

Returns a priority class object with &#39;high&#39; priority. These threads will steal processor time from other threads and should be used very carefully. Typically, they are used strictly for responding to time-critical events.

# host name

Returns the machine name (the same as the computer name or hostname on UNIX machines).

# hostname

Returns the standard host name, usually for the computer&#39;s network.

# hotsync manager

No documentation exists.

# hour

Returns a time interval corresponding to 1 hour.

# hr

Creates a horizontal line tag &lt;hr/&gt;.

# html tag &lt;( string, html )&gt;

Returns an HTML snippet containing the specified html enclosed in an html tag specified by string.

# html tag &lt;( string, html attribute list )&gt;

Returns an HTML snippet containing a HTML attribute list enclosed in an html tag specified by the string.

# html tag &lt;( string, html attribute list, html )&gt;

Returns an HTML snippet enclosed in a tag specified by the string, modified by the html attribute list and bracketing the html argument.

# html tag &lt;( string, html attribute list, string )&gt;

Returns an HTML snippet enclosed in a tag specified by the first string, modified by the html attribute list and bracketing the second string argument.

# html tag &lt;( string, string )&gt;

Returns an HTML snippet containing the second string enclosed in an html tag specified by the first string.

# hyperthreading capable

Returns a boolean TRUE if the agent is able to detect that the processor is capable of running with hyperthreading enabled.

# hyperthreading enabled

Returns `True` if the machine is running with hyperthreading enabled, a method in which each physical processor on the machine presents itself as multiple logical processors to the operating system.

# hz

Returns a hertz object corresponding to 1 hertz.

# idle priority

Returns a priority class object with &#39;idle&#39; priority. Processes that monitor the Client, such as screen savers, typically use this priority to keep them from interrupting higher priority threads.

# idle state

Returns a power state constant signifying that the client system is idle.

# idle task trigger type

Creates a task trigger type corresponding to a idle trigger, which starts a task when the system is enters the idle state.

# in agent context

No documentation exists.

# in console context

Returns `True` if this inspector is being evaluated in the BES Console environment.

# in proxy agent context

No documentation exists.

# in web reports context

Returns `True` if this inspector is being evaluated in the Web Reports environment.

# inbound blocked firewall local policy modify state

Returns a value corresponding to the NET_FW_MODIFY_STATE enumerated type, which specifies the effect of modifications to the current policy. For more information, see the MSDN Library entry for NET_FW_MODIFY_STATE.

# information event log event type

Returns an object corresponding to an information event -- An informational event which is generally related to a successful action.

# integer in &lt;( integer, integer )&gt;

Returns a list of the integers contained between the endpoints (inclusive). The order is preserved, from least to greatest or vice-versa.

# integer in &lt;( integer, integer, integer )&gt;

Returns a list of the integers contained between the endpoints (inclusive) specified by the first two integers, with a step size specified by the third integer.

# interactive group

This refers to a group including all users who have logged on interactively. Membership is controlled by the operating system.

# internet plugins folder

Returns the folder object corresponding to the internet plugins.

# invalid state

Returns a power state constant signifying that the client system is invalid.

# iokit registry

Returns the root of the registry; the place to start with the registry.

# ips image

No documentation exists.

# ipv4

Provides a comparison value for a firewall or other ip version inspector.

# ipv4 routing table

Returns the ipv4 routing table. Use &#39;routes of ipv4 routing table&#39; or &#39;all routes of ipv4 routing table&#39; to get more information.

# ipv6

Provides a comparison value for a firewall or other ip version inspector.

# ipv6 routing table

No documentation exists.

# iss download folder

The Macintosh download folder. This inspector was previously labeled &quot;download,&quot; which now refers to a world object that performs dynamic downloading.

# january

Returns January as an object of type month.

# july

Returns July as an object of type month.

# june

Returns June as an object of type month.

# kernel extension

No documentation exists.

# kernel extensions folder

Returns the kernel extensions folder of the system domain

# keyboard type

Returns an integer representing the keyboard type

# khz

Returns a hertz object corresponding to 1 kilohertz.

# last relay select time

Returns the time when last relay selection took place.

# least hz

Returns the least hertz value that can be represented on this machine.

# least integer

Returns the least integer value that can be represented on this machine.

# least time interval

Returns the least time interval that can be represented on this machine. The value corresponds to -106751991 days, 04:00:54.775808.

# local administrator

Returns the boolean TRUE if the user belongs to the local administrator group. Also returns `True` for Win9x and WinME.

# local domain

Returns a local domain object.

# local group

Returns local groups defined on the local computer using the windows NetLocalGroupEnum API. Several local groups are defined simply by a default operating system install, and have names such as Administrators, Backup Operators, Guests, Network Configuration Operators, Power users, Users, etcetera. Some software applications also define local groups in order to help manage protections.

# local mssql database

Returns local MSSQL database objects.

# local service group

Returns a security account constant corresponding to a &#39;local service group&#39;.

# local subnet firewall scope

Returns the local subnet firewall scope, corresponding to the Microsoft enumerated type: NET_FW_SCOPE_LOCAL_SUBNET.

# local time zone

Returns a time zone object corresponding to the local time zone.

# local user

Itererates of all cached Active Directory local users. This inspector only works in the client context when caching is enabled.

# locales folder

Returns the locales folder of the system domain

# location manager modules folder

Returns the location manager modules folder of the system domain

# location manager preferences folder

Returns the location manager preferences folder of the system domain

# locations folder

Returns the locations folder of the system domain

# logged off state

Returns a power state constant signifying that the client system is logged off.

# logged on user

Returns zero or more users logged on to this computer. This inspector iterates through all logged-on users, using Fast User Switching, Terminal Services, ACLs, and on Win 9x, the registry.

# logical processor count

Returns the number of logical processors available per physical processor. This can be interpreted as the number of hyperthreads that could be enabled on the machine. On a machine with 2 physical processors, each with 2 possible hyperthreads per processor, the &#39;physical processor count&#39; and the &#39;logical processor count&#39; would both return 2, while the &#39;number of processors&#39; would return 4, since there are a total of 4 logical processors available for work. With hyperthreading turned off, the &#39;number of processors&#39;, &#39;logical processor count&#39; and &#39;physical processor count&#39; would all be 2. Disabling one of those processors will then give &#39;number of processors&#39;=1, &#39;logical processor count&#39;=2, and &#39;physical processor count&#39;=1. If the number of processors / physical processor count != logical processor count, you can turn on hyperthreading.

# logical ram

Returns the amount of logical ram in the computer, physical plus virtual.

# logical volume manager

Returns the global logical volume manager on AIX systems.

# logon task trigger type

Creates a task trigger type corresponding to a logon trigger, which starts a task when a user logs on. When the scheduler starts, all the logged-on users are noted, and any logon triggers that match the users will launch their associated task.

# machine name

Returns the machine name. The value is from a long enumeration of all Mac platforms. See the header file Gestalt.h or Apple&#39;s web site.

# machine type

Returns an integer representing the machine type

# macos read me folder

Returns the macos read me folder of the system domain

# main gather service

Returns a service object for the main gathering service, typically located on the main server.Note: On a Macintosh, returns &lt;nothing&gt;. Included for compatibility.

# main palm device

No documentation exists.

# main processor

Returns the processor object corresponding to the main processor.

# march

Returns March as an object of type month.

# may

Returns May as an object of type month.

# media type bridge

Returns the value NCM_BRIDGE: Bridged connection.

# media type direct

Returns the value NCM_DIRECT: Direct serial connection through a serial port.

# media type isdn

Returns the value NCM_ISDN: Connection is through an integrated services digital network (ISDN) line.

# media type lan

Returns the value NCM_LAN: Connection is to a local area network (LAN).

# media type phone

Returns the value NCM_PHONE: Dial-up connection over a conventional phone line.

# media type pppoe

Returns the value NCM_PPPOE: Point-to-Point protocol (PPP) over Ethernet.

# media type shared access host lan

Returns the value NCM_SHAREDACCESSHOST_LAN: Shared connection to a LAN.

# media type shared access host ras

Returns the value NCM_SHAREDACCESSHOST_RAS: Shared connection to a remote or wide area network (WAN).

# media type tunnel

Returns the value NCM_TUNNEL: Virtual private network (VPN) connection.

# metabase

Returns the IIS metabase object.

# mhz

Returns a hertz object corresponding to 1 megahertz.

# microsecond

Returns a time interval corresponding to .000001 seconds.

# midnight

Returns 00:00:00 as a time of day object.

# millisecond

Returns a time interval corresponding to .001 seconds.

# minute

Returns a time interval corresponding to 1 minute.

# model

Returns the model of the computer.

# modem scripts folder

Returns the modem scripts folder of the system domain

# module

No documentation exists.

# monday

Returns the day of week object for Monday.

# monitor invalid state

Returns a power state constant signifying that the attached computer monitor state is invalid.

# monitor off state

Returns a power state constant signifying that the attached computer monitor is off.

# monitor on state

Returns a power state constant signifying that the attached computer monitor is on.

# monitor standby state

Returns a power state constant signifying that the attached computer monitor is in a standby state.

# month

Returns the specified number of months.

# monthly task trigger type

Creates a task trigger type corresponding to a Monthly trigger, which starts a task when the associated day of the week occurs, such as the third of each month from July through December.

# monthlydow task trigger type

Creates a task trigger type corresponding to a MonthlyDOW trigger, which starts a task when the associated day of the week occurs, such as the second Monday from January through June.

# name registry version

Returns the version of the Macintosh Name Registry.

# native program files folder

No documentation exists.

# native registry

On 32 bit versions of windows, this returns the same as registry32 and registry. On 64 bit versions of windows, this returns the same as registry64.

# native system folder

No documentation exists.

# network

Returns an object containing properties of the network.

# network domain

Returns a network domain object.

# network group

This refers to a group implicitly including all users who are logged on through a network connection. Membership is controlled by the operating system.

# network option

No documentation exists.

# network service group

Returns a security account constant corresponding to a &#39;network service group&#39;.

# network share

Creates a network shared object.

# nil

No documentation exists.

# none firewall service type

Returns the no firewall service type, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_NONE.

# noon

Returns 12:00:00 as a time of day object.

# normal priority

Returns a priority class object with &#39;normal&#39; priority. This is the default priority class of a process.

# november

Returns November as an object of type month.

# now

Returns the current time as a time object.

# nt domain controller product type

Returns an object corresponding to OS product type of nt domain controller.

# nt server product type

Returns an object corresponding to OS product type of nt server.

# nt workstation product type

Returns an object corresponding to OS product type of nt workstation.

# nubus map

Returns the nubus map.

# null

No documentation exists.

# object repository

Returns the object repository. Use &#39;filesets of object repository&#39; or &#39;products of object repository&#39; for more information.

# october

Returns October as an object of type month.

# odm

No documentation exists.

# oem code page

Returns an integer value of the Windows API GetOEMCP.

# off state

Returns a power state constant signifying that the client system is off.

# ok firewall local policy modify state

Returns a value corresponding to the NET_FW_MODIFY_STATE enumerated type, which specifies the effect of modifications to the current policy. For more information, see the MSDN Library entry for NET_FW_MODIFY_STATE.

# on appropriate disk domain

Returns one of the Macintosh domains. In most cases, this is the equivalent of kOnAppropriateDisk. On Mac OS X, this constant is used instead of the constant kOnSytemDisk to indicate any disk. For more information, see the Apple documentation on Carbon domain constants.

# on system disk domain

Returns the OnSystemDisk domain.

# operating system

Returns the operating system object. See operating system.

# palm device

No documentation exists.

# pending license update

Returns `True` if the license update is currently pending. This means that the license has been updated in the database, but has not yet been put into a masthead and pushed down to clients.  It is used by the license overview to tell you that you have an updated license, but your clients may still be in restricted mode because they aren&#39;t aware of the new license parameters.

# pending login

Installers may leave values in the registry that the operating system will execute when the next user logs in. Pending login can detect these registry entries.

# pending restart

Returns `True` if the operating system indicates that a restart needs to occur.

# pending restart name

This iterated inspector returns the names of currently pending restarts.

# physical processor count

Returns the number of physical processors on the machine. Note that &#39;number of processors&#39; returns the number of logical processors. To determine the number of logical processors per physical processor, use &#39;number of processors / physical processor count&#39;.

# physical ram

Returns the amount of physical ram in the computer.

# pkgdb

A top-level object containing a list of all the installed packages, in the form of pkginfos.

# plain bes fixlet

This inspector returns all of the plain fixlet objects. This is equivalent to &quot;bes fixlets whose ( fixlet flag of it )&quot;.

# plain bes fixlet set

This inspector returns all of the plain fixlet objects as a set. This is equivalent to &quot;bes fixlets whose ( fixlet flag of it )&quot;.

# power history

Returns the power history of the client computer. This points to historical information (the default is 14 days) about the power usage of the client computer and its attached monitor.

# power level

Returns a power level representing the underlying state of the battery or charging system.

# powerpc

Returns `True` if the cpu is a PowerPC, FALSE if it is a 68000 chip.

# preferences folder

Returns the preferences folder of the system domain

# preferred bes language

Returns a string corresponding to the preferred national language of the current program installation.

# primary internet connection

This contains information about the current internet connection.

# printer descriptions folder

Returns the preinter descriptions folder of the system domain

# printer drivers folder

Returns the printer drivers folder of the system domain

# printers folder

Returns the printers folder of the system domain

# printmonitor documents folder

Returns the printmonitor documents folder of the system domain

# private firewall profile type

Retrieves the enumerated variable corresponding to private profile type. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

# private framework folder

Returns the private framework folder of the system domain

# private variable &lt;( string, string )&gt;

This inspector returns a string containing the dashboard datastore private variable corresponding to the dashboard ID and name provided in the first and second items in the tuple.

# process

Returns all process objects currently running.

# processor

Returns all the processor objects defined on the machine. See processor.

# program files folder

Returns the 32 bit program folder correct for the OS. On 64 bit this is C:\Program Files (x86) and 32 bit it is C:\Program Files

# program files x32 folder

Returns the 32 bit program folder correct for the OS. On 64 bit this is C:\Program Files (x86) and 32 bit it is C:\Program Files

# program files x64 folder

Returns the 64 bit program folder on a 64 bit OS. Returns an error on a 32 bit OS.

# property

No documentation exists.

# proxy agent service

Returns a service object of the BESProxyAgent if one is present

# public firewall profile type

Retrieves the enumerated variable corresponding to public profile type. This profile type is used for public internet access points. For more information, see the MSDN Library entry for NET_FW_PROFILE_TYPE2.

# quickdraw version

Returns the version of QuickDraw installed.

# quicktime folder

Returns the quicktime folder of the system domain

# ram

Returns a ram object for inspecting the properties of Random Access Memory installed on the machine. See ram.

# random access memory

Same as above.

# realtime priority

Returns a priority class object with &#39;realtime&#39; priority. These threads should be sparingly used, since they may interrupt user input and some disk operations. They are typically used for short, time-sensitive communication with low level hardware.

# receipts folder

Returns the receipts folder of the system domain

# recent application

Returns all the application objects that have recently been executing on the machine. See application.

# regapp

This inspector returns the applications available to the Client. On Windows systems, this inspector returns all the application objects defined under the &#39;App Paths&#39; key of the registry. On a Macintosh, it recursively finds all applications (bundles) and executables under the /Applications directory, as well as all of those under the Applications directories of all local users of the machine. It returns a &lt;filesystem object&gt;. This inspector is the same as application, and is included for compatibility with Windows.

# registration server

No documentation exists.

# registration task trigger type

Creates a task trigger type corresponding to a registration trigger, which starts a task whenever it gets registered or updated.

# registry

Returns a registry object. Note: On a Macintosh, this returns a &lt;dummy type&gt; object.

# relay service

Returns a service object for the relay component of BES. Note: On a Macintosh, this returns &lt;nothing&gt;.

# relevant &lt;( bes computer, bes fixlet )&gt;

Returns `True` if the given fixlet is relevant on the specified computer.

# relevant &lt;( bes fixlet, bes computer )&gt;

Returns `True` if the given fixlet is relevant on the specified computer.

# remote desktop firewall service type

Returns the remote desktop firewall service type, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_REMOTE_DESKTOP.

# remote interactive logon group

Refers to the group of users who log on using an RDP connection.

# result &lt;( bes action, bes computer )&gt;

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result from &lt;bes action&gt; of &lt;bes computer&gt;.

# result &lt;( bes computer, bes action )&gt;

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result from &lt;bes action&gt; of &lt;bes computer&gt;.

# result &lt;( bes computer, bes fixlet )&gt;

Returns a Fixlet result for the given computer and Fixlet. This command is a variant of other result inspectors, such as result from &lt;bes fixlet&gt; of &lt;bes computer&gt;.

# result &lt;( bes computer, bes property )&gt;

Returns the result of the specified BES property and computer.

# result &lt;( bes fixlet, bes computer )&gt;

Returns a Fixlet result for the given computer and Fixlet. This command is a variant of other result inspectors, such as result from &lt;bes fixlet&gt; of &lt;bes computer&gt;.

# result &lt;( bes property, bes computer )&gt;

Returns the result of the specified BES property and computer.

# rom version

Returns the version of the system ROM.

# root folder

Returns the folder corresponding to &#39;/&#39;.

# root server

Returns an object representing the root BES Server to which the client last registered.

# routing table

No documentation exists.

# rpc program

No documentation exists.

# rpm

Returns an object representing the rpm database of the machine.

# rsop computer wmi

Provides access to the Resultant Set of Policy (RSoP) WMI classes via the RsopLoggingModeProvider. This is used to examine the state of the GPO (Group Policy object) security policies.

# runlevel

Returns the current runlevel of the local machine.

# running application

Returns all the application objects that are currently executing on the machine. See application.

# running service

Returns all the running service objects.

# running task

Retrieves a list of all the currently running tasks, including hidden tasks.

# saturday

Returns Saturday as a day of week object.

# scheduled task

This inspector is typically used to return a list of all scheduled tasks. It attempts to use the 2.0 interface first (which includes hidden tasks), then drops down to 1.0 if necessary.

# scripting additions folder

Returns the scripting additions folder of the system domain

# scsibus

An iterated property. When used without a number and not iterated it means SCSI bus 0.

# scsidevice

An iterated property. It is derived from calls to the MacOS.

# second

Returns a time interval corresponding to 1 second.

# security database

Returns the security accounts manager (SAM) database or, in the case of domain controllers, the Active Directory.

# security event log

Returns a security event log, which records global or local group policy events.

# selected server

The BES Server or BES Relay to which the agent reports. Returned as the &quot;selected server&quot; type.

# september

Returns September as an object of type month.

# service

Returns all the service objects.

# service group

This refers to a group including all security principals that have logged on as a service. Membership is controlled by the operating system.

# session state change task trigger type

Creates a task trigger type corresponding to a session state change trigger, which starts a task on console connects or disconnects, remote connects or disconnects, or workstation lock or unlock notifications.

# shared folder

Returns the shared folder of the system domain

# shared libraries folder

Returns the shared libraries folder of the system domain

# shared variable &lt;( string, string )&gt;

This inspector returns strings containing the  variables shared across console users for the given dashboard ID and name provided in the first and second items in the tuple.

# show message task action type

Returns a &#39;task action type&#39; corresponding to a task that creates a message that will pop up on the desktop.

# shutdown item

No documentation exists.

# shutdown items folder

Returns the shutdown items folder of the system domain

# site

Returns all the site objects that are currently loaded into memory. See site.

# smbios

Returns a basic smbios object, a function formerly served by the Desktop Management Interface, or DMI. This object contains searchable structures related to the computer BIOS.

# smf

Returns the smf object. Use &#39;services of smf&#39; for more information.

# software depot

Accesses the set of installed software and products.

# sound folder

Returns the sound folder of the system domain

# speech folder

Returns the speech folder of the system domain

# standard firewall profile type

Returns the Standard firewall profile type. This is a global property.

# standby state

Returns the power state corresponding to standby.

# startup item

No documentation exists.

# startup items folder

Returns the startup items folder of the system domain

# subscribed &lt;( bes computer, bes site )&gt;

Returns `True` if the given computer is subscribed to the given BES site.

# subscribed &lt;( bes site, bes computer )&gt;

Returns `True` if the given computer is subscribed to the given BES site.

# sunday

Returns Sunday as a day of week object.

# swap

Returns an object containing information about the swap partition.

# system domain

Returns a system domain object.

# system event log

Returns a system event log, which records OS or component events, such as the failure of a bootup service.

# system folder

Windows systems, returns the 32 bit &quot;System32&quot; folder. eg: C:\Windows\System32 or C:\Windows\SysWow64. Platforms other than Windows this is a synonym for &lt;root folder&gt;

# system group

Returns a security account constant corresponding to a &#39;system group&#39;.

# system ini device file

Returns a list of file objects corresponding to all the device files loaded as a result of a device= lines of the system.ini file. See file.

# system language

Returns the language of the system as a string. It is identified using the GetSystemDefaultLangID() system call. See the language keyword of the application object for a list of possible language value.

# system locale

Determines which bitmap fonts, and OEM, ANSI, and MAC code pages are defaults for the system. This only affects applications that are not fully Unicode.

# system ui language

Determines the default language of menus and dialogs, messages and help files.

# system version

Returns the version of MacOS.

# system wow64 folder

Returns a filesystem object corresponding to a &quot;Windows On Windows 64&quot; system folder, which does not exist on 32-bit Windows. You can find out more about the WOW64 system folder at the Microsoft site: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/sysinfo/base/getsystemwow64directory.asp.

# system x32 folder

Returns a filesystem object corresponding to a 32-bit system folder. On a 32-bit machine, this is equivalent to the normal system folder.

# system x64 folder

Returns a filesystem object corresponding to a 64-bit system folder. This is the same as the system folder, but with file system redirection disabled. For more information about file redirection, see the Microsoft site http://msdn.microsoft.com/library/default.asp?url=/library/en-us/win64/win64/file_system_redirector.asp.

# tcp

Returns an internet protocol corresponding to the Microsoft enumerated type: NET_FW_IP_PROTOCOL_TCP.

# temporary items folder

Returns the temporary items folder of the system domain

# terminal server user group

Refers to a group including all users who have logged on to a Terminal Services server. Membership is controlled by the operating system.

# text encodings folder

Returns the text encodings folder of the system domain

# themes folder

Returns the themes folder of the system domain

# thursday

Returns Thursday as a day of week object.

# time task trigger type

Creates a task trigger type corresponding to a time trigger, which starts a task on a specific date and time.

# top level bes action

Returns all top-level actions. Does not include actions that are normally hidden or sub-actions of a multiple action group.

# top level bes action set

Returns all top level actions as a mathematical set. Does not include actions that are normally hidden, and sub-actions of a multiple action group.

# total processor core count

Returns an integer corresponding to the total number of processor cores.

# true

Returns the boolean TRUE.

# tuesday

Returns Tuesday as a day of week object.

# type

No documentation exists.

# udp

Returns an internet protocol corresponding to the Microsoft enumerated type: NET_FW_IP_PROTOCOL_UDP.

# unary operator

No documentation exists.

# universal time zone

Returns a time zone object corresponding to the universal time zone.

# upnp firewall service type

Returns the UPnP (Universal Plug and Play) firewall service type, corresponding to the Microsoft enumerated type: NET_FW_SERVICE_UPNP.Note: UPnP is not the same as PnP. UPnP is used for network connectivity via TCP/IP to various devices (scanners, printers, etcetera.).

# usb

The Universal Serial Bus.

# user

Returns objects for all users of the computer, logged in or not.

# user domain

Returns a user domain object.Note: The &quot;user domain&quot; refers to the root user, not the currently logged in user.

# user language

Returns the language of the system as a string. It is identified by using the GetUserDefaultLangId() system call. See the language keyword of the application object for a list of possible language value.

# user locale

Determines which settings are used for formatting dates, times, currency, and numbers as a default for each user. Also determines the sort order for sorting text.

# user temp folder

Returns the user temp folder of the system domain

# user ui language

Non-MUI: Same as system UI Language.MUI: Determines the language of menus and dialogs, messages, and help files.

# users folder

Returns the users folder of the system domain

# utilities folder

Returns the utilities folder of the system domain

# virtual memory

Returns `True` if virtual memory is turned on.

# voices folder

Returns the voices folder of the system domain

# volume

An iterated property. Examines all currently mounted volumes which will include the startup volume, CD-ROM, disk images and other removable media and file sharing volumes.

# volume settings folder

Returns the volume settings folder of the system domain

# wake on lan subnet cidr string

Returns the subnet the client is in for Wake on Lan (WoL) purposes. The client sends information to the relay during registration that is used to decide which subnet the client is in. The relay returns the subnet to the client, which is the value this inspector exposes. This value is used to send WoL commands to forwarders. To wake a machine by computer ID, the server looks up the mac address and subnet of that machine. It then tries to identify clients that have been configured as WoL forwarders within the same subnet and routes WoL commands to those forwarders, sending them the mac address of the machine that needs to be awoken.

# warning event log event type

Returns an object corresponding to a warning in the event log. Warnings can be used to prevent future system problems.

# wednesday

Returns Wednesday as a day of week object.

# week

Returns a time interval corresponding to 1 week.

# weekly task trigger type

Creates a task trigger type corresponding to a weekly trigger, which starts a task on a weekly schedule, such as 9:00 AM each Wednesday.

# win32 running service

A synonym for &#39;running service&#39;. This can be any running service from atapi to the BESRelay.

# win32 service

A synonym for &#39;service&#39;. This can be anything from atapi to the BESRelay.

# windows folder

Returns a folder object of the Windows folder This is operating system dependent. Under Win98 this is usually c:\Windows.

# winrt package

No documentation exists.

# wmi

Returns the wmi object corresponding to the &quot;root\cimv2&quot; namespace.

# x32 registry

Returns a 32-bit registry object. This inspector is equivalent to the ordinary registry inspector.

# x64 registry

Returns a 64-bit registry object. This inspector is for 64-bit computers only; there is no 64-bit registry on a 32-bit computer. Note that &quot;x64 registry&quot; and &quot;native registry&quot; on 64-bit machines do NOT provide the same view as the 64-bit version of regedit (the &quot;physical&quot; view). If you try to access the physical location of the 32-bit view keys using a 64-bit view, it will be mapped back to the equivalent location in the 64-bit view.

# year

Returns the specified number of years as a &lt;number of months&gt; type.

# zone

Returns the global Solaris zones.
