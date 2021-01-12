# All I know about Nodejs

## NPM ([Playlist](https://www.youtube.com/watch?v=pa4dc480Apo&list=PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6))

`npm i package_name1 package_name2 package_name3`

This command installs packages. It can install one or more.

`npm i -g package_name1 package_name2 package_name3`

The same as the last one but the `-g` makes npm install the package globally

`npm un package_name1 package_name2 package_name3`

This command uninstalls packages. It can uninstall one or more.

`npm un -g package_name1 package_name2 package_name3`

The same as the last one but the `-g` makes npm install the package globally

`npm list --depth 0`

This command displays a list of all installed packages on your project. 

--depth 0 makes it so it doesn't show the sub-dependencies of the dependencies you use

`npm list -g --depth 0`

The same as the last one the `-g` makes it show the global dependencies you installed on your machine 

`npm prone`
This command removes packages you no longer use.

## Refrences

[Uninstalling npm packages](https://flaviocopes.com/npm-uninstall-packages/)








