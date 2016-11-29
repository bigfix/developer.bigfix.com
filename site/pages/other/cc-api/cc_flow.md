---
title: Logical Flow of an API call
---

This is how the API processing flows on a Client upon an API call request:

![client compliance logic](/static/img/cc_api_graphic_80_n.png)

1. On the BigFix Client, the Client API adds a *Compliance Request* into the **RequestDir**. The *Compliance Request* contains one or more *Compliance Expression Item*.
<p></p>
Each *Client Expression Item* is used to request the BES Client to evaluate the *Relevance Expression*. 
<p></p>
The *Description* and the *Comment* fields are used to add information useful for the Client API to correctly manage how the *Relevance Result* affects the BigFix Client status, for example, by issuing a quarantine state if a lack of compliance was found when running the *Relevance Expression*.
<p></p>
2. The BES Client evaluates the *Relevance Expression* and saves its result in the *Relevance Result* field in the *Compliance Response* under the **ResponseDir**.
<p></p>
3. The Client API accesses the *Compliance Response* and, based on the content of the *Relevance Result*, the *Comments* and the *Description* fields, takes the corrective actions, if necessary.
