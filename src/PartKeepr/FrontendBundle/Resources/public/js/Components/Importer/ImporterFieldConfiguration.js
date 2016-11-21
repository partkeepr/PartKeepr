Ext.define("PartKeepr.Importer.ImporterFieldConfiguration", {
    extend: "Ext.form.Panel",
    layout: 'vbox',
    scrollable: 'y',
    xtype: 'importerFieldConfiguration',
    importerField: null,
    defaultListenerScope: true,
    defaultConfig: {
        fieldConfiguration: "ignore",
        copyFromField: "",
        setToValue: ""
    },
    loading: false,
    items: [
        {
            xtype: 'radio',
            boxLabel: i18n("Ignore"),
            itemId: "ignore",
            name: "fieldConfiguration",
            inputValue: 'ignore',
            checked: true,
            listeners: {
                change: "onChange"
            }
        },

        {
            xtype: 'fieldcontainer',
            layout: {
                type: 'hbox',
                align: "stretch"
            },
            items: [
                {
                    xtype: 'radio',
                    boxLabel: i18n("Copy contents from:"),
                    itemId: "copyContentsFrom",
                    name: "fieldConfiguration",
                    inputValue: 'copyFrom',
                    listeners: {
                        change: "onChange"
                    }
                },
                {
                    xtype: 'combo',
                    forceSelection: true,
                    editable: false,
                    itemId: 'importFieldSelector',
                    name: 'copyFromField',
                    queryMode: "local",
                    displayField: "headerName",
                    valueField: "headerIndex",
                    listeners: {
                        change: "onChange"
                    }
                },
            ]
        },
        {
            xtype: 'fieldcontainer',
            layout: {
                type: 'hbox',
                align: "stretch"
            },
            items: [
                {
                    xtype: 'radio',
                    boxLabel: i18n("Set to fixed value"),
                    itemId: "setToFixedValue",
                    name: "fieldConfiguration",
                    inputValue: 'fixedValue',
                    listeners: {
                        change: "onChange"
                    }
                },
                {
                    xtype: 'textfield',
                    itemId: "fixedValue",
                    name: "setToValue",
                    disabled: true,
                    listeners: {
                        change: "onChange"
                    }
                }
            ]
        }
    ],
    initComponent: function ()
    {
        this.callParent(arguments);
        this.down("#copyContentsFrom").on("change", this.onFieldConfigurationChange, this);
        this.down("#setToFixedValue").on("change", this.onFieldConfigurationChange, this);
    },
    onChange: function ()
    {
        this.onFieldConfigurationChange();

        if (!this.loading) {
            Ext.apply(this.importerConfig, this.getForm().getValues());
        }
        this.fireEvent("configChanged");

    },
    onFieldConfigurationChange: function ()
    {
        var fieldValues = this.getForm().getFieldValues();

        switch (fieldValues.fieldConfiguration) {
            case "copyFrom":
                this.down("#importFieldSelector").enable();
                this.down("#fixedValue").disable();
                break;
            case "fixedValue":
                this.down("#importFieldSelector").disable();
                this.down("#fixedValue").enable();
                break;
            default:
                this.down("#importFieldSelector").disable();
                this.down("#fixedValue").disable();
        }
    },
    setModel: function (model)
    {
        this.down("importFieldMatcherGrid").setModel(model);
    },
    setImporterConfig: function (config)
    {
        this.importerConfig = config;
        Ext.applyIf(this.importerConfig, this.defaultConfig);
        this.loading = true;
        this.getForm().setValues(this.importerConfig);
        this.loading = false;

        this.onFieldConfigurationChange();
    },
    reconfigureColumns: function (columnsStore)
    {
        this.down("#importFieldSelector").setStore(columnsStore);
    }
});
