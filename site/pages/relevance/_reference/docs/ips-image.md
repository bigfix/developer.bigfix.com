# type: ips image

This inspector is an object containing information about IPS packages and configuration. It contains information about authority, version catalog, properties, facets, variants, settings, and packages information. 

# authority &lt;string&gt; of &lt;ips image&gt; : ips authority info

Returns a named authority from ips image.

# authority of &lt;ips image&gt; : ips authority info

Returns all the authorities from ips image.

{% qna %}
Q: authorities of ips images
A: BigFix
{% endqna %}

# configuration version of &lt;ips image&gt; : string

Returns the configuration version from ips image.

# earliest installed package &lt;string&gt; of &lt;ips image&gt; : ips package

Returns the earliest named installed package from ips image.

# earliest installed package of &lt;ips image&gt; : ips package

Returns all the earliest installed packages from ips image.

# earliest package &lt;string&gt; of &lt;ips image&gt; : ips package

Returns the earliest named package from ips image.

# earliest package of &lt;ips image&gt; : ips package

Returns all the earliest packages from ips image.

# facet of &lt;ips image&gt; : ips setting pieces

Returns the facet setting from ips image.

# image version of &lt;ips image&gt; : string

Returns the image version from ips image.

# installed package &lt;string&gt; of &lt;ips image&gt; : ips package

Returns the named installed package from ips image.

# installed package of &lt;ips image&gt; : ips package

Returns all the installed packages from ips image.

{% qna %}
Q: installed packages of ips image
A: BESagent
A: compress/bzip2
A: compress/gzip
{% endqna %}

# latest installed package &lt;string&gt; of &lt;ips image&gt; : ips package

Return the latest named installed package from ips image.

# latest installed package of &lt;ips image&gt; : ips package

Return all the latest installed packages from ips image.

# latest package &lt;string&gt; of &lt;ips image&gt; : ips package

Return the latest named package from ips image.

# latest package of &lt;ips image&gt; : ips package

Return all the latest packages from ips image.

# ordered catalog of &lt;ips image&gt; : string

Returns the ordered catalog from ips image.

# package &lt;string&gt; of &lt;ips image&gt; : ips package

Returns the named package from ips image.

# package of &lt;ips image&gt; : ips package

Returns all the packages from ips image.

{% qna %}
Q: packages of ips image
A: BESagent
A: BRCMbnx
A: BRCMbnxe
{% endqna %}

# property of &lt;ips image&gt; : ips setting pieces

Returns the property from ips image.

{% qna %}
Q: properties of ips images
A: [property].send-uuid=True
A: [property].mirror-discovery=False
A: [property].use-system-repo=True
A: [property].publisher-search-order=['BigFix']
A: [property].flush-content-cache-on-success=True
{% endqna %}

# setting of &lt;ips image&gt; : ips setting pieces

Returns the setting from ips image.

{% qna %}
Q: settings of package "BESagent" of ips image
A: pkg.summary=BigFix Agent
A: pkg.description=BigFix Agent
A: info.classification=org.opensolaris.category.2008:System/Security
A: org.opensolaris.smf.fmri=svc:/BESClient
A: org.opensolaris.smf.fmri=svc:/BESClient:default
{% endqna %}

# variant of &lt;ips image&gt; : ips setting pieces

Returns the variant from ips image.

{% qna %}
Q: variant of package "BESagent" of ips image
A: variant.arch=sparc
{% endqna %}
