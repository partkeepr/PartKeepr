Ext.define("PartKeepr.CategoryComboBox", {
    extend: "PartKeepr.Widgets.TreePicker",
    alias: 'widget.CategoryComboBox',

    triggers: {
        reload: {
            cls: "x-form-reload-trigger",
            weight: -1,
            handler: function ()
            {
                this.store.load();
            },
            scope: 'this'
        }
    },

    _oldValue: null,

    initComponent: function ()
    {
        this.listenersStore = this.store.on({
            scope: this,
            // Workaround to remember the value when loading
            beforeload: function ()
            {
                this._oldValue = this.getValue();
            },
            // Set the old value when load is complete
            load: function ()
            {
                if (this._oldValue !== null) {
                    this.setValue(this._oldValue);
                }
            }
        });

        this.callParent();
    }
});
