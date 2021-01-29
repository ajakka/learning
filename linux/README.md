# All I know about Liunx

## Very good documentation [SS64](https://ss64.com/bash/)

## Basic commands

| Comand                | Functionality                 | Comand            | Functionality                     |
|-----------------------|-------------------------------|-------------------|-----------------------------------|
| `cal`                 | Display callendar             | `date`            | Display date                      |
| `man`                 | Display user manual           | `pwd`             | Print working directory           |
| `cd /opt`             | Change directory to /opt      | `ls`              | List files in current directory   |
| `exit`                | End bash session              | `echo "Hello"`    | Prints Hello to console           |
| `mkdir bin src`       | Make bin and src directories  | `cal`             | Display callendar                 |
| `lsb_release -cs`     | Shows Ubuntu distribution     | `w`               | Shows who is logged in            |
## SSH Linux Instance

`chmod 400 ~/.ssh/mykey.pem`
`ssh -i ~/.ssh/mykey.pem USER@INSTANCE_ADDRESS`


## Installing / Uninstalling Apps

Installing with apt-get:   `$ sudo apt-get install app-name-1 app-name-2 app-name-3`

Uninstalling with apt-get: `$ sudo apt remove app-name-1 app-name-2 app-name-3`

Installing with Bash   `$ bash -x script-name.sh`

## Installing tar.gz
update app package:  `$ sudo apt-get update`

Create a directory:  `$ sudo mkdir /opt/java`

Untar the file    :  `$ sudo tar -zxvf jdk-8u271-linux-x64.tar.gz -C /opt/java`

Install the app   :  `$ sudo update-alternatives --install /usr/bin/java java /opt/java/jdk1.8.0_271/bin/java 1`


## Installing Apps using curl

Install curl    : `$ sudo apt install curl`

Download the app: `$ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -` 

install the app : `$ sudo apt-get install -y nodejs`


## Service commands

`$ sudo service service-name start` or `$ sudo systemctl start service-name` 

This terminal command starts a specified service.

`$ sudo service service-name stop`

This terminal command stops a specified service.

`$ sudo service service-name status`

This terminal command shows the satatus of a specified service.

`$ sudo service service-name restart`

This terminal command restarts a specified service.

## Clean up command

`$ sudo apt-get autoclean`

This terminal command deletes all .deb files from /var/cache/apt/archives. It basically cleans up the apt-get cache.

`$ sudo apt-get clean`

This terminal command is used to free up the disk space by cleaning up downloaded .deb files from the local repository.

`$ sudo apt-get autoremove`

This terminal command used to remove packages that were automatically installed to satisfy dependencies for some package and no longer needed by those packages.

## File system

In linux, everything is a file.

`/bin` Basic binaries (programes) that you use, like cat, 7z, apt, etc...

`/sbin` Similar to bin, but stores system binaries that an administrator uses like sysctl, tc, ip, etc...

`/boot` Contains the bootloader, DON'T MESS WITH IT.

`/cdrom` Legacy folder that acts as a mounting point to your CD.

`/div` A place where things like like disks, webcams, keyboards, ports, etc... are stored as files, that's place that drivers and applications deal with and rarelly used by the user.

`/etc` Meaning 'et cetera', it is used to host system wide configurations that all users share.

`/etc/environment` This is the System-wide environment variables file.

`/home` This folder is where personal files and documents are stored, it also contains hidden files that store application settings.

`/lib or /lib32 or /lib64 or /libx32` Folders that host libraries that other applications can use.

`/media` Used for mountable devices like usb, external HDD, etc...

`/mnt` Used for manually pluged devices (mounted devices) like internal HDD, etc..

`/opt` Meaning 'optional', it's used for manually instaled software.

`/proc` Contains sudo folder and files where all running processes reside, every folder is named with the processes id (pid).

`/root` Root users home folder.

`/run` Folder that's stored in RAM, meaning everything inside is discarded once the machine is turned off.

`/snap` Used to store snap packages for ubuntu.

`/srv` This is where sevices data is stored, like web server of ftp server public data.

`/sys` This is a system directory and is used to comunicate with the kernel, it gets recreated each start wish makes it not recomended to store files inside it.

`/tmp` This is a temporarlly directory used by applications to store session informations.

`/usr` This is user application folder where user applications are stored

`/var` This is an older convention, it's called variable directory and is used to contain directories that are expected to grow, like logs, databases, etc..

## Misc

`$ ls -la`

This command used to show details about current directory.

`$ ls -a`

This command used to show all folder and files inside current directory including hidden files

`df -h`

This command outputs disk informations

`echo $PATH`

This command outputs all paths registred in the PATH variable

`$ touch ~/Templates/"Blank Document"`

This terminal command used to show an option on the right click menu to add a blank document.

`$ xdg-mime default code.desktop text/plain`

This terminal command used to set text files (text/plain) to use vscode. [more details](https://github.com/Microsoft/vscode-docs/blob/815e3f214ad805fd5f75b22211e66373768fd183/docs/setup/linux.md#setting-vs-code-as-the-default-text-editor)

`$ gsettings set org.gnome.nautilus.preferences default-sort-order 'type'`

This terminal command used to change default “sort by” to “type” in nautilus. [more details](https://askubuntu.com/questions/252771/how-to-change-default-sort-by-to-type-in-nautilus)

`$ sudo update-alternatives --config java`

Show all available java versions

`$ /usr/lib/jvm/java-11-openjdk-amd64/bin/java -jar ~/Downloads/forge-1.16.4-35.0.18-installer.jar`

Run a jar file using Java 11

## Refrences

[Linux File System/Structure Explained](https://www.youtube.com/watch?v=HbgzrKJvDRw)

[Start, Stop and Restart Apache 2 Web Server](https://www.cyberciti.biz/faq/star-stop-restart-apache2-webserver/)

[Use the apt Command to Manage Ubuntu Packages](https://hostadvice.com/how-to/how-to-use-the-apt-command-to-manage-ubuntu-packages/)

[Clean up Linux](https://sites.google.com/site/easytipsforlinux/clean-up-linux)

[Add open with vscode to context menu in Ubuntu](https://askubuntu.com/questions/1049111/add-open-with-vscode-to-context-menu-in-ubuntu)

[Disable VS Code title bar](https://stackoverflow.com/questions/47255696/way-to-disable-the-visual-studio-code-editor-title-bar)

[Install Notepad++ on Ubuntu](https://www.omgubuntu.co.uk/install-notepad-editor-ubuntu)

[How exactly does “/bin/\[” work?](https://unix.stackexchange.com/questions/336521/how-exactly-does-bin-work)

[Opening a port](https://docs.fedoraproject.org/en-US/quick-docs/firewalld/#opening-ports-firewalld-fedora)

[Environment Variables](https://help.ubuntu.com/community/EnvironmentVariables)

[How to Create a File in Linux](https://linuxize.com/post/create-a-file-in-linux/)

[Determine where a binary command is stored](https://www.cyberciti.biz/tips/find-linux-unix-command-location.html)

[Linux Copy File Command](https://www.cyberciti.biz/faq/copy-command)

[Remove Java](https://askubuntu.com/questions/84483/how-to-completely-uninstall-java)

[Remove MySQL](https://www.digitalocean.com/community/questions/completely-uninstall-mysql-server)
