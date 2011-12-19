Ext.define('PartKeeprSetup.TestRunner', {
	extend: 'Ext.util.Observable',
	
	initComponent: function () {
		this.addEvents("success");
		
		this.callParent();
	},
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