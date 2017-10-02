/**
 * Represents an editable list of project parts.
 */
Ext.define('PartKeepr.ProjectPartGrid', {
    extend: 'PartKeepr.BaseGrid',

    /* Column definitions */
    columns: [
        {
            header: i18n("Quantity"), dataIndex: 'quantity',
            wdith: 50,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 1
            },
            renderer: function (v, m, rec)
            {
                if (rec.getPart() !== null)
                {
                    return v + " " + rec.getPart().getPartUnit().get("shortName");
                } else {
                    return v;
                }
            }
        }, {
            header: i18n("Overage Type"), dataIndex: 'overageType',
            wdith: 50,
            editor: {
                xtype: 'combobox',
                store: {
                    fields: ["overageType", "description"],
                    data: [{overageType: 'percent', description: i18n("Percent")},
                        {overageType: 'absolute', description: i18n("Absolute")}]
                },
                displayField: 'description',
                valueField: 'overageType',
                queryMode: 'local',
                editable: false,
                forceSelection: true,
                allowBlank: false
            },
            renderer: function (v)
            {
                if (v === "percent")
                {
                    return i18n("Percent");
                } else
                {
                    return i18n("Absolute");
                }
            }
        }, {
            header: i18n("Overage"), dataIndex: 'overage',
            width: 50,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0
            },
            renderer: function (v, m, rec)
            {
                if (rec.get("overageType") === "percent")
                {
                    return v + " %";
                } else
                {
                    if (rec.getPart() !== null)
                    {
                        return v + " " + rec.getPart().getPartUnit().get("shortName");
                    }
                }
            }
        }, {
            header: i18n("Part"),
            dataIndex: 'part',
            flex: 1,
            editor: {
                xtype: 'RemotePartComboBox'
            },
            renderer: function (val, p, rec)
            {
                var part = rec.getPart(), icon;

                if (part !== null)
                {
                    if (part.get("metaPart"))
                    {
                        icon = "bricks";
                    } else
                    {
                        icon = "brick";
                    }
                    return '<span class="web-icon ' + icon + '"></span> ' + Ext.util.Format.htmlEncode(
                            part.get("name"));
                }
            }
        }, {
            header: i18n("Remarks"), dataIndex: 'remarks',
            flex: 1,
            editor: {
                xtype: 'textfield'
            }
        }, {
            header: i18n("Lot Number"), dataIndex: 'lotNumber',
            flex: 1,
            editor: {
                xtype: 'textfield'
            }
        }
    ],

    /**
     * Initializes the component
     */
    initComponent: function ()
    {

        this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        this.plugins = [this.editing];

        this.deleteButton = Ext.create("Ext.button.Button", {
            text: i18n('Delete'),
            disabled: true,
            itemId: 'delete',
            scope: this,
            iconCls: 'web-icon brick_delete',
            handler: this.onDeleteClick
        });

        this.viewButton = Ext.create("Ext.button.Button", {
            text: i18n('View Part'),
            disabled: true,
            itemId: 'view',
            scope: this,
            iconCls: 'web-icon brick_go',
            handler: this.onViewClick
        });

        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
                    {
                        text: i18n('Add'),
                        scope: this,
                        iconCls: 'web-icon brick_add',
                        handler: this.onAddClick
                    }, {
                        text: i18n("Create new Part"),
                        scope: this,
                        iconCls: 'web-icon brick_add',
                        handler: this.onAddPartClick
                    },
                    this.deleteButton,
                    this.viewButton
                ]
            }
        ];

        this.bbar = [
            Ext.create("PartKeepr.Exporter.GridExporterButton", {
                itemId: 'export',
                genericExporter: true,
                tooltip: i18n("Export"),
                iconCls: "fugue-icon application-export",
                disabled: this.store.isLoading()
            }),
            Ext.create("PartKeepr.Importer.GridImporterButton", {
                itemId: 'import',
                tooltip: i18n("Import"),
                iconCls: "fugue-icon database-import",
                disabled: this.store.isLoading()
            })

        ];

        this.callParent();

        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    /**
     * Creates a new row and sets the default quantity to 1.
     */
    onAddClick: function ()
    {
        this.editing.cancelEdit();

        var rec = Ext.create("PartKeepr.ProjectBundle.Entity.ProjectPart", {
            quantity: 1
        });

        this.store.insert(this.store.count(), rec);

        this.editing.startEdit(rec, this.columns[0]);
    },
    /**
     * Creates a new part, adds it to the list and sets the default quantity to 1.
     */
    onAddPartClick: function ()
    {
        var win = Ext.getCmp("partkeepr-partmanager").onItemAdd();
        win.editor.on("editorClose", function (context)
        {
            // End this if the record is a phatom and thus hasn't been saved yet
            if (context.record.phantom)
            {
                return;
            }

            // Insert the new record
            this.editing.cancelEdit();

            var rec = Ext.create("PartKeepr.ProjectBundle.Entity.ProjectPart", {
                quantity: 1,
                part_id: context.record.get("id"),
                part_name: context.record.get("name")
            });

            this.store.insert(this.store.count(), rec);

            this.editing.startEdit(rec, this.columns[0]);
        }, this);
    },
    /**
     * Removes the currently selected row
     */
    onDeleteClick: function ()
    {
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection)
        {
            this.store.remove(selection);
        }
    },
    /**
     * Removes the currently selected row
     */
    onViewClick: function ()
    {
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection)
        {
            Ext.getCmp("partkeepr-partmanager").onEditPart(selection.getPart());
        }
    },

    /**
     * Enables or disables the delete button, depending on the row selection
     */
    onSelectChange: function (selModel, selections)
    {
        this.deleteButton.setDisabled(selections.length === 0);
        this.viewButton.setDisabled(selections.length === 0);
    }
});
