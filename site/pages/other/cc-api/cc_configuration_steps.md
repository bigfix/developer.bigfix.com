---
title: Configuring the components
---

The Client Compliance API executable file and a dedicated library are included in the BigFix Agent for all platforms. 

As an alternative, on Windows clients you might also use a COM dll, as it is shown in a sample provided in the [Software Development Kit](./cc_sdk.html). 

Before using the Client Compliance API you must ensure that the following configuration is applied on the client system where you plan to run the API: 

- The BigFix agent must be running.

- on Windows systems, if you plan to use a COM implementation, install COM modules with the command:
    ```
    Regsvr32.exe BESClientComplianceMOD.dll
    ```

- On 64-bit Windows computers, the registry key
    ```
    HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\BigFix\ClientComplianceAPI
    ```

  On 32-bit Windows computers, the registry key
    ```
    HKEY_LOCAL_MACHINE\SOFTWARE\BigFix\ClientComplianceAPI
    ```

  must exist and must contain the following strings
    - *RequestDir* – set to the full path where configuration requests are written. The protections on this directory must permit anyone to write files to it and the client to read and delete files.
    - *ResponseDir* – set to the full path where configuration responses are written. The protections on this directory must permit anyone to read files from it and the client to write to it.
    - *ConnectDir* – set to the full path where interface glue scripts and executables are located. The protections on this directory must be such that third-party clients can execute files in this directory.
  
  The directories specified as RequestDir, ResponseDir, and ConnectDir must exist on the system.
  
- On Unix systems, the following paths must exist:
   ```
   /var/opt/BESClient/RequestDir
   /var/opt/BESClient/ResponseDir
   /var/opt/BESClient/ConnectDir
   /var/opt/BESClient/__BESData/__Compliance
   ```
   
   where ```__Compliance``` is the directory where you store your compliance documents in XML.
   
- On Mac OSx systems, the following paths must exist:
   ```
   /Library/Application Support/BigFix/BES Agent/RequestDir
   /Library/Application Support/BigFix/BES Agent/ResponseDir
   /Library/Application Support/BigFix/BES Agent/ConnectDir
   /Library/Application Support/BigFix/BES Agent/__BESData/actionsite/__Compliance
   ```
   
If you are configuring a Windows endpoint be aware that the [Software Development Kit](./cc_sdk.html) automatically implements most of these steps.
