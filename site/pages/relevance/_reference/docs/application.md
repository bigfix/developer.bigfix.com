# type: application

Application objects derive from file objects. Therefore, application objects inherit all of the properties of the `file` object. This means that you can inspect properties such as `modification time of` or `product version of` an `application` just as you would with a `file`. See the properties of a `file` object for a complete list of these. The real power and primary purpose of the `application` object is their creation. The creation methods are optimized in anticipation of the importance of this object.

<b>Note:</b> See [file](https://developer.bigfix.com/relevance/reference/file.html) for a list of the `application` properties. Folder and file names may be case sensitive. Use "as uppercase" or "as lowercase" if you do not know the actual case when making comparisons.

<b>Note:</b> On Windows, a properly installed application will register itself with the operating system. It does this by creating a registry key, usually named after the executable, in `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths`. The `regapp` inspector uses the default value of this key, which should contain the full path of the executable.

# inspectability of &lt;application&gt; : boolean

No documentation exists.

# network response time of &lt;application&gt; : time interval

Returns the network response time of a specific application, stored in a `time interval` object and expressed in the "hh.mm.ss.us" format. Such time is calculated as the average round-trip time (RTT) of the application's TCP connections in the ESTABLISHED status. The calculation excludes connections having a local or invalid address.

The following example shows how to request the network response time of a Windows application with a specified path.

{% qna %}
Q: network response time of application "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
A: 00:00:00.028464
{% endqna %}

The following example shows how to request the network response time of a Windows application named msedge.exe.

{% qna %}
Q: network response time of running application "msedge.exe"
A: 00:00:00.047871
{% endqna %}

# task name of &lt;application&gt; : string

No documentation exists.

# virtualizer of &lt;application&gt; : string

No documentation exists.

# web response time of &lt;application&gt; : time interval

Returns the web network response time of a specific application, stored in a `time interval` object and expressed in the "hh.mm.ss.us" format. Such time is calculated as the average round-trip time (RTT) of the application's TCP connections in the ESTABLISHED status with remote port 80 (HTTP) or 443 (HTTPS). The calculation excludes connections having a local or invalid address.

The following example shows how to request the web response time of a Windows application with a specified path.

{% qna %}
Q: web response time of application "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
A: 00:00:00.039470
{% endqna %}

The following example shows how to request the web response time of a Windows application named msedge.exe.

{% qna %}
Q: web response time of running application "msedge.exe"
A: 00:00:00.024930
{% endqna %}

# &lt;application&gt; as string : string

No documentation exists.
