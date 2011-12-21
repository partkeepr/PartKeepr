/**
 * Sets up the SI prefixes
 */
Ext.define('PartKeeprSetup.SiPrefixSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up the SI Prefixes",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "siprefix";
	}
});