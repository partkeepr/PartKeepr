/**
 * Tests if the database can be reached
 */
Ext.define('PartKeeprSetup.DatabaseVersionTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'testDBVersion',
    name: "Database",
    message: "Testing for valid database version",
});
