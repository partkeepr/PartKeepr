Ext.define('PartKeepr.Components.UserPreferences.Preferences.StockConfiguration', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {
        this.confirmInlineStockLevelChangesCheckbox = Ext.create("Ext.form.field.Checkbox", {
                boxLabel: i18n("Confirm in-line stock level changes from the parts grid")
            });

            if (PartKeepr.getApplication().getUserPreference("partkeepr.inline-stock-change.confirm", true) === false) {
    			this.confirmInlineStockLevelChangesCheckbox.setValue(false);
    		} else {
    			this.confirmInlineStockLevelChangesCheckbox.setValue(true);
    		}

            this.items = [ this.confirmInlineStockLevelChangesCheckbox ];

            this.callParent();
    },
    onSave: function ()
    {
        PartKeepr.getApplication().setUserPreference("partkeepr.inline-stock-change.confirm", 
        this.confirmInlineStockLevelChangesCheckbox.getValue());
    },
    statics: {
        iconCls: 'web-icon brick',
        title: i18n('Stock'),
        menuPath: [{iconCls: 'fugue-icon ui-scroll-pane-image', text: i18n("User Interface")}]
    }
});
