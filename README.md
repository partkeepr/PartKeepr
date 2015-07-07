[![JSON-LD enabled](http://json-ld.org/images/json-ld-button-88.png)](http://json-ld.org)
[![Build Status](https://travis-ci.org/partkeepr/PartKeepr.svg)](https://travis-ci.org/partkeepr/PartKeepr.svg)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/a9f5bdce-ac86-4c51-b87d-56fd0f241155/mini.png)](https://insight.sensiolabs.com/projects/a9f5bdce-ac86-4c51-b87d-56fd0f241155)
[![Code Climate](https://codeclimate.com/github/partkeepr/PartKeepr/badges/gpa.svg)](https://codeclimate.com/github/partkeepr/PartKeepr)
[![Test Coverage](https://codeclimate.com/github/partkeepr/PartKeepr/badges/coverage.svg)](https://codeclimate.com/github/partkeepr/PartKeepr/coverage)
[![Dependency Status](https://www.versioneye.com/user/projects/559c33736166340021000b1f/badge.svg?style=flat)](https://www.versioneye.com/user/projects/559c33736166340021000b1f)

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
