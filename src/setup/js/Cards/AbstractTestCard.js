/**
 * This class represents an abstract test card. The purpose of this card is to run
 * specific tests, display the test results and offer a "re-test" button which the
 * user can click in order to perform the tests.
 * 
 * Additionally, the "next" button of the wizward will be disabled if the test fails.
 */
Ext.define('PartKeeprSetup.AbstractTestCard', {
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
	 * Contains the test which will be run
	 * @var array
	 */
	tests: null,
	
	/**
	 * Text which will be shown above the test result panel.
	 * @var string 
	 */
	cardMessage: null,
	
	/**
	 * Various Style Settings
	 */
	title: 'Checking Database Connectivity',
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
             html: this.cardMessage
         },
         this.testResultPanel,
         this.retestButton ];
		
		this.tests = new Array();
		this.setupTests();
		this.callParent();
		this.on("activate", this.onActivate, this);
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
		this.ownerCt.ownerCt.nextButton.setDisabled(true);
	},
	/**
	 * Called when all tests are successful. Hides the "re-test"
	 * button and enables the "next" button.
	 */
	onTestSuccessful: function () {
		this.retestButton.hide();
		this.ownerCt.ownerCt.nextButton.setDisabled(false);
	},
	/**
	 * Invokes the test runner with all configured tests
	 */
	runTests: function () {
		this.testResultPanel.clear();
    	
    	var tr = Ext.create("PartKeeprSetup.TestRunner");
    	
    	// We need to clone the test array, because we wouldn't be able to run all tests twice
    	var clonedTests = this.tests.slice(0);
    	tr.run(clonedTests);
    	tr.on("success", this.onTestSuccessful, this);
	},
	/**
	 * When the card is activated, automatically invoke all tests.
	 */
	onActivate: function () {
		this.ownerCt.ownerCt.nextButton.setDisabled(true);
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
		window.alert("The method setupTests() need to be overridden in a subclass!");
	}
});
	
