Ext.define('PartKeepr.PartDistributorGrid', {
    extend: 'PartKeepr.BaseGrid',
    alias: 'widget.PartDistributorGrid',
    border: false,
    initComponent: function ()
    {
        this.store = Ext.create("Ext.data.Store", {
            model: 'PartKeepr.PartBundle.Entity.PartDistributor',
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json'
                }
            }

        });

        this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        this.plugins = [this.editing];

        this.deleteButton = Ext.create("Ext.button.Button", {
            text: 'Delete',
            disabled: true,
            itemId: 'delete',
            scope: this,
            iconCls: 'web-icon lorry_delete',
            handler: this.onDeleteClick
        });

        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
                    {
                        text: 'Add',
                        scope: this,
                        iconCls: 'web-icon lorry_add',
                        handler: this.onAddClick
                    }, this.deleteButton
                ]
            }
        ];

        this.columns = [
            {
                header: i18n("Distributor"),
                dataIndex: 'distributor',
                renderer: function (val, p, rec)
                {
                    if (rec.getDistributor() !== null) {
                        return rec.getDistributor().get("name");
                    } else {
                        return null;
                    }
                },
                flex: 1,
                editor: {
                    xtype: 'DistributorComboBox',
                    returnObject: true,
                    allowBlank: true
                }
            }, {
                header: i18n("Order Number"),
                dataIndex: 'orderNumber',
                flex: 1,
                editor: {
                    xtype: 'textfield',
                    allowBlank: true
                }
            }, {
                header: i18n("Packaging Unit"),
                dataIndex: 'packagingUnit',
                flex: 1,
                editor: {
                    xtype: 'numberfield',
                    allowDecimals: false,
                    allowBlank: false,
                    minValue: 1
                }
            }, {
                header: i18n("Price per Item"),
                dataIndex: 'price',
                flex: 1,
                renderer: function (val, p, rec)
                {
                    return PartKeepr.getApplication().formatCurrency(val);
                },
                editor: {
                    xtype: 'CurrencyField',
                    allowBlank: false
                }
            }, {
                header: i18n("Package Price"),
                flex: 1,
                dataIndex: 'packagePrice',
                renderer: function (val, p, rec)
                {
                    return PartKeepr.getApplication().formatCurrency(rec.get("price") * rec.get("packagingUnit"));
                }
            }, {
                header: i18n("SKU"),
                dataIndex: 'sku',
                flex: 1,
                editor: {
                    xtype: 'urltextfield',
                    allowBlank: true,
                    triggerCls: 'x-form-trigger-link',

                    getUrl: function ()
                    {
                        var distributor = this.ownerCt.context.record.getDistributor();

                        if (distributor !== null) {
                            skuurl = distributor.get("skuurl");

                            if (skuurl) {
                                skuurl = skuurl.replace("%s", this.value);
                                return skuurl;
                            }
                        }

                        return false;
                    },
                }
            }
        ];

        this.callParent();

        this.getSelectionModel().on('selectionchange',
            this.onSelectChange,
            this);
    },
    onAddClick: function ()
    {
        this.editing.cancelEdit();

        var rec = Ext.create("PartKeepr.PartBundle.Entity.PartDistributor", {
            packagingUnit: 1
        });

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
