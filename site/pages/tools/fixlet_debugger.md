---
title: The Fixlet Debugger
---

It is a graphical-based client relevance and action script languages tester and debugger and it is available only on the Windows platform. 
It is installed automatically with the BigFix console. 
A shortcut is automatically added in the Windows start menu.
You can still download a stand-alone version available on [here](http://support.bigfix.com/bes/release/ ).
**Note:** When testing Fixlets, ensure you are using the same version of the Fixlet Debugger tool as the client that is installed on the machine you are running it on.

Task to Install/Update: Fixlet Debugger 8.2.1409.0 - Windows available on bigfix.me at https://bigfix.me/fixlet/details/3835

Video [IBM BigFix, Content Development Series: The Fixlet Debugger](https://www.youtube.com/watch?v=sujEc4HqXew)

you fine-tune the relevance statements for the Fixlet, you can copy the statements and paste them into the Fixlet that you are editing within the console.

If the expression evaluates successfully, an answer to your query is displayed as an A: followed by the result of the expression. If there is an error in the expression, or the result does not exist on the current system, the result is an E: followed by the appropriate error message. All other lines are passed through unchanged. You can also obtain the number of microseconds it takes to calculate each relevance expression (T:). Each time that you press the Evaluate button, all existing lines that begin with A:, E:, or T: are removed before processing the next query.

the QnA tab:
Evaluate multiple statements
Retrieve limited statement error information.
Begin queries with Q: or q:

the single clause tab:
Evaluate a single statement
  Obtain detailed error information
  Obtain error information that includes properties
Enter the query in the Relevancefield
Do not enter Q: or q: