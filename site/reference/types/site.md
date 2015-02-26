# site

A &lt;site&gt; object is provided to access properties of Fixlet sites.

# client folder of <site>

The folder containing the site content on the client machine. Site content is gathered into this location.

# evaluated of <site>

No documentation exists.

# fixlet of <site>

Iterates through the Fixlet messages of the specified site.

# folder of <site>

No documentation exists.

# gather schedule authority of <site>

Returns a string corresponding to the authority of the site schedule, for example: Publisher, Custom, Manual or Disabled.

# gather schedule time interval of <site>

Returns the time interval between automatic gathering of site content.

# group <integer> of <site>

Returns an object corresponding to the numbered group of the specified site.

# last gather time of <site>

Returns the time of last successful gathering from the site.

# masthead of <site>

Each site has a masthead, and the masthead is saved into the site data folder upon successful creation. This property returns a file object that corresponds to the copy in the site data folder.

# name of <site>

The name of the site.

# profile of <site>

No documentation exists.

# relevant fixlet of <site>

Iterates through the Relevant Fixlet messages for the specified site.

# relevant offer action of <site>

Returns the list of relevant actions that are offers for the specified site.  This inspector could be useful in a client UI dashboard listing the current set of relevant offers.

# setting <string> of <site>

Returns the setting whose name matches the string provided from the Fixlet site settings.

# setting of <site>

Returns one or more settings from the site settings.

# site tag of <site>

Returns the last component of the specified site&#39;s url, eg. &#39;actionsite&#39;, &#39;enteprisesecurity&#39;, etcetera.

# site version list of <site>

Returns the last gathered site version list (manyversion) of the specified site.

# subscribe time of <site>

Returns the time that the current machine began subscribing to the site.

# type of <site>

Returns one of the following 4 literal strings:Master Action SiteOperator SiteCustom SiteFixlet Site.

# url of <site>

Returns the Locator found in the masthead. A site locator is used to synchronize with the site. It normally contains the URL of a remote file system folder, or the URL of a cgi-bin program that provides a remote directory listing of the site.

# version of <site>

Returns the version number of the site content.
