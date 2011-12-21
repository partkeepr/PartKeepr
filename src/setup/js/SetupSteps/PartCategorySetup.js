/**
 * Sets up the part categories
 */
Ext.define('PartKeeprSetup.PartCategorySetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up part categories",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "partcategory";
	}
});