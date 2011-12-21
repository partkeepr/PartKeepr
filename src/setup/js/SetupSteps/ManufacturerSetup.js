/**
 * Sets up the Manufacturers
 */
Ext.define('PartKeeprSetup.ManufacturerSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up the default manufacturers",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "manufacturer";
	}
});