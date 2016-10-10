---
title: WEB Reports API content structure
---

The following process converts a dashboard-style .ojo file into a custom report:
1. Open the .ojo file and rename it to .beswrpt.
2. Delete everything outside of the ```![CDATA]``` tags. This typically consists of the
first line and last few lines of the file.
3. Resolve any link that would not be available in Web Reports, such as style
sheet references or links to pictures.
4. Import the .beswrpt file into *BES Custom Reports* and analyze it for correctness.



