# Functional / Unit Testing


## Prerequisites

In order to run functional / unit tests, you first need to define the following environment variable to specify
which test database you are using:

`export SYMFONY__TESTDB=<databasetype>`

The following databases are pre-configured in `config_test.yml`:

- `mysql`
- `pgsql`
- `sqlite`

Note that the database connections are configured for travis testing; you might need to change the database name,
user and password properties.

## Running the tests
 
The unit tests are ran by `phpunit -c app/`. This also generates a coverage report in the directory
`reports/coverage`.

If you need to run individual tests, you can do so by using the following command:

`phpunit -c app/ <yourtestcase>`

Full example:

`phpunit -c app/ src/PartKeepr/AuthBundle/Tests/Controller/DefaultControllerTest`
