Dependencies 
--------------------------

* PHP5.6 or PHP7 (preferred), along with the following extensions:
    * php-curl php-ldap php-bcmath php-gd php-dom
* [Composer](https://getcomposer.org/download/) (If using Git)
* mysql-server
* NGINX or Apache

Webserver Setup
--------------------------

Follow [these](https://wiki.partkeepr.org/wiki/KB00005:Web_Server_Configuration) directions for configuration.

Installation From Zip File
--------------------------

Simply point your browser to `web/setup/index.html` and the installer will start. If you have your web root to the `web` directory, point your browser to `setup/index.html`.

Installation From Git
---------------------

* Clone the repository
* Copy `app/config/parameters.php.dist` to `app/config/parameters.php`
* Install [composer](https://getcomposer.org/download/) globally
* Run `composer install`
* Point your browser to `setup/index.html`. If you have your web root to the `web` directory, point your browser to `setup/index.html`.
