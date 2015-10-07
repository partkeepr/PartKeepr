/**
 * This class represents an abstract test card. The purpose of this card is to run
 * specific tests, display the test results and offer a "re-test" button which the
 * user can click in order to perform the tests.
 *
 * Additionally, the "next" button of the wizward will be disabled if the test fails.
 */
Ext.define('PartKeeprSetup.AbstractTestCard', {
    extend: 'Ext.Container',

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
    autoScroll: true,

    rerunTestText: "Re-run checks",

    margin: 20,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    /**
     * Inits the component
     */
    initComponent: function ()
    {
        this.testResultPanel = Ext.create("PartKeeprSetup.TestResultPanel", {
            flex: 1
        });
        this.testResultPanel.on("test-error", this.onTestError, this);

        this.retestButton = Ext.create("Ext.button.Button", {
            text: this.rerunTestText,
            hidden: true,
            height: 20
        });

        this.retestButton.on("click", this.retest, this);

        this.items = [
            {
                border: false,
                bodyStyle: 'background:none;padding-bottom: 10px;',
                height: 20,
                html: this.cardMessage
            },
            this.testResultPanel,
            this.retestButton
        ];

        this.tests = new Array();

        this.testRunner = Ext.create("PartKeeprSetup.TestRunner");
        this.testRunner.on("success", this.onTestSuccessful, this);

        this.setupTests();
        this.callParent();
        this.on("activate", this.onActivate, this);
    },

    /**
     * Re-runs the configured tests and hides the Re-test button,
     * because we don't know if the tests will be successful.
     */
    retest: function ()
    {
        this.retestButton.hide();
        this.runTests();
    },
    /**
     * Called when an error occurs. Shows the "re-test" button
     * and disables the "next" button.
     */
    onTestError: function ()
    {
        this.retestButton.show();
        Ext.ComponentQuery.query('#nextBtn')[0].disable();
    },
    /**
     * Called when all tests are successful. Hides the "re-test"
     * button and enables the "next" button.
     */
    onTestSuccessful: function ()
    {
        this.retestButton.hide();

        Ext.ComponentQuery.query('#nextBtn')[0].enable();
    },
    /**
     * Invokes the test runner with all configured tests
     */
    runTests: function ()
    {
        this.testResultPanel.clear();

        // We need to clone the test array, because we wouldn't be able to run all tests twice
        var clonedTests = this.tests.slice(0);
        this.testRunner.run(clonedTests, this.testResultPanel);

    },
    /**
     * When the card is activated, automatically invoke all tests.
     */
    onActivate: function ()
    {
        Ext.ComponentQuery.query('#nextBtn')[0].disable();
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
    setupTests: function ()
    {
        window.alert("The method setupTests() need to be overridden in a subclass!");
    }
});
	
