---
title: Running Requests from the IEM CLI
---
This is the basic syntax for constructing requests using the IEM CLI:

```
iem <METHOD> <RESOURCE> [-q] [--param <value>]
```

where:
<dl>
   <dt>** *METHOD* **</dt>
   <dd>Is one of the HTTP methods supported by that specific REST API resource. Depending on the method, the form of the request can be any of the following:
   <p>
   
```
iem <GET|DELETE> <RESOURCE> [-q] [--outFile FILE] [--param value]
```  

```  
iem <POST|PUT> [inputFile] <RESOURCE> [-q] [--outFile FILE] [--param value]
```   

```   
iem admin  login [-q] [--server=SERVER] [--user=USER] [--password=PASS] [--masthead=PATH_TO_TRUSTED_MASTHEAD]   
```

```   
iem login [-q] [--server=SERVER] [--windowsAuthentication] [--masthead=PATH_TO_TRUSTED_MASTHEAD]   
```

</p>
       where *inputFile* and the file referenced by *--outFile* are XML files containing resources descriptions as described in the [schema files](../schema_files.html). POST and PUT requests require a body in their HTTP Requests. You can specify the body either as an input file on the command line, such as:
<p>
```   
iem POST inputfile.xml operator/bigfix   
```
</p>
       or, you can enter it manually when prompted, for example:
<p>
```   
iem POST query
```
</p><p>
```
Input: relevance=now   
```
</p>
       Because the IEM CLI does not do any pre-parsing or sanity checking on the requests issued, you must ensure that the input uses the format specified in the RESTAPI resource description.
   </dd>
   <dt>** *RESOURCE* **</dt>
   <dd>Is one of the [REST API Resources](../api/).</dd>
   <dt>** -q **</dt>
   <dd>Means *quiet mode*. Set it to disable the input prompts.
   <dt>** --param **</dt>
   <dd>Is used to specify optional parameters that might be requested by the specific *RESOURCE* and *METHOD*. For example,
    if you want to use the RESTAPI resource **/api/query**, which requires the parameter **relevance=<relevance_expression>**, 
	 you can write:</dd>
</dl>

```
iem GET query --relevance "names of bes computers"
```
