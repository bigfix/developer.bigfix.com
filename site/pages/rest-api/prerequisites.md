---
title: Prerequisites
---

The following conditions must be satisfied to use the BigFix REST API:

1. The WebReports service must be running. If you installed multiple Web Reports servers, local or remote, the Web Reports server that is selected for using the REST API is the first entry that appears in the table *dbo.AGGREGATEDBY* contained in the database **BFEnterprise**.
2. The user logging into the REST API must be defined as a [BigFix Console operator](https://help.hcltechsw.com/bigfix/10.0/platform/Platform/Console/c_adding_local_operators.html) with the *Can use REST API* and the *Custom Content* permissions set to **YES** in its definition or in one of the assigned roles.
3. If you plan to use the REST API over HTTPS, you must apply the configuration described in [Customizing HTTPS on REST API](https://help.hcltechsw.com/bigfix/10.0/platform/Platform/Config/c_restapi_https_registry_set.html).
4. The [IEM CLI](/rest-api/iem_cli/index.html) does not support the BigFix FIPS-compliant cryptography library. If you plan to use that library in your REST API HTTP environment, use a different REST API Client.
5. Ensure that the font set in the command prompt properties of your workstation is set to a value different from Raster Fonts, otherwise you might get this warning message *"Warning: Current console font may not display locale characters correctly"*.


