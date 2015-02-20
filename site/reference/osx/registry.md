---
title: registry
---

## registryroot

The &lt;registryroot&gt; objects are the inspectors for the planes of the IOKit Registry

#### usb plane of &lt;registryroot&gt; : registrynode

The usb plane of IOKit&#39;s registry.

#### service plane of &lt;registryroot&gt; : registrynode

The service plane of IOKit&#39;s registry.

#### power plane of &lt;registryroot&gt; : registrynode

The power plane of IOKit&#39;s registry.

#### node &lt;string&gt; of &lt;registryroot&gt; : registrynode

The named node of the root of the IOKit&#39;s registry.

#### firewire plane of &lt;registryroot&gt; : registrynode

The firewire plane of IOKit&#39;s registry.

#### dictionary of &lt;registryroot&gt; : dictionary

Returns a dictionary from the root of the IOKit registry.

#### devicetree plane of &lt;registryroot&gt; : registrynode

Returns the device tree plane of IOKit&#39;s registry. The device tree contains extensive information about devices in the system.

#### audio plane of &lt;registryroot&gt; : registrynode

The audio plane of IOKit&#39;s registry.

## registrynode

The &lt;registrynode&gt; inspectors provide access to the nodes of the IOKit Registry.

#### path of &lt;registrynode&gt; : string

Path of the node in the IOKit registry.

#### node of &lt;registrynode&gt; : registrynode

The nodes of the given node of the IOKit registry.

#### node &lt;string&gt; of &lt;registrynode&gt; : registrynode

The named node of the given node of the IOKit registry.

#### name of &lt;registrynode&gt; : string

Name of the given IOKit registry node.

#### dictionary of &lt;registrynode&gt; : dictionary

Returns a dictionary from a node in the IORegistry.

#### classname of &lt;registrynode&gt; : string

The class name of the IOKit registry node.

