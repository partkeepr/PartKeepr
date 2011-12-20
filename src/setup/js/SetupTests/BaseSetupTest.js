/**
 * Represents a test.
 * 
 * Calls a specific PHP file on the server and
 * interprets the response.
 */
Ext.define('PartKeeprSetup.BaseSetupTest', {
	extend: 'Ext.util.Observable',
	
	/**
	 * Defines the URL to call
	 */
	url: 'check.php',
	
	/**
	 * Defines if the call was successful or not.
	 */
	success: false,
	
	/**
	 * Defines the callback. This needs to be
	 * an object which implements the "appendTestResult" method.
	 */
	callback: null,
	
	/**
	 * Defines the name of this test.
	 */
	name: null,
	
	/**
	 * Defines additional parameters which are to
	 * be sent with the request. The format is an object,
	 * e.g.
	 * {
	 *    username: "foo",
	 *    password: "bar"
	 * }
	 * 
	 * 
	 */
	params: null,
	
	/**
	 * Constructs the test
	 */
	constructor: function () {
		this.addEvents({
            "complete" : true
        });
	},
	/**
	 * Runs a given test, and processes the response
	 */
	run: function () {
		Ext.Ajax.request({
			url: this.url,
			success: this.onSuccess,
			scope: this,
			params: this.params
		});
	},
	
	/**
	 * Callback for the Ext.Ajax.request method.
	 * Decodes the response, sets the object
	 * parameters, fires the "complete" event
	 * and calls back the test result panel.
	 * 
	 * @param response
	 */
	onSuccess: function (response) {
		var obj = Ext.decode(response.responseText);
		
		if (obj.error == false) {
			this.success = true;
		} else {
			this.success = false;
			this.errorMessage = obj.errormessage;
		}
		
		if (this.callback) {
			this.callback.appendTestResult(this);
		}
		this.fireEvent("complete");
	}
});