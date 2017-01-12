# type: fixlet_header

Fixlet headers are name:value pairs that can provide important information about the fixlets at any site. These inspectors only work in the context of property evaluation, not Fixlet evaluation.

# name of &lt;fixlet_header&gt; : string

Headers are name:value pairs, separated by a colon. This inspector returns the name on the left hand side of the pair.

# normalized date of &lt;fixlet_header&gt; : date

This inspector returns the date in the format that is displayed on the BigFix Console. This inspector applies only to Fixlets whose headers contain a date.

{% qna %}
Q: ( normalized date of header "X-Fixlet-source-release-date" of it) of fixlets of sites whose (name of  it = ("bug68508 custom site"))
A: Thu, 06 Oct 2016 
T: 5850
{% endqna %}

# value of &lt;fixlet_header&gt; : string

Headers are name:value pairs, separated by a colon. This inspector returns the value on the right hand side of the pair.Example: number of relevant fixlets whose (value of header "x-fixlet-source-severity" of it as lowercase = "critical") of site "enterprise security". - Returns the number of critical fixlets in the Enterprise Security site.
