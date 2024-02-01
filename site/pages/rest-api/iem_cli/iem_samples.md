---
title: IEM Command-Line Interface Samples
---

Here you find usage samples showing how to run requests on REST API resources from the IEM CLI.

- [Actions](#actions)
- [Advanced Options](#advanced-options)
- [Export Masthead](#export-masthead)
- [Fixlet](#fixlet)
- [LDAP](#ldap)
- [Login](#login)
- [Operators](#operators)
- [DSA Replication](#dsa-replication)
- [Master Server Switch](#master-server-switch)
- [Role](#role)
- [Site](#site)
- [System Options](#system-options)


## Actions
To submit the Fixlet ID 42 in the Master Action Site, on the computer my_computer.my_domain.com, create an XML file as follows:

```xml
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
      <SourcedFixletAction>
        <SourceFixlet>
            <Sitename>ActionSite</Sitename>
            <FixletID>42</FixletID>
            <Action>Action1</Action>
        </SourceFixlet>
        <Target>
            <ComputerName>my_computer.my_domain.com</ComputerName>
        </Target>
      </SourcedFixletAction>
</BES>
```

Use the following command to post the action of submitting the Fixlet on a specific computer:

```
./iem post /BigFix/take_action_site.xml actions
```

## Advanced Options
To get the list of advanced options, run the following command:

```
./iem post /BigFix/take_action_site.xml actions
```

The command returns the list of fields in XML format as follows:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
            <AdminField Resource="https://my_computer.my_domain.com:52311/api/admin/field/usePre70ClientCompatibleMIME">
                 <Name>usePre70ClientCompatibleMIME</Name>
                 <Value>false</Value>
           </AdminField>
```

To set the admin key disableNmoSiteManagementDialog, create an XML file (besadmin.xml) as follows:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
           <AdminField Resource="https:/my_computer.my_domain.com:52311/api/admin/field/disableNmoSiteManagementDialog">
                 <Name>disableNmoSiteManagementDialog</Name>
                 <Value>1</Value>
           </AdminField>
</BESAPI>
```

Use the following command to set the appropriate attribute:

```
./iem post /BigFix/besadmin.xml admin/fields
```

## Export Masthead
Use the following command to export the masthead to standard output:

```
./iem get admin/masthead
```

Use the following command to retrieve masthead parameters:

```
./iem get admin/masthead/parameters
```

The command returns the list of parameters in XML format as follows:

```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001
          /XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
            <MastheadParameters Resource="https://my_computer.my_domain.com:52311 /api/admin/masthead/parameters">
                <PortNumber>52311</PortNumber>
                <GatherInterval>Day</GatherInterval>
                <Controller>nobody</Controller>
                <InitialLockState>on</InitialLockState>
                <RequireFIPSCompliantCrypto>false</RequireFIPSCompliantCrypto>
           </MastheadParameters>
</BESAPI>
```

## Fixlet
To get the list of Fixlets in the custom site myfixes, use the following command:

```
./iem get fixlets/custom/myfixes
```

The command returns the list of Fixlets in XML format as follows:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
      <Fixlet Resource="https://my_computer.my_domain.com:52311/api/fixlet/custom/myfixes/34?" LastModified="Mon, 10 Dec 2012 14:33:36 +0000">
              <Name>myfixes Custom Fixlet</Name>
              <ID>34</ID>
      </Fixlet>
      <Fixlet Resource="https://my_computer.my_domain.com:52311/api/fixlet/custom/myfixes/40?" LastModified="Mon, 10 Dec 2012 16:05:30 +0000">
              <Name>MyFixlet</Name>
              <ID>40</ID>
      </Fixlet>
</BESAPI>
```

## LDAP
To get the list of defined LDAPs, use the following command:

```
./iem get ldapdirectories
```

The command returns the list of LDAP in XML format as follows:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <LDAPDirectory Resource=" https://my_computer.my_domain.com:52311/ldapdirectory/34">
          <ID>34</ID>
          <Name>AD</Name>
          <IsActiveDirectory>true</IsActiveDirectory>
          <IsGlobalCatalog>true</IsGlobalCatalog>
          <UseSSL>false</UseSSL>
          <BaseDN>DC=tem,DC=test,DC=com</BaseDN>
          <UIDAttribute>userPrincipalName</UIDAttribute>
          <UserFilter>(objectCategory=user)</UserFilter>
          <GroupFilter><![CDATA[(&(objectCategory=group) (groupType:1.2.840.113556.1.4.803:=2147483648))]]></GroupFilter>
          <User>BigFix\Administrator</User>
          <Servers>
            <Server>
                <Host>10.43.5.20</Host>
                <Port>3268</Port>
                <Priority>0</Priority>
            </Server>
          </Servers>
    </LDAPDirectory>
```

To create a new LDAP, use the same XML syntax as ./iem get ldapdirectories and add the following row after the User row in the XML file:

```
<Password>MyLDAP-Password</Password>
```

Then create the new LDAP with the following command:

```
./iem post MyLDAP.xml ldapdirectories
```

To get the configuration data of a specific LDAP having its ID (in the current example ID=34) run the following command:

```
./iem get ldapdirectory/34
```

The command returns the LDAP configuration in XML format as follows:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
      <LDAPDirectory Resource="https://my_computer.my_domain.com:52311/ldapdirectory/34">
             <ID>34</ID>
             <Name>AD</Name>
             <IsActiveDirectory>true</IsActiveDirectory>
             <IsGlobalCatalog>true</IsGlobalCatalog>
             <UseSSL>false</UseSSL>
             <BaseDN>DC=tem,DC=test,DC=com</BaseDN>
             <UIDAttribute>userPrincipalName</UIDAttribute>
             <UserFilter>(objectCategory=user)</UserFilter>
             <GroupFilter><![CDATA[(&(objectCategory=group) (groupType:1.2.840.113556.1.4.803:=2147483648))]]></GroupFilter>
             <User>BigFix\Administrator</User>
             <Servers>
                     <Server>
                            <Host>10.43.5.20</Host>
                            <Port>3268</Port>
                            <Priority>0</Priority>
                    </Server>
             </Servers>
      </LDAPDirectory>
```

To remove a specific LDAP having its ID (in the current example ID=34) run the following command:

```
./iem delete ldapdirectory/34
```

To convert a local operator into an LDAP operator, run the following command:

```
   BESAdmin.exe /convertToLDAPOperators [/mappingFile:<file>]
```

where `<file>` is the mapping file containing the match between Windows local operators and LDAP operators.
 Each line of the file must contain the name of the user to convert, followed by a tab and the name of the user in 
 LDAP or Active Directory. The LDAP name must have the same format used to log into the console, such as domain\user, 
 user@domain, or user. If the file is not available, BESAdmin converts all local users assuming their name in LDAP or 
 Active Directory is the same as their local user name.
 
## Login
To log in, run the command:

```
./iem login --server=ServerName:ServerPort --user=master --password=Mypassword
```

To perform an https login:

```
./iem login --server=https://my_computer.my_domain.com:52311 --user=master --password=Mypassword
```

To perform a login using the Windows authentication:

```
iem.exe login --server=mybfserver.mydomain --windowsAuthentication
```

## Operators
To display a list of operators (local and LDAP), run the following command:

```
./iem get operators
```

To get roles associated to an operator, run the following command:

```
./iem get operator/OperatorName/roles
```

To add an operator, use the XML syntax example from ./iem get operators, remove the row <LastLoginTime>. For a local operator, add the row <Password>, and then run the following command:

```
./iem post MyOperator.xml operators
```

To modify an operator, use the XML syntax example from ./iem get operators, and then run the following command:

```
./iem post /tmp/Operator.xml operator/MyOperatorName
```

To remove an operator (local and LDAP), run the following command:

```
./iem delete operator/OperatorName
```

## DSA Replication
You can change the replication interval and the master server of your replication servers by using the command line.

#### Replication interval changes
To change the replication interval, complete the following steps:

1. Start the command line:

   On Windows systems:
```
iem login --server=servername:serverport --user=username --password=password
```
    On Linux systems:
```
./iem login --server=servername:serverport --user=username --password=password
```
2. Retrieve the replication server settings by running the following command:

   On Windows systems:
```
iem get replication/server/0 > c:\temp\replicationServer0.xml 
```
   On Linux systems:
```
./iem get replication/server/0 > /appo/replicationServer0.xml 
```
3. Edit the following keyword of the replicationServer0.xml file:
```
<ReplicationIntervalSeconds>300</ReplicationIntervalSeconds>
```
   to change the value in seconds of the replication interval. Using longer replication intervals means that the servers replicate data less often, but have more data to transfer each time.

   This is an example of the replicationServer0.xml file:

   ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
       <ReplicationServer Resource="http://my_computer.my_domain.com:52311/api/replication/server/0">
               <ServerID>0</ServerID>
               <URL>http://my_computer.my_domain.com:52311</URL>
               <DNS>my_computer.my_domain.com</DNS>
          <ReplicationIntervalSeconds>300</ReplicationIntervalSeconds>
          <ReplicationLink Resource="http://my_computer.my_domain.com:52311/api/replication/server/0/link/3">
                  <SourceServerID>0</SourceServerID>
                  <DestinationServerID>3</DestinationServerID>
                  <Weight>1</Weight>
                  <IsConnected>0</IsConnected>
                  <LastReplication>Fri, 01 Mar 2013 11:17:12 +0000
                  </LastReplication>
                  <LastError>19NoMatchingRecipient - Fri, 01 Mar 2013 11:17:12 +0000
                  </LastError>
          </ReplicationLink>
          <ReplicationLink Resource="http://my_computer.my_domain.com:52311/api/replication/server/3/link/0">
                       <SourceServerID>3</SourceServerID>
                       <DestinationServerID>0</DestinationServerID>
                       <Weight>1</Weight>
                       <IsConnected>1</IsConnected>
                       <LastReplication>Fri, 01 Mar 2013 11:17:18 +0000
                       </LastReplication>
          </ReplicationLink>
       </ReplicationServer>
    </BESAPI>
```
4. Upload the modified file by running the following command:
	
    On Windows systems:
```
    iem post c:\temp\replicationServer0.xml  replication/server/0
```
    On Linux systems:
```
    ./iem post /appo/replicationServer0.xml  replication/server/0
```

#### Master Server Switch
By default, server 0 (zero) is the master server. To switch the master to another server, set the deployment option masterDatabaseServerID to the other server ID as follows:
1. Start the command line:

    On Windows systems:
```
    iem login --server=servername:serverport --user=username --password=password
```
    On Linux systems:
```
    ./iem login --server=servername:serverport --user=username --password=password
```
2. Retrieve the settings to switch the master server:
	
    On Windows systems:
```
    iem get admin/fields > c:\temp\switchmaster.xml 
```
    On Linux systems:
```
     ./iem get admin/fields > /appo/switchmaster.xml 
```
    In the switchmaster.xml file, add or edit the following keyword and its value:
```
      <Name>masterDatabaseServerID<Name>
      <Value>0</Value>
```
    to switch the master server to another master server:
```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
        <AdminField Resource="http://my_computer.my_domain.com:52311/api/admin/field/masterDatabaseServerID">
           <Name>masterDatabaseServerID</Name>
           <Value>3</Value>
        </AdminField>
    </BESAPI>
```
4. Upload the modified file by running the following command:
  
   On Windows systems:
```
iem post c:\temp\switchmaster.xml admin/fields
```
    On Linux systems:
```
./iem post /appo/switchmaster.xml admin/fields
```
After the value has successfully replicated to the new server, it become the master server. 
If a server has a failure while it is the master, another server must be made the master server 
by direct manipulation of the ADMINFIELDS table in the database.

## Role
To get the role configuration, run the following command:
```
./iem get roles
```
The command returns the role configuration in XML format.

To create a new role, run the following command:
```
./iem post Example.xml roles
```
Where Example.xml contains role configuration data in XML format.

## Site
To add a file to a custom site as master operator, run the following command:
```
./iem post /tmp/file.my /api/site/custom/test/file/file.my
```
To add a file to the master action site as master operator, run the following command:
```
iem post /tmp/file.my /api/site/master/file/file.my --force=true
```
Where the option `--force=true` allows to override the file it if already exists in the site.
To add a file to the operator site as non master operator, run the following command:
```
iem post /tmp/file.my /api/site/operator/nmo/file/file.my --isClientFile=true
```
Where the option `--isClientFile=true` allows to make the file available for download by Clients.

The options `--force` and `--isClientFile` apply when running post and put requests against files, both as master and as non master operator. For more details, see [Site](../api/site.html).

## System Options
To display MinimumRefreshSeconds (seconds), and DefaultFixletVisibility (Visible, Hidden) run the following command:
```
./iem get admin/options
```
The command returns the list of options in XML format as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
        <SystemOptions Resource="https://my_computer.my_domain.com:52311/api/admin/options">
             <MinimumRefreshSeconds>15</MinimumRefreshSeconds>
             <DefaultFixletVisibility>Visible</DefaultFixletVisibility>
       </SystemOptions>
</BESAPI>
```
To set the system option MinimumRefreshSeconds, create an XML file (SystemOptions.xml) as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
        <SystemOptions Resource="https://my_computer.my_domain.com:52311/api/admin/options">
             <MinimumRefreshSeconds>20</MinimumRefreshSeconds>
             <DefaultFixletVisibility>Hidden</DefaultFixletVisibility>
        </SystemOptions>
</BESAPI>
```
Use the following command to set the appropriate attribute:
```
./iem post /BigFix/SystemOptions.xml admin/options
```
