# PartKeepr Developer Installation

* Download [composer](https://getcomposer.org/)
* Execute `composer install` from the root source directory
* composer might ask you a few questions for the database configuration
  * To get things started, you can use pdo_sqlite as driver. You need the pdo sqlite PHP extension for that
  * You can simply hit return for all subsequent questions
  * Add the parameter `path: %kernel.root_dir%/sqlite.db`  to your config.yml so that it reads:
```
  doctrine:
      dbal:
          driver:   %database_driver%
          host:     %database_host%
          port:     %database_port%
          dbname:   %database_name%
          user:     %database_user%
          password: %database_password%
          path: %kernel.root_dir%/sqlite.db
```
* Install the schema by executing `php app/console doctrine:schema:create`
* Create an initial user by executing `php app/console partkeepr:user:create <username> <password>`