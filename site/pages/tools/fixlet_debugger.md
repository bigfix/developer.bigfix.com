---
title: The Fixlet Debugger
---

The Fixlet Debugger is a graphical-based Client Relevance and Action Script languages tool that helps you testing and debugging your Client 
Relevance statements and Action scripts on the system where the tool runs and, starting from V9.5.10 also on other endopints in your BigFix network. 
Use it to fine-tune your Relevance Expressions and Action Scripts before deploying them to your production environment.

The Fixlet Debugger is available only on Windows platforms. It must be run by a Windows user with local admin privileges.

The tool is installed automatically with the BigFix Console and, during the installation, a shortcut is automatically added in the Windows start menu.
You can also download a [stand-alone version](http://support.bigfix.com/bes/release/ ) of the Fixlet Debugger. 

**Note:** Ensure that both the Fixlet Debugger and the BigFix Client installed on the same system have the same version.

## How to run the tool

Double click the **FixletDebugger.exe** file to open the Fixlet Debugger user interface:

![Fixlet Debugger](/static/img/fixlet_debugger.png)

The tool includes four tabs:
<dl>
   <dt>*qna*</dt>
   <dd>Where you can enter your queries, preceded by **Q:**, and evaluate them all again whenever you click the **Evaluate** button.</dd>
   <dt>*single clause*</dt>
   <dd>Where you can enter and evaluate one query at a time. There is no need, in this case, to write **Q:**. Obtain detailed error information</dd>
   <dt>*graphical*</dt>
   <dd>Where the result of your query is split to display the evaluation of each single inspector involved in the query.</dd>
   <dt>*action*</dt>
   <dd>Where you can test your action script on the local system.</dd>
   </dl>
   
If the expression evaluates successfully, an answer to your query is displayed as an **A:** followed by the result of the expression. 

If an error occurs when evaluating the expression, or if the result does not exist on the current system, the result is an **E:** 
followed by the appropriate error message. All other lines are passed through unchanged. 

You can also obtain the number of microseconds it takes to calculate each relevance expression (T:). 
Each time that you press the Evaluate button, all existing lines that begin with A:, E:, or T: are removed before processing the next query.

For more information about this tool, view the following [video](https://www.youtube.com/watch?v=sujEc4HqXew).

## How to run queries against remote targets

Starting from version 9.5.10 you can use the Fixlet Debugger to run relevance statements, and see their results, on one remote endpoint at a time. The BigFix Agent running on the remote endpoint must be v9.5 or later.
Follow this path to run a relevance statement on the remote target:
1. Enter the query channel mode.
2. In the login window opened by the Fixlet Debugger, enter the credentials to connect to the BigFix environment masthead. Ensure that the specified user has both the **Can use WebUI** and the **Can Submit Queries** permissions set to YES to run the query on the remote target.
3. After having logged in successfully, you can select the computer ID of the target where you want to run the query.
4. From now on you can run queries on the selected target and see the results as if you were running the queries on your local system.

You get a session timeout error if the timeout set to run BigFix queries elapsed before getting a response from the remote Agent. Log in again to access your working session. The default timeout is 60 seconds and, if you want, you can change it by customizing the <i>_BESClient_Query_MOMaxQueryTime</i> setting. Beware that this timeout setting affects also the queries run from the WebUI BigFix Query application and the queries triggered by the /api/clientquery REST API. 
