Running the NestedSet Test Suite
================================


## Install Test suite Dependencies

### PHPUnit

PHPUnit 3.5.0 or later is required.  As of writing, PHPUnit 3.5 is not stable.
The easiest way to install it is via Git:

    $ git clone git://github.com/sebastianbergmann/phpunit.git
    $ cd phpunit
    $ pear package
    $ pear install PHPUnit-3.5.XXX.tgz


### Doctrine2

The ORM, DBAL, and Common Doctrine2 components are required.  The default
location is

> doctrine2-nestedset/vendor

Use the `install_vendors.sh` script to install the necessary dependencies:

    $ cd doctrine2-nestedset/tests
    $ ./install_vendors.sh

Alternatively, you can modify the `autoload.php` file for your Doctrine2
installation directories.


### Sqlite

Sqlite and the PHP bindings for sqlite are required.  Consult your
distribution's documentation for installation instructions.  For example, on
Ubuntu:

    $ sudo apitutude install sqlite3 php5-sqlite


## Run Tests

To run all tests:

    $ cd doctrine2-nestedset/tests/
    $ phpunit


To generate code coverage (requires XDebug):

    $ cd doctrine2-nestedset/tests/
    $ phpunit --coverage-html=cov/

Check the code coverage by opening `cov/index.html` page in a browser.
