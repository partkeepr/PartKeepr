README
======

What is PartKeepr?
----------------

PartKeepr is an electronic part inventory management software. It helps you to keep track of your available parts and
assist you with re-ordering parts. PartKeepr is designed for hackerspaces with multiple users, but you can also use it
to manage your personal electronic part inventory.

Project Status
--------------

This project is currently in alpha stage. Code quality is improving constantly. However, this project is not ready for
production yet. Please try it out, but handle with care!

Note that currently some major refactoring takes place, if you want to keep track of the new development branch, please visit https://github.com/partkeepr/PartKeepr/tree/sf2migration.

Demo Site
---------

To test everything which has been written so far, please visit http://demo.partkeepr.org for a demo which is built from
the git sources once an hour.

Requirements
------------

PartKeepr needs:

* PHP 5.3.2 and up
* APC (see http://www.php.net/manual/en/apc.installation.php how to install it)
* Tokenizer Support
* A working PEAR installation
* A MySQL database (PostgreSQL support has been dropped, try at your own risk. Also, in theory, we support Oracle and MSSQL as well, but you have to install PartKeepr using the CLI setup).
* The Imagick pecl extension

Installation
------------

Simply point your browser to the "setup" directory and the installer will start.

Thanks
------

A very big "thank you" goes out to Georgyo of NYC resistor - although he claimed that he isn't creative, he invented the
name "PartKeepr" which eventually became the project's name.
