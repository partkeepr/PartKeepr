/**
 * Tests if the database can be reached
 */
Ext.define('PartKeeprSetup.DatabaseConnectivityTest', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'tests/check-database-connectivity.php',
	name: "Database",
	message: "Testing for database connectivity",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
	}
});