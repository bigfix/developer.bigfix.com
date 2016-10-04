---
title: The QnA for Web Reports
---

You can run the QnA tool through the Web Reports Server.  This allows you to run a QnA session that can view data on all computers.

To access the QnA for Web Reports, log into the Web Reports server and navigate to **/webreports?page=QNA**.

This is the QnA for Web Reports user interface:

![QnA for Web Reports](/static/img/web_reports_qna.jpg)

You can run simple queries such as the following:

```
Q: names of bes users

Q: number of bes computers

Q: names of bes computers
```

or more complex queries such as:

```
Q: number of bes fixlets whose (source of it = "Microsoft")

Q: names of bes computers whose (name of it as lowercase starts with "a")
```