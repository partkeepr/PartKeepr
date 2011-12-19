/**
 * A minimalistic PHP check to make sure PHP is installed on the server and activated as PHP module.
 */
Ext.define('PartKeeprSetup.DatabaseConnectivityTest', {
	extend: 'PartKeeprSetup.BaseSetupTest',
	url: 'tests/check-database-connectivity.php',
	name: "Database",
	message: "Testing for database connectivity"
});