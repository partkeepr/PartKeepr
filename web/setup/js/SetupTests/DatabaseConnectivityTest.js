/**
 * Tests if the database can be reached
 */
Ext.define('PartKeeprSetup.DatabaseConnectivityTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'testConnectivity',
    name: "Database",
    message: "Testing for database connectivity",
});
