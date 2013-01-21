/**
 * This class is responsible for executing a printing request and showing the
 * response from the server.
 */
Ext.define('PartKeepr.PrintingExecutor', {
	constructor: function () {
	},
	/**
	 * Send the print request to the server and get the incoming response.
	 * Afterwards the requested file will be opened.
	 *
	 * @param configId The ID of the configuration to use for printing.
	 * @param objectType The object type (full path) the ids are from
	 * @param ids The ids of the objects which should be printed.
	 */
	executePrint: function (configId, objectType, ids, target) {
		if (configId===null){
			Ext.Msg.alert(i18n("Error"),i18n("No Layout selected for printing. Please select a layout and try again."));
			return;
		}
		
		var call = new PartKeepr.ServiceCall(
				"Printing", 
				"startExport");
		call.setParameter("objectType",objectType);
		call.setParameter("configuration",configId);
		call.setParameter("target",target);
		call.setParameter("ids",ids.join(","));
		
		call.setHandler(Ext.bind(this.onPrintingFinished, this, [target === null], true ));
		call.doCall();
	},
	onPrintingFinished: function(reply, downloadDirectly) {
		if (downloadDirectly ) {
			window.open('file.php?id=' + reply.fileid + '&type=Print');
		}
	}
});
