---
title: Reference
categories:
  - title: Client Commands
    section: client
    description: The [client commands](./client/) allow you to control the behavior of the BigFix client.
    commands:
      - action lock indefinite
      - action lock until
      - action log all
      - action log command
      - action unlock
      - administrator add
      - administrator delete
      - client restart
      - notify client
      - relay select
      - restart
      - set clock
      - setting
      - setting delete
      - shutdown
  - title: Download Commands
    section: download
    description: The [download commands](./download/) allow you to download files to the client machine.
    commands:
      - add nohash prefetch item
      - add prefetch item
      - begin prefetch block
      - collect prefetch items
      - download
      - download as
      - download now
      - download open
      - end prefetch block
      - execute prefetch plug-in
      - prefetch
  - title: Execution Commands
    section: execution
    description: The [execution commands](./execution/) allow you to run external commands and control their behavior.
    commands:
      - action launch preference low-priority
      - action launch preference normal-priority
      - action uses wow64 redirection
      - dos
      - override
      - run
      - rundetached
      - runhidden
      - script
      - script64
      - wait
      - waitdetached
      - waithidden
  - title: File Commands
    section: file
    description: The [file commands](./file/) allow you to copy, move, and delete files.
    commands:
      - appendfile
      - archive now
      - copy
      - createfile until
      - delete
      - extract
      - folder create
      - folder delete
      - move
      - utility
  - title: Flow Control Commands
    section: flow-control
    description: The [flow control commands](./flow-control/) allow you to use conditional logic in your action script.
    commands:
      - action may require restart
      - action parameter query
      - action requires login
      - action requires restart
      - continue if
      - exit
      - if, elseif, else, endif
      - parameter
      - pause while
  - title: Registry Commands
    section: registry
    description: The [registry commands](./registry/) allow you to edit the Windows Registry.
    commands:
      - regdelete
      - regdelete64
      - regset
      - regset64
  - title: Site Commands
    section: site
    description: The [site commands](./site/) allow you to manage site subscriptions.
    commands:
      - site force evaluation
      - subscribe
      - unsubscribe
  - title: Agent to Agent Communication Commands
    section: agent2agent
    description: The [Agent to Agent Communication commands](./agent2agent/) allow you to pass instructions to a specific agent.
    commands:
      - quarantine
      - agent interface
---

{% for category in categories %}
<div>
  <h2>{{category.title}}</h2>
  {{category.description}}
  <ul>
    {% for command in category.commands %}
    <li><a href="/action-script/reference/{{category.section}}/{{command | replace(' ', '-') | replace(',', '') }}.html">{{command}}</a></li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
