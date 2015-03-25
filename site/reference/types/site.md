# type: site

A &amp;lt;site&amp;gt; object is provided to access properties of Fixlet sites.

# client folder of &lt;site&gt; : folder

The folder containing the site content on the client machine. Site content is gathered into this location.

# evaluated of &lt;site&gt; : boolean

No documentation exists.

# fixlet of &lt;site&gt; : fixlet

Iterates through the fixlets of the specified site.

# folder of &lt;site&gt; : folder

No documentation exists.

# gather schedule authority of &lt;site&gt; : string

Returns a string corresponding to the authority of the site schedule, for example: Publisher, Custom, Manual or Disabled.

# gather schedule time interval of &lt;site&gt; : time interval

Returns the time interval between automatic gathering of site content.

# group &lt;integer&gt; of &lt;site&gt; : site group

Returns an object corresponding to the numbered group of the specified site.

# last gather time of &lt;site&gt; : time

Returns the time of last successful gathering from the site.

# masthead of &lt;site&gt; : file

Each site has a masthead, and the masthead is saved into the site data folder upon successful creation. This property returns a file object that corresponds to the copy in the site data folder.

# name of &lt;site&gt; : string

The name of the site.

# profile of &lt;site&gt; : site profile

No documentation exists.

# relevant fixlet of &lt;site&gt; : fixlet

Iterates through the Relevant fixlets for the specified site.

# relevant offer action of &lt;site&gt; : action

Returns the list of relevant actions that are offers for the specified site.  This inspector could be useful in a client UI dashboard listing the current set of relevant offers.

# setting &lt;string&gt; of &lt;site&gt; : setting

Returns the setting whose name matches the string provided from the Fixlet site settings.

# setting of &lt;site&gt; : setting

Returns one or more settings from the site settings.

# site tag of &lt;site&gt; : string

Returns the last component of the specified site&amp;#39;s url, eg. &amp;#39;actionsite&amp;#39;, &amp;#39;enteprisesecurity&amp;#39;, etcetera.

# site version list of &lt;site&gt; : site version list

Returns the last gathered site version list (manyversion) of the specified site.

# subscribe time of &lt;site&gt; : time

Returns the time that the current machine began subscribing to the site.

# type of &lt;site&gt; : string

Returns one of the following 4 literal strings:Master Action SiteOperator SiteCustom SiteFixlet Site.

# url of &lt;site&gt; : string

Returns the Locator found in the masthead. A site locator is used to synchronize with the site. It normally contains the URL of a remote file system folder, or the URL of a cgi-bin program that provides a remote directory listing of the site.

# version of &lt;site&gt; : integer

Returns the version number of the site content.
