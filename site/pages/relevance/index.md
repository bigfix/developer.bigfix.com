---
title: The Relevance Language
---

{% section %}
The scope of the Relevance Language is to retrieve and manipulate information. 
<p>There are two types of relevance language:

<dl>
  <dt>The [Client Relevance Language](/relevance/documentation/guide/client)</dt>
  <dd>Whose scope is to interrogate locally the client system to retrieve information. This information can be used to get the value of a specific property for running analysis and to manage variables substitution in action scripts, or combined and correlated with other information in a Boolean expression to determine applicability relevance, success criteria, and to generate automatic computer groups.
<!---  Use this language to:
  <ul>
  <li>Get the value of a specific property for running analysis or generating automatic computer groups.</li>
  <li>Manage variable substitution in action scripts when running Fixlets or tasks.</li>
  <li>Determine applicability relevance and success criteria.</li>
  </ul> --->
  </dd>
  
  <dt>The [Session Relevance Language](/relevance/guide/session)</dt>
  <dd>Whose scope is to retrieve information from the BigFix database. This information can be displayed in dashboards, web reports or in customized user interfaces, or used to implement integration with external applications.
<!---  Use this language to:
  <ul>
  <li>Get values to display in custom dashboards or web reports.</li> 
  <li>Implement integrations with external applications.</li>
  </ul> --->
  </dd>
</dl>

Both types of relevance language share the same basic syntax and constructs, named **[Core Inspectors](/relevance/documentation/guide/basics**, when building the expressions.</p>
{% endsection %}
**Note:** If you are new to this language, first watch the introductory video [Exploring the Relevance Language](https://www.youtube.com/watch?v=vRoZhvShPeY) and run the [Tutorial](/relevance/tutorial/) to learn the basics.
<!---It is based on **Inspectors** which are sets of keys, properties, and creation methods used to map local resources into objects manageable by BigFix. --->



<!--- Navigate the Relevance subtree on the right to access: 
<dl>
  <dt>**[Tutorial](/relevance/tutorial/)**</dt>
  <dd>A quick tutorial explaining how to build expressions using the most common inspectors.</dd>
  
  <dt>**[Guide](/relevance/guide/)**</dt>
  <dd>Contains the User's Guide and the reference material for all the available inspectors and constructs. It includes the list of error messages and their explanations as well.</dd>
  
  <dt>**[Inspectors search](/relevance/search/)**</dt>
  <dd>Where you can search for information about specific inspectors and properties (known as Inspectors Reference Library).</dd>

  <dt>**[Online evaluator](/relevance/evaluate/)**</dt>
  <dd>Where you can test your relevance expression in a Linux CentOS virtual sandbox.</dd>
  
  <dt>**[Additional Resources](/relevance/usefulresources/)**</dt>
  <dd>Contains the links to tools and videos that are useful to grow your experience.</dd>
  
</dl> --->
