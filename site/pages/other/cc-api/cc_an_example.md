---
title: Examples of Client Documents
---

ComplianceDoc.xml is included in the Client API package, and in the [Software Development Kit](./cc_sdk.html), as an example of the
kind of document you might create to specify compliance with a given policy. It is
a plain text file containing XML that can be prepared with any text editor.

## Sample Compliance Document

The following is a snippet from that file that tests for the existence on the client of
the Windows operating system:

```xml
<?xml version="1.0"?>
<BESClientComplianceDocument Version="1.0">
	<Date>13 Jun 2004 13:41:57 -0700</Date>
	<ComplianceItem>
		<Designator>IsWindowsOS</Designator>
		<Expression>name of operating system starts with "Win"</Expression>
		<Description>Is a Windows computer</Description>
		<Comment>Compliant if True</Comment>
	</ComplianceItem>
</BESClientComplianceDocument>
```

The file is composed of one or more items each with multiple parts, including:
- **Designator:** An identifier for the retrieved value.
- **Expression:** The relevance expression that is evaluated by the API and returned to the specified designator.
- **Description:** A brief description of the retrieved value.
- **Comment:** A comment about this retrieved value.

All compliance documents follow this format, with as many compliance items as wanted. 
Following you find some more samples.

## Check service pack

The following compliance document requires that the client computer is running
Windows 7 with at least Service Pack 2 Installed.

```xml
<BESClientComplianceDocument Version="1.0">
	<ComplianceItem>
		<Designator>XPServicePack</Designator>
		<Expression>
		name of operating system = "Win7" AND csd version of operating system >= "Service Pack 2"
		</Expression>
		<Description>
		Minimum Windows 7 Service Pack requirement: Service Pack 2
		</Description>
		<Comment>Compliant if True</Comment>
	</ComplianceItem>
</BESClientComplianceDocument>
``` 

## Check for a running app

This compliance document requires that the application DefWatch.exe is running
on the computer.

```xml
<BESClientComplianceDocument Version="1.0">
	<ComplianceItem>
		<Designator>RequiredProgram</Designator>
		<Expression>exists running application "DefWatch.exe"</Expression>
		<Description>DefWatch.exe must be running.</Description>
		<Comment>Compliant if True</Comment>
	</ComplianceItem>
</BESClientComplianceDocument>
``` 

## Update patches

The following compliance document requires that there are less than 10 unapplied
patches with severity rating Critical, and the elapsed time since the oldest
unapplied critical patch is less than 30 days.

```xml
<BESClientComplianceDocument Version="1.0">
	<ComplianceItem>
		<Designator>NumCritical</Designator>
		<Expression>
		  10 > number of relevant fixlets whose 
		  (value of header "x-fixlet-source-severity" of
		  it as lowercase = "critical") of sites
		</Expression>
		<Description>
		  Total # of critical patches must be < 10
		</Description>
		<Comment>Compliant if True</Comment>
	</ComplianceItem>
	<ComplianceItem>
		<Designator>MaxPatchAge</Designator>
		<Expression>
		  if (exists relevant fixlet whose ((value of header "X-Fixlet-Source-Severity" of it
		  as lowercase = "critical") AND (value of header "X-Fixlet-Source-Release-Date"	
		  of it does not contain "Unspecified")) of sites "bessecurity")
		  then ((30 > ((it - 1) of maximum of ((preceding texts of firsts " day"
		  of ((now + 1*day - it) as string) as integer)
		  of ((((it as string & " 00:00:00 -0700")
		  of ((value of header "X-Fixlet-Source-Release-Date" of it) of relevant fixlets
		  whose ((value of header "x-fixlet-source-severity" of it as lowercase = "critical")
		  AND (value of header "X-Fixlet-Source-Release-Date" of it
		  does not contain "Unspecified")) of sites)) as time))))) as string) else "True"
		</Expression>
		<Description>
		  Elapsed time since the oldest unapplied critical patch
		  is less than 30 day(s)
		</Description>
	<Comment>Compliant if True</Comment>
	</ComplianceItem>
</BESClientComplianceDocument>
``` 

## Check for anti-virus

This compliance document requires that Norton Anti-Virus Corporation Edition is
running and the Anti-Virus definitions are less than 10 days old.

```xml
<BESClientComplianceDocument Version="1.0">
	<ComplianceItem>
		<Designator>AVDefinitionAge</Designator>
		<Expression>
		FALSE OR ((exists running application "vptray.exe" OR exists
	      running application "rtvscan.exe") AND exists
	      key "HKEY_LOCAL_MACHINE\Software\Symantec\SharedDefs"
          of registry AND exists value "NAVCORP_70"
          of key "HKEY_LOCAL_MACHINE\Software\Symantec\SharedDefs"
          of registry AND (now - ((following text of position 6
          of (preceding text of last "." of following text of last "\"
          of (value "NAVCORP_70"
          of key "HKEY_LOCAL_MACHINE\Software\Symantec\SharedDefs"
          of registry as string)) & " " & first 3 of following text
          of position (first 2 of following text of position 4
          of (preceding text of last "." of following text
          of last "\" of (value "NAVCORP_70"
          of key "HKEY_LOCAL_MACHINE\Software\Symantec\SharedDefs"
          of registry as string)) as integer * 3 - 3)
          of "JanFebMarAprMayJunJulAugSepOctNovDec"
          & " " & first 4 of (preceding text of last "."
          of following text of last "\" of (value "NAVCORP_70"
          of key "HKEY_LOCAL_MACHINE\Software\Symantec\SharedDefs"
          of registry as string)) & " 00:00:00 - 0700")
          as time)) < 10 * day)
	   </Expression>
	   <Description>
	      Elapsed time since the virus definition was last updated is less than
	      the specified number of day(s).
	   </Description>
	   <Comment>Compliant if True</Comment>
	</ComplianceItem>
</BESClientComplianceDocument>
``` 