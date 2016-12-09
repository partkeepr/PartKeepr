Ext.define("PartKeepr.Importer.Importer", {
    extend: "Ext.panel.Panel",
    layout: 'border',
    bbar: [
        {
            xtype: 'button',
            itemId: "selectImportFile",
            text: i18n("Select CSV file for import…")
        },
        {
            xtype: 'button',
            itemId: "executeImport",
            text: i18n("Execute import")
        },
        {
            xtype: 'tbseparator',
        },
        {
            xtype: 'combo',
            store: {
                model: 'PartKeepr.ImportBundle.Entity.ImportPreset',
                autoLoad: true
            },
            itemId: 'importerPresetCombo',
            displayField: 'name',
            valueField: '@id'
        }, {
            xtype: 'button',
            itemId: "savePreset",
            text: i18n("Save Preset")
        }, {
            xtype: 'button',
            itemId: "deletePreset",
            text: i18n("Delete Preset")
        },
    ],
    items: [
        {
            title: i18n("Mapping"),
            xtype: 'treepanel',
            region: 'west',
            width: 400,
            split: true,
            itemId: 'fieldTree',
            columns: [
                {
                    xtype: 'treecolumn',
                    text: i18n("Field"),
                    dataIndex: 'text',
                    width: 200,
                }, {
                    xtype: 'checkcolumn',
                    disabled: true,
                    disabledCls: '',
                    header: i18n("Required"),
                    dataIndex: 'required',
                    width: 70,
                }, {
                    header: i18n("Mapping"),
                    width: 100
                }
            ],
            store: {
                folderSort: true,
                sorters: [
                    {
                        property: 'text',
                        direction: 'ASC'
                    }
                ]
            },
            useArrows: true
        }, {
            title: i18n("Configuration"),
            region: 'center',
            itemId: 'configurationCards',
            layout: 'card',
            items: [
                {
                    html: "Select a field to begin",
                    getImporterConfig: function ()
                    {
                        return {};
                    },
                    setImporterConfig: function ()
                    {
                    }
                },
                {
                    xtype: 'importerEntityConfiguration',
                    itemId: 'importerEntityConfiguration',
                }, {
                    xtype: 'importerFieldConfiguration',
                    itemId: 'importerFieldConfiguration'
                },
                {
                    xtype: 'importerOneToManyConfiguration',
                    itemId: 'importerOneToManyConfiguration'
                },
                {
                    xtype: 'importerManyToOneConfiguration',
                    itemId: 'importerManyToOneConfiguration'
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'east',
            width: 300,
            split: true,
            layout: 'fit',

            items: [
                {
                    xtype: 'textarea',
                    itemId: "debugger",
                    scrollable: true,
                    style: 'font-family: monospace;'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            region: 'south',
            height: 265,
            split: true,
            items: [
                {
                    title: i18n("Source File"),
                    itemId: 'sourceFileGrid',
                    xtype: 'grid'
                }, {
                    title: i18n("Preview"),
                    itemId: 'preview',
                    bodyStyle: "overflow: scroll;"
                }, {
                    title: i18n("Errors"),
                    itemId: 'errorsGrid',
                    xtype: 'grid',
                    columns: [
                        {
                            text: i18n("Path"),
                            flex: 1,
                            dataIndex: "node",
                            renderer: function (val)
                            {
                                return val.getPath("text", "/");
                            }
                        }, {
                            text: i18n("Error"),
                            flex: 1,
                            dataIndex: "error"
                        }
                    ],
                    store: {
                        fields: ["node", "error"]
                    }
                }
            ]
        }
    ],

    /**
     * @var {String} The model to use
     */
    model: null,

    importConfiguration: {},

    importColumnsStore: null,

    initComponent: function ()
    {
        this.callParent(arguments);

        this.importConfiguration = {};

        this.applyConfiguration();

        this.importColumnsStore = Ext.create("Ext.data.Store", {
            fields: ["headerIndex", "headerName"],
            storeId: "importColumns"
        });

        this.down("#importerPresetCombo").getStore().addFilter({
            property: "baseEntity",
            operator: "=",
            value: this.model.getName()
        });

        this.down("#importerEntityConfiguration").setModel(this.model);

        this.down("#fieldTree").on("selectionchange", this.onFieldChange, this);
        this.down("#fieldTree").on("beforeselect", this.onBeforeSelect, this);
        this.down("#selectImportFile").on("click", this.uploadCSVFile, this);
        this.down("#executeImport").on("click", this.executeImport, this);
        this.down("#importerEntityConfiguration").on("configChanged", this.onConfigChange, this);
        this.down("#importerFieldConfiguration").on("configChanged", this.onConfigChange, this);
        this.down("#importerOneToManyConfiguration").on("configChanged", this.onConfigChange, this);
        this.down("#importerManyToOneConfiguration").on("configChanged", this.onConfigChange, this);

        this.down("#savePreset").on("click", this.onPresetSave, this);
        this.down("#importerPresetCombo").on("select", this.onPresetSelect, this);

        this.loadData("/~felicitus/PartKeepr/web/app_dev.php/api/temp_uploaded_files/668");
    },
    applyConfiguration: function ()
    {
        var rootNode = this.down("#fieldTree").getRootNode();

        rootNode.removeAll();

        rootNode.set("text", this.model.getName());
        rootNode.set("data", {
            name: "",
            type: "relation",
            reference: this.model,
            configuration: this.importConfiguration
        });

        var treeMaker = Ext.create("PartKeepr.ModelTreeMaker.ModelTreeMaker");
        treeMaker.addIgnoreField("@id");
        treeMaker.setCustomFieldIgnorer(this.customFieldIgnorer);

        treeMaker.make(rootNode, this.model, "", Ext.bind(this.appendFieldData, this));
        rootNode.expand();
    },
    onPresetSelect: function (combo, record)
    {
        this.importConfiguration = Ext.decode(record.get("configuration"));

        // @todo check if the json string is correct
        // @todo refresh active panels

        this.applyConfiguration();
        this.refreshPreview();

    },
    onPresetSave: function ()
    {
        var presetName = this.down("#importerPresetCombo").getRawValue();

        if (presetName === "") {
            Ext.Msg.alert(i18n("Preset Name Empty"),
                i18n("The preset name cannot be empty. Type a preset name in the box to the left."));
            return;
        }

        var config = Ext.encode(this.importConfiguration);

        var j = Ext.create("PartKeepr.ImportBundle.Entity.ImportPreset");
        j.set("name", presetName);
        j.set("configuration", config);
        j.set("baseEntity", this.model.getName());
        j.save();

    },
    executeImport: function ()
    {
        //@todo Implement warning dialog

        Ext.Ajax.request({
            url: PartKeepr.getBasePath() + '/executeImport/?file=' + this.temporaryFile,
            method: 'POST',
            params: {
                configuration: Ext.encode(this.importConfiguration),
                baseEntity: this.model.getName()
            },
            success: function (response)
            {
                var response = Ext.decode(response.responseText);

                var j = Ext.create("Ext.window.Window", {
                    width: 400,
                    height: 400,
                    layout: "fit",
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'resultPanel',
                            listeners: {
                                render: function (p)
                                {
                                    p.getEl().dom.innerHTML = "<pre><strong>Import Results</strong>\n\n" + response.logs + "</pre>";
                                }
                            }
                        }
                    ]
                });

                j.show();
            },
            scope: this
        });

    },
    uploadCSVFile: function ()
    {
        var j = Ext.create("PartKeepr.FileUploadDialog");
        j.on("fileUploaded", this.onFileUploaded, this);
        j.show();
    },
    onFileUploaded: function (data)
    {
        var uploadedFile = Ext.create("PartKeepr.UploadedFileBundle.Entity.TempUploadedFile", data);
        this.loadData(uploadedFile.getId());
    },
    onBeforeSelect: function ()
    {
        this.onConfigChange();
    },
    onConfigChange: function ()
    {
        var str = JSON.stringify(this.importConfiguration, undefined, 4);

        this.down("#debugger").setValue(str);

        Ext.Function.defer(this.refreshPreview, 100, this);

    },
    refreshPreview: function ()
    {
        this.validateConfig();

        Ext.Ajax.request({

            url: PartKeepr.getBasePath() + '/getPreview/?file=' + this.temporaryFile,
            method: 'POST',
            params: {
                configuration: Ext.encode(this.importConfiguration),
                baseEntity: this.model.getName()
            },
            success: function (response)
            {
                var response = Ext.decode(response.responseText);

                if (this.down("#preview").body !== undefined) {
                    this.down("#preview").body.dom.innerHTML = "<pre>" + response.logs + "</pre>";
                }
            },
            scope: this
        });
    },
    onFieldChange: function (selectionModel, selected)
    {
        if (selected.length == 1) {
            if (selected[0].data.data.type == "field") {
                this.down("#configurationCards").setActiveItem(this.down("#importerFieldConfiguration"));
            } else {
                if (selected[0].data.data.name === "") {
                    this.down("#configurationCards").setActiveItem(this.down("#importerEntityConfiguration"));
                    this.down("#importerEntityConfiguration").setModel(selected[0].data.data.reference);
                } else {
                    if (selected[0].data.data.type === "onetomany") {
                        this.down("#configurationCards").setActiveItem(this.down("#importerOneToManyConfiguration"));
                    } else {
                        this.down("#configurationCards").setActiveItem(this.down("#importerManyToOneConfiguration"));
                        this.down("#importerManyToOneConfiguration").setModel(selected[0].data.data.reference);
                    }
                }
            }

            this.down("#configurationCards").getLayout().getActiveItem().setImporterConfig(
                selected[0].data.data.configuration);

            if (Ext.isFunction(this.down("#configurationCards").getLayout().getActiveItem().reconfigureColumns)) {
                this.down("#configurationCards").getLayout().getActiveItem().reconfigureColumns(
                    this.importColumnsStore);
            }
        }
    },
    customFieldIgnorer: function (field)
    {
        return !field.persist;
    },
    /**
     * @param {Ext.data.field.Field} The model
     */
    appendFieldData: function (field, node)
    {
        var fieldData = {};
        fieldData.data = node.get("data");

        if (!node.parentNode.data.data.hasOwnProperty("configuration")) {
            node.parentNode.data.data.configuration = {};
        }

        if (!node.parentNode.data.data.configuration.hasOwnProperty("fields")) {
            node.parentNode.data.data.configuration.fields = {};
        }

        if (!node.parentNode.data.data.configuration.hasOwnProperty("onetomany")) {
            node.parentNode.data.data.configuration.onetomany = {};
        }

        if (!node.parentNode.data.data.configuration.hasOwnProperty("manytoone")) {
            node.parentNode.data.data.configuration.manytoone = {};
        }

        switch (node.data.data.type) {
            case "manytoone":
                if (!node.parentNode.data.data.configuration.manytoone.hasOwnProperty(node.data.text)) {
                    node.parentNode.data.data.configuration.manytoone[node.data.text] = {};
                }
                fieldData.data.configuration = node.parentNode.data.data.configuration.manytoone[node.data.text];

                if (typeof field.reference !== "undefined" && field.reference !== null) {
                    fieldData.data.reference = Ext.ClassManager.get(field.reference.type);
                } else {
                    fieldData.data.reference = this.model;
                }

                if (field.allowBlank === false) {
                    fieldData.required = true;
                }
                return fieldData;
            case "onetomany":
                if (!node.parentNode.data.data.configuration.onetomany.hasOwnProperty(node.data.text)) {
                    node.parentNode.data.data.configuration.onetomany[node.data.text] = {};
                }
                fieldData.data.configuration = node.parentNode.data.data.configuration.onetomany[node.data.text];
                break;
            default:


                if (!node.parentNode.data.data.configuration.fields.hasOwnProperty(node.data.text)) {
                    node.parentNode.data.data.configuration.fields[node.data.text] = {};
                }
                fieldData.data.configuration = node.parentNode.data.data.configuration.fields[node.data.text];

                field.compileValidators();

                for (var i = 0; i < field._validators.length; i++) {
                    if (field._validators[i].type === "presence") {
                        fieldData.required = true;
                    } else {
                        fieldData.required = false;
                    }

                }

                return fieldData;
        }
    },
    loadData: function (temporaryFile)
    {
        this.temporaryFile = temporaryFile;

        Ext.Ajax.request({
            url: PartKeepr.getBasePath() + '/getSource/?file=' + temporaryFile,
            success: function (response)
            {
                var responseData = Ext.decode(response.responseText);

                this.reconfigureGrid(responseData);
            },
            scope: this
        });
    }
    ,
    reconfigureGrid: function (data)
    {
        var columns = [];
        var fieldConfig = [];
        var header = data[0];

        this.importColumnsStore.removeAll();

        for (var i = 0; i < header.length; i++) {
            columns.push({
                text: header[i],
                dataIndex: "field" + i
            });

            this.importColumnsStore.add({"headerIndex": i, "headerName": header[i]});

            fieldConfig.push({
                name: "field" + i,
                type: "string"
            });
        }

        var store = Ext.create("Ext.data.Store", fieldConfig);

        var recordData = [];
        for (i = 1; i < data.length; i++) {
            var row = {};
            for (var j = 0; j < data[i].length; j++) {
                row["field" + j] = data[i][j];
            }

            recordData.push(row);
        }

        store.add(recordData);

        this.down("#sourceFileGrid").reconfigure(store, columns);
    },
    validateConfig: function ()
    {
        this.down("#errorsGrid").setTitle(i18n("Errors"));
        this.down("#errorsGrid").getStore().removeAll();
        this.validateConfigNode(this.down("#fieldTree").getRootNode());
    },
    validateConfigNode: function (node)
    {
        var configuration = node.data.data.configuration;
        var recurse = false;

        switch (node.data.data.type) {
            case "field":
                if (node.data.required) {
                    if (configuration.fieldConfiguration) {
                        switch (configuration.fieldConfiguration) {
                            case "ignore":
                                this.appendError(node, i18n("The field must be set to a value, but it is ignored"));
                                break;
                            case "copyFrom":
                                if (configuration.copyFromField === "") {
                                    this.appendError(node, i18n(
                                        "The field is configured to copy a value from the source file, but no source file field was configured"));
                                }
                                break;
                            default:
                                break;
                        }
                    } else {
                        this.appendError(node, i18n("The field is required, but it is not configured"));
                    }
                }
                break;
            case "manytoone":
                if (node.data.required) {
                    switch (configuration.importBehaviour) {
                        case "dontSet":
                            this.appendError(node, i18n("The entity is required, but it is not configured"));
                            break;
                        case "matchData":
                            if (configuration.notFoundBehaviour === "createEntity") {
                                recurse = true;
                            }
                            break;

                    }
                } else {
                    recurse = false;
                }
                break;
            case "onetomany":
                recurse = false;
                break;
            default:
                recurse = true;
                break;
        }

        if (recurse) {
            for (var i = 0; i < node.childNodes.length; i++) {
                this.validateConfigNode(node.childNodes[i]);
            }
        }
    },
    appendError: function (node, error)
    {
        this.down("#errorsGrid").getStore().add({node: node, error: error});

        var title = i18n("Errors") + " (" +
            this.down("#errorsGrid").getStore().getCount() + ")";


        this.down("#errorsGrid").setTitle(title);
    }
});
