# type: cloud provider

This inspector retrieves specific cloud provider data from a client that is installed on a machine hosted on a cloud provider. You can deactivate the inspector by setting `_BESClient_Inspector_DisableCloudProvider` to 1. In this case, the output of the inspector calls will be `cloud provider inspector is disabled`.

**Note**: The cloud inspectors support virtual environments for AWS and Azure only.

# name of &lt;cloud provider&gt; : string

Returns one of the following:
- The name of the provider, if there is a virtualization or cloud provider
- On Premises, if the machine is not a virtual one
- Unrecognized, if the machine is a virtual one but the provider is unknown or not supported

{% qna %}
Q: name of cloud provider
A: Amazon Web Services
{% endqna %}

{% qna %}
Q: name of cloud provider
A: Microsoft Azure
{% endqna %}

# unique id of &lt;cloud provider&gt; : string

Returns the unique instance ID of the virtual machine, or an empty string if the client machine is not a VM, or if it is a VM hosted on an unrecognized cloud provider. 

# private ip of &lt;cloud provider&gt; : string

Returns the private IP of the cloud provider, or an empty string if the client machine is not a VM, or if it is a VM hosted on an unrecognized cloud provider.

# version of &lt;cloud provider&gt; : string

Returns the version of the instance image, or an empty string if the client machine is not a VM, or if it is a VM hosted on an unrecognized cloud provider.

# region of &lt;cloud provider&gt; : string

Returns the region where the instance is deployed, or an empty string if the client machine is not a VM, or if it is a VM hosted on an unrecognized cloud provider.

# instance data of &lt;cloud provider&gt; : json value

Returns the instance metadata document in as a JSON value object. The returned json can be queried with the json inspector. It will be an empty json if the virtual machine is not on cloud or if the cloud provider is not supported.
