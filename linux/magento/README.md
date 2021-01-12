# Installing magento

## LAMP (Apache2, PHP, MySQL)

`sudo apt-get install lamp-server^`

## OpenJDK 1.8 (jdk8)

`sudo apt-cache search openjdk`

`sudo apt-get install openjdk-8-jdk openjdk-8-jre`

`java -version`

`vim /etc/environment`

`JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64`

`source /etc/environment`

`echo $JAVA_HOME`

## Elasticsearch 7.6.2

`wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -`

`sudo apt-get install apt-transport-https`

`echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-7.x.list`

`sudo apt-get update`

`sudo apt install elasticsearch=7.6.2`

`/etc/elasticsearch/elasticsearch.yml` optional

`curl -XGET 'http://localhost:9200'` optional

## Composer

`sudo curl -sS https://getcomposer.org/installer | php`

`sudo mv composer.phar /usr/local/bin/composer`

`composer self-update 1.10.16` may not be necessary in the future

## Magento 2.4.1

`sudo apt install libapache2-mod-php7.0 libapache2-mod-php`

`mkdir /var/www/html/magento241`

`cd /var/www/html/magento241`

`sudo apt-get install php-curl php-zip php-bcmath php-gd php-xml php-mysql php-soap php-intl php php-cli php-fpm php-json php-common php-zip php-mbstring php-pear`

`sudo chmod -R 777 ./` Magento will show blank page when permission not set

```
sudo fallocate -l 1G /swapfile
sudo dd if=/dev/zero of=/swapfile bs=1024 count=1048576
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

`sudo nano /etc/fstab`
`/swapfile swap swap defaults 0 0` Past this inside the file
`sudo mount -a`

`composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition .`



`echo "CREATE DATABASE magento241" | mysql -u root -p`

or

```
mysql -u root
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
FLUSH PRIVILEGES;
CREATE DATABASE magento241;
```
https://stackoverflow.com/questions/36864206/sqlstatehy000-1698-access-denied-for-user-rootlocalhost


`php bin/magento setup:install --base-url="http://127.0.0.1/magento241/" --db-host="localhost" --db-name="magento241" --db-user="root" --db-password="2014" --admin-firstname="mage" --admin-lastname="comp" --admin-email="test.magecomp@gmail.com" --admin-user="admin" --admin-password="admin@123" --language="en_US" --currency="USD" --timezone="America/Chicago" --use-rewrites="1" --backend-frontname="admin"`

`sudo php -dmemory_limit=-1 bin/magento setup:upgrade`

`sudo php -dmemory_limit=-1 bin/magento setup:di:compile`

`sudo php -dmemory_limit=-1 bin/magento setup:static-content:deploy -f`

`sudo php -dmemory_limit=-1 bin/magento indexer:reindex`

`sudo php -dmemory_limit=-1 bin/magento cache:clean`

`sudo php -dmemory_limit=-1 bin/magento cache:flush`

## Magento 2.4.1 Sample data

`sudo php -dmemory_limit=-1 bin/magento sampledata:deploy`

`sudo php -dmemory_limit=-1 bin/magento setup:upgrade`

`sudo php -dmemory_limit=-1 bin/magento setup:di:compile`

`sudo php -dmemory_limit=-1 bin/magento cache:flush`

[Tutorial Text](https://docs.google.com/document/d/1pP774EYl4OZuqEp7v7Rl89NiYU4xoq5kzGzGCJH9Km0/edit)
[Tutorial Video](https://www.youtube.com/watch?v=3RFw9j4ihag)

## Disable 2FA to access admin panel

`bin/magento mo:di Magento_TwoFactorAuth`
