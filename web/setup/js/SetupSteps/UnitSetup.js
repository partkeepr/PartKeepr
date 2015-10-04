/**
 * Sets up the default units
 */
Ext.define('PartKeeprSetup.UnitSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up the default units",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "unit";
	}
});