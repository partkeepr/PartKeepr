/**
 * This card runs the prequisites test to make sure basic things like PHP and Doctrine are installed and configured.
 */
Ext.define('PartKeeprSetup.PrequisitesTestCard', {
	extend: 'PartKeeprSetup.AbstractTestCard',
	
	cardMessage: "Setup now checks if your server is capable of running PartKeepr.",

	/**
	 * Sets up all tests
	 */
	setupTests: function () {
		var j = Ext.create("PartKeeprSetup.PHPTest");
    	j.callback = this.testResultPanel;
    	this.tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.PHPPrequisitesTest");
    	j.callback = this.testResultPanel;
    	this.tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.PHPSettingsTest");
    	j.callback = this.testResultPanel;
    	this.tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.DoctrineTest");
    	j.callback = this.testResultPanel;
    	this.tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.FilesystemPermissionTest");
    	j.callback = this.testResultPanel;
    	this.tests.push(j);
	}
});
