Ext.define('PartKeepr.Editor', {
    extend: 'Ext.form.Panel',
    alias: 'widget.Editor',
    trackResetOnLoad: true,
    bodyPadding: 10,
    record: null,		// The record which is currently edited
    saveText: i18n("Save"),
    cancelText: i18n("Cancel"),
    model: null,
    layout: 'anchor',
    change: false,
    autoScroll: true,
    defaults: {
        anchor: '100%',
        labelWidth: 150
    },
    enableButtons: true,
    titleProperty: 'name',
    editAfterSave: true,

    // If false, determinates if we should sync via the store or the record itself.
    // If true, always syncs the record via it's own proxy.
    syncDirect: false,

    initComponent: function ()
    {
        if (this.enableButtons) {
            this.saveButton = Ext.create("Ext.button.Button", {
                text: this.saveText,
                iconCls: 'fugue-icon disk',
                handler: Ext.bind(this._onItemSave, this)
            });

            this.cancelButton = Ext.create("Ext.button.Button", {
                text: this.cancelText,
                iconCls: 'web-icon cancel',
                handler: Ext.bind(this.onCancelEdit, this)
            });

            this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
                enableOverflow: true,
                margin: '10px',
                defaults: {minWidth: 100},
                dock: 'bottom',
                ui: 'footer',
                items: [this.saveButton, this.cancelButton]
            });

            Ext.apply(this, {
                dockedItems: [this.bottomToolbar]
            });
        }

        this.callParent();
    },
    onCancelEdit: function ()
    {
        this.fireEvent("editorClose", this);
    },
    newItem: function (defaults)
    {
        Ext.apply(defaults, {});
        var j = Ext.create(this.model, defaults);
        this.editItem(j);
    },
    editItem: function (record)
    {
        this.record = record;
        this.getForm().loadRecord(this.record);
        this.show();
        if (this.record.get(this.titleProperty) !== "") {
            this.setTitle(this.record.get(this.titleProperty));
        }

        this.change = false;
        this.fireEvent("startEdit", this);
    },
    getRecordId: function ()
    {
        if (this.record) {
            return this.record.getId();
        } else {
            return null;
        }
    },
    _onItemSave: function ()
    {
        // Disable the save button to indicate progress
        if (this.enableButtons) {
            this.saveButton.disable();

            // Sanity: If the save process fails, re-enable the button after 30 seconds
            // @todo This is quite a hack. Needs verification if that's still required
            Ext.defer(function ()
            {
                if (this.saveButton.getEl()) {
                    this.saveButton.enable();
                }
            }, 30000, this);
        }

        this.getForm().updateRecord(this.record);

        this.fireEvent("itemSave", this.record);

        this.record.save({
            callback: this._onSave,
            scope: this
        });
    },
    _onSave: function (record, response)
    {
        if (this.enableButtons) {
            // Re-enable the save button
            this.saveButton.enable();
        }

        if (response.success === true) {
            this.record = record;
            this.fireEvent("itemSaved", this.record);
        }

        if (this.editAfterSave) {
            this.editItem(record);
        }
    }
});
