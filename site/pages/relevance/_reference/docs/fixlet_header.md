# type: fixlet_header

Fixlet headers are name:value pairs that can provide important information about the fixlets at any site. These inspectors only work in the context of property evaluation, not Fixlet evaluation.

# name of &lt;fixlet_header&gt; : string

Headers are name:value pairs, separated by a colon. This inspector returns the name on the left hand side of the pair.

# value of &lt;fixlet_header&gt; : string

Headers are name:value pairs, separated by a colon. This inspector returns the value on the right hand side of the pair.Example: number of relevant fixlets whose (value of header "x-fixlet-source-severity" of it as lowercase = "critical") of site "enterprise security". - Returns the number of critical fixlets in the Enterprise Security site.
