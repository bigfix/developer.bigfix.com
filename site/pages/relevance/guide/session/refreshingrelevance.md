---
title: Refreshing Relevance
---

In general, users of the Console expect the documents to be updated as new information comes in from the database. To make `<?relevance?>` instructions automatically update, you need to specify another pair of processing instructions to enclose the desired section of the document:

```
<?BeginRefreshRelevance?>
...
...
..
<?EndRefreshRelevance?>
```

These tags will cause every `<?relevance?>` tag contained between them to be re-evaluated every time something in the Database changes.

**Note:** WebReports does not support refreshing relevance.

The actual implementation of this update is important because it may affect the way you need to code your HTML. The `<?BeginRefreshRelevance?>` tag is replaced by a `<span>` tag, and the `<?EndRefreshRelevance?>` tag is replaced by a `</span>` tag.

To correctly identify which `<span>` needs to be updated the console assigns an "id" attribute to the `<span>` tag that it generates to replace the `<?BeginRefreshRelevance?>` tag. By default, that id is `"__DRRSN"` (an acronym for Default Refresh Relevance Section Name). You can specify a different id in the refresh tags like this:


```
<?BeginRefreshRelevance id="MyRefreshSpan"?>
...
..
<?EndRefreshRelevance id="MyRefreshSpan"?>
```

Note that the ids must match up. You can nest RefreshRelevance tags arbitrarily because they will be matched up using their ids. You cannot specify more than one RefreshRelevance section without using an id attribute.

You can specify what types of changes will trigger a refresh, and how often by adding attributes to the BeginRefreshRelevance tag, for example:

```
<?BeginRefreshRelevance id="OpenActions" ActionResults="00:01:00" Actions="00:00:00" ?>
<?relevance (link of it & " (" & (number of results of it as string) & ")" & br) of bes actions whose (state of it is "Open") ?>
<?EndRefreshRelevance id="OpenActions" ?>
```

The first line has an attribute called ActionResults, which determines the refresh rate. Here it is set to 00:01:00 to refresh no more than once per minute (using the standard Tivoli Endpoint Manager TimeInterval string format). When an action result changes, the Console will only refresh the section if at least one minute has passed since the last action result change was detected.

Other refresh attributes include:

<ul>
<li>**Computers:** Refresh whenever a computer is added or removed (ComputerDataStore).</li>
<li>**ReportTimes:** Refresh whenever a computer's last report time changes.</li>
<li>**ExternalContent:** Refresh whenever external Fixlet site content changes (FixletStore).</li>
<li>**CustomContent:** Refresh whenever custom content changes, not including actions (ActionSiteStore).</li>
<li>**Actions:** Refresh whenever actions are taken, stopped, restarted, etc. (ActionStore).</li>
<li>**ActionResults:** Refresh whenever a client reports on the status of an action (ActionResultStore).</li>
<li>**FixletResults:** Refresh whenever a client reports on the relevance of a fixlet (FixletResultStore).</li>
<li>**PropertyResults:** Refresh whenever a client reports a new value for a retrieved property (RPResultStore).</li>
<li>**RefreshCycle:** Force a refresh at the end of the refresh cycle, regardless of whether anything has changed or not.</li>
<li>**ManualRefresh:** Define blocks that can be refreshed manually by using the ManualRefresh attribute in combination with the predefined ManualRefresh script function</li>
</ul>

This is an example of **ManualRefresh**: 

```
<?BeginRefreshRelevance ManualRefresh="00:00:00"?>
<?relevance now ?>
<?EndRefreshRelevance?>
<?BeginRefreshRelevance id="Foo" ManualRefresh="00:00:00"?>
<?relevance now ?>
<?EndRefreshRelevance id="Foo"?>
```

**Note:** You must pass the id of `“Clock”` to the ManualRefresh function, or you will refresh the wrong section.


