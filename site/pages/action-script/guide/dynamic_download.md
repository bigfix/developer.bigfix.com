---
title: Dynamic Download
---

Dynamic downloads add the ability to use relevance clauses to specify downloads. 
These new commands must be embedded in a special segment of action code called a [prefetch block](./prefetch_block.html).
The prefetch block structure ensures that the file is successfully downloaded before the action script runs.

**Note:** Only one prefetch block is allowed per action.


Following you find some examples of using the **prefetch block** to run dynamic downloads.

---

In this example, a file named `download.spec`, containing a named variable in its 
first line, is created in the AV Fixlet site: 

```
name=update.exe sha1=123 sha256=678 size=456 url=http://site.com/download/patch.exe
```

You can access the patch referenced in the download.spec file by using the relevance 
substitution in the prefetch block of the action script:

```actionscript
begin prefetch block
   // Creates a variable named downloadFile that points to a file in the AV site.
   parameter "downloadFile"="{pathname of file "download.spec" of client folder of site "AV"}"
		
   // Adds this file to the prefetch queue for subsequent downloading.
   add prefetch item {line 1 of file (parameter "downloadFile")}
end prefetch block
```

In this way, a Fixlet message in the AV site could offer to keep something
automatically updated and the download.spec file would be refreshed whenever a
new version becomes available.

---

Another popular technique is to use a data file, or *manifest*, containing a list of
multiple downloads, each with its own URL, SHA hash algorithm, and size. This is useful 
when the files to download change often, as it would be for updated spy ware or
anti-virus definitions. This is an example of manifest file:

```actionscript
name=patch1.exe sha1=123 sha256=347 size=456 url=http://site.com/download/patch1.exe
name=patch2.exe sha1=234 sha256=358 size=567 url=http://site.com/download/patch2.exe
name=patch3.exe sha1=345 sha256=368 size=678 url=http://site.com/download/patch3.exe
```

You can download these patches with a prefetch block that pulls these files from the manifest, 
for example:

```actionscript
begin prefetch block
   parameter "manifest"="{pathname of file "manifest.spec" of client folder of site "AV"}"
   add prefetch item {concatenation " ; " of lines of file (parameter "manifest")}
end prefetch block
```

---

You can also use the **execute prefetch plug-in** command to use small executable to process 
files into a fresh manifest, for example:

```actionscript
begin prefetch block
   // Adds the plugin to the prefetch queue 
   add prefetch item name=myPlugIn.exe sha1=123 size=456 url=http://mysite/plugin.exe sha2=347
      
   // Collects the plug-in before prefetch processing continues
   collect prefetch items
   parameter "ini"="{file "prepass.ini" of site (value of setting "CustomSite") of client}"
		 
   // Runs the plug-in with its arguments including the path for the data 
   // file and the manifest to be produced from it.
   execute prefetch plug-in "{download path "myPlugIn.exe"}" /downloads "{parameter "ini"}" "{download path "manifest"}"
		 
   // Queues up the downloads specified in the freshly created manifest	 
   add prefetch item {concatenation " ; " of lines of download file "manifest"}
end prefetch block
```

A technique like this might also be used to decrypt a secure file into 
a plain-text manifest.

---

Dynamic downloads must specify files with the confirmation of a size or SHA hash
algorithm. The URL, size, and SHA hash algorithm can come from a source outside
of the action script. For dynamic downloading BigFix uses a white-list of URL to 
ensure that only authorized URL can download files. This is the path
to the white list: 

```
<BES Server Install Path>\Mirror Server\Config\DownloadWhitelist.txt. 
```

This file contains a newline-separated list of regular
expressions using a Perl regex format, such as the following:

```
http://.*\.sitename\.com/.*
http://software\.sitename\.com/.*
http://download\.sitename\.com/patches/JustThisOneFile\.qfx
```

The first line is the least restrictive, allowing any file at the *sitename*
domain to be downloaded. The second line requires a specific domain host
and the third is the most restrictive, limiting the URL to a single file
named "JustThisOneFile.qfx". 

An empty or non-existent white-list causes all dynamic downloads to fail.
A white-list entry of ".*" (dot star) allows any URL to be downloaded.

---

Prefetch blocks allow conditional statements:

```actionscript
begin prefetch block
   if {name of operating system = "Windows 2000"}
      add prefetch item name=up.exe sha1=123 size=456 url=http://site.com/patch2k.exe sha2=567
   else
      add prefetch item name=up.exe sha1=123 size=456 url=http://site.com/patch.exe sha2=567
   endif
end prefetch block
wait "{download path "up.exe"}"
```

This action script branches on the existence of Win2K, but the downloads in this 
example are described statically (as literal text). Although the clients will only 
download the particular items they need, all the static files are downloaded to servers 
and relays as soon as they are requested. 


Dynamic downloads can improve on this situation because only those files actually 
needed by clients are fetched to the server and relay in the first place. 
Here's an example using dynamic downloading:

```actionscript
begin prefetch block
   if {name of operating system = "Windows 2000"}
      add prefetch item {"name=up.exe sha1=123 size=456 url=http://site.com/patch2k.exe"} sha2=567
   else
      add prefetch item {"name=up.exe sha1=123 size=456 url=http://site.com/patch.exe"} sha2=567
   endif
end prefetch block
wait "{download path "up.exe"}"
```

By using relevance substitution in the prefetch block, with a properly configured white list 
file on the server, this code only fetches the necessary file, potentially improving bandwidth 
requirements and efficiency.

---

You can also branch execution based on the contents of a file, allowing you to
automate updates. This can be especially useful for dealing with changing version
numbers. For instance, you could create a file named 'manifest.txt' containing two
named variables such as:

```actionscript
version=1234
download=name=update.exe sha1=123 size=456
url=http://site.com/download/patch.exe sha2=567
``` 

Note that the download variable contains the name, sha1, sha2, size and URL
of the patch file.

You can then use relevance substitution to extract these variables with
an expression such as:

```actionscript
parameter "ver"="{key "version" of file "{download path "manifest.txt"}"}"
parameter "filename"={key "download" of file "{download path "manifest.txt"}"}
```

By comparing the extracted version against some stored values, you can determine
if and when you need to download the specified file. This technique can be
expanded to include multiple versions and can even be used to distinguish between
patches and full replacement updates.

---

No matter which technique is used, once the files have been downloaded, they can
be examined with various Inspectors. Before the action runs, these files are collected
in a prefetch folder. While the action is running, they reside in the __Download folder.

These Inspectors can be used to locate the files before or while the action runs:
* **download folder:** During the prefetch parsing, this Inspector returns a folder
object from the `__Global\<sitename>\<actionid>\named folder`.
* **download path "pathname":** This Inspector returns a string containing the full
pathname to the specified file, whether it exists or not. The download filename
is equivalent to `(pathname of download folder) & <pathseparator> & filename`.
* **download file "filename":** This Inspector returns a file object from the download
folder or another named folder. The download filename is equivalent to `file
'filename' of download folder`. 

---

It is up to the action script author to protect users of these actions and ensure 
that downloads and their checksums have not been compromised. An end-to-end authentication 
mechanism resistant to man-in-the-middle attacks is the best defense. When authoring 
a dynamic download action it is critical to craft the action so that it authenticates 
information before using it, typically by using a plug-in as described above. 
It is also wise to explicitly identify those steps in the action script that perform 
this authentication so that users of your action can audit the mechanism before deciding 
to trust it.
