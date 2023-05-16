---
title: Location
---
The IEM CLI installed with the BigFix server installer as:
* %PROGRAM FILES%\BigFix Enterprise\BES Server\IEM CLI\iem.exe on Windows systems
* /opt/BESServer/bin/iem on Linux Red Hat Enterprise V.5.0 (or later) systems

To run the IEM CLI on a computer different from the BigFix Server, copy the folder that contains the IEM CLI executable to that computer.

## IEM CLI Standalone

The standalone IEM CLI is available for Windows systems and can be downloaded from the BigFix Enterprise Suite Download Center. It is found in the Utilities section and it is named RESTAPI Command-line interface (CLI).

**Note:** If the IEM CLI is installed on a computer with the BigFix Client, the IEM CLI reads the FIPS configuration from the Client masthead.
Otherwise, the IEM CLI looks for a masthead file in its own installation folder. You can manually copy the Server masthead into its folder.
If no masthead is found, the IEM CLI uses FIPS by default. 

## IEM CLI Data Directory
The IEM CLI uses a local directory, named *.iem* for local caching. This directory contains:
* A configuration file.
* A directory tree of cached server certificates.
* The BigFix CLI session credentials.

By default the *.iem* directory is created in the user profile directory:
* *%LOCALAPPDATA%\BigFix* on Windows systems
* */usr/{user}* on Linux systems.
This means that, by default, a single OS user can use only a single BigFix account.

If you want to allow a single OS user to connect using different BigFix accounts, set the **IEM_DATADIR** environment variable to save the session credentials in a different location.

If a console is installed on the local Windows machine, any server certificate that was trusted by the console is implicitly trusted by the CLI as well.

