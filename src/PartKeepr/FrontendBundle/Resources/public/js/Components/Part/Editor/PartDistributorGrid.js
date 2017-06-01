Ext.define('PartKeepr.PartDistributorGrid', {
    extend: 'PartKeepr.BaseGrid',
    alias: 'widget.PartDistributorGrid',
    border: false,
    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI'
    },
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

        this.editing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
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
                    allowBlank: false
                }
            }, {
                header: i18n("Order Number"),
                dataIndex: 'orderNumber',
                flex: 1,
                editor: {
                    xtype: 'textfield',
                    allowBlank: this.isOptional("orderNumber")
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
                renderer: function (val,m,rec)
                {
                    return PartKeepr.getApplication().formatCurrency(val, rec.get("currency"));
                },
                editor: {
                    xtype: 'CurrencyField',
                    allowBlank: false
                }
            }, {
                header: i18n("Currency"),
                dataIndex: 'currency',
                editor: {
                    xtype: 'combobox',
                    displayField: 'code',
                    valueField: 'code',
                    store: PartKeepr.getApplication().getCurrencyStore(),
                    forceSelection: true,
                    queryMode: 'local'
                }
            }, {
                header: i18n("Package Price"),
                flex: 1,
                dataIndex: 'packagePrice',
                renderer: function (val, p, rec)
                {
                    return PartKeepr.getApplication().formatCurrency(rec.get("price") * rec.get("packagingUnit"), rec.get("currency"));
                }
            }, {
                header: i18n("SKU"),
                dataIndex: 'sku',
                flex: 1,
                editor: {
                    xtype: 'urltextfield',
                    allowBlank: this.isOptional("sku"),
                    triggerCls: 'x-form-trigger-link',

                    getUrl: function ()
                    {
                        var distributor = this.ownerCt.context.record.getDistributor();

                        if (distributor !== null) {
                            var skuurl = distributor.get("skuurl");

                            if (skuurl) {
                                skuurl = skuurl.replace("%s", this.value);
                                return skuurl;
                            }
                        }

                        return false;
                    }
                }
            }, {
                header: i18n("Pricing"),
                dataIndex: 'distributor.enabledForReports',
                width: 80,
                renderers: [{
                    rtype: 'icon',
                    rendererConfig: {
                        iconCls: 'web-icon fugue-icon money-bag-dollar',
                        title: i18n("Distributor is used for price calculations")
                    }
                }]
            }, {
                header: i18n("Ignore"),
                dataIndex: 'ignoreForReports',
                tooltip: i18n("Ignore this entry for price calculations"),
                width: 80,
                xtype: 'checkcolumn'
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
        this.store.remove(this.getView().getSelectionModel().getSelection());
    },
    onSelectChange: function (selModel, selections)
    {
        this.deleteButton.setDisabled(selections.length === 0);
    },
    isOptional: function (field)
    {
        var fields = PartKeepr.getApplication().getSystemPreference("partkeepr.partDistributor.requiredFields", []);

        return !Ext.Array.contains(fields, field);
    }
});
