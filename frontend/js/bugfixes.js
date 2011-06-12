
Ext.override(Ext.data.reader.Reader,
{
	 readRecords: function(data) {
		 	var dt = this.callOverridden(arguments);
		 	
		 	//if (dt.success === false) {
		 		//Ext.Msg.alert("Error", data.message);
		 	//}
		 	
		 	
		 	return dt;
	 }

		});


Ext.override(Ext.data.Connection, {
	/**
	 * Inject session header. I haven't found a better way to do
	 * it :(
	 */
	setupHeaders: function (xhr, options, data, params) {
		var session;
		
		if (!options.headers) {
			options.headers = {};
		}
		
		if (PartDB2.getApplication() !== null) {
			session = PartDB2.getApplication().getSession();
			if (session !== null) {
				options.headers.session = session;
			}
		}
		
		var headers = this.callOverridden(arguments);
		
		return headers;
	}

});

/**
 * Bugfix for selection on views which aren't bound
 */
Ext.selection.Model.override({
	/**
     * @private
     * Defines if the selection model is already bound to a store.
     */
	bound: false,
	
	constructor: function (cfg) {
		/**
         * @event _bind
         * Fires as soon as a store is bound
         */
		this.addEvents("_bind");
		
		this.callOverridden(arguments);
	},
	select: function(records, keepExisting, suppressEvent) {
		// Check if we are bound to a store. If not, delay the select operation until the store is bound
		if (this.bound) {
			this.doSelect(records, keepExisting, suppressEvent);
		} else {
			this.on("_bind", function () {
				this.doSelect(records, keepExisting, suppressEvent);
			}, this, { single: true });
		}
        
    },
    bind: function(store, initial) {
		this.callOverridden(arguments);
		
		this.bound = true;
		this.fireEvent("_bind");
	}
});

/*
Ext.selection.RowModel.override({
	views: [],
	
	
});*/

Ext.tree.View.override({
	/**
     * Expands all parent nodes so the child is visible.
     * @param {Ext.data.Model} record The record to make visible
     */
	ensureVisible: function (record) {
		if (!record) { return; }
		
		if (record.parentNode) {
			record.parentNode.expand();
			this.ensureVisible(record.parentNode);
		}
	},
	/**
     * Scrolls the specified record node into view
     * @param {Ext.data.Model} record The record to scroll into view
     */
	scrollIntoView: function (record) {
		var node = this.getNode(record);

		if (node) {
			node.scrollIntoView(this.getEl());
		}
	}
});