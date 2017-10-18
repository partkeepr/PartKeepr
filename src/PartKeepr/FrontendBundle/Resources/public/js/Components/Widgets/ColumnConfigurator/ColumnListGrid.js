Ext.define("PartKeepr.Components.Widgets.ColumnConfigurator.ColumnListGrid", {
    extend: "Ext.grid.Panel",
    layout: 'fit',
    columns: [
        {
            header: "Title",
            dataIndex: 'text',
            menuDisabled: true,
            resizable: false,
            flex: 1
        }, {
            header: "Field",
            menuDisabled: true,
            resizable: false,
            dataIndex: 'dataIndex',
            flex: 1
        }, {
            header: "index",
            dataIndex: "index",
            width: 20
        }
    ],
    viewConfig: {
        markDirty: false
    },

    sortableColumns: false,
    store: {
        model: 'PartKeepr.Models.ColumnConfiguration',
        sorters: [{
            property: 'index',
            direction: 'ASC'
        }]
    },
    bind: {
        selection: '{column}'
    },
    initComponent: function ()
    {
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    iconCls: 'web-icon accept',
                    itemId: "apply",
                    disabled: false,
                    text: i18n("Apply")
                }, {
                    iconCls: 'web-icon cancel',
                    itemId: "cancel",
                    disabled: false,
                    text: i18n("Cancel")
                }, '-', {
                    iconCls: 'fugue-icon table-insert-column',
                    itemId: "addField",
                    disabled: false,
                    tooltip: i18n("Add new field")
                }, {
                    iconCls: 'fugue-icon table-delete-column',
                    itemId: "deleteField",
                    disabled: true,
                    tooltip: i18n("Delete field")
                }, '-',{
                    iconCls: 'fugue-icon arrow-stop-090',
                    itemId: "move-top",
                    disabled: true,
                    tooltip: i18n("Move to top")
                }, {
                    iconCls: 'fugue-icon arrow-090',
                    tooltip: i18n("Move up"),
                    disabled: true,
                    itemId: "move-up"
                }, {
                    iconCls: 'fugue-icon arrow-270',
                    itemId: "move-down",
                    disabled: true,
                    tooltip: i18n("Move down")
                }, {
                    iconCls: 'fugue-icon arrow-stop-270',
                    itemId: "move-bottom",
                    disabled: true,
                    tooltip: i18n("Move to bottom")
                },'-', {
                    iconCls: 'fugue-icon arrow-return-180',
                    itemId: "restoreDefaults",
                    tooltip: i18n("Restore Defaults")
                }]
            }, {
                xtype: 'toolbar',
                dock: 'bottom',
                items: {
                    xtype: 'presetcombo',
                    model: 'PartKeepr.FrontendBundle.Entity.GridPreset',
                    itemId: 'gridPresetCombo',
                    allowMarkAsDefault: true,
                    markedAsDefaultProperty: 'gridDefault',
                    displayField: 'name',
                    blankConfiguration: [
                        {

                        }
                    ],
                    width: 300

                }
            }];
        this.callParent();

        this.down("#move-top").on("click", this.moveTop, this);
        this.down("#move-up").on("click", this.moveUp, this);
        this.down("#move-down").on("click", this.moveDown, this);
        this.down("#move-bottom").on("click", this.moveBottom, this);

        this.down("#deleteField").on("click", this.deleteField, this);
        this.down("#addField").on("click", this.addField, this);

        this.getStore().on("update", this.updateButtonState, this);
        this.on("selectionchange", this.updateButtonState, this);

        this.on("select", this.updateButtonState, this);
    },
    addField: function ()
    {
        var i, max = 0;

        for (i = 0; i < this.getStore().getCount(); i++)
        {
            if (this.getStore().getAt(i).get("index") > max)
            {
                max = this.getStore().getAt(i).get("index");
            }
        }
        var j = Ext.create("PartKeepr.Models.ColumnConfiguration", {
            index: max + 1,
            widthMode: "flex",
            flex: 1
        });

        this.getStore().add(j);

        this.ensureVisible(j);
        this.setSelection(j);
    },
    deleteField: function ()
    {
        var oldIdx = this.getStore().indexOf(this.getSelection()[0]);
        this.getStore().remove(this.getSelection()[0]);

        this.setSelection(this.getStore().getAt(oldIdx));
    },
    updateButtonState: function ()
    {
        var record;

        if (this.getSelection().length !== 1)
        {
            this.down("#deleteField").disable();
            this.down("#move-top").disable();
            this.down("#move-up").disable();
            this.down("#move-bottom").disable();
            this.down("#move-down").disable();

            return;
        }

        record = this.getSelection()[0];
        this.down("#deleteField").enable();

        if (this.getStore().indexOf(record) === 0)
        {
            this.down("#move-top").disable();
            this.down("#move-up").disable();
        } else
        {
            this.down("#move-top").enable();
            this.down("#move-up").enable();
        }

        if (this.getStore().indexOf(record) === this.getStore().getCount() - 1)
        {
            this.down("#move-bottom").disable();
            this.down("#move-down").disable();
        } else
        {
            this.down("#move-bottom").enable();
            this.down("#move-down").enable();
        }
    },
    moveTop: function ()
    {
        var record, sort;

        if (this.getSelection().length === 1)
        {
            for (sort = this.getStore().getCount() - 1; sort > -1; sort--)
            {
                this.getStore().getAt(sort).set("index", sort + 1);
            }
            record = this.getSelection()[0];
            record.set("index", 0);
        }

        this.ensureVisible(record);
    },
    moveBottom: function ()
    {
        var record, sort;

        if (this.getSelection().length === 1)
        {
            record = this.getSelection()[0];
            record.set("index", this.getStore().getCount());

            for (sort = 0; sort < this.getStore().getCount(); sort++)
            {
                this.getStore().getAt(sort).set("index", sort);
            }
        }

        this.ensureVisible(record);
    },
    moveDown: function ()
    {
        var record, nextRecord, sort, myIndex;

        if (this.getSelection().length === 1)
        {
            record = this.getSelection()[0];
            myIndex = this.getStore().indexOf(record);
            nextRecord = this.getStore().getAt(myIndex + 1);
            sort = nextRecord.get("index");
            nextRecord.set("index", record.get("index"));
            record.set("index", sort);
        }

        this.ensureVisible(record);
    },
    moveUp: function ()
    {
        var record, previousRecord, sort, myIndex;

        if (this.getSelection().length === 1)
        {
            record = this.getSelection()[0];
            myIndex = this.getStore().indexOf(record);
            previousRecord = this.getStore().getAt(myIndex - 1);
            sort = previousRecord.get("index");
            previousRecord.set("index", record.get("index"));
            record.set("index", sort);
        }

        this.ensureVisible(record);
    }
});
