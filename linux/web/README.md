## Installing Web components

First thing is to update apt-get

`sudo apt-get update`

### Installing Git

Install Git using this command

`sudo apt-get install git`

### Installing Java

Then download java [here](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html). Then make a folder to _untar_ the java files in with this command

`sudo mkdir /opt/java`

After that, untar the tar.gz file into that folder using this command

`sudo tar -zxvf jdk-8u271-linux-x64.tar.gz -C /opt/java`

Finally, use this command to install java.

`sudo update-alternatives --install /usr/bin/java java /opt/java/jdk1.8.0_271/bin/java 1`

**change jdk1.8.0_271 to your version**

### Installing OpenJdk

`sudo apt install openjdk-8-jdk-headless`

### Installing Node

Installing node requires curl to be installed. If it doesn't exist already, install it using command

`sudo apt install curl`

Now download the latest LTS version using this command, for other versions, visite this [link](https://github.com/nodesource/distributions/blob/master/README.md)

`curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -` 

Finally install node with this command

`sudo apt-get install -y nodejs`

Install Angular CLI

`sudo npm i -g @angular/cli@6.1.0`

### Installing Apache

Install Apache 2 using this command

`sudo apt-get install apache2`

Change the user from root to **_your-username_** to give yourself permision

`sudo chown username:username -R /var/www/html/./`

Open envvars file 

`sudo gedit /etc/apache2/envvars`

And change **APACHE_RUN_USER** and **APACHE_RUN_GROUP** to from **_www-data_** to **_your-username_**

**change _username_ with your own**

`sudo gedit /etc/apache2/envvars`

### Installing PHP
Install PHP using this command

`sudo apt-get install php libapache2-mod-php`

### Installing MySQL
Install MySQL using this command

`sudo apt-get install mysql-server`

Install PhpMyAdmin using this command, it will show a place where you select Apache and then setup a password.

Note: Stelect NO when asked to setup dbconfig-common.

If phpmyamin isn't working, see [this](https://askubuntu.com/questions/55280/phpmyadmin-is-not-working-after-i-installed-it)

`sudo apt-get install phpmyadmin`

After that, the password doesn't actually work, so you need to access mysql and change it there

`sudo mysql`

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'same_password_typed_before';`

**Note** that you should change s_ame_password_typed_before_ with the first password you gave to mysql earlier

### Installing MongoDB
TODO
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

### Remove MySQL

```
sudo apt-get remove --purge mysql*
sudo apt-get purge mysql*
sudo apt-get autoremove.
sudo apt-get autoclean.
sudo apt-get remove dbconfig-mysql.
sudo apt-get dist-upgrade.
```

