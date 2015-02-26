# service pack

No documentation exists.

# abstract of &lt;service pack&gt;

Returns a string in the format &quot;AIX base-tl-sp (Concluding) Service Pack&quot;, with &#39;Concluding&#39; onyl for a CSP.

# extrema of &lt;service pack&gt;

Returns a tuple with the oldest and newest service packs.

# fileset version requirement &lt;string&gt; of &lt;service pack&gt;

Returns the fileset version requirements for the service pack if a fileset with an LPP name matching the string is a requirement of the service pack.

# fileset version requirement of &lt;service pack&gt;

Returns all of the fileset version requirements for the service pack.

# installed satisfied fileset version requirement of &lt;service pack&gt;

Returns all the fileset version requirements for the service pack that are installed and meet the version requirement.

# installed unsatisfied fileset version requirement of &lt;service pack&gt;

Returns all the fileset version requirements for the service pack that are installed but do not meet the version requirement.

# maximum of &lt;service pack&gt;

Returns the latest service pack.

# minimum of &lt;service pack&gt;

Returns the earliest service pack.

# name of &lt;service pack&gt;

Returns a string that uniquely identifies a service pack in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

# technology level of &lt;service pack&gt;

Returns the technology associated of the service pack.

# uninstalled fileset version requirement of &lt;service pack&gt;

Returns all the fileset version requirements for the service pack that are not installed.

# unique value of &lt;service pack&gt;

Returns a list of all unique service packs along with their respective counts.

# &lt;service pack&gt; as string

Returns a string that uniquely identifies a service pack in the format &quot;base-tl-sp-date&quot;. For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be &quot;5300-06-03-0732&quot;. Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.
