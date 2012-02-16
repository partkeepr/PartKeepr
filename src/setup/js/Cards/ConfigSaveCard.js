/**
 * This card attempts to save the configuration file.
 * 
 */
Ext.define('PartKeeprSetup.ConfigSaveCard', {
	extend: 'Ext.panel.Panel',
	
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
	 * Contains the test which will be run
	 * @var array
	 */
	tests: null,
	
	border: false,
	
	bodyStyle: 'background: none;',
	
	rerunTestText: "Retry",

	/**
	 * Inits the component
	 */
	initComponent: function () {
		this.testResultPanel = Ext.create("PartKeeprSetup.TestResultPanel", {
			
		});
		
		this.testResultPanel.on("test-error", this.onTestError, this);
		
		this.retestButton = Ext.create("Ext.button.Button", {
			text: this.rerunTestText,
			hidden: true
		});
		
		this.retestButton.on("click", this.retest, this);
		
		this.items = [{
             border: false,
             bodyStyle: 'background:none;padding-bottom: 10px;',
             html: this.cardMessage
         },
         this.testResultPanel,
         this.retestButton ];
		
		this.tests = new Array();
		
		this.testRunner = Ext.create("PartKeeprSetup.TestRunner");
		this.testRunner.on("success", this.onTestSuccessful, this);
		
		this.setupTests();
		this.callParent();
		this.on("activateCard", this.onActivate, this);
	},
	/**
	 * Re-runs the configured tests and hides the Re-test button,
	 * because we don't know if the tests will be successful.
	 */
	retest: function () {
		this.retestButton.hide();
		this.runTests();
	},
	/**
	 * Called when an error occurs. Shows the "re-test" button
	 * and disables the "next" button.
	 */
	onTestError: function () {
		this.retestButton.show();
		this.ownerCt.ownerCt.ownerCt.nextButton.setDisabled(true);
	},
	/**
	 * Called when all tests are successful. Hides the "re-test"
	 * button and enables the "next" button.
	 */
	onTestSuccessful: function () {
		this.retestButton.hide();
		this.ownerCt.ownerCt.ownerCt.nextButton.setDisabled(false);
	},
	/**
	 * Invokes the test runner with all configured tests
	 */
	runTests: function () {
		this.testResultPanel.clear();
    	
    	// We need to clone the test array, because we wouldn't be able to run all tests twice
    	var clonedTests = this.tests.slice(0);
    	this.testRunner.run(clonedTests, this.testResultPanel);
    	
	},
	/**
	 * When the card is activated, automatically invoke all tests.
	 */
	onActivate: function () {
		this.ownerCt.ownerCt.ownerCt.nextButton.setDisabled(true);
		this.retestButton.hide();
		
		this.runTests();
	},
	/**
	 * This method needs to be overridden by subclasses. Subclasses
	 * need to append tests to the "tests" array, e.g.
	 * 
	 * var j = Ext.create("PartKeeprSetup.FilesystemPermissionTest");
     * j.callback = this.testResultPanel;
     * this.tests.push(j);
     * 
	 */
	setupTests: function () {
    	this.tests.push(new PartKeeprSetup.ConfigSaveAction());
	}
});
