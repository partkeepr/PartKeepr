/**
 * This card runs the prequisites test to make sure basic things like PHP and Doctrine are installed and configured.
 */
Ext.define('PartKeeprSetup.PrerequisitesTestCard', {
	extend: 'PartKeeprSetup.AbstractTestCard',
	
	cardMessage: "Setup now checks if your server is capable of running PartKeepr.",
	breadCrumbTitle: 'Checking prerequisites',
	/**
	 * Sets up all tests
	 */
	setupTests: function () {
    	this.tests.push(new PartKeeprSetup.PHPTest());
    	this.tests.push(new PartKeeprSetup.PHPPrerequisitesTest());
    	this.tests.push(new PartKeeprSetup.PHPSettingsTest());
	}
});
