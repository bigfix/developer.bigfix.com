---
title: registry
---

{% type registryroot%}

The &lt;registryroot&gt; objects are the inspectors for the planes of the IOKit Registry

{% property usb plane of <registryroot> %}

The usb plane of IOKit&#39;s registry.

{% property service plane of <registryroot> %}

The service plane of IOKit&#39;s registry.

{% property power plane of <registryroot> %}

The power plane of IOKit&#39;s registry.

{% property node <string> of <registryroot> %}

The named node of the root of the IOKit&#39;s registry.

{% property firewire plane of <registryroot> %}

The firewire plane of IOKit&#39;s registry.

{% property dictionary of <registryroot> %}

Returns a dictionary from the root of the IOKit registry.

{% property devicetree plane of <registryroot> %}

Returns the device tree plane of IOKit&#39;s registry. The device tree contains extensive information about devices in the system.

{% property audio plane of <registryroot> %}

The audio plane of IOKit&#39;s registry.

{% type registrynode%}

The &lt;registrynode&gt; inspectors provide access to the nodes of the IOKit Registry.

{% property path of <registrynode> %}

Path of the node in the IOKit registry.

{% property node of <registrynode> %}

The nodes of the given node of the IOKit registry.

{% property node <string> of <registrynode> %}

The named node of the given node of the IOKit registry.

{% property name of <registrynode> %}

Name of the given IOKit registry node.

{% property dictionary of <registrynode> %}

Returns a dictionary from a node in the IORegistry.

{% property classname of <registrynode> %}

The class name of the IOKit registry node.

