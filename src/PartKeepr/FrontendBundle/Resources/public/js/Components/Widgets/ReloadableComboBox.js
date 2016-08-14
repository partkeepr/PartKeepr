Ext.define("PartKeepr.ReloadableComboBox", {
    extend: "Ext.form.field.ComboBox",
    alias: 'widget.ReloadableComboBox',
    displayField: 'name',
    valueField: '@id',
    autoSelect: true,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: true,
    editable: true,
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
    initComponent: function ()
    {
        this.listenersStore = this.store.on({
            scope: this,
            // Workaround to remember the value when loading
            beforeload: function ()
            {
                this._oldValue = this.getSelection();
            },
            // Set the old value when load is complete
            load: function ()
            {
                this.setSelection(this._oldValue);
            }
        });

        this.callParent();
    },
    getErrors: function (value)
    {
        var errors = this.callParent([value]);

        if (this.allowBlank !== true) {
            if (this.getValue() === null) {
                errors.push(i18n("This field is required"));
            }
        }

        return errors;
    }
});
