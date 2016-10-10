---
title: The QnA tool
---

It is a terminal-like environment for non-Windows platforms and allows testing of relevance and action 
script expressions from a terminal session. 

![QnA UI](/static/img/qna.png)

Use of the QnA program is straightforward. Simply type **Q:** followed by a relevance clause, and
click the **Q/A** button for evaluation. The QnA program can evaluate many queries at once.
It ignores the text not preceded by **Q:**.

Although most relevance clauses take only a fraction of a second to evaluate, there are some larger
ones that may take a significant amount of time to evaluate. When creating these clauses, it’s
important to use syntax that will minimize the amount of time needed to evaluate the clause.

**On Linux systems:**

The QnA client for Linux and other platforms is available with the BESClient executable in the installation package. 
To run the QnA utility on Linux systems, run the executable found in /opt/BESClient/bin/qna.

**On Mac OS X systems:**

Starting from BigFix 9.2.4, there is no separate QnA utility for Mac OS X systems, but it is embedded 
in the agent. 

To run it, perform the following steps:

1. Launch a terminal.
2. Go to the following path: /Library/BESAgent/BESAgent.app/Contents/MacOS/
3. At the prompt, type: sudo ./QnA

When you run QnA with the sudo command, you get the full inspector functionality.

If you have a BigFix version earlier than 9.2.4, the QnA utility is contained in the DMG file downloaded from the support site and its name is **QnA.app**.

