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
		this.addEvents("success");
		
		this.callParent();
	},
	/**
	 * Runs the given tests. Each test must fire the "complete" event in
	 * order to be runable.
	 * 
	 * @param tests An array of tests
	 */
	run: function (tests) {
		test = tests.shift();
		
		if (!test) {
			this.fireEvent("success");
			return;
		}
		
		test.on("complete", function () { this.run(tests); }, this);
		test.run();
	}
});