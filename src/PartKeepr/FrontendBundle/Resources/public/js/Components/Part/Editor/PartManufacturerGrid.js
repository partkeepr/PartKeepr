Ext.define('PartKeepr.PartManufacturerGrid', {
    extend: 'PartKeepr.BaseGrid',
    alias: 'widget.PartManufacturerGrid',
    border: false,
    initComponent: function ()
    {
        this.store = Ext.create("Ext.data.Store", {
            model: 'PartKeepr.PartBundle.Entity.PartManufacturer',
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json'
                }
            }

        });

        this.editing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        });

        this.plugins = [this.editing];

        this.deleteButton = Ext.create("Ext.button.Button", {
            text: 'Delete',
            disabled: true,
            itemId: 'delete',
            scope: this,
            iconCls: 'web-icon building_delete',
            handler: this.onDeleteClick
        });

        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
                    {
                        text: 'Add',
                        scope: this,
                        iconCls: 'web-icon building_add',
                        handler: this.onAddClick
                    }, this.deleteButton
                ]
            }
        ];

        this.columns = [
            {
                header: i18n("Manufacturer"),
                dataIndex: 'manufacturer',
                flex: 0.4,
                renderer: function (val, p, rec)
                {
                    if (rec.getManufacturer() !== null) {
                        return rec.getManufacturer().get("name");
                    } else {
                        return null;
                    }
                },
                editor: {
                    xtype: 'ManufacturerComboBox',
                    allowBlank: true,
                    returnObject: true
                }
            },
            {
                header: i18n("Part Number"),
                dataIndex: 'partNumber',
                flex: 0.4,
                editor: {
                    xtype: 'textfield',
                    allowBlank: true
                }
            }
        ];

        this.callParent();

        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
        this.on("edit", this.onEdit, this);
    },
    onEdit: function (editor, data)
    {
        var id = data.record.get("manufacturer_id");

        var rec = PartKeepr.getApplication().getManufacturerStore().findRecord("id", id);

        if (rec) {
            data.record.set("manufacturer_name", rec.get("name"));
        }
    },
    onAddClick: function ()
    {
        this.editing.cancelEdit();

        var rec = Ext.create("PartKeepr.PartBundle.Entity.PartManufacturer");

        this.store.insert(0, rec);

        this.editing.startEdit(0, 0);
    },
    onDeleteClick: function ()
    {
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
        }
    },
    onSelectChange: function (selModel, selections)
    {
        this.deleteButton.setDisabled(selections.length === 0);
    }
});
