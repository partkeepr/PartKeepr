Ext.define('PartKeeprSetup.TestResultPanel', {
	extend: 'Ext.panel.Panel',
	
	appendTestResult: function (test) {
		var response;
		
		if (test.success) {
			response = "OK";	
		} else {
			response = "Error. "+test.errorMessage
		}
		
		this.add({
			html: test.message +"..."+response
		});
	}
});