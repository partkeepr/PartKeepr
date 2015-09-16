# Functional / Unit Testing

In order to run functional / unit tests, you first need to define the following environment variable to specify
which test database you are using:

`export SYMFONY__TESTDB=<databasetype>`

The following databases are supported:

- `mysql`
- `pgsql`
- `sqlite`
 
The unit tests are ran by `phpunit -c app/`. This also generates a coverage report in the directory
`reports/coverage`.

If you need to run individual tests, you can do so by using the following command:

`phpunit -c app/ <yourtestcase>`

Full example:

`phpunit -c app/ src/PartKeepr/AuthBundle/Tests/Controller/DefaultControllerTest`
