VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "bento/centos-7.2"
  config.vm.network "forwarded_port", guest: 80, host: 4000

  config.vm.provider :virtualbox do |vb|
    # Increase memory for docker.
    vb.customize ['modifyvm', :id, '--memory', 2048]

    # Synchronize the guest clock to the host clock more aggressively to avoid
    # clock skew issues with make.
    vb.customize [
      'guestproperty', 'set', :id,
      '/VirtualBox/GuestAdd/VBoxService/--timesync-interval', '10000'
    ]

    vb.customize [
      'guestproperty', 'set', :id,
      '/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold', '500'
    ]
  end

  config.vm.provision "shell", path: "scripts/vagrant-provision.sh"
end
