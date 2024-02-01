---
title: Create File in a Site
---

This command will genereate a POST request to create one or more files specified by `-F "file=@/{file_pathname}` in the specified site.
For information about how to specify a *site*, see <a href="../restapi_request_new.html">Hints about BigFix REST API requests</a>.

Depending on the permission to access the site, this command can be run by master operators and non master operators.

# cURL
To add a file to a custom site as master operator, run the following command:
```
curl -k --user master:{password} -X POST -F "file=@/tmp/file.my" "https://{server}:{port}/api/site/custom/test/file/file.my"
```
To add a file to the master action site as master operator, run the following command:
```
curl -k --user master:{password} -X POST -F "file=@/tmp/file.my" "https://{server}:{port}/api/site/master/file/file.my?force=true"
```
Where the option `force=true` allows to override the file it if already exists in the site.

To add a file to the operator site as non master operator, run the following command:
```
curl -k --user nmo:{password} -X POST -F "file=@/tmp/file.my" "https://{server}:{port}/api/site/operator/nmo/file/file.my?isClientFile=true"
```
Where the option `isClientFile=true` allows to make the file available for download by Clients.

The options `force` and `isClientFile` apply when running post and put requests against files, both as master and as non master operator. For these two options values different from false are managed as true.

Use the syntax `?key1=value1;key2=value2` to specify multiple options, for example:
```
curl -k --user master:{password} -X POST -F "file=@/tmp/file.my" "https://{server}:{port}/api/site/custom/test/file/file.my?force=true;isClientFile=true"
```

**Note:** Be aware that no validity check on input options and parameters is automatically performed.
