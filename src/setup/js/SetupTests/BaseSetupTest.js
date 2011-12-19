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
	callback: null,
	name: null,
	
	constructor: function () {
		this.addEvents({
            "complete" : true
        });
	},
	/**
	 * Runs a given test, and processes the response
	 */
	run: function () {
		console.log(this.params);
		Ext.Ajax.request({
			url: this.url,
			success: this.onSuccess,
			scope: this,
			params: this.params
		});
	},
	
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