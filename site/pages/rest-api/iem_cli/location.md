---
title: Executable Files and Directories
---
The IEM CLI installed with the BigFix server installer as:
* %PROGRAM FILES%\BigFix Enterprise\BES Server\IEM CLI\iem.exe on Windows systems
* /opt/BESServer/bin/iem on Linux Red Hat Enterprise V.5.0 (or later) systems

To run the IEM CLI executable on a system different from the BigFix server, copy the IEM CLI executable and the libBEScrypto_1_0_0_4 library into the same directory on the target machine.

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

