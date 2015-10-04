/**
 * Sets up the default units
 */
Ext.define('PartKeeprSetup.MiscSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up misc settings",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "miscsettings";
	}
});