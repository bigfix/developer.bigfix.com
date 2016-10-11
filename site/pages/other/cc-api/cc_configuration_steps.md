---
title: Configuring the components
---

The Client Compliance API agent and a dedicated library are included in the BigFix Agent for all platforms. 
As an alternative, on Windows clients you might also use a COM dll, as it is shown in a sample provided in the [Software Development Kit](./cc_sdk.html). 

Applications that use the API require that several components be installed and
properly configured. In general, you must ensure that the following are correctly
configured:
- The client is running.
- You created and saved a file named ComplianceDoc.xml in your site data folder, for example:
  *C:\Program Files\BigFix Enterprise\BES Client\__BESData\<your_site_name>\__Compliance*.
- The **BESClientComplianceMod.dll** is installed and registered.
- The registry is configured with appropriate paths to *RequestDir* and *ResponseDir*. This step applies to Windows systems.
- *RequestDir* and *ResponseDir* are existing folders.


These are the configuration steps to run on the endpoints where you plan to use the Client Compliance API. 
The first two steps apply to Windows systems only. If you are configuring a Windows endpoint be aware that 
the [Software Development Kit](./cc_sdk.html) automatically implements most of these steps.
1. Install COM module.
	If you are using a COM implementation, you can install COM modules with
	the following command:
	```
	Regsvr32.exe BESClientComplianceMOD.dll
	```
2. Create Configuration Key and add Path Data.
	On Windows computers, create the following registry key:
	```
	HKEY_LOCAL_MACHINE\SOFTWARE\BigFix\ClientComplianceAPI
	```
	Define the following three string values in the configuration registry key:
	- *RequestDir* – full path where configuration requests are written
	- *ResponseDir* – full path where configuration responses are written
	- *ConnectDir* – full path where interface glue scripts and executables are located
3. Create RequestDir.
	Create the directory where request files are written by the API. The protections
	on this directory must permit anyone to write files to it and the client to read
	and delete files. For Windows systems, this value is set in the RequestDir entry
	in the registry. For UNIX and Mac systems, the expected paths are:
	**UNIX:** /var/opt/BESClient/RequestDir
	**Mac:** /Library/Application Support/BigFix/BES Agent/RequestDir
4. Create ResponseDir
	Create the directory where response files are written by the API. The
	protections on this directory must permit anyone to read files from it and the
	client to write to it. For Windows, this value is set in the ResponseDir entry in
	the registry. For UNIX and Mac, the expected paths are:
	**UNIX:** /var/opt/BESClient/ResponseDir
	**Mac:**/Library/Application Support/BigFix/BES Agent/ResponseDir
5. Create ConnectDir
	Create a directory where you can keep “glue” scripts and other executables that
	provide the interface between the Client Compliance API and third-party
	agents. The protections on this directory must be such that third-party clients
	can execute files in this directory. For Windows, this value is set in the
	ConnectDir entry in the registry. For UNIX and Mac, the expected paths are:
	**UNIX:** /var/opt/BESClient/ConnectDir
	**Mac:** /Library/Application Support/BigFix/BES Agent/ConnectDir
6. Create __Compliance.
	Create a data directory that is required by the UNIX compliance executable:
	**UNIX only:** /var/opt/BESClient/__BESData/__Compliance
7. Install the Client.
	The client must be installed on the endpoint. The client must be running to
	evaluate compliance.
8. Store the Compliance XML
	After you create your compliance document, store it in your action site data
	directory.
	**UNIX:** /var/opt/BESClient/__BESData/actionsite/__Compliance/your_compliance_doc.xml
	**Mac:** /Library/Application Support/BigFix/BES Agent/__BESData/actionsite/__Compliance/your_compliance_doc.xml
9. Run your compliance agent.
	When everything is properly configured, you can run your agent by submitting
	your compliance document to the client. Do this by using the gather application:
	**UNIX:** ./compliance -c http://<server>:52311/cgi-bin/bfgather.exe/actionsite your_compliance_doc.xml
	**Mac:** ./BESClientCompliance -c http://<server>:52311/cgi-bin/bfgather.exe/actionsite your_compliance_doc.xml

	**Important:** The specified URL cannot be an IP address and must match the URL defined in the masthead.


