# type: file section

Many programs and utilities store their settings in &amp;#39;ini&amp;#39; files. This object is designed to access these settings. An &amp;#39;ini&amp;#39; file is composed of zero or more named sections, each with zero or more keys. Each key is identified by name and has a string value.

# key &lt;string&gt; of &lt;file section&gt; : string

Returns a string containing the value for the name provided. A case-insensitive search is performed through the section of the file.
