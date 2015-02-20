---
title: grub
---

## grub module

No documentation exists for this type.

#### &lt;grub module&gt; as string : string

String representing the name of the module module

#### nounzip of &lt;grub module&gt; : boolean

True if module is to be loaded without unzipping it

## grub kernel

No documentation exists for this type.

#### location of &lt;grub kernel&gt; : grub file location

Full path name of the kernel file

#### boot argument of &lt;grub kernel&gt; : string

First boot argument for kernel, in parameter=value form, if applicable.

#### boot argument &lt;integer&gt; of &lt;grub kernel&gt; : string

The numbered boot argument for the kernel, in parameter=value form, if applicable.

## grub image choice

No documentation exists for this type.

#### &lt;grub image choice&gt; as string : string

String representation of a zero-based index to an image within the grub config file.

#### index of &lt;grub image choice&gt; : integer

Zero-based index to an image within the grub config file.

## grub file location

No documentation exists for this type.

#### &lt;grub file location&gt; as string : string

Full name of file consisting of device (if present) and path.

#### path of &lt;grub file location&gt; : string

Path name of file without device.

#### device of &lt;grub file location&gt; : grub device

Name of device of the file location, e.g., (hd0,0)blo

#### block list of &lt;grub file location&gt; : grub block list

List of blocks contained int the file.

## grub device

No documentation exists for this type.

#### &lt;grub device&gt; as string : string

String containing name of a device, such as (hd0,0).

## grub config file

No documentation exists for this type.

#### timeout of &lt;grub config file&gt; : integer

How many seconds to wait for a user choice before booting the default image.

#### splashimage of &lt;grub config file&gt; : grub file location

File containing the splash screen image to be displayed at boot time.

#### path of &lt;grub config file&gt; : string

Full path to grub config file.

#### hiddenmenu of &lt;grub config file&gt; : boolean

True if menu has been explicitly designated to be hidden.

#### gfxmenu of &lt;grub config file&gt; : grub file location

File containing graphical menu.

#### fallback image of &lt;grub config file&gt; : grub image choice

Returns the fallback image choice of a grub config file

#### fallback image &lt;integer&gt; of &lt;grub config file&gt; : grub image choice

Zero-based ordinal index to an entry in the config file designated as a fallback to be booted in case previous choice fails.

#### default image of &lt;grub config file&gt; : grub image choice

Zero-based ordinal index of the default entry to be booted.

#### color scheme of &lt;grub config file&gt; : grub color scheme

Two color pairs specifying normal and highlighted screen colors

#### bootable image of &lt;grub config file&gt; : grub bootable image

Returns the bootable image of a grub config file

#### bootable image &lt;string&gt; of &lt;grub config file&gt; : grub bootable image

Bootable image at specified by the string containing an entry&#39;s title.

#### bootable image &lt;integer&gt; of &lt;grub config file&gt; : grub bootable image

Bootable image at zero-based-indexed entry in grub config file.

## grub color scheme

No documentation exists for this type.

#### normal of &lt;grub color scheme&gt; : grub color pair

Color pair used for normal text.

#### highlight of &lt;grub color scheme&gt; : grub color pair

Color pair used for highlighted text.

## grub color pair

No documentation exists for this type.

#### &lt;grub color pair&gt; as string : string

String displaying color pair in form &quot;foreground-color/background-color

#### foreground of &lt;grub color pair&gt; : grub color

Name of foreground color of the color pair.

#### background of &lt;grub color pair&gt; : grub color

Name of background color of the color pair.

## grub color

No documentation exists for this type.

#### &lt;grub color&gt; as string : string

String containing the name of one of the colors in a color pair.

## grub bootable image

No documentation exists for this type.

#### &lt;grub bootable image&gt; as string : string

String containg title of bootable image.

#### title of &lt;grub bootable image&gt; : string

Title of bootable image.

#### savedefault of &lt;grub bootable image&gt; : boolean

True if bootable image has been designated as &quot;savedefault.&quot; This causes the bootable image to become the default after it has been booted.

#### rootnoverify of &lt;grub bootable image&gt; : grub device

Root device, designated as &quot;no-verify,&quot; that is associated with the bootable image.

#### root of &lt;grub bootable image&gt; : grub device

Root device that is associated with the bootable image.

#### quiet of &lt;grub bootable image&gt; : boolean

True if bootable image has been designated as quiet, so as not to display verbose booting information.

#### module of &lt;grub bootable image&gt; : grub module

Returns the module of a grub bootable image

#### module &lt;integer&gt; of &lt;grub bootable image&gt; : grub module

Module (at zero-based index) to be loaded with the bootable image.

#### kernel of &lt;grub bootable image&gt; : grub kernel

Kernel to be used for the bootable image.

#### initrd of &lt;grub bootable image&gt; : grub file location

File containing initial ram disk for bootable image.

#### chainloader of &lt;grub bootable image&gt; : grub file location

File pointed to by chainloader for a bootable image.

## grub block list

No documentation exists for this type.

#### &lt;grub block list&gt; as string : string

String containing a specified block list in form &quot;0+50,100+25,200+1.&quot;

