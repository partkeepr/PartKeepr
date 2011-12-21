/**
 * Migrates the schema to the latest version
 */
Ext.define('PartKeeprSetup.SchemaMigrationSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Migrating the schema to the latest version",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "schemamigration";
	}
});