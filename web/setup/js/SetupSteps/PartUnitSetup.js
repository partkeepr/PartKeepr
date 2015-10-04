/**
 * Creates the part units
 */
Ext.define('PartKeeprSetup.PartUnitSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up the part units",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "partunit";
	}
});