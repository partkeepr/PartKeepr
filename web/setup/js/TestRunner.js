/**
 * Implements a sequential test runner, which waits for previous tests to complete.
 * 
 * This is used with asynchronous tests.
 */
Ext.define('PartKeeprSetup.TestRunner', {
	extend: 'Ext.util.Observable',
	
	/**
	 * Initialize the component
	 */
	initComponent: function () {
		this.callParent();
	},
	/**
	 * Runs the given tests. Each test must fire the "complete" event in
	 * order to be runable.
	 * 
	 * @param tests An array of tests
	 */
	run: function (tests, callback) {
		test = tests.shift();
		this.tests = tests;
		
		if (!test) {
			this.fireEvent("success");
			return;
		}
		
		test.callback = callback;
		
		/**
		 * We re-assign the event handler on each cycle due to the asynchronous nature of the ajax requests.
		 */
		test.on("complete", this.onTestComplete, this);
		test.run();
	},
	/**
	 * Callback when the test is complete
	 * @param test The test which was run
	 */
	onTestComplete: function (test) {
		test.un(this.onTestComplete);
		this.run(this.tests, test.callback);
	}
});
