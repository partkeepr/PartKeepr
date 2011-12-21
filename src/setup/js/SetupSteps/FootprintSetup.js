/**
 * Sets up the footprints
 */
Ext.define('PartKeeprSetup.FootprintSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up the default footprints",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "footprint";
	}
});