---
title: devices
---

{% type scsidevice%}

The &lt;scsidevice&gt; inspectors refer to the Small Computer System Interface devices connected to the Client computer.

#### Properties

{% property vendor of <scsidevice> %}

Vendor string for given SCSI device.

{% property type of <scsidevice> %}

Returns a SCSI device type, such as: DISK, TAPE, PRINTER, CPU, WORM, CDROM, SCAN, DISK, or UNKNOWN.

{% property revision of <scsidevice> %}

The revision of the SCSI device.

{% property product of <scsidevice> %}

The product string for the given SCSI device.

{% type scsibus%}

The &lt;scsibus&gt; inspectors refer to the Small Computer System Interface bus components.

#### Properties

{% property wide32 scsi of <scsibus> %}

Whether wide32 is available for the given SCSI bus.

{% property wide16 scsi of <scsibus> %}

Whether wide16 is available for the given SCSI bus.

{% property version of <scsibus> %}

Version of the SCSI bus.

{% property scsidevice of <scsibus> %}

Returns a SCSI device associated with the given bus.

{% property scsidevice <integer> of <scsibus> %}

Returns a SCSI device with the given number.

{% property fast scsi of <scsibus> %}

Determines if fast SCSI is supported by the SCSI bus.

{% type usb%}

The &lt;usb&gt; objects are the Universal Serial Bus inspectors.

#### Properties

{% property version of <usb> %}

The version of the USB installed in the system. Taken from the Gestalt Manager.

{% property isochronous of <usb> %}

The isochronous attribute of the USB installed. Taken from the Gestalt Manager.

{% type active device%}

On Windows NT systems (including XP and 2K), the &lt;active device&gt; inspectors returns a set of objects corresponding to the active devices on the machine, for example: modems, graphics cards, printers, and more.

#### Properties

{% property status of <active device> %}

Configuration manager defined status bits conveying device driver status.

{% property service key value name of <active device> %}

Returns the service key value name.

{% property problem id of <active device> %}

Configuration manager defined number describing device installation or use problems. Returned by call to CM_Get_DevInst_Status.

{% property manufacturer of <active device> %}

Returns the manufactures string of the active device.

{% property location information of <active device> %}

Returns a string containing information about the bus location of the device.

{% property hardware id of <active device> %}

Returns the hardware id of the active device provided.

{% property friendly name of <active device> %}

Returns the friendly name of the active device.

{% property driver key value name of <active device> %}

Returns the driver key value name of the active device provided.

{% property driver key of <active device> %}

The key identified by adding the value of &#39;driver key value name of active device&#39; to HKLM\System\CurrentControlSet\Control\Class\.

{% property description of <active device> %}

Returns the description of the active device provided.

{% property class of <active device> %}

Returns the name of the class of the active device provided.

