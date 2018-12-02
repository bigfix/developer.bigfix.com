---
title: The Fixlet Debugger
---

The Fixlet Debugger is a graphical-based language tool that helps you test and debug your Client Relevance and Action Script. Use it to fine-tune your Relevance expressions and Action Scripts before deploying them to your production environment.

The Fixlet Debugger is available only on Windows platforms. It must be run by a Windows user with local admin privileges.

The tool is installed automatically with the BigFix Console and, during the installation, a shortcut is automatically added in the Windows start menu.
You can also download a [stand-alone version](http://support.bigfix.com/bes/release/ ) of the Fixlet Debugger. 

**Note:** Ensure that both the Fixlet Debugger and the BigFix Client installed on the same system have the same version.

## How to run the tool

![Fixlet Debugger](/static/img/fixlet_debugger.png)

The Fixlet Debugger user interface includes four tabs:
<dl>
   <dt>The qna tab</dt>
   <dd>Where you can enter your queries, preceded by **Q: **, and evaluate them all again whenever you click the **Evaluate** button.</dd>
   <dt>The single clause tab</dt>
   <dd>Where you can enter and evaluate one query at a time. There is no need, in this case, to write **Q:**. Obtain detailed error information</dd>
   <dt>The graphical tab</dt>
   <dd>Where the result of your query is split to display the evaluation of each single inspector involved in the query.</dd>
   <dt>The action tab</dt>
   <dd>Where you can test your action script on the local system.</dd>
   </dl>

For more information about this tool, view the following [video](https://www.youtube.com/watch?v=sujEc4HqXew).

## How to run queries against remote targets

Starting from version 9.5.10 you can use the Fixlet Debugger to run relevance statements, and see their results, on one remote endpoint at a time. The BigFix Agent running on the remote endpoint must be v9.5 or later.
Follow these steps to run a relevance statement on the remote target:
1. Enter the Query Channel mode: click **Evaluate** > **Evaluate Using** > **Query Channel**.
2. In the login window opened by the Fixlet Debugger, enter the credentials to connect to a BigFix environment. Ensure that the specified user has both the **Can use WebUI** and the **Can Submit Queries** permissions set to YES to run the query on the remote target.
3. After having logged in successfully, you can select the computer ID or computer name of the target where you want to run the query.

You get a session timeout error if the timeout set to run BigFix queries elapsed before getting a response from the remote Agent. Log in again to access your working session. The default timeout is 5 minutes and, if you want, you can change it by customizing the <i>_BESDataServer_APIAuthenticationTimeoutMinutes</i> setting on the server machine.

From now on you can run queries on the selected target and see the results as if you were running the queries on your local system.

To exit the query channel mode, Click **Evaluate** > **Logout**.
