---
title: Best Practices
---

Before personalizing your BigFix implementation, scan this list of known best practices and, when feasible, apply them:

<dl>
  <dt>**Create a small test lab**</dt>
  <dd>Create a test environment, as similar as possible to your production environment. Use it to test and tune your custom content before rolling it out to production. You can use a virtual environment.</dd>

  <dt>**When feasible copy and edit existing content**</dt>
  <dd>Before creating custom content from scratch, consider making a copy of existing content and editing it to make it suit your needs. You can also download and personalize existing custom content available on [bigfix.me](https://bigfix.me ).</dd>

  <dt>**Take one step at a time**</dt>
  <dd>Test each change that you do to ensure that it works as expected. Do not wait for the whole solution. To do this you can use proprietary tools such as the [Fixlet Debugger](/tools/fixlet_debugger.html) or the [Linux CentOS interactive sandbox](/relevance/evaluate/).</dd>

  <dt>**Define success criteria and rollback procedures**</dt>
  <dd>Fixlets have no out-of-the-box rollback procedures, unless specified in the Post Action tab. Tasks do not re-evaluate applicability relevance; they succeed if all the actions they contain succeed. Be aware of these default behaviors when you create your custom content.</dd>

  <dt>**Broaden your point of view**</dt>
  <dd>If your real environment spans different geographies, take into account different localizations and languages. The relevance language can help you to inspect local settings or to implement variables.</dd>

  <dt>**Roll out to production in subsets of targets**</dt>
  <dd>Do this to easily manage unpreventable deviations and to fix them on a subset of targets, and also avoid potential overloading on the database.</dd>
</dl>    
