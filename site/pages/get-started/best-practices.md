---
title: Best Practices
---

Before personalizing your BigFix implementation, scan this list of known best practices and, when feasible, apply them:

<dl>
  <dt>**Create a small test lab**</dt>
  <dd>Create a test environment, similar as much as possible to your production environment. Use it to test and tune your custom content before rolling it out to production. You can use a virtual environment.</dd>

  <dt>**When feasible copy and edit existing content**</dt>
  <dd>Before creating custom content from scratch, see if you can make a copy of an existing content and edit it to make it suit your needs. You can also download and personalize existing custom content available on bigfix.me.</dd>

  <dt>**Make one step at a time**</dt>
  <dd>Test each change that you do to ensure that it works as expected. Do not wait for the whole solution. You can use for this scope proprietary tools such as the Fixlet Debugger, and the interactive sandbox.</dd>

  <dt>**Define success criteria and rollback procedures**</dt>
  <dd>Fixlets have no out-of-the-box rollback procedures, unless specified in the Post Action tab. Tasks do not re-evaluate applicability relevance, they succeed if all actions contained succeed. Be aware of these default behaviors when you create your custom content.</dd>

  <dt>**Widen your point of view**</dt>
  <dd>If your real environment spans different countries or geographies, take into account different localizations and languages. The relevance language can help you to inspect local settings or to implement variables.</dd>

  <dt>**Roll out to production in subsets of targets**</dt>
  <dd>By doing so not prevented deviations can be easily managed and fixed in a subset of targets, and potential load on the database can be avoided.</dd>
</dl>    
