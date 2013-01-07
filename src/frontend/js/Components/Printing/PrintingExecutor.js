/**
 * This class is responsible for executing a printing request and showing the
 * response from the server.
 */
Ext.define('PartKeepr.PrintingExecutor', {
	constructor: function () {
		 // TODO: Is there a better way of requesting this service? I think we
		 // do not need a store here, since it is only a single request without
		 // the need to store data for a longer time.
		this.storePrintingService = Ext.create("Ext.data.Store", {
    		model: 'PartKeepr.PrintingResponse',
    		proxy: {
    			type: 'ajax',
    	        reader: {
    	            type: 'json',
    	            root: 'response'
    	        },
    	        url : 'service.php',
    	        extraParams: {
    	        	"service": "Printing",
    	        	"call": "startExport",
   	        		"ids": "",
   	        		"objectType":"",
   	        		"configuration": ""
   	        	},
    	        headers: {
    	        	session :PartKeepr.getApplication().getSession()
    	        }
    	    },
    	    autoLoad: false
    	});
	},
	/**
	 * Send the print request to the server and get the incoming response.
	 * Afterwards the requested file will be opened.
	 *
	 * @param configId The ID of the configuration to use for printing.
	 * @param objectType The object type (full path) the ids are from
	 * @param ids The ids of the objects which should be printed.
	 */
	executePrint: function (configId, objectType, ids) {
		if (configId===null){
			Ext.Msg.alert(i18n("Error"),i18n("No Layout selected for printing. Please select a layout and try again."));
			return;
		}

		this.storePrintingService.getProxy().extraParams.objectType = objectType;
		this.storePrintingService.getProxy().extraParams.configuration = configId;
		this.storePrintingService.getProxy().extraParams.ids = ids.join(",");
		this.storePrintingService.load({
			callback : function(r, options, success) {
				if (success ){
					window.open('file.php?id=' + r[0].data.fileid + '&type=Print');
				}
            }
		}
		);
	}
});
