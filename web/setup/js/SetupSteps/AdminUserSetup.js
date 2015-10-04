/**
 * Creates the administrative user
 */
Ext.define('PartKeeprSetup.AdminUserSetup', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'setup.php',
	name: "Database",
	message: "Setting up the admin user",
	
	onBeforeRunTest: function () {
		this.params = Ext.getCmp("database-parameters-card").dbparams;
		this.params.step = "adminuser";
	}
});
