# Functional / Unit Testing

Unit tests are usually ran by calling `phpunit -c app/`. This also generates a coverage report in the directory
`reports/coverage`.

If you need to run individual tests, you can do so by using the following command:

`phpunit -c app/ <yourtestcase>`

Full example:

`phpunit -c app/ src/PartKeepr/AuthBundle/Tests/Controller/DefaultControllerTest`
