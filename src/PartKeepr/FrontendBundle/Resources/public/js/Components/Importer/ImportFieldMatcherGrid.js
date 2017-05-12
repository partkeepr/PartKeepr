Ext.define("PartKeepr.Importer.ImportFieldMatcherGrid", {
    extend: "Ext.grid.Panel",
    xtype: 'importFieldMatcherGrid',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    bbar: [
        {
            xtype: 'button',
            text: i18n("Add…"),
            iconCls: 'fugue-icon flask--plus',
            itemId: 'addImporterMatchField'
        },
        {
            xtype: 'button',
            text: i18n("Delete"),
            iconCls: 'fugue-icon flask--minus',
            itemId: 'deleteImporterMatchField',
            disabled: true
        }
    ],
    store: {
        fields: ['matchField', 'importField']
    },

    fieldSelectorWindow: null,

    initComponent: function ()
    {
        this.callParent(arguments);
        this.down("#addImporterMatchField").on("click", this.onAddMatchField, this);
        this.down("#deleteImporterMatchField").on("click", this.onDeleteMatchField, this);
        this.on("selectionchange", this.onSelectionChange, this);
        this.getStore().on("update", function ()
        {
            this.fireEvent("change");
        }, this);
        this.reconfigureColumns(null);


    },
    onSelectionChange: function (model, selected)
    {
        if (selected.length === 1) {
            this.down("#deleteImporterMatchField").enable();
        } else {
            this.down("#deleteImporterMatchField").disable();
        }
    },
    reconfigureColumns: function (columnsStore)
    {
        var columns = [
            {
                text: i18n("Match field"),
                dataIndex: "matchField",
                width: 200
            }, {
                text: i18n("Import Field"),
                dataIndex: "importField",
                width: 200,
                renderer: function (val)
                {
                    if (columnsStore.getAt(val) !== null) {
                        return columnsStore.getAt(val).get("headerName");
                    } else {
                        return "";
                    }
                },
                editor: {
                    xtype: "combo",
                    forceSelection: true,
                    editable: false,
                    queryMode: "local",
                    store: columnsStore,
                    displayField: "headerName",
                    valueField: "headerIndex"
                }
            }
        ];
        this.reconfigure(null, columns);
    },
    addRecord: function (matchField)
    {
        this.fieldSelectorWindow.close();
        this.store.add({"matchField": matchField, "importField": ""});
        this.fireEvent("change");
    },
    setModel: function (model, ignoreModel)
    {
        this.model = model;

        if (ignoreModel === undefined) {
            this.ignoreModel = null;
        } else {
            this.ignoreModel = ignoreModel;
        }
    },
    onDeleteMatchField: function ()
    {
        if (this.getSelection().length === 1) {
            this.getStore().remove(this.getSelection()[0]);
        }
    },
    getImporterConfig: function ()
    {
        var data = this.getStore().getData();
        var serializedRecords = [];
        var serializedRecord;


        for (var i = 0; i < data.getCount(); i++) {
            serializedRecord = data.getAt(i).getData();
            delete serializedRecord.id;
            serializedRecords.push(serializedRecord);
        }

        return serializedRecords;
    },
    setImporterConfig: function (config)
    {
        this.getStore().removeAll();
        for (var i = 0; i < config.length; i++) {
            this.getStore().add(config[i]);
        }
    },
    onAddMatchField: function ()
    {
        var excludeFields = [];

        for (var j = 0; j < this.store.getCount(); j++) {
            excludeFields.push(this.store.getAt(j).get("matchField"));
        }

        var modelFieldSelector = Ext.create({
            xtype: 'modelFieldSelector',
            id: 'searchPartFieldSelector',
            border: false,
            sourceModel: this.model,
            useCheckBoxes: false,
            excludeFields: excludeFields,
            excludeModels: [this.ignoreModel],
            flex: 1,
            listeners: {
                selectionchange: function (selectionModel, selected)
                {
                    var addFieldButton = this.up("#matchFieldWindow").down("#addSelectedField");

                    if (selected.length == 1 && selected[0].data.data.type == "field") {
                        addFieldButton.enable();
                    } else {
                        addFieldButton.disable();
                    }
                }
            }
        });

        modelFieldSelector.on("itemdblclick", function (view, record)
        {
            if (record.data.data && record.data.data.type == "field") {
                this.addRecord(record.data.data.name);
            }
        }, this);

        this.fieldSelectorWindow = Ext.create("Ext.window.Window", {
            title: i18n("Select match field"),
            itemId: 'matchFieldWindow',
            height: 400,
            modal: true,
            width: 600,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [
                modelFieldSelector
            ],
            bbar: [
                {
                    xtype: 'button',
                    itemId: 'addSelectedField',
                    disabled: true,
                    text: i18n("Add selected Field"),
                    iconCls: 'fugue-icon flask--plus',
                    handler: function ()
                    {
                        var selection = modelFieldSelector.getSelection();

                        if (selection.length == 1 && selection[0].data.data.type == "field") {
                            this.addRecord(selection[0].data.data.name);
                        }
                    },
                    scope: this
                }
            ]
        }).show();
    }
});
