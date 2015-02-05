Ext.define('PartKeepr.UserPreferenceGrid', {
	extend: 'PartKeepr.BaseGrid',

	columnLines: true,
	
	columns: [{
       	  	header: i18n("Key"),
       	  	dataIndex: 'key',
       	  	flex: 0.3,
       	  	minWidth: 200,
       	  	renderer: Ext.util.Format.htmlEncode
		},{
			header: i18n("Value"),
			dataIndex: 'value',
			flex: 0.7,
			minWidth: 200,
			renderer: Ext.util.Format.htmlEncode
         }],
    userId: null,
    
	initComponent: function () {
		this.deleteButton = Ext.create("Ext.button.Button", {
            text: i18n('Delete'),
            disabled: true,
            itemId: 'delete',
            scope: this,
            icon: 'resources/silkicons/delete.png',
            handler: this.onDeleteClick
        });
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [
            this.deleteButton
            ]
        }];
		this.store = Ext.create("Ext.data.Store", {
			model: 'PartKeepr.UserPreference',
			pageSize: -1
    	});
		
		this.callParent();
		
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	onDeleteClick: function () {
		var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
        	// Set phantom to false because ExtJS has problems with PK-less thingies
        	selection.phantom = false;
            this.store.remove(selection);
        }
	},
	onSelectChange: function(selModel, selections){
        this.deleteButton.setDisabled(selections.length === 0);
    },
    syncPreferences: function () {
    	/* Iterate through all removed records and issue an AJAX
    	 * call. This is necessary because the server side doesn't suport string
    	 * keys and ExtJS can't handle composite keys.
    	 */
    	for (var j=0;j<this.store.removed.length;j++) {
    		var call = new PartKeepr.ServiceCall("UserPreference", "destroy");
			call.setParameter("key", this.store.removed[j].get("key"));
			call.setParameter("user_id", this.store.removed[j].get("user_id"));
			call.doCall();
    	}
    	
    	this.store.removed = [];
    }
});
