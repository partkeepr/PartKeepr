/**
 * This card runs the prequisites test to make sure basic things like PHP and Doctrine are installed and configured.
 */
Ext.define('PartKeeprSetup.PrequisitesTestCard', {
	extend: 'Ext.ux.wizard.Card',
	
	/**
	 * Contains the test results for this card
	 * @var PartKeeprSetup.TestResultPanel
	 */
	testResultPanel: null,
	
	/**
	 * Contains the initially hidden "Re-test" button to re-trigger the tests.
	 */
	retestButton: null,
	
	/**
	 * Various Style Settings
	 */
	title: 'Checking prequisites',
	showTitle: true,
	titleCls: '',
	titleStyle: 'font-size: 2.5em;',
	cls: 'x-partkeepr-setup-basecard',
    
    autoScroll: true,
    
    
    
	/**
	 * Inits the component
	 */
	initComponent: function () {
		this.testResultPanel = Ext.create("PartKeeprSetup.TestResultPanel");
		this.testResultPanel.on("test-error", this.onTestError, this);
		
		this.retestButton = Ext.create("Ext.button.Button", {
			text: 'Re-run checks',
			hidden: true
		});
		
		this.retestButton.on("click", this.retest, this);
		
		this.items = [{
             border: false,
             bodyStyle: 'background:none;padding-bottom: 10px;',
             html: 'Setup now checks if your server is capable of running PartKeepr.'
         },
         this.testResultPanel,
         this.retestButton ];
		
		this.callParent();
		this.on("activate", this.onActivate, this);
	},
	retest: function () {
		this.retestButton.hide();
		this.runTests();
	},
	onActivate: function () {
		this.ownerCt.ownerCt.nextButton.setDisabled(true);
		this.retestButton.hide();
		this.runTests();
	},
	runTests: function () {
		this.testResultPanel.clear();
		
		var tests = new Array();
		
		var j = Ext.create("PartKeeprSetup.PHPTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.PHPPrequisitesTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.DoctrineTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.PHPSettingsTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.FilesystemPermissionTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var tr = Ext.create("PartKeeprSetup.TestRunner");
    	tr.run(tests);
    	tr.on("success", this.onTestSuccessful, this);
	},
	onTestError: function () {
		this.retestButton.show();
	},
	onTestSuccessful: function () {
		this.ownerCt.ownerCt.nextButton.setDisabled(false);
	}
});
