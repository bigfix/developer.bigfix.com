---
title: Running the Presentation Debugger
---

The Presentation Debugger tool allows you to create and debug Session Relevance code.
You can access the Presentation Debugger tool from the optional Debug menu in the BigFix Console. 
Run these steps on the BigFix Console to enable the Debug menu to show up:
1. In the BigFix Console hold down **Ctrl-Alt-Shift-D** to access the Debug menu.
2. Check the box labeled **Show Debug Menu** to add the Debug menu to the Console interface.
 
As you go through this guide, you might want to type the examples into the Presentation Debugger and click the **Evaluate** button.

After you enabled the Debug Menu, select Presentation Debugger. A dialog box opens. 
The dialog box contains a text box at the top, where you can type in your Relevance expressions or simply copy and paste the expressions from any examples to see the result. 
You can also load a file with the **Open File** button. 
You can evaluate the expression as a string, HTML or a Presentation. 
Click **Evaluate** to see the results in the lower pane of the dialog.

---

## Best Practices
Although the Presentation Debugger works well for a few lines, it is inefficient for significant development projects.
In fact every time you make a change using the Presentation Debugger, you must re-import it, creating a new copy of the analysis. 
So, during extensive debugging, you may end up with multiple copies of the same analysis making it difficult to keep track of the 
latest version and loading potentially the clients with superfluous analysis evaluation. 

You might want to follow this guidelines to prevent this inconvenient when developing and debugging your session implementations:

* Develop iteratively, a short section at a time. Use the Presentation Debugger for each short section, rather than the whole presentation, and combine the sections after debugging.
* Put the content in a Fixlet site and subscribe to it. In this way the replacement with the new content will occur automatically.
* Use the Web Reports **Edit Custom Report** feature, which allows you to make quick presentation edits and immediately view them in Web Reports.
* Make a Document Wizard XML file on your local drive, and then use the ** Debug > Load Wizard** menu option to add it to the menus or navigation bar. The XML file will be reloaded each time you close and reopen the document.



