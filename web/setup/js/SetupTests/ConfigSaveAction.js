/**
 * Attempts to save the configuration file
 */
Ext.define('PartKeeprSetup.ConfigSaveAction', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Config File",
	message: "Saving the configuration file",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.mode = "save";
		this.params.step = "configfile";
	}
});