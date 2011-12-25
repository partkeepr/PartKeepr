/**
 * Sets up the default units
 */
Ext.define('PartKeeprSetup.ConfigFileSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Creating the configuration file",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "configfile";
	}
});