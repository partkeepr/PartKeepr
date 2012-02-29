Ext.override(Ext.data.reader.Json, {
	getResponseData: function(response) {
        var data;
        try {
            data = Ext.decode(response.responseText);
        }
        catch (ex) {
        	var exception = {
        			message: i18n("Critical Error"),
        			detail: i18n("The server returned a response which we were not able to interpret.")
        	};
        	
        	var request = {
        			response: response.responseText
        	};
        	
        	PartKeepr.ExceptionWindow.showException(exception, request);
        }

        return data;
    }
});