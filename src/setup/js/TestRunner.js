Ext.define('PartKeeprSetup.TestRunner', {
	extend: 'Ext.util.Observable',
	
	run: function (tests) {
		test = tests.shift();
		
		if (!test) {
			return;
		}
		
		test.on("complete", function () { this.run(tests); }, this);
		test.run();
		
	}
});