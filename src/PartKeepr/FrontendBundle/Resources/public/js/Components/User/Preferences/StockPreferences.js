Ext.define('PartKeepr.StockPreferencesPanel', {
	extend: 'Ext.form.FormPanel',
	title: i18n("Stock Preferences"),
        bodyStyle: 'background:#DBDBDB;padding: 10px;',
        initComponent: function () {
            this.confirmInlineStockLevelChangesCheckbox = Ext.create("Ext.form.field.Checkbox", {
                boxLabel: i18n("Confirm in-line stock level changes from the parts grid"),
                handler: Ext.bind(this.confirmInlineStockLevelChangesHandler, this)
            });

            if (PartKeepr.getApplication().getUserPreference("partkeepr.inline-stock-change.confirm") == false) {
    			this.confirmInlineStockLevelChangesCheckbox.setValue(false);
    		} else {
    			this.confirmInlineStockLevelChangesCheckbox.setValue(true);
    		}
            
            this.items = [ this.confirmInlineStockLevelChangesCheckbox ];
                   
            this.callParent();
    },
    /**
	 * Handler when the "confirm changes" checkbox was clicked. 
	 */
    confirmInlineStockLevelChangesHandler: function (checkbox, checked) {
		PartKeepr.getApplication().setUserPreference("partkeepr.inline-stock-change.confirm", checked);
	}
});
