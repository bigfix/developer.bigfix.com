# type: metabase user type

The user type is a DWORD that specifies how the property value is used. User types enable IIS to classify properties by application.

# &lt;metabase user type&gt; as integer : integer

Returns the metabase user type as an integer:2 = Server2 = File100 = WAM200 = ASP App.

# &lt;metabase user type&gt; as string : string

Returns the metabase user type as a string:&amp;quot;Server&amp;quot;&amp;quot;File&amp;quot;&amp;quot;WAM&amp;quot;&amp;quot;ASP App&amp;quot;&amp;quot;(Other)&amp;quot;.

# &lt;metabase user type&gt; = &lt;metabase user type&gt; : boolean

Compares two metabase user types for equality.
