---
title: download
---

This command downloads a file from a URL. After downloading, the file is saved
in a folder named `__Download` relative to the local folder of the site that
issued the download command.

If the download fails, the action script terminates.

The name of the file is derived from the part of the URL after the last slash.
For instance, consider the command:

```actionscript
download ftp://ftp.microsoft.com/deskapps/readme.txt
```

The example above downloads the `readme.txt` file from the Microsoft site and
automatically saves it in the local `__Download` folder as `readme.txt`.

The filename is derived from the URL. Everything after the final `/` or `\`
character is considered to be the filename. This may occasionally generate a
problematic filename, for instance:

    http://skdkdk.ddddd.com/cgi-bin/xyz?jjj=yyy

results in a file named `xyz?jjj=yyy`, which is not a valid filename. You can
usually work around this inconvenience by adding a dummy argument to the end of
the URL:

    http://skdkdk.ddddd.com/cgi-bin/xyz?jjj=yyy?file=/ddd.txt

which will result in a file named `ddd.txt` being saved to the `__Download`
directory. The [download as](./download-as.html) and [prefetch](./prefetch.html)
commands can also be used to address this situation.

## Syntax

    download [option] <url>

Where `[options]` can be one of the following keywords:

* `open` calls the [ShellExecute](https://msdn.microsoft.com/en-us/library/windows/desktop/bb762153%28v=vs.85%29.aspx) function, passing the resulting filename once the download completes.

* `now` tells the BigFix client to start the download at that point in the execution of the action, as
opposed to pre-fetching it before the action begins. The client will attempt to collect the
download directly from the specified URL instead of going through the relay system.

## Examples

Download `bfxxxx.exe` from the BigFix site, and save the downloaded file in the
default site `__Download` folder.

```actionscript
download http://download.bigfix.com/update/bfxxxx.exe
```

Download and save `bfxxxx.exe` to the default site `__Download` folder and
executes the program once the download completes.

```actionscript
download open http://download.bigfix.com/update/bfxxxx.exe
```

Downloads `bfxxxx.exe` from the BigFix site as soon as the command is executed.

```actionscript
download now http://download.bigfix.com/update/bfxxxx.exe
```

This set of actions automates the download process, reducing the application of
an executable patch to a single click. Note that the downloaded program is run
from the `__Download` directory of the site, where the download command places
it. The site directory is the working directory for all commands and the
`__Download` directory is located there.

```actionscript
download "http://download.microsoft.com/download/prog.exe"
run "__Download\prog.exe"
```

## Notes

Relevance substitution is **not** performed on the download action command
lines. This is because these actions are scanned by other components that
deliver the downloads, and these other components run on different machines
which do not share those client's evaluation context. This restriction, however,
allows BigFix to prefetch downloads through a relay hierarchy to the clients.
