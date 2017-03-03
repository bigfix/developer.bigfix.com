---
title: Get Computer
---

Gets the properties of a specific computer registered in the console.

# cURL

```
curl -X GET --user {username}:{password} https://{server}:{port}/api/computer/{id}
```

# python

```python
import requests
r = requests.get('https://{server}:{port}/api/computer/{id}', auth=('{username}', '{password}'))
print(r.text)
```

# Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
  <Computer Resource="https://localhost:52311/api/computer/{id}">
    <Property Name="Client Settings">_BESClient_EMsg_File=/var/opt/BESClient/besclientdebug.log</Property>
    <Property Name="Client Settings">_BESClient_EMsg_Detail=0</Property>
    <Property Name="Client Settings">__RelayServer1=</Property>
    <Property Name="Client Settings">__RelayServer2=</Property>
    <Property Name="Client Settings">__Relay_Control_Server1=</Property>
    <Property Name="Client Settings">__Relay_Control_Server2=</Property>
    <Property Name="Client Settings">__LockState=false</Property>
    <Property Name="Client Settings">_BESClient_UploadManager_BufferDirectory=/var/opt/BESClient/__BESData/__Global/Upload</Property>
    <Property Name="Client Settings">_BESClient_Resource_StartupNormalSpeed=0</Property>
    <Property Name="Client Settings">_BESRelay_HTTPServer_ServerRootPath=/var/opt/BESServer/wwwrootbes</Property>
    <Property Name="Client Settings">_BESRelay_HTTPServer_PortNumber=52311</Property>
    <Property Name="Client Settings">_BESRelay_HTTPServer_LogFilePath=/var/log/BESRelay.log</Property>
    <Property Name="Client Settings">_BESGather_Download_CheckInternetFlag=1</Property>
    <Property Name="Client Settings">_BESGather_Comm_UseUrlMoniker=0</Property>
    <Property Name="Client Settings">_Enterprise Server_ClientRegister_UDPMessagePort=52311</Property>
    <Property Name="Client Settings">_BESRelay_UploadManager_ParentURL=</Property>
    <Property Name="Client Settings">_BESServer_Database_DSN=BFENT</Property>
    <Property Name="Client Settings">_BESServer_Database_DatabaseAddress=localhost</Property>
    <Property Name="Client Settings">_BESServer_Database_User=db2inst1</Property>
    <Property Name="Client Settings">_BESServer_Database_Password={obf}YmlnZml4</Property>
    <Property Name="Client Settings">_BESServer_Database_Port=50000</Property>
    <Property Name="Client Settings">_BESClient_DeploymentEncoding_IANAName=windows-1252</Property>
    <Property Name="Client Settings">_BESRelay_Log_Verbose=0</Property>
    <Property Name="Client Settings">_WebReports_HTTPServer_HostName=bigfix.test</Property>
    <Property Name="Client Settings">_WebReports_HTTPServer_PortNumber=80</Property>
    <Property Name="Client Settings">_WebReports_HTTPServer_ServerRootPath=/var/opt/BESWebReportsServer/wwwroot</Property>
    <Property Name="Client Settings">_WebReports_HTTPServer_SSLCertificateFilePath=</Property>
    <Property Name="Client Settings">_WebReports_HTTPServer_UseSSLFlag=0</Property>
    <Property Name="Client Settings">_BESClient_DeploymentEncoding_IANAName=windows-1252</Property>
    <Property Name="Computer Name">bigfix.test</Property>
    <Property Name="OS">Linux Red Hat Enterprise Server 7.0 (3.10.0-123.el7.x86_64)</Property>
    <Property Name="CPU">2600 MHz Core i7-3720QM</Property>
    <Property Name="Last Report Time">Wed, 25 May 2016 22:28:02 +0000</Property>
    <Property Name="Locked">No</Property>
    <Property Name="BES Relay Selection Method">Manual</Property>
    <Property Name="Relay">BES Root Server</Property>
    <Property Name="Distance to BES Relay">0</Property>
    <Property Name="BES Relay Service Installed">BES Root Server</Property>
    <Property Name="Relay Name of Client">bigfix.test</Property>
    <Property Name="DNS Name">bigfix.test</Property>
    <Property Name="Active Directory Path">&lt;none&gt;</Property>
    <Property Name="IP Address">10.0.2.15</Property>
    <Property Name="IPv6 Address">fe80:0:0:0:a00:27ff:fe15:a420</Property>
    <Property Name="Subscribed Sites">http://sync.bigfix.com/cgi-bin/bfgather/bessupport</Property>
    <Property Name="BES Root Server">bigfix.test (0)</Property>
    <Property Name="License Type">Non-Windows Server</Property>
    <Property Name="Agent Type">Native</Property>
    <Property Name="Device Type">Server</Property>
    <Property Name="Agent Version">9.2.7.53</Property>
    <Property Name="ID">{id}</Property>
    <Property Name="Computer Type">Physical</Property>
    <Property Name="User Name">&lt;none&gt;</Property>
    <Property Name="RAM">1856 MB</Property>
    <Property Name="Free Space on System Drive">33228 MB</Property>
    <Property Name="Total Size of System Drive">38373 MB</Property>
    <Property Name="BIOS">&lt;n/a&gt;</Property>
    <Property Name="Subnet Address">10.0.2.0</Property>
  </Computer>
</BESAPI>
```

