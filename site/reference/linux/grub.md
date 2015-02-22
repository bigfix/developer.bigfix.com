---
title: grub
---

{% type grub block list %}

No documentation exists for this type.

#### Casts of grub block list

{% cast <grub block list> as string %}

String containing a specified block list in form &quot;0+50,100+25,200+1.&quot;

{% type grub bootable image %}

No documentation exists for this type.

#### Properties of grub bootable image

{% property chainloader of <grub bootable image> %}

File pointed to by chainloader for a bootable image.

{% property initrd of <grub bootable image> %}

File containing initial ram disk for bootable image.

{% property kernel of <grub bootable image> %}

Kernel to be used for the bootable image.

{% property module <integer> of <grub bootable image> %}

Module (at zero-based index) to be loaded with the bootable image.

{% property module of <grub bootable image> %}

Returns the module of a grub bootable image

{% property quiet of <grub bootable image> %}

True if bootable image has been designated as quiet, so as not to display verbose booting information.

{% property root of <grub bootable image> %}

Root device that is associated with the bootable image.

{% property rootnoverify of <grub bootable image> %}

Root device, designated as &quot;no-verify,&quot; that is associated with the bootable image.

{% property savedefault of <grub bootable image> %}

True if bootable image has been designated as &quot;savedefault.&quot; This causes the bootable image to become the default after it has been booted.

{% property title of <grub bootable image> %}

Title of bootable image.

#### Casts of grub bootable image

{% cast <grub bootable image> as string %}

String containg title of bootable image.

{% type grub color %}

No documentation exists for this type.

#### Casts of grub color

{% cast <grub color> as string %}

String containing the name of one of the colors in a color pair.

{% type grub color pair %}

No documentation exists for this type.

#### Properties of grub color pair

{% property background of <grub color pair> %}

Name of background color of the color pair.

{% property foreground of <grub color pair> %}

Name of foreground color of the color pair.

#### Casts of grub color pair

{% cast <grub color pair> as string %}

String displaying color pair in form &quot;foreground-color/background-color

{% type grub color scheme %}

No documentation exists for this type.

#### Properties of grub color scheme

{% property highlight of <grub color scheme> %}

Color pair used for highlighted text.

{% property normal of <grub color scheme> %}

Color pair used for normal text.

{% type grub config file %}

No documentation exists for this type.

#### Properties of grub config file

{% property bootable image <integer> of <grub config file> %}

Bootable image at zero-based-indexed entry in grub config file.

{% property bootable image <string> of <grub config file> %}

Bootable image at specified by the string containing an entry&#39;s title.

{% property bootable image of <grub config file> %}

Returns the bootable image of a grub config file

{% property color scheme of <grub config file> %}

Two color pairs specifying normal and highlighted screen colors

{% property default image of <grub config file> %}

Zero-based ordinal index of the default entry to be booted.

{% property fallback image <integer> of <grub config file> %}

Zero-based ordinal index to an entry in the config file designated as a fallback to be booted in case previous choice fails.

{% property fallback image of <grub config file> %}

Returns the fallback image choice of a grub config file

{% property gfxmenu of <grub config file> %}

File containing graphical menu.

{% property hiddenmenu of <grub config file> %}

True if menu has been explicitly designated to be hidden.

{% property path of <grub config file> %}

Full path to grub config file.

{% property splashimage of <grub config file> %}

File containing the splash screen image to be displayed at boot time.

{% property timeout of <grub config file> %}

How many seconds to wait for a user choice before booting the default image.

{% type grub device %}

No documentation exists for this type.

#### Casts of grub device

{% cast <grub device> as string %}

String containing name of a device, such as (hd0,0).

{% type grub file location %}

No documentation exists for this type.

#### Properties of grub file location

{% property block list of <grub file location> %}

List of blocks contained int the file.

{% property device of <grub file location> %}

Name of device of the file location, e.g., (hd0,0)blo

{% property path of <grub file location> %}

Path name of file without device.

#### Casts of grub file location

{% cast <grub file location> as string %}

Full name of file consisting of device (if present) and path.

{% type grub image choice %}

No documentation exists for this type.

#### Properties of grub image choice

{% property index of <grub image choice> %}

Zero-based index to an image within the grub config file.

#### Casts of grub image choice

{% cast <grub image choice> as string %}

String representation of a zero-based index to an image within the grub config file.

{% type grub kernel %}

No documentation exists for this type.

#### Properties of grub kernel

{% property boot argument <integer> of <grub kernel> %}

The numbered boot argument for the kernel, in parameter=value form, if applicable.

{% property boot argument of <grub kernel> %}

First boot argument for kernel, in parameter=value form, if applicable.

{% property location of <grub kernel> %}

Full path name of the kernel file

{% type grub module %}

No documentation exists for this type.

#### Properties of grub module

{% property nounzip of <grub module> %}

True if module is to be loaded without unzipping it

#### Casts of grub module

{% cast <grub module> as string %}

String representing the name of the module module

