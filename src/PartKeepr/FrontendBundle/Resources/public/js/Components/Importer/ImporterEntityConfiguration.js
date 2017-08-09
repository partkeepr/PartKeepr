Ext.define("PartKeepr.Importer.ImporterEntityConfiguration", {
    extend: "Ext.form.Panel",
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: 'y',
    defaultListenerScope: true,
    importerField: null,
    xtype: 'importerEntityConfiguration',

    items: [
        {
            xtype: 'radio',
            boxLabel: i18n("Always import"),
            name: 'importBehaviour',
            inputValue: 'alwaysImport',
            checked: true,
            itemId: 'alwaysImport'
        },
        {
            xtype: 'radio',
            boxLabel: i18n("Match import data with existing data using:"),
            name: 'importBehaviour',
            checked: false,
            inputValue: 'matchData',
            itemId: 'matchData'
        },
        {
            disabled: true,
            xtype: 'importFieldMatcherGrid',
            itemId: 'importFieldMatcherGrid',
            listeners: {
                change: "onImportBehaviourChange"
            },
            height: 100
        },
        {
            xtype: 'radio',
            boxLabel: i18n("Don't update data if an item exists"),
            disabled: true,
            inputValue: 'dontUpdate',
            itemId: 'dontUpdateData',
            name: 'updateBehaviour'
        },
        {
            xtype: 'radio',
            boxLabel: i18n("Update data if an item exists"),
            disabled: true,
            checked: true,
            inputValue: 'update',
            itemId: 'updateData',
            name: 'updateBehaviour'
        }
    ],
    initComponent: function ()
    {
        this.defaults = {
            listeners: {
                change: function ()
                {
                    this.fireEvent("configChanged");
                },
                scope: this
            }
        };

        this.callParent(arguments);

        this.down("#alwaysImport").on("change", this.onImportBehaviourChange, this);
        this.down("#matchData").on("change", this.onImportBehaviourChange, this);
    },
    onImportBehaviourChange: function ()
    {
        var fieldValues = this.getForm().getFieldValues();

        if (fieldValues.importBehaviour === "matchData") {
            this.down("#importFieldMatcherGrid").enable();
            this.down("#dontUpdateData").enable();
            this.down("#updateData").enable();
        } else {
            this.down("#importFieldMatcherGrid").disable();
            this.down("#dontUpdateData").disable();
            this.down("#updateData").disable();
        }

        Ext.apply(this.importerConfig, this.getImporterConfig());
    },
    setModel: function (model)
    {
        this.down("importFieldMatcherGrid").setModel(model);

    },
    getImporterConfig: function ()
    {
        var config = this.getForm().getFieldValues();

        config.matchers = this.down("#importFieldMatcherGrid").getImporterConfig();
        return config;
    },
    setImporterConfig: function (config)
    {
        this.importerConfig = config;

        this.getForm().setValues(this.importerConfig);

        if (this.importerConfig === {}) {
            this.getForm().reset();
            this.down("#importFieldMatcherGrid").setImporterConfig({});
            return;
        }

        if (config.hasOwnProperty("matchers")) {
            this.down("#importFieldMatcherGrid").setImporterConfig(this.importerConfig.matchers);
        } else {
            this.down("#importFieldMatcherGrid").setImporterConfig({});
        }

        Ext.apply(this.importerConfig, this.getImporterConfig());
    },
    reconfigureColumns: function (columnsStore)
    {
        this.down("#importFieldMatcherGrid").reconfigureColumns(columnsStore);
    },
    setImporterField: function (field)
    {
        this.importerField = field;
    },
    getImporterField: function ()
    {
        return this.importerField;
    }

});
