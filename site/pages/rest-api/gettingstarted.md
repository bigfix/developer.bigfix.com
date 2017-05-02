---
title: BigFix REST API Tutorial
---
Follow the instructions provided on this page to get started with using the BigFix REST API.
In the scenario that you are going to run you'll see how to query resources, run session relevance queries, create an action, and track the action progress. 

The scenario requires that you have:
- Access to the BigFix Server's REST API.
- Administration rights for at least one computer.
- Firefox browser with the client [poster plugin](https://addons.mozilla.org/en-US/firefox/addon/poster/ ).

## Log in and request help
 
Open your browser and access the BigFix server REST API's at the URL: 

```
https://<bigfix_server>:52311/api/help
```

where `<bigfix_server>` is the BigFix server hostname or IP address.

When prompted, enter your credentials and click Enter.
The list of available REST API resources is displayed.
Drill down for more details about the action resource by entering the URL:

```
https://<bigfix_server>:52311/api/help/action
```

The help shows you the ways you can interact with that resource, in terms of methods that you can invoke and the syntax to use:

```
GET:
    /api/action/{id}
    /api/action/{id}/status
POST:
    /api/action/{id}/stop
DELETE:
    /api/action/{id}
```

On this site:
- Navigate REST API -> Resources -> Action or click this link to see additional information about how you can manage actions using the REST API.

- Navigate REST API -> Examples -> Create Action to see an example of creating and triggering an action.

## Query a resource
 
One of the simplest resouces to query is a computer. 
From your browser, access this URL to see the list of computers that you administer:

```
https://<bigfix_server>:52311/api/computers
```

This list shows, for each computer, the last time that the computer reported information and its ID, for example:

```
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Computer Resource="api/computer/2785212">
        <LastReportTime>Fri, 07 Nov 2015 15:18:14 +0000</LastReportTime>
        <ID>2785212</ID>
    </Computer>
...
</BESAPI>
```

The XML structure used to list the administered computers is defined in the BESAPI.xsd file, as you can see in the [/api/computers](https://developer.bigfix.com/rest-api/api/computer.html ) reference.

## Query a resource using GET 

You can get the same result by invoking a query in Session Relevance Language throught the REST API. 
This is the form to use:

```
https://<bigfix_server>:52311/api/query?relevance={relevance statement}
```

If you do not have a REST API Client available in your environment, install a browser plugin such as [Poster for Firefox](https://addons.mozilla.org/en-US/firefox/addon/poster/ ) or [RestClient for Firefox](https://addons.mozilla.org/it/firefox/addon/restclient/ ).
Assuming that you installed the Poster plugin, enter the following URL in Poster and click **GET**.

```
https://<bigfix_server>:52311/api/query?relevance=(ids of it, last report time of it) of bes computers
```

The result that you get is similar to the following:

```
 <?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Query Resource="(ids of it, last report time of it) of bes computers">
        <Result>
            <Tuple>
                <Answer type="integer">2785212</Answer>
                <Answer type="time">Fri, 07 Nov 2014 15:18:14 +0000</Answer>
            </Tuple>
...

       <Evaluation>
            <Time>0.114ms</Time>
            <Plurality>Plural</Plurality>
        </Evaluation>
    </Query>
</BESAPI>
```


## Create a resource using POST 

Now you see how you can create and trigger an action using a POST method. 
This exercise uses the action definition specified in Fixlet ID 168, which is available on the BES Support site. Fixlet ID 168 adjusts the CPU usage on the BigFix client. Revert the CPU usage to your normal setting after completing this exercise.
Enter the following URL in Poster, making sure that you substitute your computer ID in the XML content, and click **POST**.

URL:
```
https://<bigfix_server>:52311/api/actions
```

Content to send:
```
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
  <SourcedFixletAction>  
    <SourceFixlet>    
      <Sitename>BES Support</Sitename>    
        <!-- CPU Usage -->  <FixletID>168</FixletID>    
        <!--Medium 5% -->  <Action>Action3</Action>  
    </SourceFixlet>  
    <Target>    
        <!-- set computer id-->    <ComputerID>{id}</ComputerID>
    </Target>
</SourcedFixletAction>
</BES>
```

In return you get the ID of the action that was created and triggered, action ID 42 in this example:

```
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Action Resource="http://{server}:52311/api/action/42" LastModified="Fri, 21 Nov 2014 16:49:04 +0000">
        <Name>BES Client Setting: CPU Usage</Name>
        <ID>42</ID>
    </Action>
</BESAPI>
```

Take note of this ID to run the next steps in this topic.


## Monitor a resource using GET 

You can now track the progress of the action.  

Enter the following URL in Poster, making sure that you substitute your action ID in the XML content, and click **GET**.

URL:
```
 https://server:52311/api/action/{id}/status
```

Content to send:
```
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <ActionResults Resource="http://{server}:52311/api/action/42/status">
        <ActionID>42</ActionID>
        <Status>Open</Status>
        <DateIssued>Fri, 21 Nov 2014 16:49:04 +0000</DateIssued>
    </ActionResults>
</BESAPI>
```

As an alternative, you can get the same result by using a Session Relevance query as follows:

```
https://{server}:52311/api/query?relevance=(id of it, state of it, time issued of it) of bes action whose (id of it = {id})
```

In return, you get the ID of the action, its state, and the time it was issued, as follows:

```
 <?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Query Resource="(id of it, state of it, time issued of it) of bes action whose (id of it = 42)">
        <Result>
            <Tuple>
                <Answer type="integer">42</Answer>
                <Answer type="string">Open</Answer>
                <Answer type="time">Fri, 21 Nov 2014 16:49:04 +0000</Answer>
            </Tuple>
        </Result>
        <Evaluation>
            <Time>0.127ms</Time>
            <Plurality>Singular</Plurality>
        </Evaluation>
    </Query>
</BESAPI>

```
