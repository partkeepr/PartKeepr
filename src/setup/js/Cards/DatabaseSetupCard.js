/**
 * This card tests the database connectivity for the MySQL database.
 * 
 * Basically this submits all connection settings to a special PHP script,
 * which then attempts to establish the database connection.
 */
Ext.define('PartKeeprSetup.DatabaseSetupCard', {
	extend: 'PartKeeprSetup.AbstractTestCard',
	
	cardMessage: "PartKeepr is now being set-up.",
	title: 'PartKeepr is now being set-up, please wait',
	rerunTestText: "Re-run setup",
	/**
	 * Sets up the tests
	 */
	setupTests: function () {
    	this.tests.push(new PartKeeprSetup.SchemaSetup());
    	this.tests.push(new PartKeeprSetup.AdminUserSetup());
    	this.tests.push(new PartKeeprSetup.PartUnitSetup());
    	this.tests.push(new PartKeeprSetup.FootprintSetup());
    	this.tests.push(new PartKeeprSetup.PartCategorySetup());
    	this.tests.push(new PartKeeprSetup.SiPrefixSetup());
    	this.tests.push(new PartKeeprSetup.UnitSetup());
    	this.tests.push(new PartKeeprSetup.ManufacturerSetup());
    	this.tests.push(new PartKeeprSetup.SchemaMigrationSetup());
    	this.tests.push(new PartKeeprSetup.MiscSetup());
	}
});
