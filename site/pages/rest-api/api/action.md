---
title: Action
---

{% restapi "/api/actions", "GET", "Returns a list of actions." %}
**Request:** URL is all that is required, for example:

```xml
https://<bigfix_server>:52311/api/actions
```

For example: ```https://server.bigfix.com:52311/api/actions```

You can reduce the amount of information returned in the response using the ```?fields=``` parameter, as described in **Filtering Response Fields**.

**Response:** List of actions in XML format.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Action Resource="http://server.bigfix.com:52311/api/action/44" LastModified="Tue, 19 Mar 2013 21:23:10 +0000">
        <Name>Updated Windows Relay - BigFix version 9.0.586.0 Now Available!</Name>
        <ID>44</ID>
    </Action>
    <Action Resource="http://server.bigfix.com:52311/api/action/45" LastModified="Tue, 19 Mar 2013 21:23:57 +0000">
        <Name>POLICY: Updated Windows Client - BigFix version 9.0.586.0 Now Available!</Name>
        <ID>45</ID>
    </Action>
</BESAPI>
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/actions", "POST", "Creates a new action." %}
**Request:** BES XML for the action.

The following example:
- Creates an action from scratch, using the SingleAction tag.
- Stores the action script code in the ActionScript tag.
- Uses the default success criteria by leaving the SuccessCriteria tag empty.
- Targets all computers using the AllComputers tag.


```xml
<?xml version="1.0" encoding="utf-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" SkipUI="true">
    <SingleAction>
        <Title>test action</Title>
        <Relevance>true</Relevance>
        <ActionScript>setting "test action"="{now as string}" on "{now}" for client</ActionScript>
        <SuccessCriteria />
        <Settings />
        <SettingsLocks />
        <Target>
            <AllComputers>true</AllComputers>
        </Target>
    </SingleAction>
</BES>
```

**Response Schema:** BESAPI.xsd

POST Example from Source Fixlet:

In the target section of the XML file, specify the "ComputerID" if you want the action to be sent to the client 
mailbox. 

The following example:
- Creates an action by running an existing Fixlet (or a task), using the SourcedFixletAction tag.
- Specifies the site of the Fixlet/task to pick in the Sitename tag.
- Targets specific computers using (one or more) the ComputerID tag(s).
- Passes a parameter value using the Parameter tag.
- Passes a secure parameter value using the SecureParameter tag.


```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
    <SourcedFixletAction>
        <SourceFixlet>
            <Sitename>TestSite</Sitename>
            <FixletID>83</FixletID>
            <Action>Action1</Action>
        </SourceFixlet>
        <Target>
            <ComputerID>13863357</ComputerID>
            <ComputerID>13863358</ComputerID>
        </Target>
        <Parameter Name="paramName">123</Parameter>
        <SecureParameter Name="secureParamName">some value</SecureParameter>
    </SourcedFixletAction>
</BES>
```

If a "ComputerName" or a list is specified in the target section, the action will not be sent to the client mailbox.

The SourceFixlet can contain SiteID or Sitename. If using Sitename and it's an empty field ActionSite will be assumed.

**Note:** You cannot submit a Multiple Action Group using a MemberAction that contains a FixletSource element. This is relevant to IEM 9.0 and later.
{% endrestapi %}

{% restapi "/api/action/{action id}", "GET", "Fetches the BES XML representation of the specified action." %}
**Request:** URL is all that is required

For example: ```https://server.bigfix.com:52311/api/action/44```

**Response:** 
- HTTP 200 - Returns XML in body of response.
- HTTP 404 - Returns empty response if action is not found.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
    <SingleAction>
        <Title>Updated Windows Relay - BigFix version 9.0.586.0 Now Available!</Title>
        <Relevance><![CDATA["|7950711|" contains "|" & computer id as string & "|"]]></Relevance>
        <ActionScript MIMEType="application/x-Fixlet-Windows-Shell"><![CDATA[prefetch BESRelayUpgrade.exe sha1:6102c4871f470fe57325b2f9514ac94cca0a2f6a size:7678744 http://software.bigfix.com/download/bes/90/BigFix-BES-Relay-9.0.586.0.exe
delete __Local\Get\BESRelayUpgrade.exe
delete __Local\Get\BESClientUpgrade.exe
// If the next line fails, there is not enough free space to complete this action
continue if {10360960 < free space of drive of client folder of current site}
move __Download\BESRelayUpgrade.exe __Local\Get\BESRelayUpgrade.exe
parameter "RunningRelay"="{exists running service "BESRelay"}"
wait __Local\Get\BESRelayUpgrade.exe /s /v"/l*voicewarmup \"{if exists (location of regapp "BESRelay.exe") then location of regapp "BESRelay.exe" else location of client}\besrelayupgrade.log\" RESTARTBESCLIENT=0 REBOOT=ReallySuppress MSIRESTARTMANAGERCONTROL=Disable /qn"
delete __Local\Get\BESRelayUpgrade.exe
if {"True" = parameter "RunningRelay"}
    parameter "startTime" = "{apparent registration server time}"
    pause while {(apparent registration server time - time(parameter "startTime")) < (30 * second)}
    relay select
    // Fails here if a previously running relay did not start up
    continue if {exists running service "BESRelay"}
endif
continue if {((it = "9.0.586.0") of (if (version of client >= "8.0") then version of relay service else version of file ((if (character 0 of it = "%22") then (substring between "%22" of it) else it) of image path of relay service)))}
if {version of client < "9.0.586.0"}
if {5 = major version of operating system}
parameter "BlackList"="{if(exists setting "_BESClient_Inspector_Blacklist" whose(exist value of it)of client) then value of setting "_BESClient_Inspector_Blacklist" of client else ""}"
setting "_BESClient_Inspector_Blacklist"="{"socket of <network>;" & parameter "BlackList"}" on "{parameter "action issue date" of action}" for client
endif
prefetch BESClientUpgrade.exe sha1:d0b44516479d6546202deb9bb86339227f343d31 size:10360960 http://software.bigfix.com/download/bes/90/BigFix-BES-Client-9.0.586.0.exe
move __Download\BESClientUpgrade.exe __Local\Get\BESClientUpgrade.exe
// The following line may show as Failed if the command executes a restart of the client - This is normal behaviour on success
wait __Local\Get\BESClientUpgrade.exe /s /v"/l*voicewarmup \"{location of client}\besclientupgrade.log\" REBOOT=ReallySuppress MSIRESTARTMANAGERCONTROL=Disable /qn"
endif]]></ActionScript>
        <SuccessCriteria Option="CustomRelevance"><![CDATA[(not exists relay service) OR ((it < "9.0.586.0") of (if (version of client >= "8.0") then version of relay service else version of file ((if (character 0 of it = "%22") then (substring between "%22" of it) else it) of image path of relay service))) OR (version of client < "9.0.586.0")]]></SuccessCriteria>
        <Settings>
            <PreActionShowUI>false</PreActionShowUI>
            <HasRunningMessage>false</HasRunningMessage>
            <HasTimeRange>false</HasTimeRange>
            <HasStartTime>false</HasStartTime>
            <HasEndTime>true</HasEndTime>
            <EndDateTimeLocalOffset>P2D</EndDateTimeLocalOffset>
            <HasDayOfWeekConstraint>false</HasDayOfWeekConstraint>
            <UseUTCTime>false</UseUTCTime>
            <ActiveUserRequirement>NoRequirement</ActiveUserRequirement>
            <ActiveUserType>AllUsers</ActiveUserType>
            <HasWhose>false</HasWhose>
            <PreActionCacheDownload>false</PreActionCacheDownload>
            <Reapply>false</Reapply>
            <HasReapplyLimit>true</HasReapplyLimit>
            <ReapplyLimit>3</ReapplyLimit>
            <HasReapplyInterval>false</HasReapplyInterval>
            <HasRetry>false</HasRetry>
            <HasTemporalDistribution>false</HasTemporalDistribution>
            <ContinueOnErrors>true</ContinueOnErrors>
            <PostActionBehavior Behavior="Nothing"></PostActionBehavior>
            <IsOffer>false</IsOffer>
        </Settings>
        <SettingsLocks>
            <ActionUITitle>false</ActionUITitle>
            <PreActionShowUI>false</PreActionShowUI>
            <PreAction>
                <Text>false</Text>
                <AskToSaveWork>false</AskToSaveWork>
                <ShowActionButton>false</ShowActionButton>
                <ShowCancelButton>false</ShowCancelButton>
                <DeadlineBehavior>false</DeadlineBehavior>
                <ShowConfirmation>false</ShowConfirmation>
            </PreAction>
            <HasRunningMessage>false</HasRunningMessage>
            <RunningMessage>
                <Text>false</Text>
            </RunningMessage>
            <TimeRange>false</TimeRange>
            <StartDateTimeOffset>false</StartDateTimeOffset>
            <EndDateTimeOffset>false</EndDateTimeOffset>
            <DayOfWeekConstraint>false</DayOfWeekConstraint>
            <ActiveUserRequirement>false</ActiveUserRequirement>
            <ActiveUserType>false</ActiveUserType>
            <Whose>false</Whose>
            <PreActionCacheDownload>false</PreActionCacheDownload>
            <Reapply>false</Reapply>
            <ReapplyLimit>false</ReapplyLimit>
            <RetryCount>false</RetryCount>
            <RetryWait>false</RetryWait>
            <TemporalDistribution>false</TemporalDistribution>
            <ContinueOnErrors>false</ContinueOnErrors>
            <PostActionBehavior>
                <Behavior>false</Behavior>
                <AllowCancel>false</AllowCancel>
                <Deadline>false</Deadline>
                <Title>false</Title>
                <Text>false</Text>
            </PostActionBehavior>
            <IsOffer>false</IsOffer>
            <AnnounceOffer>false</AnnounceOffer>
            <OfferCategory>false</OfferCategory>
            <OfferDescriptionHTML>false</OfferDescriptionHTML>
        </SettingsLocks>
        <IsUrgent>false</IsUrgent>
        <Target>
            <ComputerID>7950711</ComputerID>
        </Target>
    </SingleAction>
</BES>
```

Response Schema: BES.XSD
{% endrestapi %}

{% restapi "/api/action/{action id}", "DELETE", "Stops and deletes the specified action." %}

**Request:** URL is all that is required

For example: ```https://server.bigfix.com:52311/api/action/53```

**Note:** You cannot delete actions that are members of a Multiple Action Group. This note applies to BigFix 9.2 and later.
{% endrestapi %}

{% restapi "/api/action/{action id}/status", "GET", "Gets the status of an action against it's targets." %}
**Request:** URL is all that is required, for example: 

```xml
https://<bigfix_server>:52311/api/action/44/status
```

For example: ```https://server.bigfix.com:52311/api/action/44/status```

You can reduce the amount of information returned in the response using the ```?fields=``` parameter, as described in **Filtering Response Fields**.

**Response:** The information about the status of the action in XML format.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ActionResults Resource="http://server.bigfix.com:52311/api/action/44/status">
        <ActionID>44</ActionID>
        <Status>Open</Status>
    </ActionResults>
</BESAPI>
```

**Response Schema:** BESAPI.xsd
{% endrestapi %}

{% restapi "/api/action/{action id}/stop", "POST", "Stops the specified action." %}
**Request:** URL is all that is required

For example: ```https://server.bigfix.com:52311/api/action/44/stop```

{% endrestapi %}

#### Filtering Response Fields
You can use the ```?fields=``` parameter to limit the fields returned for a given resource when using the API resources ```/api/actions``` and ```/api/action/{action id}/status```.
The value following the ```?fields=``` parameter is the filter. Because the XML is case sensitive, ensure that you specify the correct case to avoid errors. 

Use these characters to define the filter:
- ```,``` to separate elements, children, and attribute pairs
- ```(...)``` to denote children within a field
- ```&```as pairing marker for attributes
- ```<...>``` to denote attributes
- ```=``` to mark LHS and RHS of attributes

**Note:** These are reserved characters. By default, they are not allowed in the name of the filter.

These are some example of filtering results using ```?fields=```:

```xml
/api/action/<action id>/status?fields=Status,Computer
/api/action/<action id>/status?fields=Computer(Status,State,StartTime) 
/api/action/<action id>/status?fields=Computer<ID=11111>,Computer(Status,StartTime) 
```
