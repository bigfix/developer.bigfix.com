# type: bios

This inspector returns strings that identify the version of the BIOS. This inspector is not available on macOS Big Sur (Apple M1 chip).

Running the inspector on Windows:

{% qna %}
Q: bios
A: 12/30/2020
{% endqna %}

Running the inspector on macOS on an Intel CPU:
{% qna %}
Q: bios
A: 426.0.0.0.0
{% endqna %}

Running the inspector on an unsupported OS and/or hardware:

{% qna %}
Q: bios
E: Singular expression refers to nonexistent object.
{% endqna %}

# date of &lt;bios&gt; : string

This Windows-only inspector returns the date string stored in the BIOS. This string is formatted as MM/DD/YY. On a non-Windows operating system, it returns `False`.

Running the inspector on Windows:

{% qna %}
Q: date of bios
A: 12/30/2020
{% endqna %}

# version of &lt;bios&gt; : string

On Windows, it returns the first string of the multi-string version stored in the BIOS. On macOS, it returns the string version stored in the BIOS. The format depends on your BIOS manufacturer.

Running the inspector on Windows:

{% qna %}
Q: version of bios
A: INTEL  - 6040000
{% endqna %}

Running the inspector on macOS on an Intel CPU:

{% qna %}
Q: version of bios
A: 426.0.0.0.0
{% endqna %}

Running the inspector on an unsupported OS and/or hardware:

{% qna %}
Q: version of bios
E: Singular expression refers to nonexistent object.
{% endqna %}

# version string of &lt;bios&gt; : string

This inspector returns the version string stored in the BIOS.

Running the inspector on Windows:

{% qna %}
Q: version string of bios
A: INTEL  - 6040000
{% endqna %}

{% qna %}
Q: version strings of bios
A: INTEL  - 6040000
A: PhoenixBIOS 4.0 Release 6.0
A: 6.00
A: None
{% endqna %}

# &lt;bios&gt; as string : string

This inspector returns the BIOS version for macOS and the BIOS date for Windows platforms. Running this inspector on other operating systems results in an error referring to a nonexistent object.

Running the inspector on Windows:

{% qna %}
Q: bios as string
A: 12/12/2018
{% endqna %}

Running the inspector on macOS on an Intel CPU:
{% qna %}
Q: bios as string
A: 426.0.0.0.0
{% endqna %}

Running the inspector on an unsupported OS and/or hardware:

{% qna %}
Q: bios as string
E: Singular expression refers to nonexistent object.
{% endqna %}

