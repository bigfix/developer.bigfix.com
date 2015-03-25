# type: service pack

No documentation exists.

# abstract of &lt;service pack&gt; : string

Returns a string in the format "AIX base-tl-sp (Concluding) Service Pack", with &#39;Concluding&#39; onyl for a CSP.

# extrema of &lt;service pack&gt; : ( service pack, service pack )

Returns a tuple with the oldest and newest service packs.

# fileset version requirement &lt;string&gt; of &lt;service pack&gt; : fileset version requirement

Returns the fileset version requirements for the service pack if a fileset with an LPP name matching the string is a requirement of the service pack.

# fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all of the fileset version requirements for the service pack.

# installed satisfied fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all the fileset version requirements for the service pack that are installed and meet the version requirement.

# installed unsatisfied fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all the fileset version requirements for the service pack that are installed but do not meet the version requirement.

# maximum of &lt;service pack&gt; : service pack

Returns the latest service pack.

# minimum of &lt;service pack&gt; : service pack

Returns the earliest service pack.

# name of &lt;service pack&gt; : string

Returns a string that uniquely identifies a service pack in the format "base-tl-sp-date". For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be "5300-06-03-0732". Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

# technology level of &lt;service pack&gt; : technology level

Returns the technology associated of the service pack.

# uninstalled fileset version requirement of &lt;service pack&gt; : fileset version requirement

Returns all the fileset version requirements for the service pack that are not installed.

# unique value of &lt;service pack&gt; : service pack with multiplicity

Returns a list of all unique service packs along with their respective counts.

# &lt;service pack&gt; as string : string

Returns a string that uniquely identifies a service pack in the format "base-tl-sp-date". For example, AIX 5.3 at technology level 6 and service pack 3, which was released on the 32nd week of 2007, would be "5300-06-03-0732". Note: older service packs may not have a date portion, and the final service pack at a particular technology level has a SP value of &#39;CSP&#39;.

# &lt;service pack&gt; &lt; &lt;service pack&gt; : boolean

No documentation exists.

# &lt;service pack&gt; &lt;= &lt;service pack&gt; : boolean

No documentation exists.

# &lt;service pack&gt; = &lt;service pack&gt; : boolean

No documentation exists.
