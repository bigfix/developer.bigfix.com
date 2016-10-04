---
title: The QnA tool
---

It is a terminal-like environment for non-Windows platforms and allows testing of relevance and action script expressions from a terminal session. 

Click [here](http://support.bigfix.com/bes/install/besclients-nonwindows.html) to download QnA for BigFix UNIX, Linux, and Mac clients.

You can find the QnA client for Mac OS in Utilities DMG.

The QnA client for Linux and other platforms is available with the BESClient executable in the installation package.

**QnA View**

This view is very similar to the original QNA application. Questions are prefaced by 'Q:' or 'X-Relevant-When:', and are terminated by a line break. When evaluating, the relevance debugger will evaluate every question, and it will delete or replace every line that is prefaced by 'A:', 'E:', 'T:', or 'I:'.

If a block of text is highlighted in one of the questions (and the highlighted block is entirely contained in the question), the relevance debugger will evaluate only the selected text. This can be useful for evaluating parts of a relevance clause without needing to copy and paste.

The command 'Edit > Remove Answers' will remove all lines prefaced by 'A:', 'E:', 'T:', or 'I:', and will preserve every other line of text.

The relevance debugger will show return types and evaluation time by default. These options are controlled in the edit menu, or with Ctrl+I and Ctrl+T, respectively.

Standalone QnA tool

**For Linux:**

The QnA client for Linux and other platforms is available with the BESClient executable in the installation package. To run the QnA utility on Linux systems, run the executable found in /opt/BESClient/bin/qna.

**For Mac OS X:**

Starting from BigFix 9.2.4, there is no separate QnA utility for Mac OS X systems, but it is embedded in the agent. 

To run it, perform the following steps:

    Launch a terminal.
    Go to the following path: /Library/BESAgent/BESAgent.app/Contents/MacOS/
    At the prompt, type: sudo ./QnA

When you run QnA with the sudo command, you get the full inspector functionality.

If you have a BigFix version earlier than 9.2.4, the QnA utility is contained in the dmg file downloaded from the support site; the name is QnA.app.

---

Use of the QNA program is straightforward. Simply type ‘Q:’ followed by a relevance clause, and
click on the ‘Q/A’ button for evaluation. The QNA program can evaluate many queries at once,
and will ignore all text not preceded by ‘Q:’.

Although most relevance clauses take only a fraction of a second to evaluate, there are some larger
ones that may take a significant amount of time to evaluate. When creating these clauses, it’s
important to use syntax that will minimize the amount of time needed to evaluate the clause.