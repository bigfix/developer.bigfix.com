---
title: devices
---

## scsidevice

The &lt;scsidevice&gt; inspectors refer to the Small Computer System Interface devices connected to the Client computer.

#### vendor of &lt;scsidevice&gt; : string

Vendor string for given SCSI device.

#### type of &lt;scsidevice&gt; : string

Returns a SCSI device type, such as: DISK, TAPE, PRINTER, CPU, WORM, CDROM, SCAN, DISK, or UNKNOWN.

#### revision of &lt;scsidevice&gt; : string

The revision of the SCSI device.

#### product of &lt;scsidevice&gt; : string

The product string for the given SCSI device.

## scsibus

The &lt;scsibus&gt; inspectors refer to the Small Computer System Interface bus components.

#### wide32 scsi of &lt;scsibus&gt; : boolean

Whether wide32 is available for the given SCSI bus.

#### wide16 scsi of &lt;scsibus&gt; : boolean

Whether wide16 is available for the given SCSI bus.

#### version of &lt;scsibus&gt; : version

Version of the SCSI bus.

#### scsidevice of &lt;scsibus&gt; : scsidevice

Returns a SCSI device associated with the given bus.

#### scsidevice &lt;integer&gt; of &lt;scsibus&gt; : scsidevice

Returns a SCSI device with the given number.

#### fast scsi of &lt;scsibus&gt; : boolean

Determines if fast SCSI is supported by the SCSI bus.

## usb

The &lt;usb&gt; objects are the Universal Serial Bus inspectors.

#### version of &lt;usb&gt; : version

The version of the USB installed in the system. Taken from the Gestalt Manager.

#### isochronous of &lt;usb&gt; : boolean

The isochronous attribute of the USB installed. Taken from the Gestalt Manager.

## active device

On Windows NT systems (including XP and 2K), the &lt;active device&gt; inspectors returns a set of objects corresponding to the active devices on the machine, for example: modems, graphics cards, printers, and more.

#### status of &lt;active device&gt; : integer

Configuration manager defined status bits conveying device driver status.

#### service key value name of &lt;active device&gt; : string

Returns the service key value name.

#### problem id of &lt;active device&gt; : integer

Configuration manager defined number describing device installation or use problems. Returned by call to CM_Get_DevInst_Status.

#### manufacturer of &lt;active device&gt; : string

Returns the manufactures string of the active device.

#### location information of &lt;active device&gt; : string

Returns a string containing information about the bus location of the device.

#### hardware id of &lt;active device&gt; : string

Returns the hardware id of the active device provided.

#### friendly name of &lt;active device&gt; : string

Returns the friendly name of the active device.

#### driver key value name of &lt;active device&gt; : string

Returns the driver key value name of the active device provided.

#### driver key of &lt;active device&gt; : registry key

The key identified by adding the value of &#39;driver key value name of active device&#39; to HKLM\System\CurrentControlSet\Control\Class\.

#### description of &lt;active device&gt; : string

Returns the description of the active device provided.

#### class of &lt;active device&gt; : string

Returns the name of the class of the active device provided.

