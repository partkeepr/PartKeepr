/**
 * This card runs the prequisites test to make sure basic things like PHP and Doctrine are installed and configured.
 */
Ext.define('PartKeeprSetup.PrequisitesTestCard', {
	extend: 'PartKeeprSetup.AbstractTestCard',
	
	cardMessage: "Setup now checks if your server is capable of running PartKeepr.",
	title: 'Checking prequisites',
	/**
	 * Sets up all tests
	 */
	setupTests: function () {
    	this.tests.push(new PartKeeprSetup.PHPTest());
    	this.tests.push(new PartKeeprSetup.PHPPrequisitesTest());
    	this.tests.push(new PartKeeprSetup.PHPSettingsTest());
    	this.tests.push(new PartKeeprSetup.DoctrineTest());
    	this.tests.push(new PartKeeprSetup.FilesystemPermissionTest());
	}
});
