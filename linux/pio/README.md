 # PredictionIO Nonsense
 
 ## Requirement

 MySQL server v7 [HOW TO](https://www.digitalocean.com/community/questions/completely-uninstall-mysql-server)
 
 JAVA JDK 8 `sudo apt-get install java-8-openjdk-amd64`
 
 
 ## Notes
 
 Make sure environment has 
 
 `JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64"`

 `PIO_HOME="/path/to/PredictionIO-0.12.1"`

 Make sure PredictionIO-0.12.1/conf/pio-env.sh has
 
 `HBASE_CONF_DIR=$PIO_HOME/vendors/hbase-1.0.0/conf`
 
 
 ## Commands
 
 `pio-start-all` Start PredictionIO
 
 `pio-stop-all` Stops PredictionIO
