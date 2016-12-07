Ext.define("PartKeepr.Importer.ImporterOneToManyConfiguration", {
    extend: "Ext.form.Panel",
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: 'y',
    importerField: null,
    xtype: 'importerOneToManyConfiguration',
    model: null,
    defaultListenerScope: true,
    defaultConfig: {
        importBehaviour: "ignore",
    },
    items: [
        {
            xtype: 'radio',
            boxLabel: i18n("Don't import this sub-entity"),
            name: 'importBehaviour',
            inputValue: 'ignore',
            checked: true,
            itemId: 'ignore',
            listeners: {
                change: "onChange"
            }
        },
        {
            xtype: 'radio',
            boxLabel: i18n("Create new item"),
            name: 'importBehaviour',
            checked: false,
            inputValue: 'createNew',
            itemId: 'createNew',
            listeners: {
                change: "onChange"
            }
        },
    ],
    initComponent: function ()
    {
        this.callParent(arguments);

        var importBehaviourChangeListeners = ["#createNew", "#ignore"];

        for (var i = 0; i < importBehaviourChangeListeners.length; i++) {
            this.down(importBehaviourChangeListeners[i]).on("change", this.onImportBehaviourChange, this, {delay: 50});
        }
    },
    onChange: function ()
    {
        this.onImportBehaviourChange();
        this.fireEvent("configChanged");

        if (!this.loading) {
            Ext.apply(this.importerConfig, this.getImporterConfig());
        }
    },
    onImportBehaviourChange: function ()
    {
        var fieldValues = this.getForm().getFieldValues();
    },
    setModel: function (model, ignoreModel)
    {

    },
    getImporterConfig: function ()
    {
        var config = this.getForm().getFieldValues();

        return config;
    },
    setImporterConfig: function (config)
    {
        this.importerConfig = config;
        Ext.applyIf(this.importerConfig, this.defaultConfig);

        this.loading = true;
        this.getForm().setValues(this.importerConfig);

        this.loading = false;
    }

});
