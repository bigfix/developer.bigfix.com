---
permalink: reference/download-storage-folder.html
name: download storage folder
parent: folder
---

Before an Action executes, the download storage folder points to a temporary directory that holds the downloads for the Action.  During execution of the Action, those downloads are moved to the standard BigFix __Download folder and the inspector then points there. These inspectors return information about the currently specified download storage folder, and can be used with relevance substitution in download and prefetch Action commands.