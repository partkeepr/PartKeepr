Ext.define('PartKeepr.PartParameterGrid', {
    extend: 'PartKeepr.BaseGrid',
    alias: 'widget.PartParameterGrid',
    border: false,
    initComponent: function ()
    {
        this.store = Ext.create("Ext.data.Store", {
            model: 'PartKeepr.PartBundle.Entity.PartParameter',
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json'
                }
            }
        });

        this.deleteButton = Ext.create("Ext.button.Button", {
            text: i18n('Delete'),
            disabled: true,
            itemId: 'delete',
            scope: this,
            iconCls: 'fugue-icon table--minus',
            handler: this.onDeleteClick
        });

        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
                    {
                        text: i18n('Add'),
                        scope: this,
                        iconCls: 'fugue-icon table--plus',
                        handler: this.onAddClick
                    }, this.deleteButton
                ]
            }
        ];

        this.columns = [
            {
                header: i18n("Parameter"),
                dataIndex: 'name',
                flex: 0.2,
            },
            {
                header: i18n("Value"),
                flex: 0.2,
                renderer: function (v, m, rec)
                {
                    var unit = "";

                    if (rec.getUnit() instanceof PartKeepr.UnitBundle.Entity.Unit) {
                        unit = rec.getUnit().get("symbol");
                    }

                    switch (rec.get("valueType")) {
                        case "numeric":
                            var siPrefix = "";

                            if (rec.getSiPrefix() instanceof PartKeepr.SiPrefixBundle.Entity.SiPrefix) {
                                siPrefix = rec.getSiPrefix().get("symbol");
                            }

                            return rec.get("value") + siPrefix + unit;
                        case "minmax":
                            var minSiPrefix = "", maxSiPrefix = "";

                            if (rec.getMinSiPrefix() instanceof PartKeepr.SiPrefixBundle.Entity.SiPrefix) {
                                minSiPrefix = rec.getMinSiPrefix().get("symbol");
                            }

                            if (rec.getMaxSiPrefix() instanceof PartKeepr.SiPrefixBundle.Entity.SiPrefix) {
                                maxSiPrefix = rec.getMaxSiPrefix().get("symbol");
                            }

                            return rec.get("minValue") + minSiPrefix + unit + "…" + rec.get("maxValue") + maxSiPrefix + unit;
                        default:
                        case "string":
                            return rec.get("stringValue");
                    }
                }
            },
            {
                header: i18n("Unit"),
                flex: 0.2,
                renderer: function (v, m, rec)
                {
                    if (rec.getUnit() instanceof PartKeepr.UnitBundle.Entity.Unit) {
                        return rec.getUnit().get("name");
                    } else {
                        return "";
                    }
                }
            },
            {
                header: i18n("Description"),
                dataIndex: 'description',
                flex: 0.3,
            }
        ];

        this.callParent();

        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
        this.on("itemdblclick", this.onItemDblClick, this);
    },
    onItemDblClick: function (grid, record)
    {
        this.editRecord(record);
    },
    onAddClick: function ()
    {
        var rec = Ext.create("PartKeepr.PartBundle.Entity.PartParameter");

        this.store.insert(0, rec);

        this.editRecord(rec);
    },
    editRecord: function (rec)
    {
        var k = Ext.create("PartKeepr.PartParameterValueEditor");

        var j = Ext.create("Ext.window.Window", {
            items: k,
            modal: true,
            title: i18n("Edit Parameter"),
            layout: 'fit',
            width: 600,
            height: 300
        });

        k.loadRecord(rec);
        k.on("save", function () {
            j.destroy();
        });

        j.show();
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
