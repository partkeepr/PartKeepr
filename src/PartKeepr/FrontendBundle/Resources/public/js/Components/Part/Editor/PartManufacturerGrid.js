Ext.define('PartKeepr.PartManufacturerGrid', {
    extend: 'PartKeepr.BaseGrid',
    alias: 'widget.PartManufacturerGrid',
    border: false,
    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI'
    },
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
            clicksToEdit: 2
        });

        this.plugins = [this.editing];

        this.deleteButton = Ext.create("Ext.button.Button", {
            text: 'Delete',
            disabled: true,
            itemId: 'delete',
            scope: this,
            iconCls: 'fugue-icon building--minus',
            handler: this.onDeleteClick
        });

        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
                    {
                        text: 'Add',
                        scope: this,
                        iconCls: 'fugue-icon building--plus',
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
                    allowBlank: this.isOptional("partNumber")
                }
            }
        ];

        this.callParent();

        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
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
       this.store.remove(this.getView().getSelectionModel().getSelection());
    },
    onSelectChange: function (selModel, selections)
    {
        this.deleteButton.setDisabled(selections.length === 0);
    },
    isOptional: function (field)
    {
        var fields = PartKeepr.getApplication().getSystemPreference("partkeepr.partManufacturer.requiredFields", []);

        if (Ext.Array.contains(fields, field)) {
            return false;
        } else {
            return true;
        }
    }
});
