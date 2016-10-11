---
title: API Constants and Error codes
---

The following numeric constants and error codes are used by API. They are listed in the ClientCompliance.h file included in the [Software Development Kit](./cc_sdk.html).

### Compliance flags

The Session.Open method takes a flag argument that is 0 or any combination of the following bit values:

COMPLIANCE_FLAG_GATHER = 1
Gather from all sites before processing rules. Note that gathering may fail depending on network connectivity etc. You can build compliance rules that look at the results of 'exists site whose( now - last gather time of it > day)'
Without this flag enabled, rules processing will not be preceded by a gathering operation.

COMPLIANCE_FLAG_EVALUATE_ALL = 2
Perform a complete evaluation of all fixlets before processing rules.
Without this flag enabled, rules processing will not be preceded by an evaluation pass. Rather, the last computed relevance of any fixlet inspection will be available to rules processing.

COMPLIANCE_FLAG_IDLE_CPU_USAGE = 4
Processing should take place at client IDLE processing cpu settings. If this flag is not set, the fixlet evaluation and processing of rules will take place at elevated cpu levels.
 
COMPLIANCE_FLAG_ACTIONHINT = 8
Beginning with version 6.0.14, the API can now be used to ask the client to focus its attention on an action. This can be used to accelerate the running of an action. In this situation, the „doc‟ argument of the open call should be the action ID of the action you wish the client to process. Note that the client will not run actions that are not relevant, and will not defeat retry delays if the action were being delayed for that reason.

COMPLIANCE_PROGRESS
The following values are returned by the Progress.SessionProgress call.

COMPLIANCE_PROGRESS_COMPLETE = 1
The rules document has been processed and may be accessed using the Response object methods. These results will no longer be available when the Session.Close method is called.

COMPLIANCE_PROGRESS_ERROR = 2
An error occurred while processing the rules. This is normal behavior in some cases. An error code of COMPLIANCE_ERROR_CHANGING_CONDITIONS, occurs when the client detects that Fixlet content has changed during the session. In this case, your application should close the existing session and open another session until the client can processes the compliance document in a more stable environment. Collect the particular error condition using the Progress.GetError method.

COMPLIANCE_PROGRESS_BUSY = 3
Gathering, Fixlet evaluation, and rule processing are not yet completed. Collect an estimate of the percentage completion from the Progress.GetPercent method.

### Compliance errors

The following error codes are returned
- from Session.Open, Session.Close,
- from Progress.GetError after Progress.SessionState has returned COMPLIANCE_PROGRESS_ERROR, and
- these error codes are placed into the script 'Err' object when the API Response methods are used after the Session has been closed.

COMPLIANCE_ERROR_NOTINSTALLED = -1
Returned if the BESClient is not installed.

COMPLIANCE_ERROR_NOTRUNNING = -2
Returned if the BESClient is not currently executing.

COMPLIANCE_ERROR_NOTRESPONDING = -3
Returned if the BESClient is not responding to compliance requests.

COMPLIANCE_ERROR_NOTCONFIGURED = -4
Returned if the registry is not configured with RequestDir and ResponseDir settings

COMPLIANCE_ERROR_EXISTINGREQUEST = -5
Returned if the BESClient is not picking up requests.

COMPLIANCE_ERROR_API_BUSY = -6
Returned if another session is open. Only one session is allowed at a time.

COMPLIANCE_ERROR_RESPONSE_MALFORMED = -7
The BESClient response was not formatted properly.

COMPLIANCE_ERROR_RESPONSE_CLOSED = -8
Returned if you try to access a response value but you have already closed the session.

COMPLIANCE_ERROR_OLD_VERSION = -9
This error code will be returned when the API determines that a version of the client on the machine does not support the client api.

COMPLIANCE_ERROR_RESPONSE_READING = -10
This error occurs when the client generates unexpected output while processing the rules.

COMPLIANCE_ERROR_DOC_READING = -11
This error occurs when the API cannot parse the output produced from the client.

COMPLIANCE_ERROR_DOC_SITE = -13
This error occurs when the url argument of the Session.Open call does not match any site to which the client is currently subscribed.

COMPLIANCE_ERROR_DOC_MISSING = -14
This error occurs when the doc argument of the Session.Open call does not exist in the __Compliance folder of the fixlet site matching the url argument.

COMPLIANCE_ERROR_PENDING_CLOSE = -15
This error occurs if you attempt to call the Session.Open method and you have not closed the previous session with a Session.Close call.

COMPLIANCE_ERROR_WRITING_REQUEST = -17
This error occurs when the API is unable to write the request to the client.

COMPLIANCE_ERROR_NO_RESPONSE = -18
This error occurs if the BESClient fails to respond within 10 seconds of the request.

COMPLIANCE_ERROR_COMPLIANCE_IO_FAILURE = -19
This error occurs if the BESClient encounters an IO error reading or writing the compliance document or intermediate state files to the client computer‟s file system.

COMPLIANCE_ERROR_INDEX_TOO_LARGE = -20
You will get this error in the script Err object, when you attempt to access a response whose index is larger than the number supplied by the client.

COMPLIANCE_ERROR_UNEXPECTED = -21
This error frequently occurs if a document or path cannot be found. Check file names and directory paths for the compliance document , RequestDir and ResponseDir as possible causes.

COMPLIANCE_ERROR_CHANGING_CONDITIONS = -22
This error code will be returned when the client detects that fixlet relevance is changing while the rules are being processed. The session should be closed and another session started until conditions stop changing and the results become stable.

COMPLIANCE_ERROR_DIR_MISSING = -23
This error code is returned when the client cannot open the compliance document because the directory in which the compliance document is located, cannot be found. The second argument to Session.Open should be a file name, not a path.

COMPLIANCE_ERROR_FILE_LOCKED = -24
This error code will be returned when the client cannot open the compliance document because it is locked.

COMPLIANCE_ERROR_FILE_PERMISSIONS = -25
This error code is returned when the client does not have permission to read the file.