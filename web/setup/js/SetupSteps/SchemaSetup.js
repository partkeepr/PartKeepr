/**
 * Sets up the database schema
 */
Ext.define('PartKeeprSetup.SchemaSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up the database schema",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "schema";
	}
});