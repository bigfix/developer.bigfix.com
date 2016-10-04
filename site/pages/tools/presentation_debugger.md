---
title: The Presentation Debugger
---

The Presentation Debugger tool allows you to create and debug Session Relevance code.
You can access the Presentation Debugger tool from the optional Debug menu in the BigFix Console. 
Run these steps on the BigFix Console to display the Debug menu and open the Presentation Debugger:
1. While the IBM BigFix Console is running, press Ctrl-Shift-Alt-D to bring up the Debug window.
2. Click the check box next to Show Debug Menu, at the top of the window. This installs a new menu in the Console called Debug that contains several handy debugging tools.
3. From the Debug menu, click on Presentation Debugger to open the Presentation Debugger window.

The Presentation Debugger dialog box contains a text box at the top, where you can type in your Relevance expressions or copy and paste the expressions from any examples to see the result. 

![Presentation Debugger](/static/img/presentation_debugger.jpg)

You can also load a file with the **File -> Open File** button. 
You can evaluate the expression as a string, HTML, or a Presentation. 
Click **Evaluate** to see the results in the lower pane of the dialog.

---

## Best Practices
Although the Presentation Debugger works well for a few lines, it is inefficient for significant development projects.
Every time you make a change using the Presentation Debugger, you must re-import it, creating a new copy of the analysis. 
So, during extensive debugging, you might have multiple copies of the same analysis making it difficult to keep track of the 
latest version and possibly loading the clients with superfluous analysis evaluation. 

You might want to follow this guideline to prevent this inconvenience when developing and debugging your session implementations:

* Develop iteratively, a short section at a time. Use the Presentation Debugger for each short section, rather than the whole presentation, and combine the sections after debugging.
* Put the content in a Fixlet site and subscribe to it. In this way the replacement with the new content occurs automatically.
* Use the Web Reports **Edit Custom Report** feature, which allows you to make quick presentation edits and immediately view them in Web Reports.
* Make a Document Wizard XML file on your local drive, and then use the ** Debug > Load Wizard** menu option to add it to the menus or navigation bar. The XML file will be reloaded each time you close and reopen the document.



